import { Check } from "lucide-react";
import { cn } from "../../lib/cn";

type State = "done" | "current" | "pending";
const steps: { title: string; detail: string; state: State }[] = [
  { title: "Fase 1 · Meses 1–3", detail: "Subsidio decreciente: 60 % → 40 % → 20 %. Coach: Lic. Andrea Solano (operador Empléate).", state: "done" },
  { title: "Mes 6 · Bono de permanencia", detail: "Verificación automática con la CCSS programada para el 14 de enero.", state: "current" },
  { title: "Mes 12 · Bono de permanencia", detail: "Se libera tras confirmar planilla vigente en la CCSS.", state: "pending" },
];

export function HiringTimeline() {
  return (
    <ol>
      {steps.map((s, i) => (
        <li key={s.title} className="flex gap-3 pb-4">
          <div className={cn("flex h-8 w-8 flex-none items-center justify-center rounded-full text-sm text-white", s.state === "done" ? "bg-teal-brand" : s.state === "current" ? "bg-royal" : "bg-muted")}>
            {s.state === "done" ? <Check size={14} /> : i + 1}
          </div>
          <div><div className="text-sm font-semibold">{s.title}</div><div className="text-xs text-muted">{s.detail}</div></div>
        </li>
      ))}
    </ol>
  );
}
