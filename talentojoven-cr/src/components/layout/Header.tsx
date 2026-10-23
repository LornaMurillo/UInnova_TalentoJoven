import { Briefcase, Building2, GraduationCap, ShieldCheck, type LucideIcon } from "lucide-react";
import type { Role } from "../../types";
import { cn } from "../../lib/cn";

const TABS: { role: Role; label: string; icon: LucideIcon }[] = [
  { role: "student", label: "Estudiante", icon: GraduationCap },
  { role: "company", label: "Empresa", icon: Building2 },
  { role: "government", label: "Universidad / MTSS", icon: ShieldCheck },
];

interface Props {
  role: Role;
  onChange: (role: Role) => void;
}

export function Header({ role, onChange }: Props) {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3">
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-royal text-white"><Briefcase size={18} /></div>
          <span className="whitespace-nowrap text-lg font-extrabold tracking-tight">TalentoJoven <span className="text-royal">CR</span></span>
          <span className="whitespace-nowrap rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800">Prototipo · datos simulados</span>
        </div>
        <nav aria-label="Selector de perfil" className="flex gap-1 rounded-xl bg-soft p-1">
          {TABS.map(({ role: r, label, icon: Icon }) => (
            <button
              key={r}
              onClick={() => onChange(r)}
              aria-current={role === r}
              className={cn(
                "flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-sm font-semibold",
                role === r ? "bg-royal text-white" : "text-muted hover:text-ink"
              )}
            >
              <Icon size={15} />{label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
