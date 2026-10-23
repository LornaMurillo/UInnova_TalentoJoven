import { useEffect, useId, useRef, type KeyboardEvent, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { Button } from "./Button";

interface Props {
  title: string;
  onClose: () => void;
  actions?: ReactNode;
  children: ReactNode;
}

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

// Arreglo manual mínimo de foco; en la Fase 3 se sustituye por Radix Dialog.
export function Modal({ title, onClose, actions, children }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  // Al abrir: foco al diálogo y sin scroll de fondo. Al cerrar: foco de vuelta al botón que lo abrió.
  useEffect(() => {
    const trigger = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();
    return () => {
      document.body.style.overflow = overflow;
      trigger?.focus();
    };
  }, []);

  // Esc cierra; Tab y Shift+Tab dan la vuelta sin salir del diálogo.
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") return onClose();
    if (e.key !== "Tab" || !dialogRef.current) return;
    const items = dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE);
    if (items.length === 0) return e.preventDefault();
    const first = items[0];
    const last = items[items.length - 1];
    const active = document.activeElement;
    if (e.shiftKey && (active === first || active === dialogRef.current)) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && active === last) {
      e.preventDefault();
      first.focus();
    }
  };

  return createPortal(
    <div
      className="modal-root fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-4 print:static print:block print:bg-transparent print:p-0"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        onKeyDown={onKeyDown}
        className="max-h-[90vh] w-full max-w-2xl overflow-auto rounded-2xl border border-line bg-surface focus:outline-none print:max-h-none print:max-w-none print:overflow-visible print:rounded-none print:border-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-line p-4 print:hidden">
          <b id={titleId}>{title}</b>
          <div className="flex gap-2">
            {actions}
            <Button variant="ghost" aria-label="Cerrar" onClick={onClose}><X size={16} aria-hidden /></Button>
          </div>
        </div>
        <div className="p-4 print:p-0">{children}</div>
      </div>
    </div>,
    document.body,
  );
}
