import { useMemo } from "react";

export const useCollegesData = (collegesData) => {
  // Transform colleges data from the nested campus structure
  const colleges = useMemo(() => {
    if (!collegesData) return [];

    const allColleges = [];

    // Extract colleges from CSU-MAIN
    if (collegesData["CSU-MAIN"] && Array.isArray(collegesData["CSU-MAIN"])) {
      collegesData["CSU-MAIN"].forEach((college) => {
        allColleges.push({ ...college, campus_acronym: "CSU-MAIN" });
      });
    }

    // Extract colleges from CSU-CC
    if (collegesData["CSU-CC"] && Array.isArray(collegesData["CSU-CC"])) {
      collegesData["CSU-CC"].forEach((college) => {
        allColleges.push({ ...college, campus_acronym: "CSU-CC" });
      });
    }

    return allColleges;
  }, [collegesData]);

  // Calculate statistics
  const stats = useMemo(() => {
    const csuMainColleges = colleges.filter(
      (college) => college.campus_acronym === "CSU-MAIN"
    ).length;

    const csuCCColleges = colleges.filter(
      (college) => college.campus_acronym === "CSU-CC"
    ).length;

    return {
      total: colleges.length,
      csuMain: csuMainColleges,
      csuCC: csuCCColleges,
    };
  }, [colleges]);

  return { colleges, stats };
};
