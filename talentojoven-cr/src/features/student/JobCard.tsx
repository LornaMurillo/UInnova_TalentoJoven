import { Award, Users } from "lucide-react";
import type { Job } from "../../types";
import { Card } from "../../components/ui/Card";
import { Chip } from "../../components/ui/Chip";
import { Button } from "../../components/ui/Button";

interface Props {
  job: Job;
  applied: boolean;
  onApply: (id: number) => void;
}

export function JobCard({ job, applied, onApply }: Props) {
  return (
    <Card>
      <div className="flex flex-wrap justify-between gap-3">
        <div>
          <div className="text-[17px] font-bold">{job.title}</div>
          <div className="text-sm text-muted">{job.company} · {job.mode}</div>
        </div>
        <div className="text-right">
          <div className="font-bold">{job.salary}<span className="text-xs font-normal text-muted">/mes</span></div>
          <Chip tone="neutral">{job.contract}</Chip>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {job.requirements.map((r) => <Chip key={r} tone="neutral">{r}</Chip>)}
        {job.hasSeal && <Chip tone="primary"><Award size={12} aria-hidden /> Sello Empleador Joven</Chip>}
      </div>
      <div className="mt-3 flex items-center gap-3 rounded-lg bg-page p-3 text-sm">
        <Users size={16} className="flex-none text-primary" aria-hidden />
        <span><b>{job.previousHires} estudiantes</b> contratados por {job.company} en puestos de {job.area.toLowerCase()}.</span>
      </div>
      <Button className="mt-3" variant={applied ? "ghost" : "primary"} onClick={() => onApply(job.id)}>
        {applied ? "Postulación enviada" : "Postularme con mi CV"}
      </Button>
    </Card>
  );
}
