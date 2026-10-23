import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { StudentView } from "./StudentView";

const setup = () => {
  const user = userEvent.setup();
  render(<StudentView />);
  return user;
};

describe("StudentView", () => {
  // P0-1: los filtros tienen nombre accesible propio.
  it("los filtros se encuentran por su nombre", async () => {
    const user = setup();
    const area = screen.getByRole("combobox", { name: "Área" });
    expect(screen.getByRole("combobox", { name: "Tipo de contrato" })).toBeInTheDocument();
    await user.selectOptions(area, "Desarrollo");
    await user.click(screen.getByRole("button", { name: /Sello Empleador Joven/, pressed: false }));
    expect(screen.getByRole("status")).toHaveTextContent(/Ninguna vacante coincide/);

    await user.click(screen.getByRole("button", { name: "Quitar filtros" }));
    expect(area).toHaveValue("Todas");
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });

  it("cada curso iniciado suma puntos al perfil", async () => {
    const user = setup();
    const bar = screen.getByRole("progressbar", { name: "Puntaje de perfil" });
    expect(bar).toHaveAttribute("aria-valuenow", "72");
    await user.click(screen.getAllByRole("button", { name: "Iniciar" })[0]);
    expect(bar).toHaveAttribute("aria-valuenow", "79");
  });

  // P0-3: foco dentro del modal, atrapado, devuelto al cerrar; sin scroll de fondo; Esc cierra.
  it("el modal del CV gestiona foco, scroll y Esc", async () => {
    const user = setup();
    const trigger = screen.getByRole("button", { name: /Generar CV/ });
    await user.click(trigger);

    const dialog = screen.getByRole("dialog", { name: /CV estándar Harvard/ });
    expect(dialog).toContainElement(document.activeElement as HTMLElement);
    expect(getComputedStyle(document.body).overflow).toBe("hidden");

    for (let i = 0; i < 4; i++) {
      await user.tab();
      expect(dialog).toContainElement(document.activeElement as HTMLElement);
    }

    await user.keyboard("{Escape}");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
    expect(getComputedStyle(document.body).overflow).not.toBe("hidden");
  });

  // P0-4: "Guardar PDF" abre el diálogo de impresión.
  it("Guardar PDF llama a window.print", async () => {
    const print = vi.spyOn(window, "print").mockImplementation(() => {});
    const user = setup();
    await user.click(screen.getByRole("button", { name: /Generar CV/ }));
    await user.click(within(screen.getByRole("dialog")).getByRole("button", { name: /Guardar PDF/ }));
    expect(print).toHaveBeenCalledOnce();
    print.mockRestore();
  });
});
