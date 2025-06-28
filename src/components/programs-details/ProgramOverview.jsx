import { Info } from "lucide-react";

const ProgramOverview = ({ program, themeColor = "green" }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
        <span
          className={`w-2 h-8 bg-${themeColor}-600 rounded-full mr-3 inline-block`}
        ></span>
        Program Overview
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        {program.description}
      </p>

      <div
        className={`bg-${themeColor}-50 p-4 rounded-lg border border-${themeColor}-100 flex items-start`}
      >
        <Info
          className={`h-5 w-5 text-${themeColor}-600 mr-3 flex-shrink-0 mt-0.5`}
        />
        <p className="text-sm text-gray-700">
          This program is designed to prepare students for{" "}
          {program.isGraduate ? "advanced " : ""}careers in the field of{" "}
          {program.name.split("in")[1]?.trim() ||
            program.name.split("(")[0].trim()}
          . Students will gain both theoretical knowledge and practical skills
          through
          {program.isGraduate
            ? " coursework, research, and field-based learning."
            : " coursework, laboratory sessions, and field experiences."}
        </p>
      </div>
    </div>
  );
};

export default ProgramOverview;
