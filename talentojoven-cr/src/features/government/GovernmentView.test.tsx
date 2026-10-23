import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { HIRES_BY_INSTITUTION } from "../../data/stats";
import { GovernmentView } from "./GovernmentView";

describe("GovernmentView", () => {
  // P0-2: cada gráfico tiene su título y una tabla con los mismos datos.
  it("cada gráfico tiene título propio y tabla de datos", () => {
    render(<GovernmentView />);
    expect(screen.getByRole("heading", { name: "Contrataciones por institución" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Contrataciones por área" })).toBeInTheDocument();

    const table = screen.getByRole("table", { name: "Contrataciones por institución" });
    expect(within(table).getAllByRole("row")).toHaveLength(HIRES_BY_INSTITUTION.length + 1);
    expect(within(table).getByRole("rowheader", { name: "UCR" })).toBeInTheDocument();
    expect(screen.getByRole("table", { name: "Contrataciones por área" })).toBeInTheDocument();
  });
});
