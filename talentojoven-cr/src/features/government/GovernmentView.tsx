import { Building2, Check, Coins, ShieldCheck, Users } from "lucide-react";
import { AGREEMENTS, HIRES_BY_AREA, HIRES_BY_INSTITUTION } from "../../data/stats";
import { Card } from "../../components/ui/Card";
import { Chip } from "../../components/ui/Chip";
import { SectionTitle } from "../../components/ui/SectionTitle";
import { HiresChart } from "./HiresChart";
import { KpiCard } from "./KpiCard";

const VERIFIED = [["Andrea Castro", "TEC"], ["José Pablo Ulate", "UNA"], ["Melissa Brenes", "INA"]];

export function GovernmentView() {
  return (
    <div className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard icon={Users} label="Estudiantes contratados" value="1.645" hint="+18 % vs. trimestre anterior" />
        <KpiCard icon={Building2} label="Empresas con convenio" value="214" hint="38 nuevas este año" />
        <KpiCard icon={Coins} label="Fondos ejecutados" value="₡ 1.240 M" hint="62 % del presupuesto anual" />
        <KpiCard icon={ShieldCheck} label="Retención a 12 meses" value="87 %" hint="Verificada con la CCSS" />
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        <Card><SectionTitle title="Contrataciones por institución" /><HiresChart title="Contrataciones por institución" category="Institución" data={HIRES_BY_INSTITUTION} /></Card>
        <Card><SectionTitle title="Contrataciones por área" /><HiresChart title="Contrataciones por área" category="Área" data={HIRES_BY_AREA} /></Card>
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
                  <td className="text-right"><Chip tone={a.status === "Vigente" ? "progress" : "warning"}>{a.status}</Chip></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
        <Card>
          <SectionTitle title="Verificación estudiantil" subtitle="Últimas verificaciones de matrícula con las instituciones" />
          {VERIFIED.map(([name, uni]) => (
            <div key={name} className="flex items-center justify-between border-t border-line py-2 text-sm">
              <span><b>{name}</b> <span className="text-muted">· {uni}</span></span>
              <Chip tone="success"><Check size={12} aria-hidden /> Matrícula verificada</Chip>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
}
