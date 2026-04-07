import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthProvider";
import { Toaster } from "@/components/ui/sonner";
import { AnimatePresence } from "framer-motion";

import Layout from "@/components/layout/Layout"; //Removed the layout to avoid concern/footer duplication
import Router from "@/routes";

import "./App.css";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
         
            <AnimatePresence mode="wait">
              <Router />
            </AnimatePresence>

        </BrowserRouter>
      </AuthProvider>
      <Toaster richColors />
    </>
  );
}

export default App;
