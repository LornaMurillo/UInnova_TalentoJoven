import { Bar, BarChart, Cell, LabelList, ResponsiveContainer, XAxis, YAxis } from "recharts";
import type { BarDatum } from "../../types";

export function HiresChart({ data, color = "#6366F1" }: { data: BarDatum[]; color?: string }) {
  return (
    <div className="h-64" role="img" aria-label="Gráfico de barras de contrataciones">
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
  );
}
