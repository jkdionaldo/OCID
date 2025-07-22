import { useState } from "react";
import { showLoadingToast, updateToast } from "@/utils/toast";

export const useCollegeOperations = (dashboardData, createCollege) => {
  // Initialize with proper structure to avoid the map error
  const [collegesData, setCollegesData] = useState({
    "CSU-MAIN": [],
    "CSU-CC": [],
  });

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

      // Optimistic update
      const tempCollegeId = `temp-${Date.now()}`;
      const tempCollege = {
        id: tempCollegeId,
        name: newCollege.name,
        shortName: newCollege.shortName,
        undergraduate_programs: 0,
        graduate_programs: 0,
        programs: 0,
        files: 0,
        logo_url: newCollege.logoPreview,
      };

      // Update UI optimistically based on campus acronym
      setCollegesData((prevData) => {
        const updatedData = { ...prevData };

        if (selectedCampus.acronym === "CSU-MAIN") {
          updatedData["CSU-MAIN"] = [
            ...(updatedData["CSU-MAIN"] || []),
            tempCollege,
          ];
        } else if (selectedCampus.acronym === "CSU-CC") {
          updatedData["CSU-CC"] = [
            ...(updatedData["CSU-CC"] || []),
            tempCollege,
          ];
        }

        return updatedData;
      });

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
        // Revert optimistic update
        revertOptimisticUpdate(tempCollegeId, selectedCampus);
        updateToast(
          loadingToastId,
          `Failed to add college: ${result.error}`,
          "error"
        );
      }
    } catch (error) {
      // Handle error and revert changes
      updateToast(
        loadingToastId,
        `An unexpected error occurred: ${error.message}`,
        "error"
      );
      console.error("Error adding college:", error);
    }
  };

  const revertOptimisticUpdate = (tempCollegeId, selectedCampus) => {
    setCollegesData((prevData) => {
      const updatedData = { ...prevData };

      if (selectedCampus.acronym === "CSU-MAIN") {
        updatedData["CSU-MAIN"] = (updatedData["CSU-MAIN"] || []).filter(
          (c) => c.id !== tempCollegeId
        );
      } else if (selectedCampus.acronym === "CSU-CC") {
        updatedData["CSU-CC"] = (updatedData["CSU-CC"] || []).filter(
          (c) => c.id !== tempCollegeId
        );
      }

      return updatedData;
    });
  };

  return {
    collegesData,
    setCollegesData,
    handleAddCollege,
  };
};
