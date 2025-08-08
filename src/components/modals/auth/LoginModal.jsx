import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import LoginForm from "@/components/auth/LoginForm";
import RequestAccessForm from "@/components/auth/RequestAccessForm";
import ForgotPassword from "../../auth/ForgotPassword";
import { X, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LoginModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [direction, setDirection] = useState(1);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 200);
  };
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <Button variant="outline" onClick={() => setIsOpen(true)}>
        Login
      </Button>

      {/* Pure CSS Modal */}
      {isOpen && createPortal(
        <div 
          className="modal-open"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsOpen(true);
            }
          }}
        >
          <div 
            className="bg-white rounded-lg shadow-2xl relative"
            style={{
              animation: isClosing ? 'slideOut 0.2s ease-in' : 'slideIn 0.2s ease-out',
              width: '100%',
              maxWidth: '435px',
              maxHeight: 'calc(100vh - 2rem)',
              overflow: 'auto'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full z-10"
              style={{ fontSize: '18px' }}
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="flex items-center justify-center pt-8 pb-4 px-6">
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

            {/* Content */}
            <div className="px-6 pb-6">
              <div className="relative min-h-[504px] overflow-hidden">
                <AnimatePresence mode="sync" custom={direction}>
                  {showForgotPassword ? (
                    <motion.div
                      key="forgot"
                      custom={direction}
                      initial={{ x: direction === 1 ? "-100%" : "100%" }}
                      animate={{ x: 0 }}
                      exit={{ x: direction === 1 ? "100%" : "-100%" }}
                      transition={{ duration: 0.2 }}
                      className="w-full absolute top-0 left-0"
                    >
                      <ForgotPassword
                        onBack={() => setShowForgotPassword(false)}
                      />
                    </motion.div>
                  ) : showRegister ? (
                    <motion.div
                      key="register"
                      custom={direction}
                      initial={{ x: direction === 1 ? "-100%" : "100%" }}
                      animate={{ x: 0 }}
                      exit={{ x: direction === 1 ? "100%" : "100%" }}
                      transition={{ duration: 0.2 }}
                      className="w-full absolute top-0 left-0"
                    >
                      <RequestAccessForm
                        onBack={() => {
                          setDirection(1);
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
                      className="w-full absolute top-0 left-0 pt-5"
                    >
                      <LoginForm
                        onRequestAccess={() => {
                          setDirection(1);
                          setShowRegister(true);
                        }}
                        onForgotPassword={() => setShowForgotPassword(true)}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        
        @keyframes slideIn {
          from { 
            opacity: 0;
            transform: scale(0.95) translateY(-20px);
          }
          to { 
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        @keyframes slideOut {
          from {
            opacity: 1; 
            transform: scale(1) translateY(0); 
          }
          to {
            opacity: 0;
            transform: scale(0.95) translateY(-20px);
          }
        }
      `}</style>
    </>
  );
}
