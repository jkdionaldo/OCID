import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthProvider";
import { Toaster } from "@/components/ui/sonner";
import { AnimatePresence } from "framer-motion";

import Layout from "@/components/layout/Layout";
import Router from "@/routes";

import "./App.css";

function App() {
  return (
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
  );
}

export default App;
