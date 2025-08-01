// import { toast } from "react-toastify";

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

export const showLoadingToast = (message, options = {}) => {
  return toast.loading(message, { ...defaultToastConfig, ...options });
};

export const updateToast = (
  toastId,
  message,
  type = "success",
  options = {}
) => {
  toast.update(toastId, {
    render: message,
    type: type,
    isLoading: false,
    ...defaultToastConfig,
    ...options,
  });
};
