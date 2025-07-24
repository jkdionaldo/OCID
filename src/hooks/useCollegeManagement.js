import { useState, useCallback } from "react";
import { collegeApi } from "../services/api/dashboardApi";

export const useCollegeManagement = (updateDataOptimistically, setError) => {
  const createCollege = useCallback(
    async (collegeData) => {
      try {
        setError(null);

        // Optimistic update
        const tempId = `temp-${Date.now()}`;
        const tempCollege = {
          id: tempId,
          name: collegeData.get("name"),
          acronym: collegeData.get("acronym"),
          campus_id: parseInt(collegeData.get("campus_id")),
          logo_url: null,
          undergraduate_programs_count: 0,
          graduate_programs_count: 0,
          files: 0,
          programs: 0,
          created_at: new Date().toISOString(),
        };

        updateDataOptimistically((prevData) => ({
          ...prevData,
          colleges: [...prevData.colleges, tempCollege],
        }));

        // Make API call
        const response = await collegeApi.create(collegeData);
        const newCollege = response.data.data || response.data;

        // Replace temp college with real one
        updateDataOptimistically((prevData) => ({
          ...prevData,
          colleges: prevData.colleges.map((college) =>
            college.id === tempId ? newCollege : college
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

        // Optimistic update
        updateDataOptimistically((prevData) => ({
          ...prevData,
          colleges: prevData.colleges.map((college) =>
            college.id.toString() === id.toString()
              ? { ...college, ...collegeData }
              : college
          ),
        }));

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
            college.id.toString() === id.toString() ? updatedCollege : college
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
