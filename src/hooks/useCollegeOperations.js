import { useState, useCallback } from "react";
import { showLoadingToast, updateToast } from "@/utils/toast.jsx";

export const useCollegeOperations = (
  dashboardData,
  createCollege,
  updateCollege,
  deleteCollege
) => {
  // Initialize with proper structure to avoid the map error
  const [collegesData, setCollegesDataState] = useState({
    "CSU-MAIN": [],
    "CSU-CC": [],
  });

  // ✅ Memoize the setCollegesData function to prevent unnecessary re-renders
  const setCollegesData = useCallback((data) => {
    // Only update if the data has actually changed
    setCollegesDataState((prevData) => {
      // Simple deep comparison for the structure we're dealing with
      if (JSON.stringify(prevData) === JSON.stringify(data)) {
        return prevData;
      }
      return data;
    });
  }, []);

  // Handle adding a new college
  const handleAddCollege = async (newCollege) => {
    const loadingToastId = showLoadingToast("Creating new college...");

    try {
      // Find the selected campus by acronym
      const selectedCampus = dashboardData.campuses.find(
        (campus) => campus.acronym === newCollege.campus
      );

      if (!selectedCampus) {
        updateToast(
          loadingToastId,
          `Campus "${newCollege.campus}" not found`,
          "error"
        );
        return;
      }

      // Create FormData and make API call
      const formData = new FormData();
      formData.append("name", newCollege.name);
      formData.append("acronym", newCollege.shortName);
      formData.append("campus_id", selectedCampus.id);
      if (newCollege.logo) {
        formData.append("logo", newCollege.logo);
      }

      const result = await createCollege(formData);

      if (result.success) {
        updateToast(
          loadingToastId,
          `College "${newCollege.name}" has been added successfully!`,
          "success"
        );
      } else {
        updateToast(
          loadingToastId,
          `Failed to add college: ${result.error}`,
          "error"
        );
      }
    } catch (error) {
      updateToast(
        loadingToastId,
        `An unexpected error occurred: ${error.message}`,
        "error"
      );
      console.error("Error adding college:", error);
    }
  };

  // Handle updating a college
  const handleUpdateCollege = async (collegeId, updatedData) => {
    const loadingToastId = showLoadingToast("Updating college...");

    try {
      let formData;

      if (updatedData.logo) {
        // If there's a logo, use FormData
        formData = new FormData();
        formData.append("name", updatedData.name);
        formData.append("acronym", updatedData.shortName);
        formData.append("campus_id", updatedData.campus_id);
        formData.append("logo", updatedData.logo);
      } else {
        // If no logo, use regular object
        formData = {
          name: updatedData.name,
          acronym: updatedData.shortName,
          campus_id: updatedData.campus_id,
        };
      }

      const result = await updateCollege(collegeId, formData);

      if (result.success) {
        updateToast(
          loadingToastId,
          `College "${updatedData.name}" has been updated successfully!`,
          "success"
        );
        return result;
      } else {
        updateToast(
          loadingToastId,
          `Failed to update college: ${result.error}`,
          "error"
        );
        return result;
      }
    } catch (error) {
      updateToast(
        loadingToastId,
        `An unexpected error occurred: ${error.message}`,
        "error"
      );
      console.error("Error updating college:", error);
      return { success: false, error: error.message };
    }
  };

  // Handle deleting a college
  const handleDeleteCollege = async (collegeId, collegeName) => {
    const loadingToastId = showLoadingToast("Deleting college...");

    try {
      const result = await deleteCollege(collegeId);

      if (result.success) {
        updateToast(
          loadingToastId,
          `College "${collegeName}" has been deleted successfully!`,
          "success"
        );
        return result;
      } else {
        updateToast(
          loadingToastId,
          `Failed to delete college: ${result.error}`,
          "error"
        );
        return result;
      }
    } catch (error) {
      updateToast(
        loadingToastId,
        `An unexpected error occurred: ${error.message}`,
        "error"
      );
      console.error("Error deleting college:", error);
      return { success: false, error: error.message };
    }
  };

  return {
    collegesData,
    setCollegesData,
    handleAddCollege,
    handleUpdateCollege,
    handleDeleteCollege,
  };
};
