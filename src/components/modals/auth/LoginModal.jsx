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

export default function LoginModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [direction, setDirection] = useState(1);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const scrollPosition = useRef(0);

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
    </>
  );
}
