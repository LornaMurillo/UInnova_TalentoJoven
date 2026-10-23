import { Download } from "lucide-react";
import { Modal } from "../../components/ui/Modal";
import { Button } from "../../components/ui/Button";
import { STUDENT } from "../../data/student";

const H = ({ children }: { children: string }) => (
  <h4 className="mb-1 border-b border-ink font-bold">{children}</h4>
);

export function CvModal({ onClose }: { onClose: () => void }) {
  return (
    // El diálogo de impresión del navegador permite guardar como PDF; index.css deja solo el CV en la hoja.
    <Modal title="Vista previa · CV estándar Harvard" onClose={onClose} actions={<Button onClick={() => window.print()}><Download size={16} aria-hidden /> Guardar PDF</Button>}>
      <article className="rounded-lg border border-line bg-surface p-8 font-serif print:border-0 print:p-0 text-[13.5px] leading-relaxed text-ink">
        <h3 className="text-center text-2xl font-bold">{STUDENT.name}</h3>
        <p className="mb-4 text-center text-xs text-muted">San José, Costa Rica · valeria.mora@ejemplo.cr · linkedin.com/in/valeria-mora-ejemplo</p>
        <H>Educación</H>
        <p><b>Universidad de Costa Rica</b> — {STUDENT.career} ({STUDENT.careerProgress} % completado) <span className="float-right">2021 – 2026</span></p>
        <p className="mb-3">Promedio ponderado 8,9 · Beca de excelencia académica</p>
        <H>Proyectos de impacto</H>
        <ul className="mb-3 ml-5 list-disc">
          <li>Rediseñó un tablero de matrícula que redujo en 40 % el tiempo de consulta para 1.200 estudiantes.</li>
          <li>Lideró un equipo de 4 personas en un modelo de predicción de deserción con Python y scikit-learn.</li>
        </ul>
        <H>Competencias</H>
        <p className="mb-3">Python, SQL, React, Power BI · Inglés B2 · Trabajo en equipo · Comunicación de datos</p>
        <H>Certificaciones</H>
        <p>Google Data Analytics (en curso) · Cisco Cybersecurity Essentials</p>
      </article>
    </Modal>
  );
}
