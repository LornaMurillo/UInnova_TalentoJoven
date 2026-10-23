import type { Agreement, Applicant } from "../../types";
import { Chip, type ChipTone } from "./Chip";

export type Status = Applicant["status"] | Agreement["status"];

// Un solo lugar decide el color de cada estado: avanza en verde azulado, pendiente en ámbar.
const TONES: Record<Status, ChipTone> = {
  Nueva: "neutral",
  Revisión: "neutral",
  Entrevista: "progress",
  Vigente: "progress",
  "En revisión": "warning",
};

export function StatusBadge({ status }: { status: Status }) {
  return <Chip tone={TONES[status]}>{status}</Chip>;
}
