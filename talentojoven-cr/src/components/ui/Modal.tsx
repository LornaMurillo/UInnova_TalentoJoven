import { useEffect, type ReactNode } from "react";
import { X } from "lucide-react";
import { Button } from "./Button";

interface Props {
  title: string;
  onClose: () => void;
  actions?: ReactNode;
  children: ReactNode;
}

export function Modal({ title, onClose, actions, children }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-4" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="max-h-[90vh] w-full max-w-2xl overflow-auto rounded-2xl border border-line bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-line p-4">
          <b>{title}</b>
          <div className="flex gap-2">
            {actions}
            <Button variant="ghost" aria-label="Cerrar" onClick={onClose}><X size={16} /></Button>
          </div>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
