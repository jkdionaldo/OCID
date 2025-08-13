import { useCallback } from "react";
import { curriculumApi, syllabusApi } from "../services/api/dashboardApi";

export const useFileManagement = (updateDataOptimistically, setError) => {
  const uploadFile = useCallback(
    async (file, type, programId, programType) => {
      try {
        setError(null);
        const formData = new FormData();
        formData.append("file", file);
        formData.append("program_id", programId);
        formData.append("program_type", programType);

        let response;
        if (type === "curriculum") {
          response = await curriculumApi.create(formData);
        } else if (type === "syllabus") {
          response = await syllabusApi.create(formData);
        }

        const newFile = response.data.data || response.data;

        // Optimistic update
        updateDataOptimistically((prevData) => ({
          ...prevData,
          [type]: [...prevData[type], newFile],
        }));

        return { success: true, data: newFile };
      } catch (err) {
        console.error("Error uploading file:", err);
        const message = err.response?.data?.message || "Failed to upload file";
        setError(message);
        return { success: false, error: message };
      }
    },
    [updateDataOptimistically, setError]
  );

  const deleteFile = useCallback(
    async (fileId, category) => {
      try {
        setError(null);
        const [type, originalId] = fileId.split("-");

        // Optimistic update
        updateDataOptimistically((prevData) => ({
          ...prevData,
          [type]: prevData[type].filter(
            (file) => file.id.toString() !== originalId.toString()
          ),
        }));

        if (type === "curriculum") {
          await curriculumApi.delete(originalId);
        } else if (type === "syllabus") {
          await syllabusApi.delete(originalId);
        }

        return { success: true };
      } catch (err) {
        console.error("Error deleting file:", err);
        const message = err.response?.data?.message || "Failed to delete file";
        setError(message);
        return { success: false, error: message };
      }
    },
    [updateDataOptimistically, setError]
  );

  return {
    uploadFile,
    deleteFile,
  };
};
