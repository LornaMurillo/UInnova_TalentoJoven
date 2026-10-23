import type { ButtonHTMLAttributes } from "react";
import { buttonStyles, type ButtonVariant } from "./buttonStyles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button({ variant = "primary", className, ...rest }: Props) {
  return <button className={buttonStyles(variant, className)} {...rest} />;
}
