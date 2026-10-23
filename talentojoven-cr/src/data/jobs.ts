import type { Job } from "../types";

export const AREAS = ["Todas", "Datos", "Ciberseguridad", "Ingeniería", "Operaciones", "Desarrollo"];
export const CONTRACTS = ["Todos", "Pasantía", "Contrato a prueba"];

// Empresa que se usa en la vista "Empresa". Todas las empresas son ficticias.
export const DEMO_COMPANY = "Banco Horizonte";

export const JOBS: Job[] = [
  { id: 1, company: "DataTica Servicios", title: "Analista de Datos Jr.", area: "Datos", contract: "Pasantía", salary: "₡650.000", mode: "Híbrido · San José", previousHires: 48, hasSeal: true, requirements: ["Python / SQL", "Power BI", "Cursando último año"] },
  { id: 2, company: "Banco Horizonte", title: "Analista de Ciberseguridad Jr.", area: "Ciberseguridad", contract: "Contrato a prueba", salary: "₡820.000", mode: "Presencial · Heredia", previousHires: 31, hasSeal: true, requirements: ["Redes y Linux", "Cisco CCNA (deseable)", "Inglés B2"] },
  { id: 6, company: "Banco Horizonte", title: "Analista de Datos de Riesgo Jr.", area: "Datos", contract: "Contrato a prueba", salary: "₡650.000", mode: "Híbrido · Heredia", previousHires: 31, hasSeal: true, requirements: ["SQL", "Excel avanzado", "Estadística básica"] },
  { id: 3, company: "Semicon Valle Central", title: "Ingeniería de Validación", area: "Ingeniería", contract: "Contrato a prueba", salary: "₡900.000", mode: "Híbrido · Belén", previousHires: 64, hasSeal: true, requirements: ["Electrónica / Computación", "Inglés B2+", "Lectura de datasheets"] },
  { id: 4, company: "Bebidas del Trópico", title: "Asistente de Cadena de Suministro", area: "Operaciones", contract: "Pasantía", salary: "₡580.000", mode: "Presencial · Belén", previousHires: 22, hasSeal: true, requirements: ["Ing. Industrial", "Excel avanzado"] },
  { id: 5, company: "Alimentos La Meseta", title: "Desarrollador Web Jr.", area: "Desarrollo", contract: "Contrato a prueba", salary: "₡700.000", mode: "Remoto", previousHires: 9, hasSeal: false, requirements: ["React / TypeScript", "Git", "Portafolio"] },
];
