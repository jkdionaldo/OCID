import React from "react";
import { Building, School, University } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CollegesStats = ({ stats }) => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Colleges</p>
                <p className="text-2xl font-bold text-gray-900">
                  {stats.total}
                </p>
              </div>
              <Building className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">CSU-MAIN Colleges</p>
                <p className="text-2xl font-bold text-green-600">
                  {stats.csuMain || 0}
                </p>
              </div>
              <School className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">CSU-CC Colleges</p>
                <p className="text-2xl font-bold text-orange-600">
                  {stats.csuCC || 0}
                </p>
              </div>
              <University className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CollegesStats;
