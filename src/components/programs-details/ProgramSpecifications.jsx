import { ClipboardList } from "lucide-react";

const ProgramSpecifications = ({ specifications, themeColor = "green" }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
        <ClipboardList className={`h-5 w-5 text-${themeColor}-600 mr-2`} />
        PROGRAM SPECIFICATIONS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {specifications?.map((spec, index) => (
          <div
            key={index}
            className="bg-gray-50 p-4 rounded-lg flex items-start"
          >
            <span
              className={`w-2 h-2 bg-${themeColor}-600 rounded-full mr-2 mt-1.5`}
            ></span>
            <span className="text-gray-700">{spec}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramSpecifications;
