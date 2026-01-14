import apiClient from "./apiClient";

export const programFilesService = {
  // Curriculum operations
  getCurriculum: async () => {
    const response = await apiClient.get("/curriculum");
    return response.data.data;
  },

  createCurriculum: async (formData) => {
    const response = await apiClient.post("/curriculum", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data.data;
  },

  updateCurriculum: async (id, formData) => {
    const response = await apiClient.put(`/curriculum/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data.data;
  },

  deleteCurriculum: async (id) => {
    const response = await apiClient.delete(`/curriculum/${id}`);
    return response.data;
  },

  // Syllabus operations
  getSyllabus: async () => {
    const response = await apiClient.get("/syllabus");
    return response.data.data;
  },

  createSyllabus: async (formData) => {
    const response = await apiClient.post("/syllabus", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data.data;
  },

  updateSyllabus: async (id, formData) => {
    const response = await apiClient.put(`/syllabus/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data.data;
  },

  deleteSyllabus: async (id) => {
    const response = await apiClient.delete(`/syllabus/${id}`);
    return response.data;
  },
};
