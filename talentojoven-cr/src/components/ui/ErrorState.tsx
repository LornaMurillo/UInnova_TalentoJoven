import type { ReactNode } from "react";
import { TriangleAlert } from "lucide-react";
import { Card } from "./Card";

interface Props {
  title: string;
  message: string;
  action?: ReactNode;
}

export function ErrorState({ title, message, action }: Props) {
  return (
    <Card className="p-8 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-error-soft text-error"><TriangleAlert size={22} aria-hidden /></div>
      <h2 className="mt-4 text-lg font-bold">{title}</h2>
      <p className="mt-1 text-sm text-muted">{message}</p>
      {action && <div className="mt-5 flex justify-center">{action}</div>}
    </Card>
  );
}
