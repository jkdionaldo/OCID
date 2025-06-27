"use client"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import React from "react"

import Navbar from "./assets/components/Navbar"
import Footer from "./assets/components/Footer"
import Home from "./assets/pages/Home"
import Colleges from "./assets/pages/Colleges"
import CCISGraduate from "./assets/pages/CCIS-Graduate"
import CAAGraduate from "./assets/pages/CAA-Graduate"
import CEDGraduate from "./assets/pages/CED-Graduate"
import CMNSGraduate from "./assets/pages/CMNS-Graduate"
import COFESGraduate from "./assets/pages/COFES-Graduate"
import CHASSGraduate from "./assets/pages/CHASS-Graduate"
import Undergrad from "./assets/pages/Undergrad"
import CCISUndergrad from "./assets/pages/CCIS-Undergrad"
import CEDUndergrad from "./assets/pages/CED-Undergrad"
import CAAUndergrad from "./assets/pages/CAA-Undergrad"
import CMNSUndergrad from "./assets/pages/CMNS-Undergrad"
import CEGSUndergrad from "./assets/pages/CEGS-Undergrad"
import CHASSUndergrad from "./assets/pages/CHASS-Undergrad"
import COFESUndergrad from "./assets/pages/COFES-Undergrad"
import Navigate from "./assets/components/Navigate"
import "./App.css"

// Import the Google OAuth provider
import { GoogleOAuthProvider } from "@react-oauth/google"


// Simple redirect component
const CollegesRedirect = () => {
  return <Navigate to="/graduate" replace={true} />
}

function App() {
  // Your actual Google Client ID
  const googleClientId = "823708007386-k6iatijd2d2p9trobjsavg85batkn5th.apps.googleusercontent.com"

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
              <Route path="colleges/cofes-graduate" element={<COFESGraduate />} />
              <Route path="colleges/chass-graduate" element={<CHASSGraduate />} />
             
             
            

               {/* Undergraduate College Routes */}
               <Route path="/undergrad/ccis-undergrad" element={<CCISUndergrad />} />
              <Route path="/undergrad/caa-undergrad" element={<CAAUndergrad />} />
              <Route path="/undergrad/ced-undergrad" element={<CEDUndergrad />} />
              <Route path="/undergrad/cofes-undergrad" element={<COFESUndergrad />} />
              <Route path="/undergrad/chass-undergrad" element={<CHASSUndergrad />} />
              <Route path="/undergrad/cegs-undergrad" element={<CEGSUndergrad />} />
              <Route path="/undergrad/cmns-undergrad" element={<CMNSUndergrad />} />
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
  )
}

export default App


