import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoginForm from "@/components/auth/LoginForm";
import RequestAccessForm from "@/components/auth/RequestAccessForm";
import { X, LogIn } from "lucide-react";

export default function LoginModal({ open, onClose }) {
  if (!open) return null;
  const [showRegister, setShowRegister] = useState(false);
  const [direction, setDirection] = useState(1);

  // Optional: Reset modal state when closed
  const handleClose = () => {
    onClose();
    setShowRegister(false);
    setDirection(1);
  };

  return (
    <dialog className="modal" open>
      <div className="modal-box bg-white text-secondary-content">
        <form method="dialog">
          {/* Close button */}
          <button
            className="btn btn-sm btn-circle btn-success btn-outline absolute right-2 top-2"
            type="button"
            onClick={handleClose}
          >
            ✕
          </button>
        </form>
        <div>
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
    </dialog>
  );
}
