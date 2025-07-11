import React from "react";
import { Target } from "lucide-react";

const ProgramEducationalObjectives = ({ objectives, themeColor }) => {
  if (!objectives || objectives.length === 0) return null;

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center gap-3 mb-4">
        <Target className={`text-${themeColor}-600 w-6 h-6`} />
        <h3 className="text-xl font-bold text-gray-800">Program Educational Objectives</h3>
      </div>
      <ul className="space-y-3">
        {objectives.map((objective, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className={`text-${themeColor}-600 font-bold mt-1`}>
              {index + 1}.
            </span>
            <span className="text-gray-700">{objective}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgramEducationalObjectives;