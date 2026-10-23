import type { ReactNode } from "react";
import { Card } from "./Card";

interface Props {
  message: string;
  action?: ReactNode;
}

export function EmptyState({ message, action }: Props) {
  return (
    <Card role="status" className="p-8 text-center text-muted">
      <p>{message}</p>
      {action && <div className="mt-4 flex justify-center">{action}</div>}
    </Card>
  );
}
