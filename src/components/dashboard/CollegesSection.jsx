import React, { useState } from "react";
import { MapPin, Plus } from "lucide-react";
import CardDashboard from "../../components/ui/CardDashboard";
import DashboardProgramModal from "../../components/modals/Dashboard/DashboardProgramModal";
import AddCollegeModal from "../../components/modals/Dashboard/AddCollegeModal";

export default function Colleges({ files, colleges, onAddCollege }) {
  const [activeMainTab, setActiveMainTab] = useState("undergraduate");
  const [showModal, setShowModal] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState(null);
  const [selectedCampus, setSelectedCampus] = useState("");
  const [showAddCollegeModal, setShowAddCollegeModal] = useState(false);

  const handleViewDetails = (college, campus) => {
    setSelectedCollege(college);
    setSelectedCampus(campus);
    setShowModal(true);
  };

  return (
    <div className="mb-8">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            All Colleges
          </h2>

          <button
            onClick={() => setShowAddCollegeModal(true)}
            className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Plus className="h-5 w-5" />
            <span>Add College</span>
          </button>
        </div>

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
                  {colleges["CSU-MAIN"]?.undergraduate?.length || 0}
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
                  {colleges["CSU-MAIN"]?.graduate?.length || 0}
                </span>
              </button>
            </div>
          </div>

          {/* College Cards for CSU-MAIN */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
            {(colleges["CSU-MAIN"]?.[activeMainTab] || []).map((college) => (
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
              {colleges["CSU-CC"]?.length || 0} Colleges
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {(colleges["CSU-CC"] || []).map((college) => (
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
                    {(colleges["CSU-MAIN"]?.undergraduate?.length || 0) +
                      (colleges["CSU-MAIN"]?.graduate?.length || 0)}
                  </div>
                  <div className="text-xs text-green-700">Total Colleges</div>
                </div>
                <div className="bg-white bg-opacity-50 rounded-lg p-2">
                  <div className="text-sm font-bold text-green-900">
                    {(colleges["CSU-MAIN"]?.[activeMainTab] || []).reduce(
                      (sum, college) => sum + (college.programs || 0),
                      0
                    )}
                  </div>
                  <div className="text-xs text-green-700">Programs</div>
                </div>
                <div className="bg-white bg-opacity-50 rounded-lg p-2">
                  <div className="text-sm font-bold text-green-900">
                    {(colleges["CSU-MAIN"]?.[activeMainTab] || []).reduce(
                      (sum, college) => sum + (college.files || 0),
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
                    {colleges["CSU-CC"]?.length || 0}
                  </div>
                  <div className="text-xs text-blue-700">Colleges</div>
                </div>
                <div className="bg-white bg-opacity-50 rounded-lg p-2">
                  <div className="text-lg font-bold text-blue-900">
                    {(colleges["CSU-CC"] || []).reduce(
                      (sum, college) => sum + (college.programs || 0),
                      0
                    )}
                  </div>
                  <div className="text-xs text-blue-700">Programs</div>
                </div>
                <div className="bg-white bg-opacity-50 rounded-lg p-2">
                  <div className="text-lg font-bold text-blue-900">
                    {(colleges["CSU-CC"] || []).reduce(
                      (sum, college) => sum + (college.files || 0),
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

      {/* Add College Modal */}
      <AddCollegeModal
        isOpen={showAddCollegeModal}
        onClose={() => setShowAddCollegeModal(false)}
        onAddCollege={onAddCollege}
      />
    </div>
  );
}
