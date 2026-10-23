import type { LucideIcon } from "lucide-react";
import { Card } from "../../components/ui/Card";

interface Props { icon: LucideIcon; label: string; value: string; hint: string }

export function KpiCard({ icon: Icon, label, value, hint }: Props) {
  return (
    <Card>
      <div className="flex items-center gap-2 text-sm text-muted"><Icon size={16} />{label}</div>
      <div className="mt-2 text-3xl font-extrabold">{value}</div>
      <div className="mt-1 text-xs text-muted">{hint}</div>
    </Card>
  );
}
