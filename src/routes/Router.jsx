import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import Dashboard from "@/pages/Dashboard";
import About from "@/pages/About";
import ProfileSettings from "@/pages/ProfileSettings";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import NotFound from "@/pages/NotFound";
import ProfileSettings from "@/pages/ProfileSettings";

// Import route collections
// ccGraduateRoutes,

import {
  graduateRoutes,
  undergradRoutes,
  ccUndergradRoutes,
} from "./CollegeRoutes";

// Import main pages
import Home from "@/pages/HomePage";

// downloadables page
import Downloadables from "@/pages/Downloadables";
import Procedurals from "@/pages/Procedurals";
// CSU main page
import Colleges_Graduate_Main from "@/pages/CSU-MAIN/GraduateSchoolPage";
import Colleges_Undergraduate_Main from "@/pages/CSU-MAIN/UndergradPage";

//  CSU-CC main pages
// import Colleges_Graduate_cc from "@/pages/CSU-CC/GraduateSchoolPage";
import Colleges_Undergraduate_cc from "@/pages/CSU-CC/UndergradPage";

const Router = () => {
  return (
    <Routes>
      {/* Main routes */}
      <Route path="/" element={<Home />} />

      {/* Procedurals */}
      <Route path="/procedurals" element={<Procedurals />} />
      {/* Add About route */}
      <Route path="/about" element={<About />} />

      {/* Protected Dashboard Route */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* downloadables */}
      <Route path="/downloadables" element={<Downloadables />} />

<<<<<<< HEAD
      <Route path="/profile" element={<ProfileSettings />} />
=======
      {/* Profile Settings */}
      <Route path="/profile-settings" element={<ProfileSettings />} />
>>>>>>> origin/testing

      {/*csu-main */}
      <Route
        path="/colleges_graduate_main"
        element={<Colleges_Graduate_Main />}
      />
      <Route
        path="/colleges_undergraduate_main"
        element={<Colleges_Undergraduate_Main />}
      />
      {/* CSU-CC  */}
      {/* <Route path="/colleges_graduate_cc" element={<Colleges_Graduate_cc />} /> */}
      <Route
        path="/colleges_undergraduate_cc"
        element={<Colleges_Undergraduate_cc />}
      />

      {/* Dynamic routes from collections */}
      {/* CSU MAIN */}
      {graduateRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      {/* CSU Cc */}
      {/* {ccGraduateRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))} */}
      {/* CSU MAIN Undergrad */}
      {undergradRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      {/* CSU CC Undergrad */}
      {ccUndergradRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}

      {/* Fallback route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;