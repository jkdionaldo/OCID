import { ChevronRight } from "lucide-react";

const ProgramCard = ({ program, onClick, themeColor = "green" }) => {
  return (
    <div
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 cursor-pointer transform hover:-translate-y-1"
      onClick={onClick}
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div
            className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br ${program.color} flex items-center justify-center text-white shadow-md mr-4`}
          >
            <program.icon className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-gray-800">{program.name}</h3>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-2">{program.description}</p>
        <div className="flex justify-end">
          <button
            className={`text-${themeColor}-600 hover:text-${themeColor}-800 font-medium flex items-center text-sm`}
          >
            View Details <ChevronRight className="h-4 w-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
