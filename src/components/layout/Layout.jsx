import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Layout = ({ children, onOpenModal }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar onOpenModal={onOpenModal} />
      <main className="flex-grow pt-16">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
