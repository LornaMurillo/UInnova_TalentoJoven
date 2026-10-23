import { Bar, BarChart, Cell, LabelList, ResponsiveContainer, XAxis, YAxis } from "recharts";
import type { BarDatum } from "../../types";

interface Props {
  title: string;
  category: string;
  data: BarDatum[];
  color?: string;
}

// El gráfico es solo visual; los lectores de pantalla leen la tabla oculta con los mismos datos.
export function HiresChart({ title, category, data, color = "#6366F1" }: Props) {
  return (
    <>
      <div className="h-64" aria-hidden="true">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ left: 8, right: 32 }}>
            <XAxis type="number" hide />
            <YAxis type="category" dataKey="name" width={96} axisLine={false} tickLine={false} />
            <Bar dataKey="value" radius={6} barSize={20}>
              {data.map((d) => <Cell key={d.name} fill={d.color ?? color} />)}
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
