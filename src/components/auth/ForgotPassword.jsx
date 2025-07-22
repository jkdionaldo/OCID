import { useState } from "react";
import { Eye, EyeOff, Lock, AlertCircle, Mail } from "lucide-react";

const ForgotPassword = ({ onBack }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [errors] = useState({});
  return (
    <div className="w-full h-full max-h-md max-w-md mx-auto py-10">
      <h2 className="text-2xl font-bold mb-4 text-center font-poppins">
        Forgot your password?
      </h2>
      <p className="text-center font-poppins">
        Enter your CarSU email address and we'll send you a code to reset your
        password
      </p>
      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-gray-700 pt-5 text-left"
        >
          Email Address
        </label>
        <div className="relative pt-2">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your CarSu email"
            autoComplete="email"
            className={`block w-full pl-10 pr-3 py-3 border rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 transition-colors duration-200 ${
              errors.email
                ? "border-red-300 focus:ring-red-500 focus:ring-1 focus:border-red-500 bg-red-50"
                : "border-gray-300 focus:ring-green-500 focus:ring-1 focus:border-green-500 bg-white hover:border-gray-400"
            }`}
          />
        </div>
        {errors.email && (
          <p className="text-sm text-red-600 flex items-center text-left">
            <AlertCircle className="w-4 h-4 mr-1" />
            {errors.email}
          </p>
        )}
        <hr className="mt-6 border-gray-300" /> {/* separator line */}
      </div>

      <button
        type="button"
        className="mt-4 w-full py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 focues:outline=none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        {" "}
        Send Reset Code
      </button>
      <small>
        Already have an account? {""}{" "}
        <button className="underline" type="button" onClick={onBack}>
          Sign in
        </button>
      </small>
    </div>
  );
};
export default ForgotPassword;
