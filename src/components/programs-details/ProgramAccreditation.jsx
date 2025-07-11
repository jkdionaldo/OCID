import React from "react";
import { Award } from "lucide-react";

const ProgramAccreditation = ({ accreditation, themeColor }) => {
  if (!accreditation) return null;

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center gap-3 mb-4">
        <Award className={`text-${themeColor}-600 w-6 h-6`} />
        <h3 className="text-xl font-bold text-gray-800">Accreditation</h3>
      </div>
      <p className={`text-${themeColor}-700 font-medium`}>{accreditation}</p>
    </div>
  );
};

export default ProgramAccreditation;