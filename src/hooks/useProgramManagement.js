import { useCallback } from "react";
import { programApi } from "../services/api/dashboardApi";

export const useProgramManagement = (updateDataOptimistically, setError) => {
  const createProgram = useCallback(
    async (programData) => {
      try {
        setError(null);

        // Get the full dashboard data to resolve college info
        const currentData = await new Promise((resolve) => {
          updateDataOptimistically((prevData) => {
            resolve(prevData);
            return prevData;
          });
        });

        // Find the college information
        const college = currentData.colleges.find(
          (c) => c.id.toString() === programData.college_id.toString()
        );

        if (!college) {
          throw new Error("College not found");
        }

        // Optimistic update with complete college information
        const tempId = `temp-${Date.now()}`;
        const tempProgram = {
          id: tempId,
          program_name: programData.program_name,
          acronym: programData.acronym || undefined,
          college_id: parseInt(programData.college_id),
          created_at: new Date().toISOString(),
          // Include complete college information for immediate display
          college: {
            id: college.id,
            name: college.name,
            acronym: college.acronym,
            campus_id: college.campus_id,
          },
        };

        const targetArray =
          programData.program_type === "graduate" ? "graduates" : "undergrads";

        updateDataOptimistically((prevData) => ({
          ...prevData,
          [targetArray]: [...prevData[targetArray], tempProgram],
          colleges: prevData.colleges.map((college) =>
            college.id.toString() === programData.college_id.toString()
              ? {
                  ...college,
                  [programData.program_type === "graduate"
                    ? "graduate_programs"
                    : "undergraduate_programs"]:
                    (college[
                      programData.program_type === "graduate"
                        ? "graduate_programs"
                        : "undergraduate_programs"
                    ] || 0) + 1,
                  programs: (college.programs || 0) + 1,
                }
              : college
          ),
        }));

        // Make API call
        let response;
        if (programData.program_type === "graduate") {
          response = await programApi.createGraduate({
            program_name: programData.program_name,
            acronym: programData.acronym || undefined,
            college_id: programData.college_id,
          });
        } else {
          response = await programApi.createUndergrad({
            program_name: programData.program_name,
            acronym: programData.acronym || undefined,
            college_id: programData.college_id,
          });
        }

        const newProgram = response.data.data || response.data;

        // Replace temp program with real one, ensuring college info is preserved
        updateDataOptimistically((prevData) => ({
          ...prevData,
          [targetArray]: prevData[targetArray].map((program) =>
            program.id === tempId
              ? {
                  ...newProgram,
                  // Ensure college info is available even if not returned by API
                  college: newProgram.college || college,
                }
              : program
          ),
        }));

        return { success: true, data: newProgram };
      } catch (err) {
        console.error("Error creating program:", err);

        // Revert optimistic update
        const targetArray =
          programData.program_type === "graduate" ? "graduates" : "undergrads";
        updateDataOptimistically((prevData) => ({
          ...prevData,
          [targetArray]: prevData[targetArray].filter(
            (program) => !program.id.toString().startsWith("temp-")
          ),
          colleges: prevData.colleges.map((college) =>
            college.id.toString() === programData.college_id.toString()
              ? {
                  ...college,
                  [programData.program_type === "graduate"
                    ? "graduate_programs"
                    : "undergraduate_programs"]: Math.max(
                    0,
                    (college[
                      programData.program_type === "graduate"
                        ? "graduate_programs"
                        : "undergraduate_programs"
                    ] || 0) - 1
                  ),
                  programs: Math.max(0, (college.programs || 0) - 1),
                }
              : college
          ),
        }));

        let message = "Failed to create program";
        if (err.response?.data?.message) {
          message = err.response.data.message;
        } else if (err.response?.data?.errors) {
          const errors = err.response.data.errors;
          const firstErrorKey = Object.keys(errors)[0];
          message = errors[firstErrorKey]?.[0] || message;
        }

        setError(message);
        return { success: false, error: message };
      }
    },
    [updateDataOptimistically, setError]
  );

  const updateProgram = useCallback(
    async (id, programData, programType) => {
      try {
        setError(null);
        const targetArray =
          programType === "graduate" ? "graduates" : "undergrads";

        // Get current data to resolve college info for updates
        let currentCollege = null;
        updateDataOptimistically((prevData) => {
          if (programData.college_id) {
            currentCollege = prevData.colleges.find(
              (c) => c.id.toString() === programData.college_id.toString()
            );
          }
          return prevData;
        });

        // Optimistic update with college information
        updateDataOptimistically((prevData) => ({
          ...prevData,
          [targetArray]: prevData[targetArray].map((program) =>
            program.id.toString() === id.toString()
              ? {
                  ...program,
                  ...programData,
                  // Preserve or update college info
                  college: currentCollege || program.college,
                }
              : program
          ),
        }));

        let response;
        if (programType === "graduate") {
          response = await programApi.updateGraduate(id, programData);
        } else {
          response = await programApi.updateUndergrad(id, programData);
        }

        const updatedProgram = response.data.data || response.data;

        // Update with server response, ensuring college info is preserved
        updateDataOptimistically((prevData) => ({
          ...prevData,
          [targetArray]: prevData[targetArray].map((program) =>
            program.id.toString() === id.toString()
              ? {
                  ...updatedProgram,
                  college:
                    updatedProgram.college || currentCollege || program.college,
                }
              : program
          ),
        }));

        return { success: true, data: updatedProgram };
      } catch (err) {
        console.error("Error updating program:", err);
        const message =
          err.response?.data?.message || "Failed to update program";
        setError(message);
        return { success: false, error: message };
      }
    },
    [updateDataOptimistically, setError]
  );

  const deleteProgram = useCallback(
    async (id, programType) => {
      const targetArray =
        programType === "graduate" ? "graduates" : "undergrads";
      let deletedProgram;

      try {
        setError(null);

        // Optimistic update
        updateDataOptimistically((prevData) => {
          deletedProgram = prevData[targetArray].find(
            (p) => p.id.toString() === id.toString()
          );
          return {
            ...prevData,
            [targetArray]: prevData[targetArray].filter(
              (program) => program.id.toString() !== id.toString()
            ),
            colleges: deletedProgram
              ? prevData.colleges.map((college) =>
                  college.id.toString() === deletedProgram.college_id.toString()
                    ? {
                        ...college,
                        [programType === "graduate"
                          ? "graduate_programs"
                          : "undergraduate_programs"]: Math.max(
                          0,
                          (college[
                            programType === "graduate"
                              ? "graduate_programs"
                              : "undergraduate_programs"
                          ] || 0) - 1
                        ),
                        programs: Math.max(0, (college.programs || 0) - 1),
                      }
                    : college
                )
              : prevData.colleges,
          };
        });

        if (programType === "graduate") {
          await programApi.deleteGraduate(id);
        } else {
          await programApi.deleteUndergrad(id);
        }

        return { success: true };
      } catch (err) {
        console.error("Error deleting program:", err);

        // Revert optimistic update
        if (deletedProgram) {
          updateDataOptimistically((prevData) => ({
            ...prevData,
            [targetArray]: [...prevData[targetArray], deletedProgram],
            colleges: prevData.colleges.map((college) =>
              college.id.toString() === deletedProgram.college_id.toString()
                ? {
                    ...college,
                    [programType === "graduate"
                      ? "graduate_programs"
                      : "undergraduate_programs"]:
                      (college[
                        programType === "graduate"
                          ? "graduate_programs"
                          : "undergraduate_programs"
                      ] || 0) + 1,
                    programs: (college.programs || 0) + 1,
                  }
                : college
            ),
          }));
        }

        const message =
          err.response?.data?.message || "Failed to delete program";
        setError(message);
        return { success: false, error: message };
      }
    },
    [updateDataOptimistically, setError]
  );

  return {
    createProgram,
    updateProgram,
    deleteProgram,
  };
};
