import DashboardNavbar from "@/components/layout/DashboardNavbar";
 
const DashboardLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <DashboardNavbar />
      {/* pt-16 offsets the fixed navbar height */}
      <main className="flex-grow pt-16">
        {children}
      </main>
    </div>
  );
};
 
export default DashboardLayout;