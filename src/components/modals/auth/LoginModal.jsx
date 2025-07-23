import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoginForm from "@/components/auth/LoginForm";
import RequestAccessForm from "@/components/auth/RequestAccessForm";
import ForgotPassword from "../../auth/ForgotPassword";
import { X, LogIn } from "lucide-react";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [direction, setDirection] = useState(1);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
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
      <Dialog>
        <form>
          <DialogTrigger asChild>
            <Button variant="outline">Login</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[435px] dialog-content">
            <DialogHeader>
              <div className="flex items-center justify-center sm:mb-6 mt-12">
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
              {/* <DialogTitle>Edit profile</DialogTitle> */}
            </DialogHeader>
            <DialogDescription>
              <div className="w-full min-h-[350px] relative">
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
                        onForgotPassword={() => setShowForgotPassword(true)}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </DialogDescription>
          </DialogContent>
        </form>
      </Dialog>
    </>
  );
}
