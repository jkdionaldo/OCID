import { useState, useEffect } from "react";
import { X, Building, Image as ImageIcon, Upload, Edit } from "lucide-react";

const EditCollegeModal = ({
  isOpen,
  onClose,
  college,
  campuses,
  onUpdateCollege,
}) => {
  const [collegeData, setCollegeData] = useState({
    name: "",
    shortName: "",
    campus: "",
  });

  const [logoFile, setLogoFile] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Populate form when college prop changes
  useEffect(() => {
    if (college) {
      setCollegeData({
        name: college.name || "",
        shortName: college.shortName || college.acronym || "",
        campus: college.campus || "",
      });
      setLogoPreview(college.logo_url || null);
      setLogoFile(null);
      setErrors({});
    }
  }, [college]);

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
      // Validate file type
      const validTypes = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/gif",
        "image/svg+xml",
      ];
      if (!validTypes.includes(file.type)) {
        setErrors({
          ...errors,
          logo: "Please select a valid image file (JPEG, PNG, GIF, SVG)",
        });
        return;
      }

      // Validate file size (5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrors({ ...errors, logo: "File size must be less than 5MB" });
        return;
      }

      setLogoFile(file);
      setErrors({ ...errors, logo: null });

      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogoPreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!collegeData.name.trim()) {
      newErrors.name = "College name is required";
    }

    if (!collegeData.shortName.trim()) {
      newErrors.shortName = "College acronym is required";
    } else if (collegeData.shortName.length > 10) {
      newErrors.shortName = "Acronym should be 10 characters or less";
    }

    if (!collegeData.campus) {
      newErrors.campus = "Please select a campus";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      try {
        const collegeFormData = {
          id: college.id,
          ...collegeData,
          logo: logoFile,
          logoPreview: logoPreview,
        };

        await onUpdateCollege(collegeFormData);
        onClose();
      } catch (error) {
        console.error("Error updating college:", error);
        setErrors({ general: "Failed to update college. Please try again." });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const removeLogo = () => {
    setLogoFile(null);
    setLogoPreview(null);
    setErrors({ ...errors, logo: null });
  };

  if (!isOpen || !college) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-lg my-8 max-h-[90vh] flex flex-col">
        {/* Header - Fixed */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 flex justify-between items-center flex-shrink-0 rounded-t-xl">
          <div className="flex items-center">
            <Edit className="h-6 w-6 text-white mr-2" />
            <h3 className="text-xl font-bold text-white">Edit College</h3>
          </div>
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
            {/* General Error */}
            {errors.general && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm">{errors.general}</p>
              </div>
            )}

            <div className="grid grid-cols-1 gap-6">
              {/* Campus Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Campus <span className="text-red-500">*</span>
                </label>
                <select
                  name="campus"
                  value={collegeData.campus}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${
                    errors.campus ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors`}
                >
                  <option value="">Select Campus</option>
                  {campuses.map((campus) => (
                    <option key={campus.id} value={campus.acronym}>
                      {campus.name} ({campus.acronym})
                    </option>
                  ))}
                </select>
                {errors.campus && (
                  <p className="text-red-500 text-xs mt-1">{errors.campus}</p>
                )}
              </div>

              {/* College Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  College Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={collegeData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors`}
                  placeholder="e.g. College of Computing and Information Sciences"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              {/* College Acronym */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  College Acronym <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="shortName"
                  value={collegeData.shortName}
                  onChange={handleChange}
                  maxLength="10"
                  className={`w-full px-4 py-2 border ${
                    errors.shortName ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors`}
                  placeholder="e.g. CCIS"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Maximum 10 characters. This will be used for identification.
                </p>
                {errors.shortName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.shortName}
                  </p>
                )}
              </div>

              {/* Logo Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  College Logo
                </label>

                {!logoPreview ? (
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                    <div className="flex flex-col items-center">
                      <ImageIcon className="h-12 w-12 text-gray-400 mb-3" />
                      <p className="text-gray-600 font-medium mb-2">
                        Upload College Logo
                      </p>
                      <p className="text-gray-500 text-sm mb-4">
                        Drag and drop or click to browse
                      </p>
                      <label
                        htmlFor="logoInput"
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer flex items-center"
                      >
                        <Upload className="h-4 w-4 mr-2" />
                        Browse Files
                      </label>
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
                    </div>
                  </div>
                ) : (
                  <div className="border border-gray-300 rounded-lg p-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src={logoPreview}
                        alt="Logo preview"
                        className="h-16 w-16 object-contain rounded-lg border border-gray-200"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          {logoFile ? logoFile.name : "Current logo"}
                        </p>
                        <p className="text-xs text-gray-500">
                          {logoFile &&
                            `${(logoFile.size / 1024 / 1024).toFixed(2)} MB`}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={removeLogo}
                        className="text-red-600 hover:text-red-800 transition-colors"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                )}

                {errors.logo && (
                  <p className="text-red-500 text-xs mt-1">{errors.logo}</p>
                )}
              </div>

              {/* Info Box */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Building className="h-5 w-5 text-blue-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-blue-800">
                      <strong>Editing College Information</strong>
                    </p>
                    <p className="text-xs text-blue-600 mt-1">
                      Changes will be applied immediately. This may affect
                      related programs and files.
                    </p>
                  </div>
                </div>
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
              className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-colors shadow-sm hover:shadow-md disabled:opacity-50 flex items-center"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Updating...
                </>
              ) : (
                <>
                  <Edit className="h-4 w-4 mr-2" />
                  Update College
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCollegeModal;
