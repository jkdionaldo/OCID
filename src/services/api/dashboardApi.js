import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Campus API
export const campusApi = {
  getAll: () => axios.get(`${BASE_URL}/campuses`),
  getById: (id) => axios.get(`${BASE_URL}/campuses/${id}`),
  create: (data) => axios.post(`${BASE_URL}/campuses`, data),
  update: (id, data) => axios.put(`${BASE_URL}/campuses/${id}`, data),
  delete: (id) => axios.delete(`${BASE_URL}/campuses/${id}`),
};

// College API
export const collegeApi = {
  getAll: () => axios.get(`${BASE_URL}/colleges`),
  getById: (id) => axios.get(`${BASE_URL}/colleges/${id}`),
  create: (data, config = {}) => {
    const defaultConfig = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      ...config,
    };
    return axios.post(`${BASE_URL}/colleges`, data, defaultConfig);
  },
  update: (id, data) => axios.put(`${BASE_URL}/colleges/${id}`, data),
  delete: (id) => axios.delete(`${BASE_URL}/colleges/${id}`),
};

// Programs API
export const programApi = {
  getUndergrads: () => axios.get(`${BASE_URL}/undergrads`),
  getGraduates: () => axios.get(`${BASE_URL}/graduates`),
  getUndergradById: (id) => axios.get(`${BASE_URL}/undergrads/${id}`),
  getGraduateById: (id) => axios.get(`${BASE_URL}/graduates/${id}`),

  // Create programs
  createUndergrad: (data) => axios.post(`${BASE_URL}/undergrads`, data),
  createGraduate: (data) => axios.post(`${BASE_URL}/graduates`, data),

  // Update programs
  updateUndergrad: (id, data) =>
    axios.put(`${BASE_URL}/undergrads/${id}`, data),
  updateGraduate: (id, data) => axios.put(`${BASE_URL}/graduates/${id}`, data),

  // Delete programs
  deleteUndergrad: (id) => axios.delete(`${BASE_URL}/undergrads/${id}`),
  deleteGraduate: (id) => axios.delete(`${BASE_URL}/graduates/${id}`),
};

// Curriculum API
export const curriculumApi = {
  getAll: () => axios.get(`${BASE_URL}/curriculum`),
  getById: (id) => axios.get(`${BASE_URL}/curriculum/${id}`),
  create: (data) =>
    axios.post(`${BASE_URL}/curriculum`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    }),
  update: (id, data) =>
    axios.put(`${BASE_URL}/curriculum/${id}`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    }),
  delete: (id) => axios.delete(`${BASE_URL}/curriculum/${id}`),
  uploadFile: (id, file) => {
    const formData = new FormData();
    formData.append("file", file);
    return axios.post(`${BASE_URL}/curriculum/${id}/upload`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
  removeFile: (id) => axios.delete(`${BASE_URL}/curriculum/${id}/file`),
};

// Syllabus API
export const syllabusApi = {
  getAll: () => axios.get(`${BASE_URL}/syllabus`),
  getById: (id) => axios.get(`${BASE_URL}/syllabus/${id}`),
  create: (data) =>
    axios.post(`${BASE_URL}/syllabus`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    }),
  update: (id, data) =>
    axios.put(`${BASE_URL}/syllabus/${id}`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    }),
  delete: (id) => axios.delete(`${BASE_URL}/syllabus/${id}`),
  uploadFile: (id, file) => {
    const formData = new FormData();
    formData.append("file", file);
    return axios.post(`${BASE_URL}/syllabus/${id}/upload`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
  removeFile: (id) => axios.delete(`${BASE_URL}/syllabus/${id}/file`),
};
