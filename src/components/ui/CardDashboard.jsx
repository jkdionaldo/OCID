import React from "react";

export default function CardDashboard({ college, campus }) {
  // Define college logos based on shortName and campus
  const getCollegeLogo = (shortName) => {
    const logoMap = {
      // CSU-MAIN logos
      CAA: "/images/caa-logo.png",
      CoFES: "/images/cofes-logo.png",
      CCIS: "/images/ccis-logo.png",
      CED: "/images/ced-logo.png",
      CEGS: "/images/cegs-logo.png",
      CMNS: "/images/cmns-logo.png",
      CHASS: "/images/chass-logo.png",

      // CSU-CC logos
      CBA: "/images/csu-cc/CBA-logo.png",
      CEIT: "/images/csu-cc/CEIT-logo.png",
      CITTE: "/images/csu-cc/CITTE-logo.png",
      CTHM: "/images/csu-cc/CTHM-logo.png",
    };

    return logoMap[shortName] || "/placeholder.svg";
  };

  const logoSrc = getCollegeLogo(college.shortName, campus);

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg hover:shadow-green-500 duration-300 h-[300px] flex flex-col p-4 border border-gray-200">
      {/* Top Section - Logo and College Info */}
      <div className="flex items-start gap-4 mb-4">
        {/* Logo */}
        <div className="w-[100px] h-[100px] flex-shrink-0  flex items-center justify-center bg-white overflow-hidden">
          <img
            src={logoSrc}
            alt={`${college.shortName} Logo`}
            className="w-full h-full object-contain"
          />
        </div>

        {/* College Info */}
        <div className="flex-1">
          <div className=" rounded-lg p-2 ">
            <h3 className="text-lg font-bold text-gray-900">
              {college.shortName}
            </h3>
          </div>
           <div className=" rounded-lg p-2">
            <p className="text-left text-sm text-gray-600 line-clamp-2">{college.name}</p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-100 rounded-lg p-3  flex-1">
        <div className="grid grid-cols-2">
          <div className="text-center">
            <div className="text-lg font-bold text-gray-900">
              {college.programs}
            </div>
            <div className="text-xs text-gray-500">Programs</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-gray-900">
              {college.files}
            </div>
            <div className="text-xs text-gray-500">Files</div>
          </div>
        </div>
      </div>

      {/* Button */}
      <button className="w-full py-3 mt-4 bg-gray-100 text-gray-700 rounded-xl hover:bg-green-600 hover:text-white transition-all duration-300 font-medium">
        View Details
      </button>
    </div>
  );
}
