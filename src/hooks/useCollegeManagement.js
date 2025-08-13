import { useCallback } from "react";
import { collegeApi } from "../services/api/dashboardApi";

export const useCollegeManagement = (updateDataOptimistically, setError) => {
  const createCollege = useCallback(
    async (collegeData) => {
      try {
        setError(null);

        // Find the campus information
        const currentData = await new Promise((resolve) => {
          updateDataOptimistically((prevData) => {
            resolve(prevData);
            return prevData;
          });
        });

        const campus = currentData.campuses.find(
          (c) => c.acronym === collegeData.campus
        );

        if (!campus) {
          throw new Error("Campus not found");
        }

        // Optimistic update with complete college information
        const tempId = `temp-${Date.now()}`;
        const tempCollege = {
          id: tempId,
          name: collegeData.name,
          acronym: collegeData.shortName,
          campus_id: campus.id,
          logo_url: collegeData.logo_url || null,
          created_at: new Date().toISOString(),
          // Initialize program counts
          undergraduate_programs: 0,
          graduate_programs: 0,
          programs: 0,
          files: 0,
          // Include campus info for immediate display
          campus: {
            id: campus.id,
            name: campus.name,
            acronym: campus.acronym,
          },
        };

        updateDataOptimistically((prevData) => ({
          ...prevData,
          colleges: [...prevData.colleges, tempCollege],
        }));

        // Make API call
        const response = await collegeApi.create({
          name: collegeData.name,
          acronym: collegeData.shortName,
          campus_id: campus.id,
          logo_url: collegeData.logo_url || null,
        });

        const newCollege = response.data.data || response.data;

        // Replace temp college with real one
        updateDataOptimistically((prevData) => ({
          ...prevData,
          colleges: prevData.colleges.map((college) =>
            college.id === tempId
              ? {
                  ...newCollege,
                  // Ensure campus info is available
                  campus: newCollege.campus || campus,
                  // Initialize counts if not provided
                  undergraduate_programs:
                    newCollege.undergraduate_programs || 0,
                  graduate_programs: newCollege.graduate_programs || 0,
                  programs: newCollege.programs || 0,
                  files: newCollege.files || 0,
                }
              : college
          ),
        }));

        return { success: true, data: newCollege };
      } catch (err) {
        console.error("Error creating college:", err);

        // Revert optimistic update
        updateDataOptimistically((prevData) => ({
          ...prevData,
          colleges: prevData.colleges.filter(
            (college) => !college.id.toString().startsWith("temp-")
          ),
        }));

        let message = "Failed to create college";
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

  const updateCollege = useCallback(
    async (id, collegeData) => {
      try {
        setError(null);

        // Get current data to resolve campus info
        let currentCampus = null;
        updateDataOptimistically((prevData) => {
          if (collegeData.campus) {
            currentCampus = prevData.campuses.find(
              (c) => c.acronym === collegeData.campus
            );
          }
          return prevData;
        });

        // Optimistic update
        updateDataOptimistically((prevData) => ({
          ...prevData,
          colleges: prevData.colleges.map((college) =>
            college.id.toString() === id.toString()
              ? {
                  ...college,
                  name: collegeData.name || college.name,
                  acronym: collegeData.shortName || college.acronym,
                  campus_id: currentCampus?.id || college.campus_id,
                  logo_url: collegeData.logo_url || college.logo_url,
                  // Update campus info if changed
                  campus: currentCampus || college.campus,
                }
              : college
          ),
        }));

        const response = await collegeApi.update(id, {
          name: collegeData.name,
          acronym: collegeData.shortName,
          campus_id: currentCampus?.id,
          logo_url: collegeData.logo_url,
        });

        const updatedCollege = response.data.data || response.data;

        // Update with server response
        updateDataOptimistically((prevData) => ({
          ...prevData,
          colleges: prevData.colleges.map((college) =>
            college.id.toString() === id.toString()
              ? {
                  ...updatedCollege,
                  campus:
                    updatedCollege.campus || currentCampus || college.campus,
                }
              : college
          ),
        }));

        return { success: true, data: updatedCollege };
      } catch (err) {
        console.error("Error updating college:", err);
        const message =
          err.response?.data?.message || "Failed to update college";
        setError(message);
        return { success: false, error: message };
      }
    },
    [updateDataOptimistically, setError]
  );

  const deleteCollege = useCallback(
    async (id, campusAcronym) => {
      let deletedCollege;

      try {
        setError(null);

        // Optimistic update
        updateDataOptimistically((prevData) => {
          deletedCollege = prevData.colleges.find(
            (c) => c.id.toString() === id.toString()
          );
          return {
            ...prevData,
            colleges: prevData.colleges.filter(
              (college) => college.id.toString() !== id.toString()
            ),
          };
        });

        await collegeApi.delete(id);

        return { success: true };
      } catch (err) {
        console.error("Error deleting college:", err);

        // Revert optimistic update
        if (deletedCollege) {
          updateDataOptimistically((prevData) => ({
            ...prevData,
            colleges: [...prevData.colleges, deletedCollege],
          }));
        }

        const message =
          err.response?.data?.message || "Failed to delete college";
        setError(message);
        return { success: false, error: message };
      }
    },
    [updateDataOptimistically, setError]
  );

  return {
    createCollege,
    updateCollege,
    deleteCollege,
  };
};
