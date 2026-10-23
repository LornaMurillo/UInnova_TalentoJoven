import { useState } from "react";
import { Award, Check, ShieldCheck } from "lucide-react";
import { ACTIVE_HIRE, APPLICANTS, INSTITUTIONS } from "../../data/stats";
import { DEMO_COMPANY, JOBS } from "../../data/jobs";
import { Card } from "../../components/ui/Card";
import { Chip } from "../../components/ui/Chip";
import { Button } from "../../components/ui/Button";
import { ProgressBar } from "../../components/ui/ProgressBar";
import { SectionTitle } from "../../components/ui/SectionTitle";
import { HiringTimeline } from "./HiringTimeline";

// Mismo esquema que HiringTimeline: 60 % → 40 % → 20 % del salario en los meses 1–3.
const SUBSIDY_RATES = [0.6, 0.4, 0.2];
const toNumber = (salary: string) => Number(salary.replace(/\D/g, ""));
const colones = (n: number) => `₡ ${String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;

export function CompanyView() {
  const vacancies = JOBS.filter((j) => j.company === DEMO_COMPANY);
  const [vacancy, setVacancy] = useState(vacancies[0].id);
  const hireJob = JOBS.find((j) => j.id === ACTIVE_HIRE.jobId)!;
  const subsidy = SUBSIDY_RATES.reduce((sum, r) => sum + r * toNumber(hireJob.salary), 0);
  const companies = [...new Set(JOBS.map((j) => j.company))];

  return (
    <div className="grid gap-5 lg:grid-cols-3">
      <div className="space-y-5 lg:col-span-2">
        <Card>
          <SectionTitle title="Vacantes activas" subtitle={`${DEMO_COMPANY} · Reclutamiento`} />
          <div className="mb-4 flex flex-wrap gap-2">
            {vacancies.map((j) => <Button key={j.id} variant={vacancy === j.id ? "primary" : "ghost"} onClick={() => setVacancy(j.id)}>{j.title}</Button>)}
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead className="text-muted"><tr><th className="py-2">Candidato</th><th>Institución</th><th>Carrera</th><th>Ajuste</th><th>Estado</th></tr></thead>
              <tbody>
                {APPLICANTS.filter((a) => a.jobId === vacancy).map((a) => (
                  <tr key={a.name} className="border-t border-line">
                    <td className="py-3 font-semibold">{a.name}</td><td>{a.university}</td>
                    <td className="text-muted">{a.career}</td><td><b>{a.match} %</b></td>
                    <td><Chip tone={a.status === "Entrevista" ? "progress" : "neutral"}>{a.status}</Chip></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
        <Card>
          <SectionTitle title="Acompañamiento de contratación activa" subtitle={`${ACTIVE_HIRE.name} · ${hireJob.title} · Mes ${ACTIVE_HIRE.month}`} />
          <div className="grid gap-6 sm:grid-cols-2">
            <HiringTimeline />
            <div className="space-y-3 rounded-xl bg-page p-4 text-sm">
              <div className="flex justify-between"><span className="text-muted">Salario mensual</span><b>{colones(toNumber(hireJob.salary))}</b></div>
              <div className="flex justify-between"><span className="text-muted">Subsidio recibido (meses 1–3)</span><b>{colones(subsidy)}</b></div>
              <div className="flex justify-between"><span className="text-muted">Bono permanencia (est.)</span><b>₡ 450.000</b></div>
              <Chip tone="success"><ShieldCheck size={12} aria-hidden /> Afiliación CCSS verificada</Chip>
            </div>
          </div>
        </Card>
      </div>
      <div className="space-y-5">
        <Card className="border-2 border-primary">
          <div className="flex items-center gap-2 text-sm font-semibold text-primary"><Award size={18} aria-hidden /> Sello Empleador Joven</div>
          <div className="mt-3 text-4xl font-extrabold">78 <span className="text-base font-medium text-muted">puntos de preferencia</span></div>
          <p className="mt-1 text-sm text-muted">Nivel Oro · preferencia propuesta en compras públicas (SICOP)</p>
          <ProgressBar className="mt-4" value={78} label="Avance hacia Nivel Platino" />
          <div className="mt-2 text-xs text-muted">22 puntos para Nivel Platino</div>
        </Card>
        <Card>
          <SectionTitle title="Verificación académica conectada" />
          <div className="flex flex-wrap gap-2">{INSTITUTIONS.map((u) => <Chip key={u} tone="success"><Check size={12} aria-hidden />{u}</Chip>)}</div>
          <p className="mt-3 text-xs text-muted">La plataforma verifica matrícula y avance de carrera con estas instituciones.</p>
        </Card>
        <Card>
          <div className="text-sm text-muted">Empresas en el programa</div>
          <div className="mt-1 text-sm">{companies.join(" · ")}</div>
        </Card>
      </div>
    </div>
  );
}
