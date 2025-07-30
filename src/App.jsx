import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthProvider";
<<<<<<< HEAD
=======
import { Toaster } from "@/components/ui/sonner";
import { AnimatePresence } from "framer-motion";

>>>>>>> a13138d278ec6ad5ad4c14bf5482c79b8eda2928
import Layout from "@/components/layout/Layout";
import Router from "@/routes";
import LoginModal from "./components/modals/auth/LoginModal";

import "./App.css";

function App() {
  const [modelOpen, setModalOpen] = useState(false);
  return (
<<<<<<< HEAD
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
=======
    <>
      <AuthProvider>
        <BrowserRouter>
          <Layout>
            <AnimatePresence mode="wait">
              <Router />
            </AnimatePresence>
          </Layout>
        </BrowserRouter>
      </AuthProvider>
      <Toaster richColors />
    </>
>>>>>>> a13138d278ec6ad5ad4c14bf5482c79b8eda2928
  );
}

export default App;
