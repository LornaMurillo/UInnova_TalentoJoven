import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

const styles = {
  blue: "bg-royal-soft text-royal-dark",
  teal: "bg-teal-soft text-teal-ink",
  neutral: "bg-soft text-muted border border-line",
};

export function Chip({ tone = "blue", children }: { tone?: keyof typeof styles; children: ReactNode }) {
  return (
    <span className={cn("inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold", styles[tone])}>
      {children}
    </span>
  );
}
