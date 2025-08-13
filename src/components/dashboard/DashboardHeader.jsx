import React from "react";
import { BarChart3, TrendingUp } from "lucide-react";

const DashboardHeader = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Gradient Background - Made Darker */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-700 via-green-800 to-teal-900 opacity-100"></div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Geometric Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 -left-8 w-16 h-16 border border-white/10 rounded-full"></div>
        <div className="absolute bottom-4 right-1/4 w-8 h-8 bg-white/10 rounded-full"></div>
        <div className="absolute top-8 left-1/4 w-4 h-4 bg-white/20 rounded-full"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center gap-2">
            {/* Content */}
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2 tracking-tight">
                  Dashboard
                </h1>
                <div className="flex items-center gap-2 text-emerald-100 justify-center">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-lg font-medium">
                    Administrative Control Center
                  </span>
                </div>
              </div>
            </div>

            <p className="text-emerald-50 text-lg leading-relaxed max-w-2xl">
              Manage all college, program, files, curricula, syllabi, and
              documents from your centralized administrative dashboard.
            </p>

            {/* Stats Pills */}
            <div className="flex flex-wrap gap-3 mt-6 pb-7 justify-center">
              <div className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-white text-sm font-medium">
                  Real-time Updates
                </span>
              </div>
              <div className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-white text-sm font-medium">
                  Secure Management
                </span>
              </div>
              <div className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-white text-sm font-medium">
                  Data Analytics
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </div>
  );
};

export default DashboardHeader;
