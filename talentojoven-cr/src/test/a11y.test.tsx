import { axe } from "jest-axe";
import { describe, expect, it } from "vitest";
import { PROFILES } from "../app/profiles";
import { renderApp } from "./renderApp";

// axe en jsdom no mide contraste; eso se revisó en el navegador en la Fase 2.
describe("axe", () => {
  it.each([...PROFILES.map((p) => p.path), "/no-existe"])("%s no tiene violaciones", async (path) => {
    const { container } = renderApp(path);
    expect(await axe(container)).toHaveNoViolations();
  });
});
