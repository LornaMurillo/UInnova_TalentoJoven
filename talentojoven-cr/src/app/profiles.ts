import type { ComponentType } from "react";
import { Building2, GraduationCap, ShieldCheck, type LucideIcon } from "lucide-react";
import { CompanyView } from "../features/company/CompanyView";
import { GovernmentView } from "../features/government/GovernmentView";
import { StudentView } from "../features/student/StudentView";

export interface Profile {
  path: string;
  label: string; // texto del enlace en el Header
  icon: LucideIcon;
  title: string; // h1 y título de la pestaña
  View: ComponentType;
}

// Una ruta por perfil: el Header las lista y App las monta.
export const PROFILES: Profile[] = [
  { path: "/estudiante", label: "Estudiante", icon: GraduationCap, title: "Tu primer empleo empieza aquí", View: StudentView },
  { path: "/empresa", label: "Empresa", icon: Building2, title: "Contrata talento joven con incentivos", View: CompanyView },
  { path: "/institucion", label: "Universidad / MTSS", icon: ShieldCheck, title: "Impacto nacional del programa", View: GovernmentView },
];
