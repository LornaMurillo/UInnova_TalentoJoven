import type { Job } from "../types";

export const AREAS = ["Todas", "Datos", "Ciberseguridad", "Ingeniería", "Operaciones", "Desarrollo"];
export const CONTRACTS = ["Todos", "Pasantía", "Contrato a prueba"];

export const JOBS: Job[] = [
  { id: 1, company: "Tech CR Services", title: "Analista de Datos Jr.", area: "Datos", contract: "Pasantía", salary: "₡650.000", mode: "Híbrido · San José", previousHires: 48, hasSeal: true, requirements: ["Python / SQL", "Power BI", "Cursando último año"] },
  { id: 2, company: "BAC Credomatic", title: "Analista de Ciberseguridad Jr.", area: "Ciberseguridad", contract: "Contrato a prueba", salary: "₡820.000", mode: "Presencial · Heredia", previousHires: 31, hasSeal: true, requirements: ["Redes y Linux", "Cisco CCNA (deseable)", "Inglés B2"] },
  { id: 3, company: "Intel CR", title: "Ingeniería de Validación", area: "Ingeniería", contract: "Contrato a prueba", salary: "₡900.000", mode: "Híbrido · Belén", previousHires: 64, hasSeal: true, requirements: ["Electrónica / Computación", "Inglés B2+", "Lectura de datasheets"] },
  { id: 4, company: "FIFCO", title: "Asistente de Cadena de Suministro", area: "Operaciones", contract: "Pasantía", salary: "₡580.000", mode: "Presencial · Belén", previousHires: 22, hasSeal: true, requirements: ["Ing. Industrial", "Excel avanzado"] },
  { id: 5, company: "Pozuelo", title: "Desarrollador Web Jr.", area: "Desarrollo", contract: "Contrato a prueba", salary: "₡700.000", mode: "Remoto", previousHires: 9, hasSeal: false, requirements: ["React / TypeScript", "Git", "Portafolio"] },
];
