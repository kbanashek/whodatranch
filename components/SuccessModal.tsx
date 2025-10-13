"use client";

import { FaCheckCircle, FaTimes } from "react-icons/fa";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
}

export default function SuccessModal({
  isOpen,
  onClose,
  title = "Thank You!",
  message = "Your message has been sent successfully. We'll be in touch soon.",
}: SuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white max-w-md w-full shadow-2xl animate-scaleIn border-t-4 border-accent">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors text-2xl"
          aria-label="Close"
        >
          <FaTimes />
        </button>

        {/* Content */}
        <div className="p-10 text-center">
          {/* Success Icon */}
          <div className="mb-6 flex justify-center">
            <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center animate-bounce">
              <FaCheckCircle className="text-white text-5xl" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-display uppercase tracking-tight">
            {title}
          </h3>

          {/* Message */}
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            {message}
          </p>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="group px-10 py-4 bg-accent text-white font-bold text-lg uppercase tracking-[0.3em] hover:bg-primary transition-all duration-300 shadow-xl"
          >
            Close
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

