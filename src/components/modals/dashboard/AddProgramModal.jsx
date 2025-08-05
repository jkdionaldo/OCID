import { useState, useEffect } from "react";
import { BookOpen, GraduationCap, Plus, Save, Upload, X } from "lucide-react";
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
  const [logoFile, setLogoFile] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null);
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
      setLogoFile(null);
      setLogoPreview(null);
    }
  }, [isOpen, form]);

  const onSubmit = async (values) => {
    setIsSubmitting(true);

    try {
      const programFormData = {
        ...values,
        logo: logoFile,
        logoPreview: logoPreview,
      };

      await onAddProgram(programFormData);
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

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      const validTypes = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/gif",
        "image/svg+xml",
      ];

      if (!validTypes.includes(file.type)) {
        form.setError("logo", {
          message: "Please select a valid image file (JPEG, PNG, GIF, SVG)",
        });
        return;
      }

      // Validate file size (5MB)
      if (file.size > 5 * 1024 * 1024) {
        form.setError("logo", {
          message: "File size must be less than 5MB",
        });
        return;
      }

      setLogoFile(file);
      form.clearErrors("logo");

      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogoPreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeLogo = () => {
    setLogoFile(null);
    setLogoPreview(null);
    form.clearErrors("logo");
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
        <div className="flex-shrink-0 bg-gradient-to-r from-green-600 to-green-700 px-6 py-4 rounded-t-lg">
          <DialogHeader className="space-y-0">
            <DialogTitle className="flex items-center gap-3 text-white text-xl font-semibold">
              <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                <Plus className="h-5 w-5" />
              </div>
              Add New Program
            </DialogTitle>
            <DialogDescription className="text-green-50 pt-2">
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
                      Program Type
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-green-600 focus:ring-green-600/20">
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
                            <GraduationCap className="h-4 w-4 text-yellow-600" />
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
                      College
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-green-600 focus:ring-green-600/20">
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
                      Program Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="h-12 border-2 border-gray-200 focus:border-green-600 focus:ring-green-600/20 focus-visible:outline-none focus-visible:ring-green-600 "
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
                      Program Acronym
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="h-12 border-2 border-gray-200 focus:border-green-600 focus:ring-green-600/20 focus-visible:outline-none focus-visible:ring-green-600 "
                        placeholder={isGraduate ? "e.g. MSCS" : "e.g. BSCS"}
                        maxLength={10}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Logo Upload */}
              <div className="space-y-3">
                <label className="text-base font-medium text-gray-700">
                  Program Logo
                </label>

                {!logoPreview ? (
                  <Card className="border-2 border-dashed border-green-300 hover:border-green-400 transition-colors bg-gradient-to-br from-green-50 to-emerald-50">
                    <CardContent className="flex flex-col items-center justify-center p-8">
                      <div className="p-3 bg-green-100 rounded-full mb-4">
                        <Upload className="h-8 w-8 text-green-600" />
                      </div>
                      <p className="text-gray-700 font-medium mb-2">
                        Upload Program Logo
                      </p>
                      <p className="text-gray-500 text-sm mb-4 text-center">
                        Drag and drop or click to browse
                      </p>
                      <Button
                        type="button"
                        variant="outline"
                        className="border-green-600 text-green-600 hover:bg-green-50"
                        asChild
                      >
                        <label htmlFor="logoInput" className="cursor-pointer">
                          <Upload className="h-4 w-4 mr-2" />
                          Browse Files
                        </label>
                      </Button>
                      <input
                        type="file"
                        id="logoInput"
                        className="hidden"
                        accept="image/*"
                        onChange={handleLogoChange}
                      />
                      <p className="mt-3 text-xs text-gray-500">
                        Supported: JPEG, PNG, GIF, SVG (max 5MB)
                      </p>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-white">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <img
                          src={logoPreview}
                          alt="Logo preview"
                          className="h-20 w-20 object-contain rounded-xl border-2 border-green-200 bg-white p-2"
                        />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">
                            {logoFile?.name}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {logoFile &&
                              `${(logoFile.size / 1024 / 1024).toFixed(2)} MB`}
                          </p>
                          <Badge
                            variant="secondary"
                            className="mt-2 bg-green-100 text-green-800"
                          >
                            Ready to upload
                          </Badge>
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={removeLogo}
                          className="text-red-600 hover:text-red-800 hover:bg-red-50"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>

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
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl transition-all duration-200"
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
