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
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 h-[450px] flex flex-col items-center justify-between p-6">
      {/* College Info */}
      <div className="text-center">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
          {college.shortName}
        </h3>
        <p className="text-xs uppercase tracking-wide text-center max-w-[200px] mx-auto font-medium text-gray-600">
          {college.name}
        </p>
      </div>
      {/* Logo Section */}
      <div className="flex-1 w-full flex flex-col items-center justify-center mb-4">
        <div className="w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] flex items-center justify-center bg-white rounded-xl mb-3 overflow-hidden">
          <img
            src={logoSrc}
            alt={`${college.shortName} Logo`}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mt-3 w-full max-w-[160px]">
          <div className="text-center bg-gray-50 rounded-lg p-2">
            <div className="text-sm font-bold text-gray-900">
              {college.programs}
            </div>
            <div className="text-xs text-gray-500">Programs</div>
          </div>
          <div className="text-center bg-gray-50 rounded-lg p-2">
            <div className="text-sm font-bold text-gray-900">
              {college.files}
            </div>
            <div className="text-xs text-gray-500">Files</div>
          </div>
        </div>
      </div>

      {/* Uniform Button */}
      <button className="rounded-xl w-64 inline-block px-6 py-2 bg-neutral-500 text-white hover:bg-green-800 transition-all duration-300 text-center shadow-sm hover:shadow-md">
        View Details
      </button>
    </div>
  );
}
