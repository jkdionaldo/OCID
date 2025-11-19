import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "../ui/BackToTop";
import Chatbot from "../ui/Chatbot";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-grow pt-0 md:pt-16">{children}</main>
      <Footer />

      <BackToTop />
      <Chatbot />
    </div>
  );
};

export default Layout;
