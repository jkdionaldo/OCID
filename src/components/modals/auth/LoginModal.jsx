import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoginForm from "@/components/auth/LoginForm";
import RequestAccessForm from "@/components/auth/RequestAccessForm";
import { X, LogIn } from "lucide-react";

export default function LoginModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [direction, setDirection] = useState(1);
  const scrollPosition = useRef(0);

  useEffect(() => {
    if (isOpen) {
      scrollPosition.current = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPosition.current}px`;
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollPosition.current);
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [isOpen]);

  const openModal = () => {
    setDirection(-1);
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
    setShowRegister(false);
  };

  return (
    <>
      <button
        className="font-semibold uppercase text-gray-700 hover:text-green-700 transition-colors duration-200 flex mx-auto text-sm "
        onClick={openModal}
      >
        <span className="hidden sm:inline">LOGIN</span>
        <span className="sm:hidden">LOGIN</span>
        <LogIn className="ml-1 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 sm:p-4 backdrop-blur-sm">
          <div className="relative bg-white rounded-lg sm:rounded-xl shadow-lg w-full max-w-sm sm:max-w-md mx-2 sm:mx-4 max-h-[95vh] sm:max-h-[90vh] overflow-hidden h-[635px]">
            <div className="p-4 sm:p-6">
              <button
                className="absolute top-2 right-2 sm:top-3 sm:right-3 text-gray-500 hover:text-gray-700 text-lg sm:text-xl p-1"
                onClick={closeModal}
              >
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
              <div className="flex items-center justify-center mt-4 pb-5 sm:mb-6">
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
              <div className="w-full min-h-[350px] relative">
                <AnimatePresence mode="sync" custom={direction}>
                  {showRegister ? (
                    <motion.div
                      key="register"
                      custom={direction}
                      initial={{ x: direction === 1 ? "100%" : "-100%" }}
                      animate={{ x: 0 }}
                      exit={{ x: direction === 1 ? "-100%" : "100%" }}
                      transition={{ duration: 0.2 }}
                      className="w-full absolute top-0 left-0"
                    >
                      <RequestAccessForm
                        onBack={() => {
                          setDirection(-1);
                          setShowRegister(false);
                        }}
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="login"
                      custom={direction}
                      initial={{ x: direction === 1 ? "-100%" : "100%" }}
                      animate={{ x: 0 }}
                      exit={{ x: direction === 1 ? "100%" : "-100%" }}
                      transition={{ duration: 0.2 }}
                      className="w-full absolute top-0 left-0"
                    >
                      <LoginForm
                        onRequestAccess={() => {
                          setDirection(1);
                          setShowRegister(true);
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
