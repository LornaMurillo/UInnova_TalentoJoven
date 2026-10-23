import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { ChartCard } from "./ChartCard";
import { EmptyState } from "./EmptyState";
import { ErrorState } from "./ErrorState";
import { ProgressBar } from "./ProgressBar";
import { Select } from "./Select";
import { StatusBadge } from "./StatusBadge";

describe("Select", () => {
  it("se nombra por su etiqueta y avisa el cambio", async () => {
    const onChange = vi.fn();
    render(<Select label="Área" value="Todas" onChange={onChange} options={["Todas", "Datos"]} />);
    await userEvent.selectOptions(screen.getByRole("combobox", { name: "Área" }), "Datos");
    expect(onChange).toHaveBeenCalledWith("Datos");
  });
});

describe("StatusBadge", () => {
  it.each([
    ["Entrevista", "text-progress"],
    ["Vigente", "text-progress"],
    ["En revisión", "text-warning-text"],
    ["Nueva", "text-muted"],
  ] as const)("%s usa %s", (status, cls) => {
    render(<StatusBadge status={status} />);
    expect(screen.getByText(status)).toHaveClass(cls);
  });
});

describe("ProgressBar", () => {
  it("expone el valor y lo pinta como ancho", () => {
    render(<ProgressBar value={40} label="Avance" />);
    const bar = screen.getByRole("progressbar", { name: "Avance" });
    expect(bar).toHaveAttribute("aria-valuenow", "40");
    expect(bar.firstElementChild).toHaveStyle({ width: "40%" });
  });
});

describe("ChartCard", () => {
  it("muestra el título y una tabla con los mismos datos", () => {
    const data = [{ name: "UCR", value: 10 }, { name: "TEC", value: 7 }];
    render(<ChartCard title="Por institución" category="Institución" data={data} />);
    expect(screen.getByRole("heading", { name: "Por institución" })).toBeInTheDocument();
    const table = screen.getByRole("table", { name: "Por institución" });
    expect(within(table).getByRole("columnheader", { name: "Institución" })).toBeInTheDocument();
    expect(within(table).getByRole("row", { name: "TEC 7" })).toBeInTheDocument();
  });
});

describe("EmptyState", () => {
  it("anuncia el mensaje y muestra la acción", () => {
    render(<EmptyState message="Sin resultados" action={<button>Quitar filtros</button>} />);
    expect(screen.getByRole("status")).toHaveTextContent("Sin resultados");
    expect(screen.getByRole("button", { name: "Quitar filtros" })).toBeInTheDocument();
  });
});

describe("ErrorState", () => {
  it("muestra título, mensaje y acción", () => {
    render(<ErrorState title="No encontrada" message="La dirección no existe." action={<a href="/">Volver</a>} />);
    expect(screen.getByRole("heading", { name: "No encontrada" })).toBeInTheDocument();
    expect(screen.getByText("La dirección no existe.")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Volver" })).toBeInTheDocument();
  });
});
