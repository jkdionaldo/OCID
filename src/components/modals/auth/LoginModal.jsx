import { useState, useEffect } from "react";
import LoginForm from "@/components/auth/LoginForm";
import { X, LogIn } from "lucide-react";
// import { logo } from "@/public/images/ocid-logo";

export default function LoginModal() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when modal is open (mobile scroll restriction)
  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll on mobile
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.width = "100%";
    } else {
      // Restore body scroll
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      // Only restore scroll if we actually changed it
      if (scrollY && scrollY !== "") {
        window.scrollTo(0, parseInt(scrollY) * -1);
      }
    }

    // Cleanup function to restore scroll on unmount
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [isOpen]);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* Login Button - Responsive text sizing and icon spacing */}
      <button
        className="font-semibold uppercase text-gray-700 hover:text-green-700 transition-colors duration-200 flex items-center text-sm mx-auto"
        onClick={openModal}
      >
        <span className="hidden sm:inline">LOGIN</span>
        <span className="sm:hidden">LOGIN</span>
        <LogIn className="ml-1 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5" />
      </button>

      {/* Modal Overlay - Full screen with responsive backdrop */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 sm:p-4 backdrop-blur-sm">
          {/* Modal Container - Responsive sizing and positioning */}
          <div className="relative bg-white rounded-lg sm:rounded-xl shadow-lg w-full max-w-sm sm:max-w-md mx-2 sm:mx-4 max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
            {/* Modal Content - Responsive padding */}
            <div className="p-4 sm:p-6">
              {/* Close Button - Responsive positioning and sizing */}
              <button
                className="absolute top-2 right-2 sm:top-3 sm:right-3 text-gray-500 hover:text-gray-700 text-lg sm:text-xl p-1"
                onClick={closeModal}
              >
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>

              {/* Logo Section - Responsive logo sizing */}
              <div className="flex items-center justify-center mb-4 sm:mb-6">
                <img
                  src="/images/ocid_logo.png"
                  alt="OCID Logo"
                  className="h-8 sm:h-12 lg:h-16 object-contain"
                />
                <img
                  src="/images/logo_text_2.png"
                  alt="OCID Logo Text"
                  className="h-10 sm:h-14 lg:h-16 w-auto object-contain ml-1 sm:ml-2"
                />
              </div>

              {/* Divider - Responsive margin */}
              <hr className="my-4 sm:my-6 lg:my-8" />

              {/* Login Form Container */}
              <div className="w-full">
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
