import { useState } from "react";
import { showLoadingToast, updateToast } from "@/utils/toast";

export const useCollegeOperations = (dashboardData, createCollege) => {
  const [collegesData, setCollegesData] = useState({
    "CSU-MAIN": {
      undergraduate: [],
      graduate: [],
    },
    "CSU-CC": [],
  });

  // Handle adding a new college
  const handleAddCollege = async (newCollege) => {
    const loadingToastId = showLoadingToast("Creating new college...");

    try {
      // Optimistic update
      const tempCollegeId = `temp-${Date.now()}`;
      const tempCollege = {
        id: tempCollegeId,
        name: newCollege.name,
        shortName: newCollege.shortName,
        programs: 0,
        files: 0,
        logo_url: newCollege.logoPreview,
      };

      const selectedCampus = dashboardData.campuses.find(
        (campus) =>
          campus.acronym === newCollege.campus ||
          campus.name === newCollege.campus
      );

      // Update UI optimistically
      setCollegesData((prevData) => {
        const updatedData = { ...prevData };

        if (
          selectedCampus?.name.includes("MAIN") ||
          selectedCampus?.acronym === "CSU-MAIN"
        ) {
          updatedData["CSU-MAIN"] = {
            undergraduate: [
              ...(updatedData["CSU-MAIN"]?.undergraduate || []),
              tempCollege,
            ],
            graduate: [
              ...(updatedData["CSU-MAIN"]?.graduate || []),
              { ...tempCollege, id: `${tempCollegeId}-grad` },
            ],
          };
        } else if (
          selectedCampus?.name.includes("CC") ||
          selectedCampus?.acronym === "CSU-CC"
        ) {
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
      if (selectedCampus) {
        formData.append("campus_id", selectedCampus.id);
      }
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

      if (
        selectedCampus?.name.includes("MAIN") ||
        selectedCampus?.acronym === "CSU-MAIN"
      ) {
        updatedData["CSU-MAIN"] = {
          undergraduate:
            updatedData["CSU-MAIN"]?.undergraduate?.filter(
              (c) => c.id !== tempCollegeId
            ) || [],
          graduate:
            updatedData["CSU-MAIN"]?.graduate?.filter(
              (c) => c.id !== `${tempCollegeId}-grad`
            ) || [],
        };
      } else if (
        selectedCampus?.name.includes("CC") ||
        selectedCampus?.acronym === "CSU-CC"
      ) {
        updatedData["CSU-CC"] =
          updatedData["CSU-CC"]?.filter((c) => c.id !== tempCollegeId) || [];
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
