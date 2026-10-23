import { useId } from "react";

interface Props {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}

// La etiqueta solo la lee el lector de pantalla; las opciones ("Todas", "Todos") no bastan como nombre.
export function Select({ label, value, onChange, options }: Props) {
  const id = useId();
  return (
    <>
      <label htmlFor={id} className="sr-only">{label}</label>
      <select id={id} value={value} onChange={(e) => onChange(e.target.value)} className="rounded-lg border border-control bg-surface px-3 py-2 text-sm">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </>
  );
}
