import { useMemo, useState } from "react";
import { JOBS } from "../../data/jobs";

export function useJobFilters() {
  const [area, setArea] = useState("Todas");
  const [contract, setContract] = useState("Todos");
  const [sealOnly, setSealOnly] = useState(false);

  const jobs = useMemo(
    () =>
      JOBS.filter(
        (j) =>
          (area === "Todas" || j.area === area) &&
          (contract === "Todos" || j.contract === contract) &&
          (!sealOnly || j.hasSeal)
      ),
    [area, contract, sealOnly]
  );

  return { jobs, area, setArea, contract, setContract, sealOnly, setSealOnly };
}
