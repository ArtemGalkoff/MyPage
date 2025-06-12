import React from "react";
import ContactForm from "./ContactForm";

const FloatingContactForm = ({ onClose }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-gray-500 rounded-lg shadow-xl p-6 w-80 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-800 text-2xl font-bold"
          aria-label="Close form"
        >
          ×
        </button>
        <ContactForm />
      </div>
    </div>
  );
};

export default FloatingContactForm;