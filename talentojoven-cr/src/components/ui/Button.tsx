import type { ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/cn";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
}

export function Button({ variant = "primary", className, ...rest }: Props) {
  return (
    <button
      className={cn(
        "inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-sm font-semibold transition-colors",
        variant === "primary" ? "bg-royal text-white hover:bg-royal-dark" : "border border-line bg-soft text-ink hover:bg-line",
        className
      )}
      {...rest}
    />
  );
}
