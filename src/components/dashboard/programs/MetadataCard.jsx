import React from "react";
import { Calendar, Clock, Edit3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const MetadataCard = ({ program, formatDate }) => {
  return (
    <Card className="group border-0 shadow-xl bg-white/70 backdrop-blur-sm hover:bg-white/90 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
      <CardContent className="p-6 space-y-5">
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2.5 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl shadow-lg">
            <Calendar className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-lg font-bold text-gray-900">
            Timeline & Metadata
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider flex items-center gap-2">
              <Clock className="w-3 h-3" />
              Created Date
            </label>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 px-3 py-2.5 rounded-xl border border-green-200 shadow-sm">
              <p className="text-green-900 text-sm font-medium">
                {formatDate(program.created_at)}
              </p>
            </div>
          </div>

          {program.updated_at && program.updated_at !== program.created_at && (
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider flex items-center gap-2">
                <Edit3 className="w-3 h-3" />
                Last Updated
              </label>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-3 py-2.5 rounded-xl border border-blue-200 shadow-sm">
                <p className="text-blue-900 text-sm font-medium">
                  {formatDate(program.updated_at)}
                </p>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default MetadataCard;
