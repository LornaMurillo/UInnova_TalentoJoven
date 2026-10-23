import { Bar, BarChart, LabelList, ResponsiveContainer, XAxis, YAxis } from "recharts";
import type { BarDatum } from "../../types";

interface Props {
  title: string;
  category: string;
  data: BarDatum[];
}

// El gráfico es solo visual; los lectores de pantalla leen la tabla oculta con los mismos datos.
// Un solo color por gráfico: las barras toman el token analysis a través de currentColor.
// Recharts pinta valores y ejes en un gris de 3.95:1; las clases los pasan a tokens.
export function HiresChart({ title, category, data }: Props) {
  return (
    <>
      <div className="h-64 text-analysis [&_.recharts-cartesian-axis-tick-value]:fill-muted [&_.recharts-label]:fill-ink" aria-hidden="true">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ left: 8, right: 32 }}>
            <XAxis type="number" hide />
            <YAxis type="category" dataKey="name" width={112} axisLine={false} tickLine={false} />
            <Bar dataKey="value" radius={6} barSize={20} fill="currentColor">
              <LabelList dataKey="value" position="right" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <table className="sr-only">
        <caption>{title}</caption>
        <thead><tr><th scope="col">{category}</th><th scope="col">Contrataciones</th></tr></thead>
        <tbody>
          {data.map((d) => <tr key={d.name}><th scope="row">{d.name}</th><td>{d.value}</td></tr>)}
        </tbody>
      </table>
    </>
  );
}
