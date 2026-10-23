import type { Course } from "../types";

// tone elige el fondo del logo (ver StudentView); todos dan ≥ 4.5:1 con texto blanco.
export const COURSES: Course[] = [
  { name: "Cybersecurity Essentials", provider: "Cisco", duration: "30 h", tone: "progress" },
  { name: "Google Data Analytics", provider: "Google", duration: "6 meses", tone: "primary" },
  { name: "AWS Cloud Practitioner", provider: "AWS", duration: "20 h", tone: "warning" },
  { name: "Azure Fundamentals (AZ-900)", provider: "Microsoft", duration: "12 h", tone: "analysis" },
];
