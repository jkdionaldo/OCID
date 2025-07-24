import React from "react";

const DashboardError = ({ error }) => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-2">
            Error Loading Dashboard
          </h1>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardError;
