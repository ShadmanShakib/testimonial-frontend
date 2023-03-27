import React from "react";

const Modal = ({ onClose, children }: any) => {
  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="w-full max-w-lg transform overflow-hidden rounded-lg bg-white shadow-xl transition-all">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">Modal Title</h3>
              <button
                className="text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
                onClick={onClose}
              >
                <span className="sr-only">Close modal</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div className="mt-4">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
