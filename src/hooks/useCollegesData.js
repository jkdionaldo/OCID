import { useMemo } from "react";

export const useCollegesData = (collegesData) => {
  // Flatten colleges data
  const colleges = useMemo(() => {
    if (!collegesData) return [];

    const allColleges = [];
    if (collegesData["CSU-MAIN"]) allColleges.push(...collegesData["CSU-MAIN"]);
    if (collegesData["CSU-CC"]) allColleges.push(...collegesData["CSU-CC"]);

    return allColleges;
  }, [collegesData]);

  // Calculate statistics
  const stats = useMemo(
    () => ({
      total: colleges.length,
      undergraduate: colleges.reduce(
        (sum, college) =>
          sum +
          (college.undergraduate_programs ||
            college.undergraduate_programs_count ||
            0),
        0
      ),
      graduate: colleges.reduce(
        (sum, college) =>
          sum +
          (college.graduate_programs || college.graduate_programs_count || 0),
        0
      ),
      totalPrograms: colleges.reduce(
        (sum, college) => sum + (college.programs || 0),
        0
      ),
    }),
    [colleges]
  );

  return { colleges, stats };
};
