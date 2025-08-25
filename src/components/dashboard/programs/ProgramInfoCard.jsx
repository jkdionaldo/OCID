import React from "react";
import { Hash, BookOpen, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ProgramInfoCard = ({ program, isGraduate, currentTheme }) => {
  const Icon = isGraduate ? GraduationCap : BookOpen;

  return (
    <Card className="group border-0 shadow-xl bg-white/70 backdrop-blur-sm hover:bg-white/90 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
      <CardContent className="p-6 space-y-5">
        <div className="flex items-center gap-3 mb-5">
          <div
            className={`p-2.5 bg-gradient-to-br ${currentTheme.gradient} rounded-xl shadow-lg`}
          >
            <Hash className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-lg font-bold text-gray-900">
            Program Information
          </h3>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Program Type
            </label>
            <div className="bg-gradient-to-r from-gray-50 to-white px-3 py-2.5 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center justify-center gap-2">
                <Icon
                  className={`w-4 h-4 ${
                    isGraduate ? "text-yellow-600" : "text-blue-600"
                  }`}
                />
                <p className="text-gray-900 text-sm font-medium">
                  {isGraduate ? "Graduate Program" : "Undergraduate Program"}
                </p>
              </div>
            </div>
          </div>

          {program.acronym && (
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Program Acronym
              </label>
              <div className="bg-gradient-to-r from-gray-50 to-white px-3 py-2.5 rounded-xl border border-gray-200 shadow-sm">
                <p className="text-gray-900 font-mono text-sm">
                  {program.acronym}
                </p>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgramInfoCard;
