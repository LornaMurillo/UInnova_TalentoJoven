import type { Agreement, Applicant, BarDatum, HiringStep, Kpi } from "../types";
import { percent } from "../lib/format";
import { SUBSIDY_RATES } from "./program";

// Instituciones con verificación académica conectada (el INA no es universidad).
export const INSTITUTIONS = ["UCR", "TEC", "UNA", "UNED", "UTN", "CUC", "INA"];

export const HIRES_BY_INSTITUTION: BarDatum[] = [
  { name: "UCR", value: 412 },
  { name: "INA", value: 342 },
  { name: "TEC", value: 268 },
  { name: "UNA", value: 231 },
  { name: "UTN", value: 205 },
  { name: "UNED", value: 187 },
];

export const HIRES_BY_AREA: BarDatum[] = [
  { name: "Tecnología", value: 520 },
  { name: "Ingeniería", value: 388 },
  { name: "Operaciones", value: 301 },
  { name: "Administración", value: 254 },
  { name: "Salud y otros", value: 182 },
];

// Postulaciones a las vacantes de DEMO_COMPANY (ver jobs.ts).
export const APPLICANTS: Applicant[] = [
  { name: "Valeria Mora", university: "UCR", career: "Ing. Computación", status: "Entrevista", match: 92, jobId: 6 },
  { name: "Sofía Jiménez", university: "UNA", career: "Estadística", status: "Nueva", match: 81, jobId: 6 },
  { name: "Mariana Solís", university: "UNED", career: "Administración de Empresas", status: "Revisión", match: 77, jobId: 6 },
  { name: "Kevin Rojas", university: "UTN", career: "Ciberseguridad", status: "Entrevista", match: 86, jobId: 2 },
  { name: "Diego Araya", university: "TEC", career: "Ing. Electrónica", status: "Revisión", match: 84, jobId: 2 },
  { name: "Daniela Vargas", university: "INA", career: "Soporte TI", status: "Nueva", match: 74, jobId: 2 },
];

// Contratación en curso que se muestra en la vista "Empresa".
export const ACTIVE_HIRE = { name: "Andrés Quesada", jobId: 6, month: 4 };

export const AGREEMENTS: Agreement[] = [
  { university: "UCR", company: "Banco Horizonte", status: "Vigente" },
  { university: "TEC", company: "Semicon Valle Central", status: "Vigente" },
  { university: "UNED", company: "Alimentos La Meseta", status: "Vigente" },
  { university: "UTN", company: "Bebidas del Trópico", status: "En revisión" },
];

// Etapas de ACTIVE_HIRE en la vista "Empresa".
export const HIRING_STEPS: HiringStep[] = [
  { title: "Fase 1 · Meses 1–3", detail: `Subsidio decreciente: ${SUBSIDY_RATES.map(percent).join(" → ")}. Coach: Lic. Andrea Solano (operador Empléate).`, state: "done" },
  { title: "Mes 6 · Bono de permanencia", detail: "Verificación automática con la CCSS programada para el 14 de enero.", state: "current" },
  { title: "Mes 12 · Bono de permanencia", detail: "Se libera tras confirmar planilla vigente en la CCSS.", state: "pending" },
];

// Indicadores nacionales de la vista "Universidad / MTSS".
export const KPIS: Kpi[] = [
  { id: "hires", label: "Estudiantes contratados", value: "1.645", hint: "+18 % vs. trimestre anterior" },
  { id: "companies", label: "Empresas con convenio", value: "214", hint: "38 nuevas este año" },
  { id: "funds", label: "Fondos ejecutados", value: "₡ 1.240 M", hint: "62 % del presupuesto anual" },
  { id: "retention", label: "Retención a 12 meses", value: "87 %", hint: "Verificada con la CCSS" },
];

// Últimas verificaciones de matrícula.
export const VERIFICATIONS = [
  { name: "Andrea Castro", institution: "TEC" },
  { name: "José Pablo Ulate", institution: "UNA" },
  { name: "Melissa Brenes", institution: "INA" },
];
