import React from "react";
import { BookOpen, GraduationCap, Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ProgramsStats = ({ stats }) => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
        {/* Total Programs */}
        <Card className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-indigo-600 opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
          <CardContent className="p-6 relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Total Programs
                </p>
                <p className="text-3xl font-extrabold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                  {stats.total}
                </p>
              </div>
              <Building className="h-10 w-10 text-indigo-500 group-hover:text-indigo-600 transition-colors duration-300" />
            </div>
          </CardContent>
        </Card>

        {/* Undergraduate Programs */}
        <Card className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
          <CardContent className="p-6 relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Undergraduate
                </p>
                <p className="text-3xl font-extrabold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {stats.undergraduate || 0}
                </p>
              </div>
              <BookOpen className="h-10 w-10 text-blue-500 group-hover:text-blue-600 transition-colors duration-300" />
            </div>
          </CardContent>
        </Card>

        {/* Graduate Programs */}
        <Card className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
          <CardContent className="p-6 relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Graduate</p>
                <p className="text-3xl font-extrabold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                  {stats.graduate || 0}
                </p>
              </div>
              <GraduationCap className="h-10 w-10 text-purple-500 group-hover:text-purple-600 transition-colors duration-300" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProgramsStats;
