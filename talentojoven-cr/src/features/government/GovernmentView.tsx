import { Building2, Check, Coins, ShieldCheck, Users, type LucideIcon } from "lucide-react";
import { AGREEMENTS, HIRES_BY_AREA, HIRES_BY_INSTITUTION, KPIS, VERIFICATIONS } from "../../data/stats";
import type { Kpi } from "../../types";
import { Card } from "../../components/ui/Card";
import { ChartCard } from "../../components/ui/ChartCard";
import { Chip } from "../../components/ui/Chip";
import { SectionTitle } from "../../components/ui/SectionTitle";
import { StatusBadge } from "../../components/ui/StatusBadge";
import { KpiCard } from "./KpiCard";

const KPI_ICONS: Record<Kpi["id"], LucideIcon> = { hires: Users, companies: Building2, funds: Coins, retention: ShieldCheck };

export function GovernmentView() {
  return (
    <div className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {KPIS.map((k) => <KpiCard key={k.id} icon={KPI_ICONS[k.id]} label={k.label} value={k.value} hint={k.hint} />)}
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        <ChartCard title="Contrataciones por institución" category="Institución" data={HIRES_BY_INSTITUTION} />
        <ChartCard title="Contrataciones por área" category="Área" data={HIRES_BY_AREA} />
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        <Card>
          <SectionTitle title="Convenios académico-empresariales" />
          <table className="w-full text-left text-sm">
            <thead className="text-muted"><tr><th className="py-2">Institución</th><th>Empresa</th><th className="text-right">Estado</th></tr></thead>
            <tbody>
              {AGREEMENTS.map((a) => (
                <tr key={a.university} className="border-t border-line">
                  <td className="py-3 font-semibold">{a.university}</td><td>{a.company}</td>
                  <td className="text-right"><StatusBadge status={a.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
        <Card>
          <SectionTitle title="Verificación estudiantil" subtitle="Últimas verificaciones de matrícula con las instituciones" />
          {VERIFICATIONS.map((v) => (
            <div key={v.name} className="flex items-center justify-between border-t border-line py-2 text-sm">
              <span><b>{v.name}</b> <span className="text-muted">· {v.institution}</span></span>
              <Chip tone="success"><Check size={12} aria-hidden /> Matrícula verificada</Chip>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
}
