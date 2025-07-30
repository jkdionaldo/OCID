import React from "react";
import { Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import CollegeCard from "@/components/ui/CardDashboard";

const CollegesGrid = ({
  colleges,
  campuses,
  onViewDetails,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {colleges.map((college) => (
        <div key={college.id} className="relative group">
          <CollegeCard
            college={{
              ...college,
              undergraduate_programs:
                college.undergraduate_programs ||
                college.undergraduate_programs_count ||
                0,
              graduate_programs:
                college.graduate_programs ||
                college.graduate_programs_count ||
                0,
            }}
            campus={
              college.campus?.acronym ||
              college.campus_acronym ||
              campuses?.find((c) => c.id === college.campus_id)?.acronym ||
              "Unknown"
            }
            onViewDetails={onViewDetails}
          />

          {/* Hover Action Buttons - Modern Circular Design */}
          <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-20">
            <div className="flex flex-col space-y-2">
              {/* Edit Button - Circular */}
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onEdit(college);
                }}
                size="sm"
                className="h-10 w-10 rounded-full p-0 bg-white/90 backdrop-blur-sm border border-emerald-200 text-emerald-600 shadow-lg hover:shadow-xl hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-200 transform hover:scale-110 focus:ring-2 focus:ring-emerald-300 focus:ring-opacity-50"
                title="Edit College"
              >
                <Edit className="h-4 w-4" />
              </Button>

              {/* Delete Button - Circular */}
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onDelete(college);
                }}
                size="sm"
                className="h-10 w-10 rounded-full p-0 bg-white/90 backdrop-blur-sm border border-red-200 text-red-600 shadow-lg hover:shadow-xl hover:bg-red-50 hover:border-red-300 transition-all duration-200 transform hover:scale-110 focus:ring-2 focus:ring-red-300 focus:ring-opacity-50"
                title="Delete College"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollegesGrid;
