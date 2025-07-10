import { Routes, Route, Navigate } from "react-router-dom";

// Import route collections
import {
  graduateRoutes,
  undergradRoutes,
  ccGraduateRoutes,
  ccUndergradRoutes,
} from "./CollegeRoutes";

// Import main pages
import Home from "@/pages/HomePage";

// downloadables page
import Downloadables from "@/pages/Downloadables";

// CSU main page
import Colleges_Graduate_Main from "@/pages/CSU-Main/GraduateSchoolPage";
import Colleges_Undergraduate_Main from "@/pages/CSU-Main/UndergradPage";

//  CSU-CC main pages
// import Colleges_Graduate_cc from "@/pages/CSU-CC/GraduateSchoolPage";
import Colleges_Undergraduate_cc from "@/pages/CSU-CC/UndergradPage";

const Router = () => {
  return (
    <Routes>
      {/* Main routes */}
      <Route path="/" element={<Home />} />
      {/* dowloadables */}
      <Route path="/downloadables" element={<Downloadables />} />
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
      {ccGraduateRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
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
