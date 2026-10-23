export type ContractType = "Pasantía" | "Contrato a prueba";

export interface Job {
  id: number;
  company: string;
  title: string;
  area: string;
  contract: ContractType;
  salary: string;
  mode: string;
  previousHires: number;
  hasSeal: boolean;
  requirements: string[];
}

export interface Course {
  name: string;
  provider: string;
  duration: string;
  tone: "primary" | "progress" | "analysis" | "warning";
}

export interface Applicant {
  name: string;
  university: string;
  career: string;
  status: "Nueva" | "Revisión" | "Entrevista";
  match: number;
  jobId: number;
}

export interface Agreement {
  university: string;
  company: string;
  status: "Vigente" | "En revisión";
}

export interface Kpi {
  id: "hires" | "companies" | "funds" | "retention";
  label: string;
  value: string;
  hint: string;
}

export interface HiringStep {
  title: string;
  detail: string;
  state: "done" | "current" | "pending";
}

export interface BarDatum {
  name: string;
  value: number;
}
