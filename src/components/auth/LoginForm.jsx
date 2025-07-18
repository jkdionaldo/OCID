import { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  AlertCircle,
  Loader2,
  Shield,
} from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";

const LoginForm = ({onRequestAccess}) => {
  const navigate = useNavigate();
  const { login, isLoading } = useAuth();
  const recaptchaRef = useRef(null);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
    // Clear reCAPTCHA error when token is received
    if (errors.recaptcha_token) {
      setErrors((prev) => ({ ...prev, recaptcha_token: "" }));
    }
  };

  const handleRecaptchaExpired = () => {
    setRecaptchaToken(null);
    setErrors((prev) => ({
      ...prev,
      recaptcha_token: "reCAPTCHA expired. Please verify again.",
    }));
  };

  const handleRecaptchaError = () => {
    setRecaptchaToken(null);
    setErrors((prev) => ({
      ...prev,
      recaptcha_token: "reCAPTCHA error. Please try again.",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(
        formData.password
      )
    ) {
      newErrors.password =
        "Password must contain uppercase, lowercase, number, and special character";
    }

    if (!recaptchaToken) {
      newErrors.recaptcha_token = "Please complete the reCAPTCHA verification";
    }

    // Sanitize inputs
    const sanitizedEmail = formData.email.trim().toLowerCase();
    const sanitizedPassword = formData.password.trim();

    setFormData((prev) => ({
      ...prev,
      email: sanitizedEmail,
      password: sanitizedPassword,
    }));

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const result = await login({
      ...formData,
      recaptcha_token: recaptchaToken,
    });

    if (result.success) {
      console.log("User successfully logged in:", result.user);
      navigate("/dashboard");
    } else {
      setErrors({ general: result.error });

      // Reset reCAPTCHA on failed login attempt
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
        setRecaptchaToken(null);
      }

      // If there are specific field errors, show them
      if (result.errors) {
        setErrors((prev) => ({ ...prev, ...result.errors }));
      }
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* General Error Message */}
        {errors.general && (
          <div className="flex items-center p-4 text-sm text-red-800 bg-red-50 border border-red-200 rounded-lg">
            <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
            <span>{errors.general}</span>
          </div>
        )}

        {/* Email Field */}
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-700"
          >
            Email Address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your CarSu email"
              autoComplete="email"
              className={`block w-full pl-10 pr-3 py-3 border rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 transition-colors duration-200 ${
                errors.email
                  ? "border-red-300 focus:ring-red-500 focus:ring-1 focus:border-red-500 bg-red-50"
                  : "border-gray-300 focus:ring-green-500 focus:ring-1 focus:border-green-500 bg-white hover:border-gray-400"
              }`}
              disabled={isLoading}
            />
          </div>
          {errors.email && (
            <p className="text-sm text-red-600 flex items-center text-left">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.email}
            </p>
          )}
        </div>

        {/* Password Field */}
        <div className="space-y-2">
          <label
            htmlFor="password"
            className="block text-sm font-semibold text-gray-700 text-left"
          >
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              autoComplete="current-password"
              className={`block w-full pl-10 pr-12 py-3 border rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 transition-colors duration-200 ${
                errors.password
                  ? "border-red-300 focus:ring-red-500 focus:ring-1 focus:border-red-500 bg-red-50"
                  : "border-gray-300 focus:ring-green-500 focus:ring-1 focus:border-green-500 bg-white hover:border-gray-400"
              }`}
              disabled={isLoading}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
              disabled={isLoading}
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>
          {errors.password && (
            <p className="text-sm text-red-600 flex items-center text-left">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.password}
            </p>
          )}
        </div>

        {/* reCAPTCHA */}
        <div className="space-y-2">
          <div className="flex items-center justify-center">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
              onChange={handleRecaptchaChange}
              onExpired={handleRecaptchaExpired}
              onError={handleRecaptchaError}
              theme="light"
              size="normal"
            />
          </div>
          {errors.recaptcha_token && (
            <p className="text-sm text-red-600 flex items-center justify-center text-center">
              <Shield className="w-4 h-4 mr-1" />
              {errors.recaptcha_token}
            </p>
          )}
        </div>

        {/* Remember Me Checkbox */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="rememberMe"
              name="rememberMe"
              type="checkbox"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded transition-colors duration-200 accent-green-600"
              disabled={isLoading}
            />
            <label
              htmlFor="rememberMe"
              className="ml-2 block text-sm text-gray-700"
            >
              Remember me
            </label>
          </div>
          <Link
            to="/forgot-password"
            className="text-sm font-medium text-green-600 hover:text-green-500 transition-colors duration-200"
          >
            Forgot your password?
          </Link>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading || !recaptchaToken}
          className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 disabled:hover:scale-100"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Signing in...
            </>
          ) : (
            "Sign In"
          )}
        </button>

        {/* Register Link */}
        <div className="text-center pb-5">
          <p className="text-sm text-gray-600">
            Don't have an Access?{" "}
            <button
              type="button"
              onClick={onRequestAccess}
              className="font-medium text-green-600 hover:text-green-500 transition-colors duration-200"
            >
              Request Access
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
