import { useState, useEffect, useCallback } from "react";
import { curriculumApi, syllabusApi } from "@/services/api/dashboardApi";
import { toast } from "sonner";

export const useProgramFiles = (program) => {
  const [curriculum, setCurriculum] = useState(null);
  const [syllabus, setSyllabus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProgramFiles = useCallback(async () => {
    // Early return if no program - don't fetch anything
    if (!program) {
      setCurriculum(null);
      setSyllabus(null);
      setLoading(false);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Fetch curriculum
      const curriculumResponse = await curriculumApi.getAll();
      const programCurriculum = curriculumResponse.data.data?.find(
        (curr) =>
          curr.program_id === program.id &&
          curr.program_type === (program.program_type || program.type)
      );
      setCurriculum(programCurriculum || null);

      // Fetch syllabus
      const syllabusResponse = await syllabusApi.getAll();
      const programSyllabus = syllabusResponse.data.data?.find(
        (syll) =>
          syll.program_id === program.id &&
          syll.program_type === (program.program_type || program.type)
      );
      setSyllabus(programSyllabus || null);
    } catch (err) {
      console.error("Error fetching program files:", err);
      setError("Failed to load program files");
      toast.error("Failed to load program files");
    } finally {
      setLoading(false);
    }
  }, [program]);

  const uploadFile = useCallback(
    async (file, type) => {
      if (!program || !file) return { success: false };

      try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("program_id", program.id);
        formData.append("program_type", program.program_type || program.type);

        let response;
        if (type === "curriculum") {
          response = await curriculumApi.create(formData);
          setCurriculum(response.data.data);
          toast.success("Curriculum uploaded successfully");
        } else if (type === "syllabus") {
          response = await syllabusApi.create(formData);
          setSyllabus(response.data.data);
          toast.success("Syllabus uploaded successfully");
        }

        return { success: true, data: response.data.data };
      } catch (error) {
        console.error(`Error uploading ${type}:`, error);
        const message =
          error.response?.data?.message || `Failed to upload ${type}`;
        toast.error(message);
        return { success: false, error: message };
      }
    },
    [program]
  );

  const updateFile = useCallback(
    async (file, type) => {
      const currentFile = type === "curriculum" ? curriculum : syllabus;
      if (!currentFile || !file || !program) return { success: false };

      try {
        const formData = new FormData();
        formData.append("file", file);

        let response;
        if (type === "curriculum") {
          response = await curriculumApi.update(currentFile.id, formData);
          setCurriculum(response.data.data);
          toast.success("Curriculum updated successfully");
        } else if (type === "syllabus") {
          response = await syllabusApi.update(currentFile.id, formData);
          setSyllabus(response.data.data);
          toast.success("Syllabus updated successfully");
        }

        return { success: true, data: response.data.data };
      } catch (error) {
        console.error(`Error updating ${type}:`, error);
        const message =
          error.response?.data?.message || `Failed to update ${type}`;
        toast.error(message);
        return { success: false, error: message };
      }
    },
    [curriculum, syllabus, program]
  );

  const deleteFile = useCallback(
    async (type) => {
      const file = type === "curriculum" ? curriculum : syllabus;
      if (!file || !program) return { success: false };

      try {
        if (type === "curriculum") {
          await curriculumApi.delete(file.id);
          setCurriculum(null);
          toast.success("Curriculum deleted successfully");
        } else if (type === "syllabus") {
          await syllabusApi.delete(file.id);
          setSyllabus(null);
          toast.success("Syllabus deleted successfully");
        }

        return { success: true };
      } catch (error) {
        console.error(`Error deleting ${type}:`, error);
        const message =
          error.response?.data?.message || `Failed to delete ${type}`;
        toast.error(message);
        return { success: false, error: message };
      }
    },
    [curriculum, syllabus, program]
  );

  useEffect(() => {
    fetchProgramFiles();
  }, [fetchProgramFiles]);

  return {
    curriculum,
    syllabus,
    loading,
    error,
    uploadFile,
    updateFile,
    deleteFile,
    refetch: fetchProgramFiles,
  };
};
