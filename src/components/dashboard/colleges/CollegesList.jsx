import React from "react";
import { Building, MoreVertical, Eye, Edit, Trash2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
        <Card key={college.id} className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
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

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
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
              </div>

              <div className="flex items-center space-x-2">
                <Badge variant="secondary">
                  {college.campus?.acronym ||
                    college.campus_acronym ||
                    campuses?.find((c) => c.id === college.campus_id)
                      ?.acronym ||
                    "N/A"}
                </Badge>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem
                      onClick={() =>
                        onViewDetails(
                          college,
                          college.campus?.acronym ||
                            college.campus_acronym ||
                            campuses?.find((c) => c.id === college.campus_id)
                              ?.acronym
                        )
                      }
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onEdit(college)}>
                      <Edit className="h-4 w-4 mr-2" />
                      Edit College
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() => onDelete(college)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete College
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CollegesList;
