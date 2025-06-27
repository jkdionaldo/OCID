"use client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Colleges from "@/pages/Colleges";
import CCISGraduate from "@/pages/CCIS-Graduate";
import CAAGraduate from "@/pages/CAA-Graduate";
import CEDGraduate from "@/pages/CED-Graduate";
import CMNSGraduate from "@/pages/CMNS-Graduate";
import COFESGraduate from "@/pages/COFES-Graduate";
import CHASSGraduate from "@/pages/CHASS-Graduate";
import Undergrad from "@/pages/Undergrad";
import CCISUndergrad from "@/pages/CCIS-Undergrad";
import CEDUndergrad from "@/pages/CED-Undergrad";
import CAAUndergrad from "@/pages/CAA-Undergrad";
import CMNSUndergrad from "@/pages/CMNS-Undergrad";
import CEGSUndergrad from "@/pages/CEGS-Undergrad";
import CHASSUndergrad from "@/pages/CHASS-Undergrad";
import COFESUndergrad from "@/pages/COFES-Undergrad";
import Navigate from "@/components/Navigate";
import "./App.css";

// Import the Google OAuth provider
import { GoogleOAuthProvider } from "@react-oauth/google";

// Simple redirect component
const CollegesRedirect = () => {
  return <Navigate to="/graduate" replace={true} />;
};

function App() {
  // Your actual Google Client ID
  const googleClientId =
    "823708007386-k6iatijd2d2p9trobjsavg85batkn5th.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-100">
          <Navbar />
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />

              {/* Graduate College Routes */}
              <Route path="colleges/ccis-graduate" element={<CCISGraduate />} />
              <Route path="colleges/caa-graduate" element={<CAAGraduate />} />
              <Route path="colleges/ced-graduate" element={<CEDGraduate />} />
              <Route path="colleges/cmns-graduate" element={<CMNSGraduate />} />
              <Route
                path="colleges/cofes-graduate"
                element={<COFESGraduate />}
              />
              <Route
                path="colleges/chass-graduate"
                element={<CHASSGraduate />}
              />

              {/* Undergraduate College Routes */}
              <Route
                path="/undergrad/ccis-undergrad"
                element={<CCISUndergrad />}
              />
              <Route
                path="/undergrad/caa-undergrad"
                element={<CAAUndergrad />}
              />
              <Route
                path="/undergrad/ced-undergrad"
                element={<CEDUndergrad />}
              />
              <Route
                path="/undergrad/cofes-undergrad"
                element={<COFESUndergrad />}
              />
              <Route
                path="/undergrad/chass-undergrad"
                element={<CHASSUndergrad />}
              />
              <Route
                path="/undergrad/cegs-undergrad"
                element={<CEGSUndergrad />}
              />
              <Route
                path="/undergrad/cmns-undergrad"
                element={<CMNSUndergrad />}
              />
              {/* Redirect for any other paths */}
              <Route path="*" element={<Navigate to="/" replace />} />

              {/* Other Routes */}
              <Route path="/colleges" element={<Colleges />} />
              <Route path="/undergrad" element={<Undergrad />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
