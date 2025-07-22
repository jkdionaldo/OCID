import { useState, useEffect } from "react";
import { BookOpen, GraduationCap, Edit } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/HomeCard";
import { Badge } from "@/components/ui/badge";
import { useDashboardData } from "@/hooks/useDashboardData";

const formSchema = z.object({
  program_name: z.string().min(1, "Program name is required"),
  acronym: z.string().optional(),
  college_id: z.string().min(1, "Please select a college"),
});

const EditProgramModal = ({ isOpen, onClose, program, onUpdateProgram }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { data: dashboardData } = useDashboardData();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      program_name: "",
      acronym: "",
      college_id: "",
    },
  });

  // Update form when program changes
  useEffect(() => {
    if (program && isOpen) {
      form.reset({
        program_name: program.program_name || "",
        acronym: program.acronym || "",
        college_id: program.college_id?.toString() || "",
      });
    }
  }, [program, isOpen, form]);

  const onSubmit = async (values) => {
    setIsSubmitting(true);

    try {
      await onUpdateProgram(program.id, values, program.program_type);
      onClose();
    } catch (error) {
      console.error("Error updating program:", error);
      form.setError("root", {
        message: "Failed to update program. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!program) return null;

  const selectedCollegeId = form.watch("college_id");

  // Get selected college info
  const selectedCollege = dashboardData.colleges.find(
    (college) => college.id.toString() === selectedCollegeId
  );

  // Get campus info for selected college
  const selectedCampus = selectedCollege
    ? dashboardData.campuses.find(
        (campus) => campus.id === selectedCollege.campus_id
      )
    : null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Edit className="h-6 w-6 text-gray-600" />
            Edit Program
          </DialogTitle>
          <DialogDescription>
            Update the program details and assignment.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Program Type Display */}
            <Card
              className={
                program.program_type === "graduate"
                  ? "bg-purple-50 border-purple-200"
                  : "bg-blue-50 border-blue-200"
              }
            >
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  {program.program_type === "graduate" ? (
                    <GraduationCap className="h-5 w-5 text-purple-600" />
                  ) : (
                    <BookOpen className="h-5 w-5 text-blue-600" />
                  )}
                  <div>
                    <p
                      className={`text-sm font-medium ${
                        program.program_type === "graduate"
                          ? "text-purple-800"
                          : "text-blue-800"
                      }`}
                    >
                      {program.program_type === "graduate"
                        ? "Graduate Program"
                        : "Undergraduate Program"}
                    </p>
                    <p
                      className={`text-xs ${
                        program.program_type === "graduate"
                          ? "text-purple-600"
                          : "text-blue-600"
                      }`}
                    >
                      Program type cannot be changed after creation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* College Selection */}
            <FormField
              control={form.control}
              name="college_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>College *</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select college" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {dashboardData.colleges.map((college) => {
                        const campus = dashboardData.campuses.find(
                          (c) => c.id === college.campus_id
                        );
                        return (
                          <SelectItem
                            key={college.id}
                            value={college.id.toString()}
                          >
                            <div className="flex items-center justify-between w-full">
                              <span>{college.acronym}</span>
                              <Badge variant="outline" className="ml-2">
                                {campus?.acronym}
                              </Badge>
                            </div>
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                  {selectedCollege && (
                    <FormDescription>
                      {selectedCollege.name} - {selectedCampus?.name}
                    </FormDescription>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Program Name */}
            <FormField
              control={form.control}
              name="program_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Program Name *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={
                        program.program_type === "graduate"
                          ? "e.g. Master of Science in Computer Science"
                          : "e.g. Bachelor of Science in Computer Science"
                      }
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Program Acronym */}
            <FormField
              control={form.control}
              name="acronym"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Program Acronym (Optional)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={
                        program.program_type === "graduate"
                          ? "e.g. MSCS"
                          : "e.g. BSCS"
                      }
                      maxLength={10}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Short abbreviation for the program (max 10 characters).
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Root Error */}
            {form.formState.errors.root && (
              <Card className="border-red-200 bg-red-50">
                <CardContent className="p-4">
                  <p className="text-red-600 text-sm">
                    {form.formState.errors.root.message}
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Footer Buttons */}
            <div className="flex justify-end space-x-3 pt-4 border-t">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Updating...
                  </>
                ) : (
                  <>
                    <Edit className="h-4 w-4 mr-2" />
                    Update Program
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default EditProgramModal;
