export type Role = "student" | "company" | "government";

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
  color: string;
}

export interface Applicant {
  name: string;
  university: string;
  career: string;
  status: "Nueva" | "Revisión" | "Entrevista";
  match: number;
}

export interface BarDatum {
  name: string;
  value: number;
  color?: string;
}
