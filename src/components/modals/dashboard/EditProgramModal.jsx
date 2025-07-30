import { useState, useEffect } from "react";
import { BookOpen, GraduationCap, Edit, Save, AlertCircle } from "lucide-react";
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
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
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
  const isGraduate = program.program_type === "graduate";

  // Get selected college info
  const selectedCollege = dashboardData.colleges.find(
    (college) => college.id.toString() === selectedCollegeId
  );

  // Get current college info
  const currentCollege = dashboardData.colleges.find(
    (college) => college.id === program.college_id
  );

  // Get campus info for selected college
  const selectedCampus = selectedCollege
    ? dashboardData.campuses.find(
        (campus) => campus.id === selectedCollege.campus_id
      )
    : null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[550px] max-h-[90vh] flex flex-col p-0 gap-0">
        {/* Fixed Header */}
        <div
          className={`flex-shrink-0 bg-gradient-to-r ${
            isGraduate
              ? "from-purple-500 via-indigo-500 to-blue-500"
              : "from-blue-500 via-cyan-500 to-teal-500"
          } px-6 py-4 rounded-t-lg`}
        >
          <DialogHeader className="space-y-0">
            <DialogTitle className="flex items-center gap-3 text-white text-xl font-semibold">
              <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                <Edit className="h-5 w-5" />
              </div>
              Edit Program
            </DialogTitle>
            <DialogDescription
              className={`${isGraduate ? "text-purple-50" : "text-blue-50"}`}
            >
              Update program details and assignment. Changes will be saved
              immediately.
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Current Program Info Card */}
              <Card
                className={`${
                  isGraduate
                    ? "bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200"
                    : "bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200"
                }`}
              >
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`p-3 rounded-lg ${
                        isGraduate ? "bg-purple-100" : "bg-blue-100"
                      }`}
                    >
                      {isGraduate ? (
                        <GraduationCap className="h-6 w-6 text-purple-600" />
                      ) : (
                        <BookOpen className="h-6 w-6 text-blue-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p
                        className={`font-medium ${
                          isGraduate ? "text-purple-900" : "text-blue-900"
                        }`}
                      >
                        Editing: {program.program_name}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge
                          variant="secondary"
                          className={`${
                            isGraduate
                              ? "bg-purple-100 text-purple-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {isGraduate ? "Graduate" : "Undergraduate"}
                        </Badge>
                        {program.acronym && (
                          <Badge variant="outline">{program.acronym}</Badge>
                        )}
                        {currentCollege && (
                          <Badge variant="outline" className="text-gray-600">
                            {currentCollege.acronym}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Program Type Notice */}
              <Alert
                className={`${
                  isGraduate
                    ? "border-purple-200 bg-purple-50"
                    : "border-blue-200 bg-blue-50"
                }`}
              >
                <AlertCircle
                  className={`h-4 w-4 ${
                    isGraduate ? "text-purple-600" : "text-blue-600"
                  }`}
                />
                <AlertDescription
                  className={`${
                    isGraduate ? "text-purple-800" : "text-blue-800"
                  }`}
                >
                  <strong>Program Type:</strong>{" "}
                  {isGraduate ? "Graduate" : "Undergraduate"}
                  <br />
                  <span className="text-sm">
                    Program type cannot be changed after creation. Only program
                    details and college assignment can be modified.
                  </span>
                </AlertDescription>
              </Alert>

              {/* College Selection */}
              <FormField
                control={form.control}
                name="college_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium text-gray-700">
                      College *
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger
                          className={`h-12 border-2 border-gray-200 ${
                            isGraduate
                              ? "focus:border-purple-400 focus:ring-purple-400/20"
                              : "focus:border-blue-400 focus:ring-blue-400/20"
                          }`}
                        >
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
                                <div className="flex items-center gap-2">
                                  <div
                                    className={`w-2 h-2 rounded-full ${
                                      campus?.acronym === "CSU-MAIN"
                                        ? "bg-green-500"
                                        : "bg-blue-500"
                                    }`}
                                  ></div>
                                  <span className="font-medium">
                                    {college.acronym}
                                  </span>
                                </div>
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
                      <FormDescription className="flex items-center gap-2 mt-2">
                        <div className="w-1 h-4 bg-green-500 rounded-full"></div>
                        <span className="font-medium">
                          {selectedCollege.name}
                        </span>
                        {selectedCampus && (
                          <Badge variant="secondary">
                            {selectedCampus.name}
                          </Badge>
                        )}
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
                    <FormLabel className="text-base font-medium text-gray-700">
                      Program Name *
                    </FormLabel>
                    <FormControl>
                      <Input
                        className={`h-12 border-2 border-gray-200 ${
                          isGraduate
                            ? "focus:border-purple-400 focus:ring-purple-400/20"
                            : "focus:border-blue-400 focus:ring-blue-400/20"
                        }`}
                        placeholder={
                          isGraduate
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
                    <FormLabel className="text-base font-medium text-gray-700">
                      Program Acronym (Optional)
                    </FormLabel>
                    <FormControl>
                      <Input
                        className={`h-12 border-2 border-gray-200 ${
                          isGraduate
                            ? "focus:border-purple-400 focus:ring-purple-400/20"
                            : "focus:border-blue-400 focus:ring-blue-400/20"
                        }`}
                        placeholder={isGraduate ? "e.g. MSCS" : "e.g. BSCS"}
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
                <Alert variant="destructive">
                  <AlertDescription>
                    {form.formState.errors.root.message}
                  </AlertDescription>
                </Alert>
              )}
            </form>
          </Form>
        </div>

        {/* Fixed Footer */}
        <div className="flex-shrink-0 bg-gray-50 border-t border-gray-200 px-6 py-4 rounded-b-lg">
          <div className="flex justify-end space-x-3">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isSubmitting}
              className="border-gray-300 hover:bg-gray-100"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              onClick={form.handleSubmit(onSubmit)}
              disabled={isSubmitting}
              className={`${
                isGraduate
                  ? "bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600"
                  : "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
              } text-white shadow-lg hover:shadow-xl transition-all duration-200`}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Updating...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditProgramModal;
