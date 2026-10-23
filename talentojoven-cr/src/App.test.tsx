import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { PROFILES } from "./app/profiles";
import { renderApp } from "./test/renderApp";

const nav = () => within(screen.getByRole("navigation", { name: "Selector de perfil" }));

describe("rutas", () => {
  it("/ lleva a Estudiante", () => {
    renderApp("/");
    expect(screen.getByRole("heading", { level: 1, name: PROFILES[0].title })).toBeInTheDocument();
    expect(nav().getByRole("link", { name: "Estudiante" })).toHaveAttribute("aria-current", "page");
  });

  it.each(PROFILES)("$path muestra su vista, marca su enlace y la etiqueta de datos simulados", ({ path, label, title }) => {
    renderApp(path);
    expect(screen.getByRole("heading", { level: 1, name: title })).toBeInTheDocument();
    expect(document.title).toBe(`${title} · TalentoJoven CR`);
    expect(nav().getByRole("link", { name: label })).toHaveAttribute("aria-current", "page");
    expect(nav().getAllByRole("link").filter((l) => l.hasAttribute("aria-current"))).toHaveLength(1);
    expect(screen.getByText("Prototipo · datos simulados")).toBeVisible();
  });

  it("los enlaces del Header cambian de vista", async () => {
    renderApp("/estudiante");
    await userEvent.click(nav().getByRole("link", { name: "Empresa" }));
    expect(screen.getByRole("heading", { level: 1, name: PROFILES[1].title })).toBeInTheDocument();
    expect(nav().getByRole("link", { name: "Empresa" })).toHaveAttribute("aria-current", "page");
  });

  it("una ruta desconocida muestra la página 404 con salida", async () => {
    renderApp("/no-existe");
    expect(screen.getByRole("heading", { level: 1, name: "Página no encontrada" })).toBeInTheDocument();
    expect(nav().queryAllByRole("link").filter((l) => l.hasAttribute("aria-current"))).toHaveLength(0);
    await userEvent.click(screen.getByRole("link", { name: "Ir a Estudiante" }));
    expect(screen.getByRole("heading", { level: 1, name: PROFILES[0].title })).toBeInTheDocument();
  });
});
