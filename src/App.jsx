import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthProvider";
import Layout from "@/components/layout/Layout";
import Router from "@/routes";
import LoginModal from "./components/modals/auth/LoginModal";

import "./App.css";

function App() {
  const [modelOpen, setModalOpen] = useState(false);
  return (
    <AuthProvider>
      <BrowserRouter>
      {/* Pass the handle to layout */}
        <Layout onOpenModal={() => setModalOpen(true)}>
          <Router />
        </Layout>
        {/* Render the modal at the root */}
        <LoginModal open={modelOpen} onClose={() => setModalOpen(false)}></LoginModal>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
