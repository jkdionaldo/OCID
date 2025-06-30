import { ClipboardList } from "lucide-react";

const ProgramOutcomes = ({ outcomes, programName, themeColor = "green" }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
        <ClipboardList className={`h-5 w-5 text-${themeColor}-600 mr-2`} />
        PROGRAM OUTCOMES
      </h2>
      <p className="text-gray-700 mb-4">
        Upon successful completion of the {programName} program, graduates will
        be able to:
      </p>
      <div className="space-y-3">
        {outcomes.map((outcome, index) => (
          <div
            key={index}
            className={`bg-gray-50 p-4 rounded-lg border-l-4 border-${themeColor}-500`}
          >
            <p className="text-gray-700 text-left">
              <span className={`font-semibold text-${themeColor}-700`}>
                {outcome.id || `Outcome ${index + 1}`}:
              </span>{" "}
              {typeof outcome === "string" ? outcome : outcome.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramOutcomes;
