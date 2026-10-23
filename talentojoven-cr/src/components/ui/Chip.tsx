import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

const styles = {
  primary: "bg-primary-soft text-primary-text",
  progress: "bg-progress-soft text-progress",
  success: "bg-success-soft text-success",
  warning: "bg-warning-soft text-warning-text",
  neutral: "bg-page text-muted border border-line",
};

export function Chip({ tone = "primary", children }: { tone?: keyof typeof styles; children: ReactNode }) {
  return (
    <span className={cn("inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold", styles[tone])}>
      {children}
    </span>
  );
}
