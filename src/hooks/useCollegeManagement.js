import { useCallback } from "react";
import { collegeApi } from "../services/api/dashboardApi";
import axios from "axios"; // Add this import

export const useCollegeManagement = (updateDataOptimistically, setError) => {
  const createCollege = useCallback(
    async (collegeData) => {
      // Declare tempId outside try-catch block so it's accessible in both
      const tempId = `temp-${Date.now()}`;

      try {
        setError(null);

        // Get campus info for proper structure
        const campusId = parseInt(collegeData.get("campus_id"));

        // Optimistic update - add temporary college with proper structure
        const tempCollege = {
          id: tempId,
          name: collegeData.get("name"),
          acronym: collegeData.get("acronym"),
          campus_id: campusId,
          logo_url: null,
          undergraduate_programs: 0,
          graduate_programs: 0,
          programs: 0,
          files: 0,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        };

        updateDataOptimistically((prevData) => ({
          ...prevData,
          colleges: [...prevData.colleges, tempCollege],
        }));

        // Make API call
        const response = await collegeApi.create(collegeData);
        const newCollege = response.data.data || response.data;

        // Replace temporary college with real one from backend
        updateDataOptimistically((prevData) => ({
          ...prevData,
          colleges: prevData.colleges.map((college) => {
            // Check if this is our temporary college
            if (college.id === tempId) {
              return {
                // Use all data from the backend response
                ...newCollege,
                // Ensure computed fields exist with proper defaults
                undergraduate_programs:
                  newCollege.undergraduate_programs ||
                  newCollege.undergraduate_programs_count ||
                  0,
                graduate_programs:
                  newCollege.graduate_programs ||
                  newCollege.graduate_programs_count ||
                  0,
                programs:
                  (newCollege.undergraduate_programs ||
                    newCollege.undergraduate_programs_count ||
                    0) +
                  (newCollege.graduate_programs ||
                    newCollege.graduate_programs_count ||
                    0),
                files: newCollege.files || 0,
                // Ensure the ID is properly set from backend
                id: newCollege.id,
                // Keep the campus_id for proper transformation
                campus_id: newCollege.campus_id || college.campus_id,
              };
            }
            return college;
          }),
        }));

        return { success: true, data: newCollege };
      } catch (err) {
        console.error("Error creating college:", err);

        // Revert optimistic update - now tempId is accessible
        updateDataOptimistically((prevData) => ({
          ...prevData,
          colleges: prevData.colleges.filter(
            (college) => college.id !== tempId
          ),
        }));

        let message = "Failed to create college";
        if (err.response?.data?.message) {
          message = err.response.data.message;
        } else if (err.response?.data?.errors) {
          const errors = err.response.data.errors;
          message = Object.values(errors).flat().join(", ");
        } else if (err.message) {
          message = err.message;
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
        let originalCollege; // Move this declaration to proper scope

        // Optimistic update
        updateDataOptimistically((prevData) => {
          originalCollege = prevData.colleges.find(
            (c) => c.id.toString() === id.toString()
          );

          // Merge the update data properly
          const updateData =
            collegeData instanceof FormData
              ? {
                  name: collegeData.get("name"),
                  acronym: collegeData.get("acronym"),
                  campus_id: parseInt(collegeData.get("campus_id")),
                  // Keep existing logo_url if no new logo provided
                  logo_url: collegeData.get("logo")
                    ? null
                    : originalCollege?.logo_url,
                }
              : collegeData;

          return {
            ...prevData,
            colleges: prevData.colleges.map((college) =>
              college.id.toString() === id.toString()
                ? { ...college, ...updateData }
                : college
            ),
          };
        });

        let response;
        if (collegeData instanceof FormData) {
          response = await collegeApi.update(id, collegeData);
        } else {
          response = await axios.put(
            `${import.meta.env.VITE_API_BASE_URL}/colleges/${id}`,
            collegeData
          );
        }

        const updatedCollege = response.data.data || response.data;

        // Update with server response
        updateDataOptimistically((prevData) => ({
          ...prevData,
          colleges: prevData.colleges.map((college) =>
            college.id.toString() === id.toString()
              ? {
                  ...updatedCollege,
                  undergraduate_programs:
                    updatedCollege.undergraduate_programs ||
                    college.undergraduate_programs ||
                    0,
                  graduate_programs:
                    updatedCollege.graduate_programs ||
                    college.graduate_programs ||
                    0,
                  programs:
                    (updatedCollege.undergraduate_programs ||
                      college.undergraduate_programs ||
                      0) +
                    (updatedCollege.graduate_programs ||
                      college.graduate_programs ||
                      0),
                  files: updatedCollege.files || college.files || 0,
                }
              : college
          ),
        }));

        return { success: true, data: updatedCollege };
      } catch (err) {
        console.error("Error updating college:", err);

        // Revert optimistic update
        if (originalCollege) {
          updateDataOptimistically((prevData) => ({
            ...prevData,
            colleges: prevData.colleges.map((college) =>
              college.id.toString() === id.toString()
                ? originalCollege
                : college
            ),
          }));
        }

        const message =
          err.response?.data?.message || "Failed to update college";
        setError(message);
        return { success: false, error: message };
      }
    },
    [updateDataOptimistically, setError]
  );

  const deleteCollege = useCallback(
    async (id) => {
      try {
        setError(null);
        let deletedCollege;

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
