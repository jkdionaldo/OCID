import React from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CardHeader } from "@/components/ui/card";

const CollegesHeader = ({ filteredColleges = [], onAddCollege }) => {
  const collegeCount = filteredColleges.length || 0;

  return (
    <CardHeader className="pb-4">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        <div className="flex items-center space-x-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Colleges Management
          </h2>
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            {collegeCount}
          </Badge>
        </div>

        <div className="flex items-center space-x-2">
          <Button
            onClick={onAddCollege}
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-sm hover:shadow-md transition-all duration-200"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add College
          </Button>
        </div>
      </div>
    </CardHeader>
  );
};

export default CollegesHeader;
