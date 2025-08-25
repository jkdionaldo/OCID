import React from "react";
import { Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CollegeInfoCard = ({ collegeInfo }) => {
  return (
    <Card className="group border-0 shadow-xl bg-white/70 backdrop-blur-sm hover:bg-white/90 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
      <CardContent className="p-6 space-y-5">
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2.5 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl shadow-lg">
            <Building className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-lg font-bold text-gray-900">
            College Information
          </h3>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
              College Name
            </label>
            <div className="bg-gradient-to-r from-gray-50 to-white px-3 py-2.5 rounded-xl border border-gray-200 shadow-sm">
              <p className="text-gray-900 text-sm leading-relaxed">
                {collegeInfo.name}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Acronym
              </label>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 px-3 py-2.5 rounded-xl border border-green-200 shadow-sm">
                <p className="text-green-900 text-sm font-medium">
                  {collegeInfo.acronym}
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Campus
              </label>
              <div
                className={`px-3 py-2.5 rounded-xl border shadow-sm ${
                  collegeInfo.campus === "CSU-MAIN"
                    ? "bg-gradient-to-r from-emerald-50 to-green-50 border-emerald-200"
                    : "bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200"
                }`}
              >
                <p
                  className={`text-sm font-medium ${
                    collegeInfo.campus === "CSU-MAIN"
                      ? "text-emerald-900"
                      : "text-blue-900"
                  }`}
                >
                  {collegeInfo.campus}
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CollegeInfoCard;
