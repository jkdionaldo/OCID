<<<<<<< HEAD
import React from "react";
import { X } from "lucide-react";
import PasswordSettingForm from "../../auth/PasswordSettingForm";
=======
import React from 'react';
import { X } from 'lucide-react';
import PasswordSettingForm from '../../auth/PasswordSettingForm';
>>>>>>> origin/testing

const PasswordSettingModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
<<<<<<< HEAD
      <div
=======
      <div 
>>>>>>> origin/testing
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="relative w-full max-w-md">
          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl shadow-xl">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <X size={24} />
            </button>

            {/* Form Component */}
            <PasswordSettingForm isOpen={isOpen} onClose={onClose} />
          </div>
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default PasswordSettingModal;
=======
export default PasswordSettingModal;
>>>>>>> origin/testing
