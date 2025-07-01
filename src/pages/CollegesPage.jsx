"use client";

import { Link } from "react-router-dom";

const Colleges = () => {
  // Only include the 5 specified colleges for graduate programs
  const collegeLogos = [
    {
      path: "/colleges/ccis/graduate",
      color: "#8B2E00",
      logo: "/images/ccis-logo.png",
    },
    {
      path: "/colleges/ced/graduate",
      color: "#0047AB",
      logo: "/images/ced-logo.png",
    },
    {
      path: "/colleges/caa/graduate",
      color: "#3E7B31",
      logo: "/images/caa-logo.png",
    },
    {
      path: "/colleges/cmns/graduate",
      color: "#008080",
      logo: "/images/cmns-logo.png",
    },
    {
      path: "/colleges/cofes/graduate",
      color: "#3E7B31",
      logo: "/images/cofes-logo.png",
    },
    {
      path: "/colleges/chass/graduate",
      color: "#7E3794",
      logo: "/images/chass-logo.png",
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
      {/* Tab Navigation */}
      <div className="mb-8 sm:mb-10">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center sm:justify-start">
          <div className="relative">
            <button className="text-green-700 text-xl sm:text-2xl font-bold px-0">
              Graduate School
            </button>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-green-700 rounded-full"></div>
          </div>
          <button
            className="text-gray-500 text-xl sm:text-2xl px-0 hover:text-green-700 transition-colors duration-200"
            onClick={() => (window.location.href = "/undergrad")}
          >
            Undergraduate
          </button>
        </div>
      </div>

      {/* College Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8">
        {collegeLogos.map((college) => (
          <div key={college.id} className="mb-4">
            <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 h-[300px] sm:h-[350px] flex flex-col items-center justify-between p-4 sm:p-6">
              {/* Logo */}
              <div className="flex-1 w-full flex flex-col items-center justify-center mb-4">
                <div className="w-[160px] h-[160px] sm:w-[220px] sm:h-[220px] flex items-center justify-center bg-white rounded-xl mb-3 sm:mb-5 overflow-hidden">
                  <img
                    src={college.logo || "/placeholder.svg"}
                    alt={`${college.id} Logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl font-bold">
                    <span style={{ color: college.color }}>{college.id}</span>
                  </h3>
                  <p
                    className="text-xs uppercase tracking-wide text-center mt-2 max-w-[200px] mx-auto font-medium"
                    style={{ color: college.color }}
                  >
                    {college.fullName}
                  </p>
                </div>
              </div>

              {/* View Button */}
              <Link
                to={college.path}
                 className="rounded-xl w-64 inline-block px-6 py-2 bg-neutral-500 text-white hover:bg-green-800 transition-all duration-300 text-center shadow-sm hover:shadow-md"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Colleges;
