import React, { useState, useEffect, useCallback } from "react";
import { X, Upload } from "lucide-react";
import { useDashboardData } from "../../../hooks/useDashboardData";

const AddCollegeModal = ({ isOpen, onClose, onAddCollege }) => {
  const { data: dashboardData } = useDashboardData();

  const [collegeData, setCollegeData] = useState({
    name: "",
    shortName: "",
    campus: "",
    programs: 0,
    logo: null,
    logoPreview: null,
  });

  const [errors, setErrors] = useState({});
  const [isDragging, setIsDragging] = useState(false);

  // Set default campus when data loads
  useEffect(() => {
    if (dashboardData.campuses.length > 0 && !collegeData.campus) {
      setCollegeData((prev) => ({
        ...prev,
        campus:
          dashboardData.campuses[0].acronym || dashboardData.campuses[0].name,
      }));
    }
  }, [dashboardData.campuses, collegeData.campus]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCollegeData({ ...collegeData, [name]: value });

    // Clear error for this field
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCollegeData({
        ...collegeData,
        logo: file,
        logoPreview: URL.createObjectURL(file),
      });

      if (errors.logo) {
        setErrors({ ...errors, logo: null });
      }
    }
  };

  const handleLogoDrop = useCallback(
    (file) => {
      if (file) {
        setCollegeData({
          ...collegeData,
          logo: file,
          logoPreview: URL.createObjectURL(file),
        });

        if (errors.logo) {
          setErrors({ ...errors, logo: null });
        }
      }
    },
    [collegeData, errors]
  );

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);

      const file = e.dataTransfer.files[0];
      if (file && file.type.startsWith("image/")) {
        handleLogoDrop(file);
      }
    },
    [handleLogoDrop]
  );

  const validateForm = () => {
    const newErrors = {};

    if (!collegeData.name.trim()) {
      newErrors.name = "College name is required";
    }

    if (!collegeData.shortName.trim()) {
      newErrors.shortName = "Short name is required";
    } else if (collegeData.shortName.length > 10) {
      newErrors.shortName = "Short name should be 10 characters or less";
    }

    if (!collegeData.campus) {
      newErrors.campus = "Campus is required";
    }

    // Logo is optional, no validation needed

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      try {
        await onAddCollege({
          ...collegeData,
          id: collegeData.shortName.toLowerCase(),
          files: 0,
        });

        // Reset form and close modal immediately after submission
        // Don't wait for success/failure as that's handled by toast
        setCollegeData({
          name: "",
          shortName: "",
          campus: dashboardData.campuses[0]?.acronym || "",
          programs: 0,
          logo: null,
          logoPreview: null,
        });
        setErrors({});
        onClose();
      } catch (error) {
        console.error("Error in modal submission:", error);
        // Don't close modal on error, but the parent will handle the toast
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-xl my-8 max-h-[90vh] flex flex-col">
        {/* Header - Fixed */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-4 flex justify-between items-center flex-shrink-0 rounded-t-xl">
          <h3 className="text-xl font-bold text-white">Add New College</h3>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 transition-colors p-1 rounded-full hover:bg-white/10"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Form Content - Scrollable */}
        <div className="flex-1 overflow-y-auto">
          <form onSubmit={handleSubmit} className="p-6">
            <div className="grid grid-cols-1 gap-6">
              {/* Campus Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Campus
                </label>
                <select
                  name="campus"
                  value={collegeData.campus}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${
                    errors.campus ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors`}
                >
                  <option value="">Select Campus</option>
                  {dashboardData.campuses.map((campus) => (
                    <option
                      key={campus.id}
                      value={campus.acronym || campus.name}
                    >
                      {campus.name} ({campus.acronym || "N/A"})
                    </option>
                  ))}
                </select>
                {errors.campus && (
                  <p className="text-red-500 text-xs mt-1">{errors.campus}</p>
                )}
              </div>

              {/* College Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  College Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={collegeData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors`}
                  placeholder="e.g. College of Computing and Information Sciences"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              {/* College Short Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Short Name / Acronym
                </label>
                <input
                  type="text"
                  name="shortName"
                  value={collegeData.shortName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${
                    errors.shortName ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors`}
                  placeholder="e.g. CCIS"
                />
                {errors.shortName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.shortName}
                  </p>
                )}
              </div>

              {/* Logo Upload */}
              <div className="flex flex-col items-center mb-0">
                <div
                  className={`w-full h-48 border-2 border-dashed rounded-lg flex flex-col items-center justify-center mb-4 transition-all duration-200 ${
                    isDragging
                      ? "border-green-500 bg-green-50"
                      : collegeData.logoPreview
                      ? "border-green-300 bg-green-50"
                      : "border-gray-300 bg-gray-50 hover:border-gray-400"
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  {collegeData.logoPreview ? (
                    <div className="relative w-full h-full flex items-center justify-center p-4">
                      <img
                        src={collegeData.logoPreview}
                        alt="College Logo Preview"
                        className="max-w-full max-h-full object-contain"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setCollegeData({
                            ...collegeData,
                            logo: null,
                            logoPreview: null,
                          })
                        }
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="text-center p-4 animate-fadeIn">
                      <Upload className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                      <p className="text-sm text-gray-600 mb-2">
                        {isDragging
                          ? "Drop logo here"
                          : "Drag & drop college logo here"}
                      </p>
                      <p className="text-xs text-gray-500 mb-4">or</p>
                      <label className="cursor-pointer px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg transition-colors inline-flex items-center">
                        <Upload className="h-4 w-4 mr-2" />
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleLogoChange}
                        />
                        Browse Files
                      </label>
                      <p className="text-xs text-gray-500 mt-2">
                        Logo is optional. A placeholder will be shown if no logo
                        is uploaded.
                      </p>
                    </div>
                  )}
                </div>

                {errors.logo && (
                  <p className="text-red-500 text-xs mt-1">{errors.logo}</p>
                )}
              </div>
            </div>
          </form>
        </div>

        {/* Footer - Fixed */}
        <div className="flex-shrink-0 px-6 py-4 bg-gray-50 rounded-b-xl border-t border-gray-200">
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-green-600 to-green-700 rounded-lg hover:from-green-700 hover:to-green-800 transition-colors shadow-sm hover:shadow-md disabled:opacity-50 flex items-center"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Adding...
                </>
              ) : (
                "Add College"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCollegeModal;
