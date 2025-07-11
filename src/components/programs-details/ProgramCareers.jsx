import React from "react";
import { Briefcase } from "lucide-react";

const ProgramCareers = ({ careers, themeColor }) => {
  if (!careers || careers.length === 0) return null;

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center gap-3 mb-4">
        <Briefcase className={`text-${themeColor}-600 w-6 h-6`} />
        <h3 className="text-xl font-bold text-gray-800">Career Opportunities</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {careers.map((career, index) => (
          <div key={index} className={`bg-${themeColor}-50 p-3 rounded-lg`}>
            <span className="text-gray-700 font-medium">{career}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramCareers;