import { Check } from "lucide-react";
import { HIRING_STEPS } from "../../data/stats";
import { cn } from "../../lib/cn";

export function HiringTimeline() {
  return (
    <ol>
      {HIRING_STEPS.map((s, i) => (
        <li key={s.title} className="flex gap-3 pb-4">
          <div className={cn("flex h-8 w-8 flex-none items-center justify-center rounded-full text-sm text-white", s.state === "done" ? "bg-progress" : s.state === "current" ? "bg-primary" : "bg-muted")}>
            {s.state === "done" ? <Check size={14} aria-hidden /> : i + 1}
          </div>
          <div><div className="text-sm font-semibold">{s.title}</div><div className="text-xs text-muted">{s.detail}</div></div>
        </li>
      ))}
    </ol>
  );
}
