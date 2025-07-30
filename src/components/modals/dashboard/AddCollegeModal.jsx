import { useState, useEffect } from "react";
import { Building, Upload, X, Plus, Save } from "lucide-react";
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

const formSchema = z.object({
  name: z.string().min(1, "College name is required"),
  shortName: z
    .string()
    .min(1, "College acronym is required")
    .max(10, "Maximum 10 characters"),
  campus: z.string().min(1, "Please select a campus"),
});

const AddCollegeModal = ({ isOpen, onClose, onAddCollege, campuses }) => {
  const [logoFile, setLogoFile] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      shortName: "",
      campus: "",
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

  const onSubmit = async (values) => {
    setIsSubmitting(true);

    try {
      const collegeFormData = {
        ...values,
        logo: logoFile,
        logoPreview: logoPreview,
      };

      await onAddCollege(collegeFormData);
      onClose();
    } catch (error) {
      console.error("Error adding college:", error);
      form.setError("root", {
        message: "Failed to add college. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] flex flex-col p-0 gap-0">
        {/* Fixed Header */}
        <div className="flex-shrink-0 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 px-6 py-4 rounded-t-lg">
          <DialogHeader className="space-y-0">
            <DialogTitle className="flex items-center gap-3 text-white text-xl font-semibold">
              <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                <Plus className="h-5 w-5" />
              </div>
              Add New College
            </DialogTitle>
            <DialogDescription className="text-green-50">
              Create a new college and assign it to a campus. This college will
              be available for program assignments.
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Campus Selection */}
              <FormField
                control={form.control}
                name="campus"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium text-gray-700">
                      Campus *
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-green-400 focus:ring-green-400/20">
                          <SelectValue placeholder="Select Campus" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {campuses.map((campus) => (
                          <SelectItem key={campus.id} value={campus.acronym}>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              {campus.name} ({campus.acronym})
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* College Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium text-gray-700">
                      College Name *
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="h-12 border-2 border-gray-200 focus:border-green-400 focus:ring-green-400/20"
                        placeholder="e.g. College of Computing and Information Sciences"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* College Acronym */}
              <FormField
                control={form.control}
                name="shortName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium text-gray-700">
                      College Acronym *
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="h-12 border-2 border-gray-200 focus:border-green-400 focus:ring-green-400/20"
                        placeholder="e.g. CCIS"
                        maxLength={10}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Maximum 10 characters. This will be used for
                      identification.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Logo Upload */}
              <div className="space-y-3">
                <label className="text-base font-medium text-gray-700">
                  College Logo (Optional)
                </label>

                {!logoPreview ? (
                  <Card className="border-2 border-dashed border-green-300 hover:border-green-400 transition-colors bg-gradient-to-br from-green-50 to-emerald-50">
                    <CardContent className="flex flex-col items-center justify-center p-8">
                      <div className="p-3 bg-green-100 rounded-full mb-4">
                        <Upload className="h-8 w-8 text-green-600" />
                      </div>
                      <p className="text-gray-700 font-medium mb-2">
                        Upload College Logo
                      </p>
                      <p className="text-gray-500 text-sm mb-4 text-center">
                        Drag and drop or click to browse
                      </p>
                      <Button
                        type="button"
                        variant="outline"
                        className="border-green-300 text-green-600 hover:bg-green-50"
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

              {/* Info Card */}
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Building className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-green-800">
                        Creating New College
                      </p>
                      <p className="text-xs text-green-600 mt-1">
                        This college will be added to the selected campus and
                        will be available for program assignments.
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
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg hover:shadow-xl transition-all duration-200"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Creating...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  Create College
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddCollegeModal;
