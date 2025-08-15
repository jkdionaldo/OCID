import { useMemo, useCallback } from "react";
import { BookOpen, GraduationCap } from "lucide-react";

export const useProgramData = (program, colleges, campuses) => {
  const formatDate = useCallback((dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }, []);

  const formatFileSize = useCallback((bytes) => {
    if (!bytes) return "N/A";
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  }, []);

  const collegeInfo = useMemo(() => {
    if (!program) {
      return {
        name: "Unknown",
        acronym: "N/A",
        campus: "Unknown",
        campusName: "Unknown Campus",
      };
    }

    if (program.college) {
      const campus = campuses?.find((c) => c.id === program.college.campus_id);
      return {
        name: program.college.name,
        acronym: program.college.acronym,
        campus: campus?.acronym || "Unknown",
        campusName: campus?.name || "Unknown Campus",
      };
    }

    const college = colleges?.find((c) => c.id === program.college_id);
    if (!college)
      return {
        name: "Unknown",
        acronym: "N/A",
        campus: "Unknown",
        campusName: "Unknown Campus",
      };

    const campus = campuses?.find((c) => c.id === college.campus_id);
    return {
      name: college.name,
      acronym: college.acronym,
      campus: campus?.acronym || "Unknown",
      campusName: campus?.name || "Unknown Campus",
    };
  }, [program, colleges, campuses]);

  const isGraduate = useMemo(() => {
    if (!program) return false;
    return program.program_type === "graduate" || program.type === "graduate";
  }, [program]);

  const Icon = isGraduate ? GraduationCap : BookOpen;

  const currentTheme = useMemo(() => {
    const theme = {
      graduate: {
        primary: "yellow",
        gradient: "from-yellow-500 to-amber-600",
        accent: "yellow",
        headerGradient: "from-yellow-600 to-yellow-700",
      },
      undergraduate: {
        primary: "blue",
        gradient: "from-blue-500 to-indigo-600",
        accent: "blue",
        headerGradient: "from-blue-600 to-blue-700",
      },
    };
    return theme[isGraduate ? "graduate" : "undergraduate"];
  }, [isGraduate]);

  const handleViewCollege = useCallback(() => {
    console.log("View college details:", collegeInfo);
  }, [collegeInfo]);

  return {
    formatDate,
    formatFileSize,
    collegeInfo,
    isGraduate,
    Icon,
    currentTheme,
    handleViewCollege,
  };
};
