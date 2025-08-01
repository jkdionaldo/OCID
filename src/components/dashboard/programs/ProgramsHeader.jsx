import React from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CardHeader } from "@/components/ui/card";

const ProgramsHeader = ({
  filteredPrograms = { undergraduate: [], graduate: [] },
  onAddProgram,
}) => {
  const totalPrograms =
    (filteredPrograms.undergraduate?.length || 0) +
    (filteredPrograms.graduate?.length || 0);

  return (
    <CardHeader className="pb-4">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        <div className="flex items-center space-x-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Programs Management
          </h2>
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            {totalPrograms}
          </Badge>
        </div>

        <div className="flex items-center space-x-2">
          <Button
            onClick={onAddProgram}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-sm hover:shadow-md transition-all duration-200"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Program
          </Button>
        </div>
      </div>
    </CardHeader>
  );
};

export default ProgramsHeader;
