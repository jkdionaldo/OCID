import React, { useState } from "react";
import { MapPin } from "lucide-react";
import CardDashboard from "../../components/ui/CardDashboard";
import DashboardProgramModal from "../../components/modals/DashboardProgramModal";

export default function Colleges({ files }) {
  const [activeMainTab, setActiveMainTab] = useState("undergraduate");
  const [showModal, setShowModal] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [selectedCampus, setSelectedCampus] = useState("");

  // College data for both campuses
  const collegesData = {
    "CSU-MAIN": {
      undergraduate: [
        {
          id: "caa",
          name: "College of Agriculture and Agri-Industries",
          shortName: "CAA",
          programs: 6,
          files: files.filter((f) => f.college === "CAA").length,
        },
        {
          id: "cofes-main",
          name: "College of Forestry and Environmental Science",
          shortName: "CoFES",
          programs: 8,
          files: files.filter((f) => f.college === "COFES").length,
        },
        {
          id: "ccis",
          name: "College of Computing and Information Sciences",
          shortName: "CCIS",
          programs: 6,
          files: files.filter((f) => f.college === "CCIS").length,
        },
        {
          id: "ced",
          name: "College of Education",
          shortName: "CED",
          programs: 10,
          files: files.filter((f) => f.college === "CED").length,
        },
        {
          id: "cegs",
          name: "College of Engineering and Geo-Sciences",
          shortName: "CEGS",
          programs: 7,
          files: files.filter((f) => f.college === "CEGS").length,
        },
        {
          id: "cmns",
          name: "College of Mathematics and Natural Sciences",
          shortName: "CMNS",
          programs: 9,
          files: files.filter((f) => f.college === "CMNS").length,
        },
        {
          id: "chass",
          name: "College of Humanities, Arts and Social Sciences",
          shortName: "CHASS",
          programs: 5,
          files: files.filter((f) => f.college === "CHASS").length,
        },
      ],
      graduate: [
        {
          id: "caa-grad",
          name: "College of Agriculture and Agri-Industries",
          shortName: "CAA",
          programs: 3,
          files: files.filter((f) => f.college === "CAA").length,
        },
        {
          id: "ccis-grad",
          name: "College of Computing and Information Sciences",
          shortName: "CCIS",
          programs: 2,
          files: files.filter((f) => f.college === "CCIS").length,
        },
        {
          id: "ced-grad",
          name: "College of Education",
          shortName: "CED",
          programs: 8,
          files: files.filter((f) => f.college === "CED").length,
        },
        {
          id: "cmns-grad",
          name: "College of Mathematics and Natural Sciences",
          shortName: "CMNS",
          programs: 2,
          files: files.filter((f) => f.college === "CMNS").length,
        },
        {
          id: "cofes",
          name: "College of Forestry and Environmental Science",
          shortName: "CoFES",
          programs: 2,
          files: files.filter((f) => f.college === "CoFES").length,
        },
        {
          id: "chass",
          name: "College of Humanities, Arts and Social Sciences",
          shortName: "CHASS",
          programs: 1,
          files: files.filter((f) => f.college === "CHASS").length,
        },
      ],
    },
    "CSU-CC": [
      {
        id: "cba-cc",
        name: "College of Business Administration",
        shortName: "CBA",
        programs: 6,
        files: files.filter((f) => f.college === "CBA").length,
      },
      {
        id: "ceit",
        name: "College of Engineering and Information Technology",
        shortName: "CEIT",
        programs: 8,
        files: files.filter((f) => f.college === "CEIT").length,
      },
      {
        id: "citte",
        name: "College of Industrial Technology and Teacher Education",
        shortName: "CITTE",
        programs: 7,
        files: files.filter((f) => f.college === "CITTE").length, // Fixed: removed the quote before "f"
      },
      {
        id: "cthm-cc",
        name: "College of Tourism and Hospitality Management",
        shortName: "CTHM",
        programs: 5,
        files: files.filter((f) => f.college === "CTHM").length,
      },
    ],
  };

  const handleViewDetails = (college, campus) => {
    setSelectedCollege(college);
    setSelectedCampus(campus);
    setShowModal(true);
  };

  return (
    <div className="mb-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">All Colleges</h2>

        {/* CSU-MAIN Colleges with Tabs */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <MapPin className="w-5 h-5 text-green-600 mr-2" />
            <h3 className="text-xl font-semibold text-gray-800">
              CSU-MAIN Campus
            </h3>
          </div>

          {/* Tab Navigation for CSU-MAIN */}
          <div className="mb-6">
            <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
              <button
                onClick={() => setActiveMainTab("undergraduate")}
                className={`px-4 py-2 rounded-md text-sm font-medium duration-200 ${
                  activeMainTab === "undergraduate"
                    ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg"
                    : "text-gray-700 hover:text-green-700 hover:bg-green-50"
                }`}
              >
                Undergraduate
                <span className="ml-2 px-2 py-0.5 bg-white bg-opacity-20 text-xs rounded-full">
                  {collegesData["CSU-MAIN"].undergraduate.length}
                </span>
              </button>
              <button
                onClick={() => setActiveMainTab("graduate")}
                className={`px-4 py-2 rounded-md text-sm font-medium duration-200 ${
                  activeMainTab === "graduate"
                    ? "bg-gradient-to-r from-emerald-600 to-green-500 text-white shadow-lg"
                    : "text-gray-700 hover:text-green-700 hover:bg-green-50"
                }`}
              >
                Graduate School
                <span className="ml-2 px-2 py-0.5 bg-white bg-opacity-20 text-xs rounded-full">
                  {collegesData["CSU-MAIN"].graduate.length}
                </span>
              </button>
            </div>
          </div>

          {/* College Cards for CSU-MAIN */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
            {collegesData["CSU-MAIN"][activeMainTab].map((college) => (
              <CardDashboard
                key={college.id}
                college={college}
                activeMainTab={activeMainTab}
                campus="CSU-MAIN"
                onViewDetails={(college) =>
                  handleViewDetails(college, "CSU-MAIN")
                }
              />
            ))}
          </div>
        </div>

        {/* CSU-CC Colleges */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <MapPin className="w-5 h-5 text-blue-600 mr-2" />
            <h3 className="text-xl font-semibold text-gray-800">
              CSU-CC Campus
            </h3>
            <span className="ml-2 px-3 py-1 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 text-sm rounded-full font-medium">
              {collegesData["CSU-CC"].length} Colleges
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {collegesData["CSU-CC"].map((college) => (
              <CardDashboard
                key={college.id}
                college={college}
                activeMainTab={null}
                campus="CSU-CC"
                onViewDetails={(college) =>
                  handleViewDetails(college, "CSU-CC")
                }
              />
            ))}
          </div>
        </div>

        {/* Campus Summary */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Campus Summary
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-4 shadow-md">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-green-800">CSU-MAIN</h4>
                <MapPin className="w-5 h-5 text-green-600" />
              </div>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-white bg-opacity-50 rounded-lg p-2">
                  <div className="text-sm font-bold text-green-900">
                    {collegesData["CSU-MAIN"].undergraduate.length +
                      collegesData["CSU-MAIN"].graduate.length}
                  </div>
                  <div className="text-xs text-green-700">Total Colleges</div>
                </div>
                <div className="bg-white bg-opacity-50 rounded-lg p-2">
                  <div className="text-sm font-bold text-green-900">
                    {collegesData["CSU-MAIN"][activeMainTab].reduce(
                      (sum, college) => sum + college.programs,
                      0
                    )}
                  </div>
                  <div className="text-xs text-green-700">Programs</div>
                </div>
                <div className="bg-white bg-opacity-50 rounded-lg p-2">
                  <div className="text-sm font-bold text-green-900">
                    {collegesData["CSU-MAIN"][activeMainTab].reduce(
                      (sum, college) => sum + college.files,
                      0
                    )}
                  </div>
                  <div className="text-xs text-green-700">Files</div>
                </div>
              </div>
              <div className="mt-3 text-center">
                <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs rounded-full font-medium capitalize">
                  {activeMainTab} View
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-sky-100 rounded-xl p-4 shadow-md">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-blue-800">CSU-CC</h4>
                <MapPin className="w-5 h-5 text-blue-600" />
              </div>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-white bg-opacity-50 rounded-lg p-2">
                  <div className="text-lg font-bold text-blue-900">
                    {collegesData["CSU-CC"].length}
                  </div>
                  <div className="text-xs text-blue-700">Colleges</div>
                </div>
                <div className="bg-white bg-opacity-50 rounded-lg p-2">
                  <div className="text-lg font-bold text-blue-900">
                    {collegesData["CSU-CC"].reduce(
                      (sum, college) => sum + college.programs,
                      0
                    )}
                  </div>
                  <div className="text-xs text-blue-700">Programs</div>
                </div>
                <div className="bg-white bg-opacity-50 rounded-lg p-2">
                  <div className="text-lg font-bold text-blue-900">
                    {collegesData["CSU-CC"].reduce(
                      (sum, college) => sum + college.files,
                      0
                    )}
                  </div>
                  <div className="text-xs text-blue-700">Files</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Program Modal */}
      <DashboardProgramModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        college={selectedCollege}
        campus={selectedCampus}
      />
    </div>
  );
}
