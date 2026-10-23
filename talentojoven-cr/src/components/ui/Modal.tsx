import { useRef, useState, type ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { Button } from "./Button";

interface Props {
  title: string;
  onClose: () => void;
  actions?: ReactNode;
  children: ReactNode;
}

// Radix se encarga de atrapar el foco, bloquear el scroll de fondo y cerrar con Esc o clic fuera.
// Se monta abierto: quien lo usa decide si se muestra, como antes.
export function Modal({ title, onClose, actions, children }: Props) {
  const contentRef = useRef<HTMLDivElement>(null);
  // Sin Dialog.Trigger, Radix no sabe a quién devolver el foco; se guarda el botón que lo abrió.
  const [trigger] = useState(() => document.activeElement as HTMLElement | null);

  return (
    <Dialog.Root open onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        {/* modal-root queda hijo directo de body: index.css lo usa para imprimir solo el modal. */}
        <Dialog.Overlay className="modal-root fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-4 print:static print:block print:bg-transparent print:p-0">
          <Dialog.Content
            ref={contentRef}
            aria-describedby={undefined}
            onOpenAutoFocus={(e) => {
              e.preventDefault();
              contentRef.current?.focus();
            }}
            onCloseAutoFocus={(e) => {
              e.preventDefault();
              trigger?.focus();
            }}
            className="max-h-[90vh] w-full max-w-2xl overflow-auto rounded-2xl border border-line bg-surface focus:outline-none print:max-h-none print:max-w-none print:overflow-visible print:rounded-none print:border-0"
          >
            <div className="flex items-center justify-between border-b border-line p-4 print:hidden">
              <Dialog.Title className="font-bold">{title}</Dialog.Title>
              <div className="flex gap-2">
                {actions}
                <Dialog.Close asChild>
                  <Button variant="ghost" aria-label="Cerrar"><X size={16} aria-hidden /></Button>
                </Dialog.Close>
              </div>
            </div>
            <div className="p-4 print:p-0">{children}</div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
