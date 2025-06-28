import { Routes, Route, Navigate } from "react-router-dom";

// Import route collections
import { graduateRoutes, undergradRoutes } from "./CollegeRoutes";

// Import main pages
import Home from "@/pages/HomePage";
import Colleges from "@/pages/CollegesPage";
import Undergrad from "@/pages/UndergradPage";

const Router = () => {
  return (
    <Routes>
      {/* Main routes */}
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
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
