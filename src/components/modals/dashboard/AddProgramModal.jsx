import { useState, useEffect } from "react";
import { BookOpen, GraduationCap, Plus, Save } from "lucide-react";
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
  program_type: z.enum(["undergraduate", "graduate"], {
    required_error: "Please select a program type",
  }),
  college_id: z.string().min(1, "Please select a college"),
});

const AddProgramModal = ({ isOpen, onClose, onAddProgram }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { data: dashboardData } = useDashboardData();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      program_name: "",
      acronym: "",
      program_type: "undergraduate",
      college_id: "",
    },
  });

  // Reset form when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      form.reset();
    }
  }, [isOpen, form]);

  const onSubmit = async (values) => {
    setIsSubmitting(true);

    try {
      await onAddProgram(values);
      onClose();
    } catch (error) {
      console.error("Error adding program:", error);
      form.setError("root", {
        message: "Failed to add program. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedProgramType = form.watch("program_type");
  const selectedCollegeId = form.watch("college_id");
  const isGraduate = selectedProgramType === "graduate";

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
                <Plus className="h-5 w-5" />
              </div>
              Add New Program
            </DialogTitle>
            <DialogDescription
              className={`${isGraduate ? "text-purple-50" : "text-blue-50"}`}
            >
              Create a new academic program and assign it to a college. This
              will be available for curriculum management.
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Program Type */}
              <FormField
                control={form.control}
                name="program_type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium text-gray-700">
                      Program Type *
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
                          <SelectValue placeholder="Select program type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="undergraduate">
                          <div className="flex items-center gap-2">
                            <BookOpen className="h-4 w-4 text-blue-600" />
                            Undergraduate
                          </div>
                        </SelectItem>
                        <SelectItem value="graduate">
                          <div className="flex items-center gap-2">
                            <GraduationCap className="h-4 w-4 text-purple-600" />
                            Graduate
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

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

              {/* Program Type Info Card */}
              <Card
                className={
                  isGraduate
                    ? "bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200"
                    : "bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200"
                }
              >
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div
                      className={`p-2 rounded-lg ${
                        isGraduate ? "bg-purple-100" : "bg-blue-100"
                      }`}
                    >
                      {isGraduate ? (
                        <GraduationCap className="h-5 w-5 text-purple-600" />
                      ) : (
                        <BookOpen className="h-5 w-5 text-blue-600" />
                      )}
                    </div>
                    <div>
                      <p
                        className={`text-sm font-medium ${
                          isGraduate ? "text-purple-800" : "text-blue-800"
                        }`}
                      >
                        {isGraduate
                          ? "Graduate Program"
                          : "Undergraduate Program"}
                      </p>
                      <p
                        className={`text-xs mt-1 ${
                          isGraduate ? "text-purple-600" : "text-blue-600"
                        }`}
                      >
                        This program will be added to the selected college and
                        will be available for curriculum and syllabus
                        management.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

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
                  Creating...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  Create Program
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddProgramModal;
