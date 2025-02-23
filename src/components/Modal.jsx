import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-zinc-800 text-zinc-400 h-96 overflow-x-auto rounded-lg p-6 max-w-2xl w-[70%] mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-200 transition-colors duration-200"
        >
          <i className="ri-close-line text-2xl"></i>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
