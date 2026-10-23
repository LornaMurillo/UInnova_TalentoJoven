import { cn } from "../../lib/cn";

export type ButtonVariant = "primary" | "ghost";

// Separado de Button para que un enlace (p. ej. un Link del router) se vea igual que un botón.
export const buttonStyles = (variant: ButtonVariant = "primary", className?: string) =>
  cn(
    "inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-60",
    variant === "primary"
      ? "border border-primary bg-primary text-white hover:bg-primary-strong disabled:hover:bg-primary"
      : "border border-control bg-surface text-ink hover:bg-page disabled:hover:bg-surface",
    className
  );
