import { X } from "lucide-react";

const ProgramDetailsHeader = ({ program, onClose, themeColor = "green" }) => {
  return (
    <div
      className={`p-6 border-b bg-gradient-to-r from-${themeColor}-50 to-white`}
    >
      <div className="flex justify-between items-center">
        <div className="w-8">{/* Empty div for spacing */}</div>
        <div className="text-center flex-1">
          <h3 className={`text-2xl font-bold text-${themeColor}-700`}>
            {program.name}
          </h3>
          <p className="text-sm text-gray-600">Program Details</p>
        </div>
        <button
          onClick={onClose}
          className={`text-gray-400 hover:text-${themeColor}-700 transition-colors p-1 rounded-full hover:bg-gray-100 w-8 h-8 flex items-center justify-center`}
        >
          <X className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default ProgramDetailsHeader;
