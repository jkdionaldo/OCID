import React from "react";
import { Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import CollegeCard from "@/components/ui/CollegeCard";

const CollegesGrid = ({
  colleges,
  campuses,
  onViewDetails,
  onEdit,
  onDelete,
}) => {
  // Enhanced helper function to get campus info with embedded data support
  const getCampusInfo = (college) => {
    // First check if campus info is embedded in the college (from optimistic updates)
    if (college.campus) {
      return {
        name: college.campus.name,
        acronym: college.campus.acronym,
      };
    }

    // Fallback to looking up in campuses array
    const campus = campuses?.find((c) => c.id === college.campus_id);
    return {
      name: campus?.name || "Unknown Campus",
      acronym: campus?.acronym || "Unknown",
    };
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {colleges.map((college) => {
        const campusInfo = getCampusInfo(college);

        return (
          <div key={college.id} className="relative group">
            <CollegeCard
              college={{
                ...college,
                undergraduate_programs: college.undergraduate_programs || 0,
                graduate_programs: college.graduate_programs || 0,
              }}
              campus={campusInfo.acronym}
              onViewDetails={(college, campus) =>
                onViewDetails(college, campus)
              }
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
                  className="h-10 w-10 rounded-full p-0 bg-white/90 backdrop-blur-sm border border-blue-200 text-blue-600 shadow-lg hover:shadow-xl hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 transform hover:scale-110 focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
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
        );
      })}
    </div>
  );
};

export default CollegesGrid;
