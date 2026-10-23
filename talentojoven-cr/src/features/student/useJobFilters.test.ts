import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { JOBS } from "../../data/jobs";
import { useJobFilters } from "./useJobFilters";

describe("useJobFilters", () => {
  it("sin filtros devuelve todas las vacantes", () => {
    const { result } = renderHook(() => useJobFilters());
    expect(result.current.jobs).toHaveLength(JOBS.length);
  });

  it("filtra por área y tipo de contrato a la vez", () => {
    const { result } = renderHook(() => useJobFilters());
    act(() => result.current.setArea("Datos"));
    act(() => result.current.setContract("Pasantía"));
    expect(result.current.jobs.map((j) => j.id)).toEqual([1]);
  });

  it("con el sello activo deja fuera las empresas sin sello", () => {
    const { result } = renderHook(() => useJobFilters());
    act(() => result.current.setSealOnly(true));
    expect(result.current.jobs.every((j) => j.hasSeal)).toBe(true);
    expect(result.current.jobs).toHaveLength(JOBS.filter((j) => j.hasSeal).length);
  });

  it("devuelve una lista vacía si nada coincide", () => {
    const { result } = renderHook(() => useJobFilters());
    act(() => result.current.setArea("Desarrollo"));
    act(() => result.current.setSealOnly(true));
    expect(result.current.jobs).toEqual([]);
  });

  it("reset quita todos los filtros", () => {
    const { result } = renderHook(() => useJobFilters());
    act(() => result.current.setArea("Desarrollo"));
    act(() => result.current.setSealOnly(true));
    act(() => result.current.reset());
    expect(result.current.jobs).toHaveLength(JOBS.length);
    expect(result.current.sealOnly).toBe(false);
  });
});
