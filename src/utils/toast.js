import { toast } from "react-toastify";

const defaultToastConfig = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};

export const showSuccessToast = (message, options = {}) => {
  toast.success(message, { ...defaultToastConfig, ...options });
};

export const showErrorToast = (message, options = {}) => {
  toast.error(message, {
    ...defaultToastConfig,
    autoClose: 5000, // Longer duration for errors
    ...options,
  });
};

export const showInfoToast = (message, options = {}) => {
  toast.info(message, { ...defaultToastConfig, ...options });
};

export const showWarningToast = (message, options = {}) => {
  toast.warning(message, { ...defaultToastConfig, ...options });
};

export const showLoadingToast = (message) => {
  return toast.loading(message, {
    position: "top-right",
    autoClose: false,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
  });
};

export const updateToast = (toastId, message, type) => {
  const options = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  };

  switch (type) {
    case "success":
      toast.update(toastId, {
        render: message,
        type: "success",
        isLoading: false,
        ...options,
      });
      break;
    case "error":
      toast.update(toastId, {
        render: message,
        type: "error",
        isLoading: false,
        ...options,
      });
      break;
    case "info":
      toast.update(toastId, {
        render: message,
        type: "info",
        isLoading: false,
        ...options,
      });
      break;
    default:
      toast.update(toastId, {
        render: message,
        type: "default",
        isLoading: false,
        ...options,
      });
  }
};
