import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import LoginForm from "@/components/auth/LoginForm";
import RequestAccessForm from "@/components/auth/RequestAccessForm";
import ForgotPassword from "../../auth/ForgotPassword";
<<<<<<< HEAD
import { X, LogIn } from "lucide-react";
<<<<<<< HEAD
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
=======
=======
import { X, UsersRound } from "lucide-react";
import { Button } from "@/components/ui/button";

<<<<<<< HEAD

>>>>>>> fe89cc14470d9421cfab4454c3f199f457f4a877
>>>>>>> 6ab14ffdc42b60b15e60a50290a75dced6673e75

=======
>>>>>>> de08110281dc6e63044b0edd0aaa8abba922fc29
export default function LoginModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [direction, setDirection] = useState(1);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
<<<<<<< HEAD
  const scrollPosition = useRef(0);
=======
  const [isClosing, setIsClosing] = useState(false);
  const modalRef = useRef(null);
>>>>>>> fe89cc14470d9421cfab4454c3f199f457f4a877

<<<<<<< HEAD
  const openModal = () => {
    setDirection(-1);
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
    setShowRegister(false);
    setShowForgotPassword(false);
  };

  return (
    <>
      <Dialog modal={false} open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Login</Button>
        </DialogTrigger>
           {isOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
        )}
        <DialogContent 
          className="sm:max-w-[435px] pt-12 lg:pb-18 z-50"
          onInteractOutside={(e) => {
            e.preventDefault();
          }}
        >
          <DialogHeader>
            <div className="flex items-center justify-center ">
              <img
                src="/images/ocid_logo.png"
                alt="OCID Logo"
                className="h-8 sm:h-12 lg:h-16 object-contain "
=======
  const closeModal = () => {
    if (isClosing) return; // Prevent multiple close calls
    setIsClosing(true);
  };

  // Handle animation end to actually close the modal
  const handleAnimationEnd = (e) => {
    if (isClosing && e.animationName === "slideOut") {
      setIsOpen(false);
      setIsClosing(false);
      // Reset form states when modal closes
      setShowRegister(false);
      setShowForgotPassword(false);
      setDirection(1);
    }
  };
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <Button variant="outline" onClick={() => setIsOpen(true)}>
        Login
        <UsersRound />
      </Button>

<<<<<<< HEAD
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
=======
      {/* Pure CSS Modal */}
      {isOpen &&
        createPortal(
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-[99999] p-0 sm:p-4"
            style={{
              animation: isClosing
                ? "backdropFadeOut 0.2s ease-in forwards"
                : "backdropFadeIn 0.2s ease-out forwards",
            }}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                closeModal();
              }
            }}
          >
            <div
              ref={modalRef}
              className="bg-white rounded-none sm:rounded-lg shadow-2xl relative w-full h-full sm:h-auto sm:max-w-[435px] sm:max-h-[calc(100vh-2rem)] overflow-auto"
              style={{
                animation: isClosing
                  ? "slideOut 0.2s ease-in forwards"
                  : "slideIn 0.2s ease-out forwards",
              }}
              onAnimationEnd={handleAnimationEnd}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full z-10"
                style={{ fontSize: "18px" }}
              >
                <X size={20} />
              </button>

<<<<<<< HEAD
            {/* Header */}
            <div className="flex items-center justify-center pt-8 sm:pt-8 pb-4 px-6">
              <img
                src="/images/ocid_logo.png"
                alt="OCID Logo"
                className="h-10 sm:h-12 lg:h-16 object-contain"
>>>>>>> 6ab14ffdc42b60b15e60a50290a75dced6673e75
              />
              <img
                src="/images/logo_text_2.png"
                alt="OCID Logo Text"
<<<<<<< HEAD
                className="h-10 sm:h-14 lg:h-16 w-auto object-contain ml-1 sm:ml-2"
              />
            </div>
            {/* <DialogTitle>Edit profile</DialogTitle> */}
          </DialogHeader>
          <DialogDescription>
            <form>
              <div className="relative ">
                <div className="w-full relative min-h-[504px] overflow-hidden">
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
            </form>
          </DialogDescription>
        </DialogContent>
      </Dialog>
=======
                className="h-12 sm:h-14 lg:h-16 w-auto object-contain ml-1 sm:ml-2"
              />
            </div>

            {/* Content */}
            <div className="px-6 pb-6">
              <div className="relative min-h-[504px] overflow-hidden">
>>>>>>> fe89cc14470d9421cfab4454c3f199f457f4a877
                <AnimatePresence mode="sync" custom={direction}>
                  {showForgotPassword ? (
                    <motion.div
                      key="forgot"
<<<<<<< HEAD
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
=======
>>>>>>> fe89cc14470d9421cfab4454c3f199f457f4a877
                      custom={direction}
                      initial={{ x: direction === 1 ? "-100%" : "100%" }}
                      animate={{ x: 0 }}
                      exit={{ x: direction === 1 ? "100%" : "-100%" }}
                      transition={{ duration: 0.2 }}
                      className="w-full absolute top-0 left-0"
                    >
<<<<<<< HEAD
                      <RequestAccessForm
                        onBack={() => {
                          setDirection(-1);
=======
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
>>>>>>> fe89cc14470d9421cfab4454c3f199f457f4a877
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
=======
              {/* Header */}
              <div className="flex items-center justify-center pt-8 sm:pt-8 pb-4 px-6">
                <img
                  src="/images/ocid_logo.png"
                  alt="OCID Logo"
                  className="h-10 sm:h-12 lg:h-16 object-contain"
                />
                <img
                  src="/images/logo_text_2.png"
                  alt="OCID Logo Text"
                  className="h-12 sm:h-14 lg:h-16 w-auto object-contain ml-1 sm:ml-2"
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
>>>>>>> de08110281dc6e63044b0edd0aaa8abba922fc29
              </div>
            </div>
          </div>,
          document.body
        )}

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes backdropFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes backdropFadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(-10px);
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
            transform: scale(0.9) translateY(-10px);
          }
        }
      `}</style>
>>>>>>> 6ab14ffdc42b60b15e60a50290a75dced6673e75
    </>
  );
}
