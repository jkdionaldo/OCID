import { useState, useEffect } from "react";
import { FileText, Upload, X, Edit, Save, AlertCircle } from "lucide-react";
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
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";

const formSchema = z.object({
  form_number: z.string().min(1, "Form number is required"),
  title: z.string().min(1, "Title is required"),
  purpose: z.string().min(1, "Purpose is required"),
  link: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
  revision: z.string().optional(),
});

const EditFormModal = ({ isOpen, onClose, form: formData, onUpdateForm }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formFile, setFormFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      form_number: "",
      title: "",
      purpose: "",
      link: "",
      revision: "",
    },
  });

  // Update form when formData or modal opens
  useEffect(() => {
    if (isOpen && formData) {
      form.reset({
        form_number: formData.form_number || "",
        title: formData.title || "",
        purpose: formData.purpose || "",
        link: formData.link || "",
        revision: formData.revision || "",
      });

      // Set existing file preview if available
      if (formData.file_name) {
        setFilePreview({
          name: formData.file_name,
          size: formData.file_size,
          type: formData.file_type,
          existing: true,
        });
      } else {
        setFilePreview(null);
      }

      setFormFile(null);
    }
  }, [isOpen, formData, form]);

  const onSubmit = async (values) => {
    setIsSubmitting(true);

    try {
      const updateData = new FormData();

      // Add form fields
      updateData.append("form_number", values.form_number);
      updateData.append("title", values.title);
      updateData.append("purpose", values.purpose);
      if (values.link) updateData.append("link", values.link);
      if (values.revision) updateData.append("revision", values.revision);

      // Add new file if present
      if (formFile) {
        updateData.append("file", formFile);
      }

      await onUpdateForm(formData.id, updateData);
      onClose();
    } catch (error) {
      console.error("Error updating form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/vnd.ms-excel",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      ];

      if (!allowedTypes.includes(file.type)) {
        form.setError("root", {
          message: "Please select a valid file type (PDF, Word, Excel)",
        });
        return;
      }

      // Validate file size (10MB max)
      if (file.size > 10 * 1024 * 1024) {
        form.setError("root", {
          message: "File size must be less than 10MB",
        });
        return;
      }

      setFormFile(file);
      setFilePreview({
        name: file.name,
        size: file.size,
        type: file.type,
        existing: false,
      });
      form.clearErrors("root");
    }
  };

  const removeFile = () => {
    setFormFile(null);
    if (formData?.file_name) {
      // If there was an existing file, restore its preview
      setFilePreview({
        name: formData.file_name,
        size: formData.file_size,
        type: formData.file_type,
        existing: true,
      });
    } else {
      setFilePreview(null);
    }
    const fileInput = document.getElementById("file-upload-edit");
    if (fileInput) {
      fileInput.value = "";
    }
  };

  const formatFileSize = (bytes) => {
    if (!bytes) return "N/A";
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return Math.round((bytes / Math.pow(1024, i)) * 100) / 100 + " " + sizes[i];
  };

  if (!formData) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] flex flex-col p-0 gap-0">
        {/* Fixed Header */}
        <div className="flex-shrink-0 bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 rounded-t-lg">
          <DialogHeader className="space-y-0">
            <DialogTitle className="flex items-center gap-3 text-white text-xl font-semibold">
              <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                <Edit className="h-5 w-5" />
              </div>
              Edit Form
            </DialogTitle>
            <DialogDescription className="text-blue-50 pt-2">
              Update form information and settings. Changes will be applied
              immediately.
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Form Number */}
              <FormField
                control={form.control}
                name="form_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium text-gray-700">
                      Form Number *
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="h-12 border-2 border-gray-200 focus:border-blue-600 focus:ring-blue-600/20 focus-visible:outline-none focus-visible:ring-blue-600"
                        placeholder="e.g. FORM-001, CSU-ADM-01"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Unique identifier for this form
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Title */}
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium text-gray-700">
                      Form Title *
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="h-12 border-2 border-gray-200 focus:border-blue-600 focus:ring-blue-600/20 focus-visible:outline-none focus-visible:ring-blue-600"
                        placeholder="e.g. Student Registration Form"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Purpose */}
              <FormField
                control={form.control}
                name="purpose"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium text-gray-700">
                      Purpose *
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        className="min-h-[100px] border-2 border-gray-200 focus:border-blue-600 focus:ring-blue-600/20 focus-visible:outline-none focus-visible:ring-blue-600"
                        placeholder="Describe the purpose and use of this form..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Link and Revision in a row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Link */}
                <FormField
                  control={form.control}
                  name="link"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium text-gray-700">
                        External Link
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="h-12 border-2 border-gray-200 focus:border-blue-600 focus:ring-blue-600/20 focus-visible:outline-none focus-visible:ring-blue-600"
                          placeholder="https://example.com/form"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Optional link to external form
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Revision */}
                <FormField
                  control={form.control}
                  name="revision"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium text-gray-700">
                        Revision
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="h-12 border-2 border-gray-200 focus:border-blue-600 focus:ring-blue-600/20 focus-visible:outline-none focus-visible:ring-blue-600"
                          placeholder="v1.0, Rev A"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Version or revision number
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* File Upload */}
              <div className="space-y-3">
                <FormLabel className="text-base font-medium text-gray-700">
                  Form File
                </FormLabel>

                {!filePreview ? (
                  <Card className="border-2 border-dashed border-blue-300 hover:border-blue-400 transition-colors bg-gradient-to-br from-blue-50 to-sky-50">
                    <CardContent className="flex flex-col items-center justify-center p-8">
                      <div className="p-3 bg-blue-100 rounded-full mb-4">
                        <Upload className="h-8 w-8 text-blue-600" />
                      </div>
                      <p className="text-gray-700 font-medium mb-2">
                        Upload Form File
                      </p>
                      <p className="text-gray-500 text-sm mb-4 text-center">
                        Drag and drop or click to browse
                      </p>
                      <Button
                        type="button"
                        variant="outline"
                        className="border-blue-600 text-blue-600 hover:bg-blue-50"
                        asChild
                      >
                        <label
                          htmlFor="file-upload-edit"
                          className="cursor-pointer"
                        >
                          <Upload className="h-4 w-4 mr-2" />
                          Browse Files
                        </label>
                      </Button>
                      <input
                        id="file-upload-edit"
                        name="file-upload-edit"
                        type="file"
                        className="hidden"
                        accept=".pdf,.doc,.docx,.xls,.xlsx"
                        onChange={handleFileChange}
                      />
                      <p className="mt-3 text-xs text-gray-500">
                        Supported: PDF, Word, Excel (max 10MB)
                      </p>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="h-20 w-20 flex items-center justify-center rounded-xl border-2 border-blue-200 bg-white p-2">
                          <FileText className="h-10 w-10 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900 truncate max-w-xs">
                            {filePreview.name}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {formatFileSize(filePreview.size)}
                          </p>
                          <Badge
                            variant="secondary"
                            className={`mt-2 ${
                              filePreview.existing
                                ? "bg-blue-100 text-blue-800"
                                : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {filePreview.existing
                              ? "Current file"
                              : "Ready to upload"}
                          </Badge>
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={removeFile}
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
                  <AlertCircle className="h-4 w-4" />
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
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-200"
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

export default EditFormModal;
