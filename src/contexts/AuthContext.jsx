import { createContext } from "react";

// Default AuthContext with all role helpers
export const AuthContext = createContext({
  user: null,           // full user object including role
  isAuthenticated: false,
  isLoading: true,

  // Authentication methods
  login: async () => {},
  register: async () => {},
  logout: async () => {},
  updateProfile: async () => {},
  changePassword: async () => {},

  // Role helpers
  isSuperAdmin: () => false,          // you
  isDirector: () => false,
  isCurriculumHead: () => false,
  isMaterialsHead: () => false,
  isEvaluationHead: () => false,
  isOcidStaff: () => false,
 
});