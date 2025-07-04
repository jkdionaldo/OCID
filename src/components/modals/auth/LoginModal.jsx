import { useState } from "react";
import LoginForm from "@/components/auth/LoginForm";
import { X, LogIn } from "lucide-react";
// import { logo } from "@/public/images/ocid-logo";

export default function LoginModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* Button to open the modal */}
      <button
        className="font-medium uppercase text-sm lg:text-base text-green-950 hover:text-green-700 transition-colors duration-200 flex items-center"
        onClick={openModal}
      >
        LOGIN
        <LogIn className="ml-2" />
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 backdrop-blur-sm min-w-full min-h-screen">
          <div className="fixed flex-col flex bg-white rounded-xl shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="rounded-lg shadow-lg p-6">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-lg"
                onClick={closeModal}
              >
                <X />
              </button>
              <div className="flex items-center justify-center ">
                <img
                  src="/images/ocid_logo.png"
                  alt="OCID Logo"
                  className="h-[40px] sm:h-[80px] object-contain"
                />
                <img
                  src="/images/logo_text_2.png"
                  alt="OCID Logo Text"
                  className="h-16 w-auto object-contain ml-2"
                />
              </div>
              <hr className="m-8" />
              <div >
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
