import type { ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/cn";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
}

export function Button({ variant = "primary", className, ...rest }: Props) {
  return (
    <button
      className={cn(
        "inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-60",
        variant === "primary"
          ? "border border-primary bg-primary text-white hover:bg-primary-strong disabled:hover:bg-primary"
          : "border border-control bg-surface text-ink hover:bg-page disabled:hover:bg-surface",
        className
      )}
      {...rest}
    />
  );
}
