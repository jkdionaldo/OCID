import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthProvider";

import Layout from "@/components/layout/Layout";
import Router from "@/routes";

import "./App.css";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
