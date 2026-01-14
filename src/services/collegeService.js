import apiClient from "./apiClient";

export const collegeService = {
  // Get all colleges
  getColleges: async () => {
    const response = await apiClient.get("/colleges");
    return response.data.data;
  },

  // Create new college
  createCollege: async (formData) => {
    const response = await apiClient.post("/colleges", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data.data;
  },

  // Update college
  updateCollege: async (id, formData) => {
    const response = await apiClient.post(
      `/colleges/${id}?_method=PUT`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data.data;
  },

  // Delete college
  deleteCollege: async (id) => {
    const response = await apiClient.delete(`/colleges/${id}`);
    return response.data;
  },

  // Get single college
  getCollege: async (id) => {
    const response = await apiClient.get(`/colleges/${id}`);
    return response.data.data;
  },

  // Upload logo
  uploadLogo: async (id, logoFile) => {
    const formData = new FormData();
    formData.append("logo", logoFile);

    const response = await apiClient.post(
      `/colleges/${id}/upload-logo`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data.data;
  },

  // Remove logo
  removeLogo: async (id) => {
    const response = await apiClient.delete(`/colleges/${id}/logo`);
    return response.data;
  },
};
