import { Routes, Route, Navigate } from "react-router-dom";

// Import route collections
import { graduateRoutes, undergradRoutes } from "./CollegeRoutes";

// Import main pages
import Home from "@/pages/HomePage";
// downloadables page
import Downloadables from "@/pages/Downloadables"; // Ensure the correct file path and extension
// CSU main page
import Colleges from "@/pages/GraduateSchoolPage";
import Undergrad from "@/pages/UndergradPage";

const Router = () => {
  return (
    <Routes>
      {/* Main routes */}
      <Route path="/" element={<Home />} />
      {/* dowloadables */}
      <Route path="/downloadables" element={<Downloadables />} />
      {/*csu-main */}
      <Route path="/colleges" element={<Colleges />} />
      <Route path="/undergrad" element={<Undergrad />} />

      {/* Dynamic routes from collections */}
      {graduateRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}

      {undergradRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}

      {/* Fallback route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Router;
