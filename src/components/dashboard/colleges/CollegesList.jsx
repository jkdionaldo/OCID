import React from "react";
import { Building, Edit, Trash2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const CollegesList = ({
  colleges,
  campuses,
  onViewDetails,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="space-y-4">
      {colleges.map((college) => (
        <Card
          key={college.id}
          className="hover:shadow-md transition-shadow group relative"
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div
                className="flex items-center space-x-4 flex-1 cursor-pointer"
                onClick={() =>
                  onViewDetails(
                    college,
                    college.campus?.acronym ||
                      college.campus_acronym ||
                      campuses?.find((c) => c.id === college.campus_id)?.acronym
                  )
                }
              >
                {college.logo_url ? (
                  <img
                    src={college.logo_url}
                    alt={`${college.name} logo`}
                    className="h-12 w-12 object-contain rounded-lg border border-gray-200"
                  />
                ) : (
                  <div className="h-12 w-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Building className="h-6 w-6 text-gray-400" />
                  </div>
                )}

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 hover:text-emerald-600 transition-colors">
                    {college.name}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>{college.acronym || college.shortName}</span>
                    <span>•</span>
                    <span>
                      {college.campus?.name ||
                        college.campus_name ||
                        campuses?.find((c) => c.id === college.campus_id)
                          ?.name ||
                        "Unknown Campus"}
                    </span>
                    <span>•</span>
                    <span>{college.programs || 0} programs</span>
                  </div>
                </div>

                <Badge variant="secondary">
                  {college.campus?.acronym ||
                    college.campus_acronym ||
                    campuses?.find((c) => c.id === college.campus_id)
                      ?.acronym ||
                    "N/A"}
                </Badge>
              </div>

              {/* Hover Action Buttons - Modern Circular Design */}
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 translate-x-4 flex items-center space-x-2 ml-4">
                {/* Edit Button - Circular */}
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onEdit(college);
                  }}
                  size="sm"
                  className="h-10 w-10 rounded-full p-0 bg-white border border-emerald-200 text-emerald-600 shadow-md hover:shadow-lg hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-200 transform hover:scale-110 focus:ring-2 focus:ring-emerald-300 focus:ring-opacity-50"
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
                  className="h-10 w-10 rounded-full p-0 bg-white border border-red-200 text-red-600 shadow-md hover:shadow-lg hover:bg-red-50 hover:border-red-300 transition-all duration-200 transform hover:scale-110 focus:ring-2 focus:ring-red-300 focus:ring-opacity-50"
                  title="Delete College"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CollegesList;
