import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import Dashboard from "@/pages/Dashboard";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import ProfileSettings from "@/pages/ProfileSettings";
import Procedurals from "@/pages/Procedurals";
import About from "@/pages/About";
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

      {/* Protected Dashboard Route */}
<<<<<<< HEAD
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      {/* Profile Settings Route */}
      <Route
        path="/profile-settings"
        element={
          // <ProtectedRoute>
          <ProfileSettings />
          /* </ProtectedRoute> */
        }
      />
      {/* About Page */}
      <Route path="/about" element={<About />} />
=======
      <Route path="/dashboard" element={<Dashboard />} />
>>>>>>> c58d993a52abdc2b83ae8f1043a61c68a4ceb31a

      {/* downloadables */}
      <Route path="/downloadables" element={<Downloadables />} />

      {/* Procedurals Page */}
      <Route path="/procedurals" element={<Procedurals />} />
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
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Router;
