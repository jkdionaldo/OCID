import { useState, useEffect } from "react";
import { Building, Upload, X } from "lucide-react";
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
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Building className="h-6 w-6 text-green-600" />
            Add New College
          </DialogTitle>
          <DialogDescription>
            Create a new college and assign it to a campus. This college will be
            available for program assignments.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Campus Selection */}
            <FormField
              control={form.control}
              name="campus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Campus *</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Campus" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {campuses.map((campus) => (
                        <SelectItem key={campus.id} value={campus.acronym}>
                          {campus.name} ({campus.acronym})
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
                  <FormLabel>College Name *</FormLabel>
                  <FormControl>
                    <Input
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
                  <FormLabel>College Acronym *</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. CCIS" maxLength={10} {...field} />
                  </FormControl>
                  <FormDescription>
                    Maximum 10 characters. This will be used for identification.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Logo Upload */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                College Logo (Optional)
              </label>

              {!logoPreview ? (
                <Card className="border-2 border-dashed border-gray-300 hover:border-green-400 transition-colors">
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <Upload className="h-12 w-12 text-gray-400 mb-3" />
                    <p className="text-gray-600 font-medium mb-2">
                      Upload College Logo
                    </p>
                    <p className="text-gray-500 text-sm mb-4 text-center">
                      Drag and drop or click to browse
                    </p>
                    <Button type="button" variant="outline" asChild>
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
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src={logoPreview}
                        alt="Logo preview"
                        className="h-16 w-16 object-contain rounded-lg border border-gray-200"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          {logoFile?.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {logoFile &&
                            `${(logoFile.size / 1024 / 1024).toFixed(2)} MB`}
                        </p>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={removeLogo}
                        className="text-red-600 hover:text-red-800"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Info Card */}
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <Building className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-green-800">
                      Creating New College
                    </p>
                    <p className="text-xs text-green-600 mt-1">
                      This college will be added to the selected campus and will
                      be available for program assignments.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

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
                    Adding...
                  </>
                ) : (
                  <>
                    <Building className="h-4 w-4 mr-2" />
                    Add College
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

export default AddCollegeModal;
