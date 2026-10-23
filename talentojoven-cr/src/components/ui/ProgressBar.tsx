import { cn } from "../../lib/cn";

const fills = { primary: "bg-primary", progress: "bg-progress" };

interface Props {
  value: number;
  label: string;
  tone?: keyof typeof fills;
  className?: string;
}

// El porcentaje ya se ve en texto; el rol hace que el lector de pantalla también lo anuncie.
export function ProgressBar({ value, label, tone = "primary", className }: Props) {
  return (
    <div role="progressbar" aria-label={label} aria-valuenow={value} aria-valuemin={0} aria-valuemax={100} className={cn("h-2 rounded-full bg-line", className)}>
      <div className={cn("h-2 rounded-full", fills[tone])} style={{ width: `${value}%` }} />
    </div>
  );
}
