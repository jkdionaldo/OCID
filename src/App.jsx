import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import Layout from "@/components/layout/Layout";
import Router from "@/routes";

import "./App.css";

function App() {
  const googleClientId =
    "823708007386-k6iatijd2d2p9trobjsavg85batkn5th.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
