import { useState, useEffect } from "react";
import {
  campusApi,
  collegeApi,
  curriculumApi,
  syllabusApi,
  programApi,
} from "../services/api/dashboardApi";

export const useDashboardData = () => {
  const [data, setData] = useState({
    campuses: [],
    colleges: [],
    curriculum: [],
    syllabus: [],
    undergrads: [],
    graduates: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAllData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Load critical data first (campuses and colleges)
      const [campusesRes, collegesRes] = await Promise.all([
        campusApi.getAll(),
        collegeApi.getAll(),
      ]);

      // Update UI with critical data immediately
      const criticalData = {
        campuses: campusesRes.data.data || campusesRes.data,
        colleges: collegesRes.data.data || collegesRes.data,
        curriculum: [],
        syllabus: [],
        undergrads: [],
        graduates: [],
      };

      setData(criticalData);
      setLoading(false);

      // Load remaining data in background
      const [curriculumRes, syllabusRes, undergradsRes, graduatesRes] =
        await Promise.all([
          curriculumApi.getAll(),
          syllabusApi.getAll(),
          programApi.getUndergrads(),
          programApi.getGraduates(),
        ]);

      // Update with complete data
      setData({
        ...criticalData,
        curriculum: curriculumRes.data.data || curriculumRes.data,
        syllabus: syllabusRes.data.data || syllabusRes.data,
        undergrads: undergradsRes.data.data || undergradsRes.data,
        graduates: graduatesRes.data.data || graduatesRes.data,
      });
    } catch (err) {
      console.error("Error fetching dashboard data:", err);
      setError(err.message || "Failed to fetch dashboard data");
      setLoading(false);
    }
  };

  // College management functions
  const createCollege = async (collegeData) => {
    try {
      setError(null);
      const response = await collegeApi.create(collegeData);
      await fetchAllData(); // Refresh all data
      return { success: true, data: response.data };
    } catch (err) {
      console.error("Error creating college:", err);
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
  };

  const updateCollege = async (id, collegeData) => {
    try {
      setError(null);
      const response = await collegeApi.update(id, collegeData);
      await fetchAllData(); // Refresh all data
      return { success: true, data: response.data };
    } catch (err) {
      console.error("Error updating college:", err);
      const message = err.response?.data?.message || "Failed to update college";
      setError(message);
      return { success: false, error: message };
    }
  };

  const deleteCollege = async (id) => {
    try {
      setError(null);
      await collegeApi.delete(id);
      await fetchAllData(); // Refresh all data
      return { success: true };
    } catch (err) {
      console.error("Error deleting college:", err);
      const message = err.response?.data?.message || "Failed to delete college";
      setError(message);
      return { success: false, error: message };
    }
  };

  // File management functions
  const uploadFile = async (file, type, programId, programType) => {
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

      await fetchAllData(); // Refresh all data
      return { success: true, data: response.data };
    } catch (err) {
      console.error("Error uploading file:", err);
      const message = err.response?.data?.message || "Failed to upload file";
      setError(message);
      return { success: false, error: message };
    }
  };

  const deleteFile = async (fileId, category) => {
    try {
      setError(null);
      const [type, originalId] = fileId.split("-");

      if (type === "curriculum") {
        await curriculumApi.delete(originalId);
      } else if (type === "syllabus") {
        await syllabusApi.delete(originalId);
      }

      await fetchAllData(); // Refresh all data
      return { success: true };
    } catch (err) {
      console.error("Error deleting file:", err);
      const message = err.response?.data?.message || "Failed to delete file";
      setError(message);
      return { success: false, error: message };
    }
  };

  // Transform data for easy consumption
  const transformedFiles = [
    ...data.curriculum.map((item) => ({
      id: `curriculum-${item.id}`,
      name: item.file_name || "No file",
      type: item.file_type?.split("/")[1] || "unknown",
      size: item.file_size
        ? `${(item.file_size / (1024 * 1024)).toFixed(1)} MB`
        : "0 MB",
      uploadDate:
        item.created_at?.split("T")[0] ||
        new Date().toISOString().split("T")[0],
      category: "Curriculum",
      college:
        item.undergrad_program?.college?.acronym ||
        item.graduate_program?.college?.acronym ||
        "Unknown",
      program:
        item.undergrad_program?.name ||
        item.graduate_program?.name ||
        "Unknown",
      year: new Date(item.created_at).getFullYear().toString(),
      status: "active",
      lastModified:
        item.updated_at?.split("T")[0] || item.created_at?.split("T")[0],
      uploadedBy: "System",
      url: item.file_url,
      originalId: item.id,
      programType: item.program_type,
    })),
    ...data.syllabus.map((item) => ({
      id: `syllabus-${item.id}`,
      name: item.file_name || "No file",
      type: item.file_type?.split("/")[1] || "unknown",
      size: item.file_size
        ? `${(item.file_size / (1024 * 1024)).toFixed(1)} MB`
        : "0 MB",
      uploadDate:
        item.created_at?.split("T")[0] ||
        new Date().toISOString().split("T")[0],
      category: "Syllabus",
      college:
        item.undergrad_program?.college?.acronym ||
        item.graduate_program?.college?.acronym ||
        "Unknown",
      program:
        item.undergrad_program?.name ||
        item.graduate_program?.name ||
        "Unknown",
      year: new Date(item.created_at).getFullYear().toString(),
      status: "active",
      lastModified:
        item.updated_at?.split("T")[0] || item.created_at?.split("T")[0],
      uploadedBy: "System",
      url: item.file_url,
      originalId: item.id,
      programType: item.program_type,
    })),
  ];

  useEffect(() => {
    fetchAllData();
  }, []);

  return {
    data,
    loading,
    error,
    refetch: fetchAllData,
    // Computed/transformed data
    colleges: data.colleges,
    files: transformedFiles,
    // Functions
    createCollege,
    updateCollege,
    deleteCollege,
    uploadFile,
    deleteFile,
  };
};
