import { useState } from "react";
import { Award, FileText, Link2, TrendingUp } from "lucide-react";
import { COURSES } from "../../data/courses";
import { AREAS, CONTRACTS } from "../../data/jobs";
import { Card } from "../../components/ui/Card";
import { Chip } from "../../components/ui/Chip";
import { Button } from "../../components/ui/Button";
import { SectionTitle } from "../../components/ui/SectionTitle";
import { cn } from "../../lib/cn";
import { CvModal } from "./CvModal";
import { JobCard } from "./JobCard";
import { useJobFilters } from "./useJobFilters";

const Select = ({ value, onChange, options }: { value: string; onChange: (v: string) => void; options: string[] }) => (
  <select value={value} onChange={(e) => onChange(e.target.value)} className="rounded-lg border border-line bg-soft px-3 py-2 text-sm">
    {options.map((o) => <option key={o}>{o}</option>)}
  </select>
);

export function StudentView() {
  const [showCv, setShowCv] = useState(false);
  const [applied, setApplied] = useState<Set<number>>(new Set());
  const [started, setStarted] = useState<Set<string>>(new Set());
  const f = useJobFilters();
  const score = Math.min(72 + started.size * 15, 100);
  const add = <T,>(s: Set<T>, v: T) => new Set(s).add(v);

  return (
    <div className="grid gap-5 lg:grid-cols-3">
      <div className="space-y-5">
        <Card>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-brand font-bold text-white">VM</div>
            <div><div className="font-bold">Valeria Mora Campos</div><div className="text-sm text-muted">Estudiante · UCR</div></div>
          </div>
          <div className="mt-4"><Chip tone="teal"><Link2 size={12} /> Conectado a eMatrícula UCR</Chip></div>
          <p className="mt-3 text-sm">Licenciatura en Tecnologías de Información</p>
          <div className="mt-2 flex justify-between text-sm"><span className="text-muted">Avance de carrera</span><b>85 %</b></div>
          <div className="mt-1 h-2 rounded-full bg-soft"><div className="h-2 w-[85%] rounded-full bg-teal-brand" /></div>
          <p className="mt-3 text-xs text-muted">Compatible con UCR, TEC, UNA, UNED, UTN, CUC e INA. Datos verificados por la universidad.</p>
        </Card>

        <Card>
          <div className="flex items-end justify-between">
            <div>
              <div className="text-sm text-muted">Puntaje de perfil</div>
              <div className="text-3xl font-extrabold">{score}<span className="text-base text-muted">/100</span></div>
            </div>
            <Chip tone="teal"><TrendingUp size={12} /> Verificado</Chip>
          </div>
          <div className="mt-3 h-2 rounded-full bg-soft"><div className="h-2 rounded-full bg-royal" style={{ width: `${score}%` }} /></div>
          <Button className="mt-4 w-full justify-center" onClick={() => setShowCv(true)}><FileText size={16} /> Generar CV estándar Harvard</Button>
        </Card>

        <Card>
          <SectionTitle title="Capacitación gratuita" subtitle="Cursos de aliados estratégicos" />
          <div className="space-y-3">
            {COURSES.map((c) => (
              <div key={c.name} className="flex items-start gap-3">
                <div className="flex h-9 w-9 flex-none items-center justify-center rounded-lg text-xs font-bold text-white" style={{ background: c.color }}>{c.provider[0]}</div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-semibold">{c.name}</div>
                  <div className="text-xs text-muted">{c.provider} · {c.duration}</div>
                  <Chip tone="teal">+15 % en tu perfil</Chip>
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
          <Select value={f.area} onChange={f.setArea} options={AREAS} />
          <Select value={f.contract} onChange={f.setContract} options={CONTRACTS} />
          <button
            aria-pressed={f.sealOnly}
            onClick={() => f.setSealOnly(!f.sealOnly)}
            className={cn("inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-sm font-semibold", f.sealOnly ? "bg-royal text-white" : "border border-line bg-soft")}
          >
            <Award size={16} /> Sello Empleador Joven
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
