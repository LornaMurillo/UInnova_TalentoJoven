import { useId, useState } from "react";
import { Award, FileText, Link2 } from "lucide-react";
import { COURSES } from "../../data/courses";
import type { Course } from "../../types";
import { AREAS, CONTRACTS } from "../../data/jobs";
import { Card } from "../../components/ui/Card";
import { Chip } from "../../components/ui/Chip";
import { Button } from "../../components/ui/Button";
import { ProgressBar } from "../../components/ui/ProgressBar";
import { SectionTitle } from "../../components/ui/SectionTitle";
import { cn } from "../../lib/cn";
import { CvModal } from "./CvModal";
import { JobCard } from "./JobCard";
import { useJobFilters } from "./useJobFilters";

// 72 de base + 7 por curso: con los 4 cursos el perfil llega a 100.
const COURSE_POINTS = 7;

const LOGO_BG: Record<Course["tone"], string> = { primary: "bg-primary", progress: "bg-progress", analysis: "bg-analysis", warning: "bg-warning" };

// La etiqueta solo la lee el lector de pantalla; las opciones ("Todas", "Todos") no bastan como nombre.
const Select = ({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) => {
  const id = useId();
  return (
    <>
      <label htmlFor={id} className="sr-only">{label}</label>
      <select id={id} value={value} onChange={(e) => onChange(e.target.value)} className="rounded-lg border border-control bg-surface px-3 py-2 text-sm">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </>
  );
};

export function StudentView() {
  const [showCv, setShowCv] = useState(false);
  const [applied, setApplied] = useState<Set<number>>(new Set());
  const [started, setStarted] = useState<Set<string>>(new Set());
  const f = useJobFilters();
  const score = Math.min(72 + started.size * COURSE_POINTS, 100);
  const add = <T,>(s: Set<T>, v: T) => new Set(s).add(v);

  return (
    <div className="grid gap-5 lg:grid-cols-3">
      <div className="space-y-5">
        <Card>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-analysis font-bold text-white" aria-hidden>VM</div>
            <div><div className="font-bold">Valeria Mora Campos</div><div className="text-sm text-muted">Estudiante · UCR</div></div>
          </div>
          <div className="mt-4"><Chip tone="success"><Link2 size={12} aria-hidden /> Conectado a eMatrícula UCR</Chip></div>
          <p className="mt-3 text-sm">Licenciatura en Ingeniería en Computación</p>
          <div className="mt-2 flex justify-between text-sm"><span className="text-muted">Avance de carrera</span><b>85 %</b></div>
          <ProgressBar className="mt-1" value={85} label="Avance de carrera" tone="progress" />
          <p className="mt-3 text-xs text-muted">Compatible con UCR, TEC, UNA, UNED, UTN, CUC e INA. Datos verificados por la institución.</p>
        </Card>

        <Card>
          <div className="text-sm text-muted">Puntaje de perfil</div>
          <div className="text-3xl font-extrabold">{score}<span className="text-base text-muted">/100</span></div>
          <ProgressBar className="mt-3" value={score} label="Puntaje de perfil" />
          <p className="mt-2 text-xs text-muted">72 puntos base por tu perfil académico verificado, más {COURSE_POINTS} por cada curso en el que te inscribes.</p>
          <Button className="mt-4 w-full justify-center" onClick={() => setShowCv(true)}><FileText size={16} aria-hidden /> Generar CV estándar Harvard</Button>
        </Card>

        <Card>
          <SectionTitle title="Capacitación gratuita o con beca" subtitle="Cursos de aliados estratégicos" />
          <div className="space-y-3">
            {COURSES.map((c) => (
              <div key={c.name} className="flex items-start gap-3">
                <div className={cn("flex h-9 w-9 flex-none items-center justify-center rounded-lg text-xs font-bold text-white", LOGO_BG[c.tone])} aria-hidden>{c.provider[0]}</div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-semibold">{c.name}</div>
                  <div className="text-xs text-muted">{c.provider} · {c.duration}</div>
                  <Chip tone="progress">+{COURSE_POINTS} pts en tu perfil</Chip>
                </div>
                <Button variant={started.has(c.name) ? "ghost" : "primary"} onClick={() => setStarted((s) => add(s, c.name))}>
                  {started.has(c.name) ? "Inscrita" : "Iniciar"}
                </Button>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="lg:col-span-2">
        <SectionTitle title="Vacantes y pasantías para ti" subtitle={`${f.jobs.length} oportunidades · coinciden con tu carrera`} />
        <div className="mb-4 flex flex-wrap gap-2">
          <Select label="Área" value={f.area} onChange={f.setArea} options={AREAS} />
          <Select label="Tipo de contrato" value={f.contract} onChange={f.setContract} options={CONTRACTS} />
          <button
            aria-pressed={f.sealOnly}
            onClick={() => f.setSealOnly(!f.sealOnly)}
            className={cn("inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-sm font-semibold", f.sealOnly ? "border border-primary bg-primary text-white" : "border border-control bg-surface")}
          >
            <Award size={16} aria-hidden /> Sello Empleador Joven
          </button>
        </div>
        <div className="space-y-3">
          {f.jobs.map((j) => <JobCard key={j.id} job={j} applied={applied.has(j.id)} onApply={(id) => setApplied((s) => add(s, id))} />)}
          {f.jobs.length === 0 && <Card className="p-8 text-center text-muted">Ninguna vacante coincide. Quita un filtro para ver más.</Card>}
        </div>
      </div>
      {showCv && <CvModal onClose={() => setShowCv(false)} />}
    </div>
  );
}
