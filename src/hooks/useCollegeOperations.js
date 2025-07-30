import { useState, useCallback } from "react";
import { showLoadingToast, updateToast } from "@/utils/toast.jsx";

export const useCollegeOperations = (dashboardData, createCollege) => {
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
      console.log("Updating colleges data:", data);
      return data;
    });
  }, []);

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
        return {
          success: false,
          error: `Campus "${newCollege.campus}" not found`,
        };
      }

      // Create FormData and make API call
      const formData = new FormData();
      formData.append("name", newCollege.name);
      formData.append("acronym", newCollege.shortName);
      formData.append("campus_id", selectedCampus.id);
      if (newCollege.logo) {
        formData.append("logo", newCollege.logo);
      }

      console.log("Sending college data:", {
        name: newCollege.name,
        acronym: newCollege.shortName,
        campus_id: selectedCampus.id,
        hasLogo: !!newCollege.logo,
      });

      const result = await createCollege(formData);

      if (result.success) {
        updateToast(
          loadingToastId,
          `College "${newCollege.name}" has been added successfully!`,
          "success"
        );
        return result;
      } else {
        updateToast(
          loadingToastId,
          `Failed to add college: ${result.error}`,
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
      console.error("Error adding college:", error);
      return { success: false, error: error.message };
    }
  };

  return {
    collegesData,
    setCollegesData,
    handleAddCollege,
  };
};
