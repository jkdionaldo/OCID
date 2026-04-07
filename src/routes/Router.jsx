import { Routes, Route } from "react-router-dom";

// Layouts
import Layout from "@/components/layout/Layout";
import DashboardLayout from "@/components/layout/DashboardLayout";

// Pages
import Home from "@/pages/HomePage";
import About from "@/pages/About";
import Dashboard from "@/pages/Dashboard";
import ProfileSettings from "@/pages/ProfileSettings";
import DeveloperCollective from "@/pages/DevsPage";
import Downloadables from "@/pages/Downloadables";
import Procedurals from "@/pages/Procedurals";
import NotFound from "@/pages/NotFound";
import NewsDetail from "@/pages/NewsDetails";
import DocService from "@/pages/DocService";

// CSU-MAIN pages
import Colleges_Graduate_Main from "@/pages/CSU-MAIN/GraduateSchoolPage";
import Colleges_Undergraduate_Main from "@/pages/CSU-MAIN/UndergradPage";

// CSU-CC pages
import Colleges_Undergraduate_cc from "@/pages/CSU-CC/UndergradPage";

// Dynamic route collections
import {
  graduateRoutes,
  undergradRoutes,
  ccUndergradRoutes,
} from "./CollegeRoutes";

const Router = () => {
  return (
    <Routes>

      {/* ── Public routes — Navbar + ConcernSection + Footer ── */}
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/about" element={<Layout><About /></Layout>} />
      <Route path="/devs" element={<Layout><DeveloperCollective /></Layout>} />
      <Route path="/downloadables" element={<Layout><Downloadables /></Layout>} />
      <Route path="/procedurals" element={<Layout><Procedurals /></Layout>} />
      <Route path="/document-services" element={<Layout><DocService /></Layout>} />

      {/* CSU-MAIN */}
      <Route path="/colleges_graduate_main" element={<Layout><Colleges_Graduate_Main /></Layout>} />
      <Route path="/colleges_undergraduate_main" element={<Layout><Colleges_Undergraduate_Main /></Layout>} />

      {/* CSU-CC */}
      <Route path="/colleges_undergraduate_cc" element={<Layout><Colleges_Undergraduate_cc /></Layout>} />

      {/* Dynamic college routes */}
      {graduateRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<Layout>{route.element}</Layout>}
        />
      ))}
      {undergradRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<Layout>{route.element}</Layout>}
        />
      ))}
      {ccUndergradRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<Layout>{route.element}</Layout>}
        />
      ))}

      {/* ── Dashboard routes — DashboardNavbar only, no footer ── */}
      <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
      <Route path="/profile-settings" element={<DashboardLayout><ProfileSettings /></DashboardLayout>} />

      <Route path="/news/:id" element={<Layout><NewsDetail /></Layout>} />

      {/* ── 404 ── */}
      <Route path="*" element={<Layout><NotFound /></Layout>} />

    </Routes>
  );
};

export default Router;