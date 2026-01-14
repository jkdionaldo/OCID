import { useMemo } from "react";

export const useProgramsData = (undergrads = [], graduates = []) => {
  console.log("useProgramsData input:", { undergrads, graduates });

  // Don't combine and separate - keep them as they are
  const programs = useMemo(() => {
    return {
      undergraduate: undergrads,
      graduate: graduates,
    };
  }, [undergrads, graduates]);

  // Calculate statistics
  const stats = useMemo(() => {
    return {
      total: undergrads.length + graduates.length,
      undergraduate: undergrads.length,
      graduate: graduates.length,
    };
  }, [undergrads.length, graduates.length]);

  console.log("useProgramsData output:", { programs, stats });

  return { programs, stats };
};
