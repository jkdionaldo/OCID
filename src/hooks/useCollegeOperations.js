import { useState, useCallback } from "react";
import { showLoadingToast, updateToast } from "@/utils/toast.jsx";

export const useCollegeOperations = (dashboardData, createCollege) => {
  const [collegesData, setCollegesData] = useState({
    "CSU-MAIN": [],
    "CSU-CC": [],
  });

  const handleAddCollege = useCallback(
    async (newCollege) => {
      const loadingToastId = showLoadingToast("Creating new college...");

      try {
        const result = await createCollege(newCollege);

        if (result.success) {
          updateToast(
            loadingToastId,
            `College "${newCollege.name}" has been added successfully!`,
            "success"
          );
          // No need to manually update collegesData here - it will be updated via the transformed data
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
    },
    [createCollege]
  );

  return {
    collegesData,
    setCollegesData,
    handleAddCollege,
  };
};
