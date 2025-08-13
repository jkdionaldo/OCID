import { toast } from "sonner";
import { Loader2, CheckCircle, AlertCircle, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Custom toast component with framer-motion animations
const AnimatedToast = ({ icon, message, type }) => {
  const bgColors = {
    success: "bg-gradient-to-r from-green-50 to-emerald-50",
    error: "bg-gradient-to-r from-red-50 to-rose-50",
    info: "bg-gradient-to-r from-blue-50 to-indigo-50",
    loading: "bg-gradient-to-r from-blue-50 to-sky-50",
  };

  const borderColors = {
    success: "border-l-4 border-green-500",
    error: "border-l-4 border-red-500",
    info: "border-l-4 border-blue-500",
    loading: "border-l-4 border-blue-500",
  };

  // Framer motion variants for the toast container
  const toastVariants = {
    initial: {
      opacity: 0,
      y: -50,
      scale: 0.9,
      rotateX: -15,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
        duration: 0.4,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  // Icon animation variants
  const iconVariants = {
    initial: {
      scale: 0,
      rotate: -180,
    },
    animate: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 600,
        damping: 20,
        delay: 0.1,
      },
    },
  };

  // Text animation variants
  const textVariants = {
    initial: {
      opacity: 0,
      x: 20,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={toastVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`flex items-start p-4 rounded-lg shadow-lg ${bgColors[type]} ${borderColors[type]} backdrop-blur-sm max-w-md`}
      whileHover={{
        scale: 1.02,
        y: -2,
        transition: { duration: 0.2 },
      }}
    >
      <div className="flex-shrink-0 mr-3">
        <motion.div variants={iconVariants}>{icon}</motion.div>
      </div>
      <motion.div variants={textVariants} className="flex-1">
        <p className="text-sm font-medium">{message}</p>
      </motion.div>
    </motion.div>
  );
};

// Toast container with AnimatePresence
const ToastContainer = ({ children }) => {
  return <AnimatePresence mode="wait">{children}</AnimatePresence>;
};

// Default configuration options
const defaultDuration = 4000;

// Success toast with checkmark icon and framer-motion animation
export const showSuccessToast = (message, options = {}) => {
  return toast.custom(
    (t) => (
      <ToastContainer>
        <AnimatedToast
          key={t}
          icon={<CheckCircle className="h-5 w-5 text-green-500" />}
          message={message}
          type="success"
        />
      </ToastContainer>
    ),
    {
      duration: defaultDuration,
      ...options,
    }
  );
};

// Error toast with alert icon and framer-motion animation
export const showErrorToast = (message, options = {}) => {
  return toast.custom(
    (t) => (
      <ToastContainer>
        <AnimatedToast
          key={t}
          icon={<AlertCircle className="h-5 w-5 text-red-500" />}
          message={message}
          type="error"
        />
      </ToastContainer>
    ),
    {
      duration: 5000, // Longer duration for errors
      ...options,
    }
  );
};

// Info toast with info icon and framer-motion animation
export const showInfoToast = (message, options = {}) => {
  return toast.custom(
    (t) => (
      <ToastContainer>
        <AnimatedToast
          key={t}
          icon={<Info className="h-5 w-5 text-blue-500" />}
          message={message}
          type="info"
        />
      </ToastContainer>
    ),
    {
      duration: defaultDuration,
      ...options,
    }
  );
};

// Loading toast with spinner and framer-motion animation
export const showLoadingToast = (message, options = {}) => {
  return toast.custom(
    (t) => (
      <ToastContainer>
        <AnimatedToast
          key={t}
          icon={
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Loader2 className="h-5 w-5 text-blue-500" />
            </motion.div>
          }
          message={message}
          type="loading"
        />
      </ToastContainer>
    ),
    {
      duration: Infinity, // Don't auto-dismiss loading toasts
      ...options,
    }
  );
};

// Update an existing toast (for changing loading to success/error)
export const updateToast = (
  toastId,
  message,
  type = "success",
  options = {}
) => {
  const config = {
    duration: type === "error" ? 5000 : defaultDuration,
    ...options,
  };

  // Add appropriate icon based on toast type
  let icon;

  if (type === "success") {
    icon = <CheckCircle className="h-5 w-5 text-green-500" />;
  } else if (type === "error") {
    icon = <AlertCircle className="h-5 w-5 text-red-500" />;
  } else if (type === "loading") {
    icon = (
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <Loader2 className="h-5 w-5 text-blue-500" />
      </motion.div>
    );
  } else if (type === "info") {
    icon = <Info className="h-5 w-5 text-blue-500" />;
  }

  toast.dismiss(toastId);

  return toast.custom(
    (t) => (
      <ToastContainer>
        <AnimatedToast key={t} icon={icon} message={message} type={type} />
      </ToastContainer>
    ),
    config
  );
};

// Dismiss a specific toast
export const dismissToast = (toastId) => {
  toast.dismiss(toastId);
};
