import React from "react";
import { Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import FormCard from "@/components/ui/FormCard";

const FormsGrid = ({ forms, onEdit, onDelete }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {forms.map((form) => (
        <div key={form.id} className="relative group">
          <FormCard form={form} />

          {/* Hover Action Buttons */}
          <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-20">
            <div className="flex flex-col space-y-2">
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onEdit(form);
                }}
                size="sm"
                className="h-10 w-10 rounded-full p-0 bg-white/90 backdrop-blur-sm border border-blue-200 text-blue-600 shadow-lg hover:shadow-xl hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 transform hover:scale-110"
                title="Edit Form"
              >
                <Edit className="h-4 w-4" />
              </Button>

              <Button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onDelete(form);
                }}
                size="sm"
                className="h-10 w-10 rounded-full p-0 bg-white/90 backdrop-blur-sm border border-red-200 text-red-600 shadow-lg hover:shadow-xl hover:bg-red-50 hover:border-red-300 transition-all duration-200 transform hover:scale-110"
                title="Delete Form"
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

export default FormsGrid;
