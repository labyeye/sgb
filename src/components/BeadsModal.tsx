import { useEffect } from "react";
import React from "react";

interface BeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  name: string;
  color: string;
  model: string;
  size: string;
}

const BeadModal: React.FC<BeadModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  name,
  model,
  color,
  size,
}) => {
  useEffect(() => {
    if (isOpen) {
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden";
      // Prevent layout shift when scrollbar disappears
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      // Restore scrolling when modal closes
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      // Cleanup: Restore scrolling when component unmounts
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  // Handle ESC key press
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
<div
  className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex justify-center p-4 overflow-y-auto"
  onClick={onClose}
  style={{ alignItems: 'safe center' }} // Key fix
>
  <div
    className="relative bg-white rounded-2xl w-full max-w-4xl max-h-[calc(100vh-4rem)] my-auto overflow-auto shadow-2xl animate-fade-in-up"
    onClick={(e) => e.stopPropagation()}
  >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-red-500 text-gray-600 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 z-10 shadow-lg"
          aria-label="Close modal"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Modal content */}
        <div className="flex flex-col lg:flex-row">
          {/* Image section */}
          <div className="w-full lg:w-1/2 bg-gray-50 flex items-center justify-center p-8">
            <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-lg bg-white">
              <img
                src={imageUrl}
                alt={name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content section */}
          <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
            <div className="space-y-6">
              {/* Title */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {name}
                </h2>
                <p className="text-gray-600 text-lg">Category: {model}</p>
              </div>

              {/* Details */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-gray-700 font-medium">Size:</span>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {size}
                  </span>
                </div>

                <div className="flex items-center space-x-4">
                  <span className="text-gray-700 font-medium">Color Code:</span>
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-mono">
                    {color}
                  </span>
                </div>
              </div>

              {/* Action button */}
              <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0">
                Contact for Pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeadModal;
