import React from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CardHeader } from "@/components/ui/card";

const FormsHeader = ({ filteredForms = [], onAddForm }) => {
  const formCount = filteredForms.length || 0;

  return (
    <CardHeader className="pb-4">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        <div className="flex items-center space-x-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Forms Management
          </h2>
          <Badge variant="secondary" className="bg-purple-100 text-purple-800">
            {formCount}
          </Badge>
        </div>

        <div className="flex items-center space-x-2">
          <Button
            onClick={onAddForm}
            className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-sm hover:shadow-md transition-all duration-200"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Form
          </Button>
        </div>
      </div>
    </CardHeader>
  );
};

export default FormsHeader;
