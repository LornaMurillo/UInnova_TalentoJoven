import type { Applicant, BarDatum } from "../types";

export const UNIVERSITIES = ["UCR", "TEC", "UNA", "UNED", "UTN", "CUC", "INA"];

export const HIRES_BY_INSTITUTION: BarDatum[] = [
  { name: "UCR", value: 412, color: "#2563EB" },
  { name: "INA", value: 342, color: "#6366F1" },
  { name: "TEC", value: 268, color: "#0D9488" },
  { name: "UNA", value: 231, color: "#2563EB" },
  { name: "UTN", value: 205, color: "#6366F1" },
  { name: "UNED", value: 187, color: "#0D9488" },
];

export const HIRES_BY_AREA: BarDatum[] = [
  { name: "Tecnología", value: 520 },
  { name: "Ingeniería", value: 388 },
  { name: "Operaciones", value: 301 },
  { name: "Administración", value: 254 },
  { name: "Salud y otros", value: 182 },
];

export const APPLICANTS: Applicant[] = [
  { name: "Valeria Mora", university: "UCR", career: "Ing. Computación", status: "Entrevista", match: 92 },
  { name: "Diego Araya", university: "TEC", career: "Ing. Electrónica", status: "Revisión", match: 88 },
  { name: "Sofía Jiménez", university: "UNA", career: "Estadística", status: "Nueva", match: 81 },
  { name: "Kevin Rojas", university: "UTN", career: "Recursos humanos", status: "Entrevista", match: 86 },
  { name: "Daniela Vargas", university: "INA", career: "Soporte TI", status: "Nueva", match: 74 },
];

export const AGREEMENTS = [
  { university: "UCR", company: "BAC Credomatic", status: "Vigente" },
  { university: "TEC", company: "Intel CR", status: "Vigente" },
  { university: "UNED", company: "Pozuelo", status: "Vigente" },
  { university: "UTN", company: "FIFCO", status: "En revisión" },
];
