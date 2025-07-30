import React from "react";
import { MoreVertical, Eye, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import CollegeCard from "@/components/ui/CardDashboard";

const CollegesGrid = ({
  colleges,
  campuses,
  onViewDetails,
  onEdit,
  onDelete,
}) => {
  const handleDropdownItemClick = (e, action) => {
    e.preventDefault();
    e.stopPropagation();
    action();
  };

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

          {/* Action Menu */}
          <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" size="sm" className="h-8 w-8 p-0">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuItem
                  onClick={(e) =>
                    handleDropdownItemClick(e, () =>
                      onViewDetails(
                        college,
                        college.campus?.acronym ||
                          college.campus_acronym ||
                          campuses?.find((c) => c.id === college.campus_id)
                            ?.acronym
                      )
                    )
                  }
                >
                  <Eye className="h-4 w-4 mr-2" />
                  View Details
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={(e) =>
                    handleDropdownItemClick(e, () => onEdit(college))
                  }
                >
                  <Edit className="h-4 w-4 mr-2" />
                  Edit College
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={(e) =>
                    handleDropdownItemClick(e, () => onDelete(college))
                  }
                  className="text-red-600 hover:text-red-800"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete College
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollegesGrid;
