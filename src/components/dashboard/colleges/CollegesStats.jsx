import React from "react";
import { Building, School, University } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CollegesStats = ({ stats }) => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
        {/* Total Colleges */}
        <Card className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
          <CardContent className="p-6 relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Total Colleges
                </p>
                <p className="text-3xl font-extrabold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300">
                  {stats.total}
                </p>
              </div>
              <Building className="h-10 w-10 text-yellow-500 group-hover:text-yellow-600 transition-colors duration-300" />
            </div>
          </CardContent>
        </Card>

        {/* CSU-MAIN Colleges */}
        <Card className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200">
          <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
          <CardContent className="p-6 relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  CSU-MAIN Colleges
                </p>
                <p className="text-3xl font-extrabold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                  {stats.csuMain || 0}
                </p>
              </div>
              <School className="h-10 w-10 text-green-500 group-hover:text-green-600 transition-colors duration-300" />
            </div>
          </CardContent>
        </Card>

        {/* CSU-CC Colleges */}
        <Card className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
          <CardContent className="p-6 relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  CSU-CC Colleges
                </p>
                <p className="text-3xl font-extrabold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {stats.csuCC || 0}
                </p>
              </div>
              <University className="h-10 w-10 text-blue-500 group-hover:text-blue-600 transition-colors duration-300" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CollegesStats;
