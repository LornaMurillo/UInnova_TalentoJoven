import { NavLink } from "react-router-dom";
import { Briefcase } from "lucide-react";
import { PROFILES } from "../../app/profiles";
import { cn } from "../../lib/cn";

// NavLink marca el enlace activo con aria-current="page".
export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3">
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white"><Briefcase size={18} aria-hidden /></div>
          <span className="whitespace-nowrap text-lg font-extrabold tracking-tight">TalentoJoven <span className="text-primary">CR</span></span>
          <span className="whitespace-nowrap rounded-full bg-warning-soft px-2.5 py-0.5 text-xs font-semibold text-warning-text">Prototipo · datos simulados</span>
        </div>
        <nav aria-label="Selector de perfil" className="flex gap-1 rounded-xl bg-page p-1">
          {PROFILES.map(({ path, label, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                cn("flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-sm font-semibold", isActive ? "bg-primary text-white" : "text-muted hover:text-ink")
              }
            >
              <Icon size={15} aria-hidden />{label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
