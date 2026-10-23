import { useState } from "react";
import { Award, Check, ShieldCheck } from "lucide-react";
import { APPLICANTS, UNIVERSITIES } from "../../data/stats";
import { JOBS } from "../../data/jobs";
import { Card } from "../../components/ui/Card";
import { Chip } from "../../components/ui/Chip";
import { Button } from "../../components/ui/Button";
import { SectionTitle } from "../../components/ui/SectionTitle";
import { HiringTimeline } from "./HiringTimeline";

export function CompanyView() {
  const [vacancy, setVacancy] = useState(0);
  const vacancies = JOBS.slice(0, 3);
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      <div className="space-y-5 lg:col-span-2">
        <Card>
          <SectionTitle title="Vacantes activas" subtitle="BAC Credomatic · Reclutamiento" />
          <div className="mb-4 flex flex-wrap gap-2">
            {vacancies.map((j, i) => <Button key={j.id} variant={vacancy === i ? "primary" : "ghost"} onClick={() => setVacancy(i)}>{j.title}</Button>)}
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] text-left text-sm">
              <thead className="text-muted"><tr><th className="py-2">Candidato</th><th>Universidad</th><th>Carrera</th><th>Ajuste</th><th>Estado</th></tr></thead>
              <tbody>
                {APPLICANTS.slice(vacancy, vacancy + 4).map((a) => (
                  <tr key={a.name} className="border-t border-line">
                    <td className="py-3 font-semibold">{a.name}</td><td>{a.university}</td>
                    <td className="text-muted">{a.career}</td><td><b>{a.match} %</b></td>
                    <td><Chip tone={a.status === "Entrevista" ? "teal" : "neutral"}>{a.status}</Chip></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
        <Card>
          <SectionTitle title="Acompañamiento de contratación activa" subtitle="Valeria Mora · Analista de Datos Jr. · Mes 4" />
          <div className="grid gap-6 sm:grid-cols-2">
            <HiringTimeline />
            <div className="space-y-3 rounded-xl bg-soft p-4 text-sm">
              <div className="flex justify-between"><span className="text-muted">Subsidio recibido</span><b>₡ 1.014.000</b></div>
              <div className="flex justify-between"><span className="text-muted">Bono permanencia (est.)</span><b>₡ 450.000</b></div>
              <Chip tone="teal"><ShieldCheck size={12} /> Afiliación CCSS verificada</Chip>
            </div>
          </div>
        </Card>
      </div>
      <div className="space-y-5">
        <Card className="border-2 border-royal">
          <div className="flex items-center gap-2 text-sm font-semibold text-royal"><Award size={18} /> Sello Empleador Joven</div>
          <div className="mt-3 text-4xl font-extrabold">78 <span className="text-base font-medium text-muted">puntos SICOP</span></div>
          <p className="mt-1 text-sm text-muted">Nivel Oro · preferencia en compras públicas del Estado</p>
          <div className="mt-4 h-2 rounded-full bg-soft"><div className="h-2 w-[78%] rounded-full bg-royal" /></div>
          <div className="mt-2 text-xs text-muted">22 puntos para Nivel Platino</div>
        </Card>
        <Card>
          <SectionTitle title="Red de convenios activos" />
          <div className="flex flex-wrap gap-2">{UNIVERSITIES.map((u) => <Chip key={u} tone="teal"><Check size={12} />{u}</Chip>)}</div>
          <p className="mt-3 text-xs text-muted">Convenios vigentes para prácticas, reclutamiento y verificación académica.</p>
        </Card>
        <Card>
          <div className="text-sm text-muted">Empresas en el programa</div>
          <div className="mt-1 text-sm">Tech CR Services · BAC Credomatic · FIFCO · Intel CR · Pozuelo</div>
        </Card>
      </div>
    </div>
  );
}
