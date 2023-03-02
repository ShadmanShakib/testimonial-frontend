import React from "react";

function FormName() {
  return (
    <div className="relative">
      <div
        id="form-name"
        className="title relative mt-4 inline-block rounded p-0.5 outline-dashed outline-1 outline-transparent duration-100 hover:outline-gray-300 focus:pr-0.5 focus:outline-gray-300"
      >
        <span className="editable-content">Notion Testimonial Form</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="edit-ico pointer-events-none absolute bottom-[6.6px] -right-5 text-gray-300"
        >
          <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
        </svg>
      </div>
    </div>
  );
}

export default FormName;
