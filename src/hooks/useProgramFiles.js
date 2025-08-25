import { useState, useCallback, useEffect } from "react";
import { curriculumApi, syllabusApi } from "@/services/api/dashboardApi";

export const useProgramFiles = (program) => {
  const [curriculum, setCurriculum] = useState(null);
  const [syllabus, setSyllabus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Helper function to normalize program type for comparison
  const normalizeProgramType = useCallback((type) => {
    if (!type) return null;
    // Convert "undergraduate" to "undergrad" and "graduate" stays "graduate"
    return type === "undergraduate" ? "undergrad" : type;
  }, []);

  const fetchProgramFiles = useCallback(async () => {
    // Early return if no program - don't fetch anything
    if (!program) {
      setCurriculum(null);
      setSyllabus(null);
      setLoading(false);
      setError(null);
      return;
    }

    console.log("Fetching files for program:", program);

    setLoading(true);
    setError(null);

    // Normalize the program type for database comparison
    const programTypeForDB = normalizeProgramType(
      program.program_type || program.type
    );

    console.log("Program type for DB comparison:", programTypeForDB);

    try {
      // Fetch curriculum with better error handling
      try {
        const curriculumResponse = await curriculumApi.getAll();
        console.log("Curriculum API response:", curriculumResponse);

        const curriculumData =
          curriculumResponse.data?.data || curriculumResponse.data || [];
        console.log("Curriculum data:", curriculumData);

        const programCurriculum = curriculumData.find((curr) => {
          return (
            curr.program_id === program.id &&
            curr.program_type === programTypeForDB
          );
        });

        console.log("Found curriculum for program:", programCurriculum);
        setCurriculum(programCurriculum || null);
      } catch (currError) {
        console.error("Error fetching curriculum:", currError);
        const errorMessage = `Failed to load curriculum: ${
          currError.response?.data?.message || currError.message
        }`;
        setError(errorMessage);
      }

      // Fetch syllabus with better error handling
      try {
        const syllabusResponse = await syllabusApi.getAll();
        console.log("Syllabus API response:", syllabusResponse);

        const syllabusData =
          syllabusResponse.data?.data || syllabusResponse.data || [];
        console.log("Syllabus data:", syllabusData);

        const programSyllabus = syllabusData.find((syll) => {
          return (
            syll.program_id === program.id &&
            syll.program_type === programTypeForDB
          );
        });

        console.log("Found syllabus for program:", programSyllabus);
        setSyllabus(programSyllabus || null);
      } catch (syllError) {
        console.error("Error fetching syllabus:", syllError);
        const errorMessage = `Failed to load syllabus: ${
          syllError.response?.data?.message || syllError.message
        }`;
        setError(errorMessage);
      }
    } catch (err) {
      console.error("General error fetching program files:", err);
      const errorMessage = "Failed to load program files";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, [program, normalizeProgramType]);

  // DECLARE updateFile FIRST (before uploadFile)
  const updateFile = useCallback(
    async (file, type) => {
      const currentFile = type === "curriculum" ? curriculum : syllabus;
      if (!currentFile || !file || !program) return { success: false };

      try {
        const formData = new FormData();
        formData.append("file", file);

        console.log("Updating file:", {
          type,
          fileId: currentFile.id,
          programId: program.id,
          programType: normalizeProgramType(
            program.program_type || program.type
          ),
        });

        let response;

        // Use the file upload endpoints instead of direct update
        if (type === "curriculum") {
          response = await curriculumApi.uploadFile(currentFile.id, file);
        } else if (type === "syllabus") {
          response = await syllabusApi.uploadFile(currentFile.id, file);
        } else {
          throw new Error(`Unknown file type: ${type}`);
        }

        const updatedFile = response.data.data || response.data;

        // Update local state immediately
        if (type === "curriculum") {
          setCurriculum(updatedFile);
        } else if (type === "syllabus") {
          setSyllabus(updatedFile);
        }

        return { success: true, data: updatedFile };
      } catch (error) {
        console.error(`Error updating ${type}:`, error);

        // Better error message extraction
        let message = `Failed to update ${type}`;
        if (error.response?.data?.message) {
          message = error.response.data.message;
        } else if (error.response?.data?.errors) {
          const errors = Object.values(error.response.data.errors).flat();
          message = errors.join(", ");
        }

        return { success: false, error: message };
      }
    },
    [curriculum, syllabus, program, normalizeProgramType]
  );

  // NOW declare uploadFile (after updateFile)
  const uploadFile = useCallback(
    async (file, type) => {
      if (!program || !file) return { success: false };

      try {
        // Check if a file already exists for this program
        const currentFile = type === "curriculum" ? curriculum : syllabus;

        if (currentFile) {
          // If file exists, use update endpoint
          return await updateFile(file, type);
        }

        // If no file exists, create new record
        const formData = new FormData();
        formData.append("file", file);
        formData.append("program_id", program.id);
        // Use normalized program type for database
        formData.append(
          "program_type",
          normalizeProgramType(program.program_type || program.type)
        );

        console.log("Creating new file record:", {
          type,
          programId: program.id,
          programType: normalizeProgramType(
            program.program_type || program.type
          ),
        });

        let response;

        if (type === "curriculum") {
          response = await curriculumApi.create(formData);
        } else if (type === "syllabus") {
          response = await syllabusApi.create(formData);
        } else {
          throw new Error(`Unknown file type: ${type}`);
        }

        const newFile = response.data.data || response.data;

        // Update local state immediately
        if (type === "curriculum") {
          setCurriculum(newFile);
        } else if (type === "syllabus") {
          setSyllabus(newFile);
        }

        return { success: true, data: newFile };
      } catch (error) {
        console.error(`Error uploading ${type}:`, error);
        const message =
          error.response?.data?.message || `Failed to upload ${type}`;

        return { success: false, error: message };
      }
    },
    [program, normalizeProgramType, curriculum, syllabus, updateFile] // updateFile is now safely declared above
  );

  const deleteFile = useCallback(
    async (type) => {
      const file = type === "curriculum" ? curriculum : syllabus;
      if (!file || !program) return { success: false };

      try {
        console.log("Deleting file:", {
          type,
          fileId: file.id,
          programId: program.id,
          hasFilePath: !!file.file_path,
          hasFileUrl: !!file.file_url,
        });

        // Check if the file actually has a file attached
        if (!file.file_path && !file.file_url && !file.file_name) {
          console.log("No file to delete, removing record only");
          // If there's no file, just delete the record
          if (type === "curriculum") {
            await curriculumApi.delete(file.id);
          } else if (type === "syllabus") {
            await syllabusApi.delete(file.id);
          }
        } else {
          // If there's a file, use the removeFile endpoint
          if (type === "curriculum") {
            await curriculumApi.removeFile(file.id);
          } else if (type === "syllabus") {
            await syllabusApi.removeFile(file.id);
          }
        }

        // Update local state immediately
        if (type === "curriculum") {
          setCurriculum(null);
        } else if (type === "syllabus") {
          setSyllabus(null);
        }

        return { success: true };
      } catch (error) {
        console.error(`Error deleting ${type}:`, error);

        // Better error message extraction
        let message = `Failed to delete ${type}`;
        if (error.response?.data?.message) {
          message = error.response.data.message;
        } else if (error.response?.data?.errors) {
          const errors = Object.values(error.response.data.errors).flat();
          message = errors.join(", ");
        }

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
