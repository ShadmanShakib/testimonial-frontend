import React from "react";

const ThankYouCard = () => {
  return (
    <div className="justify-stretch relative flex w-full max-w-lg overflow-hidden rounded-xl border bg-white px-2 pb-4 pt-4 shadow-xl sm:p-4">
      <div className="w-full max-w-lg px-2 py-2">
        <div className="flex items-center justify-between">
          <div>
            <svg
              width="48px"
              height="48px"
              className=""
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 257.84 222.51"
            >
              <defs></defs>
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path
                    className="cls-1"
                    d="M239.53,111.88,128.9,222.51,93.62,187.23h0L35.36,129l0,0L18.3,111.83a62.5,62.5,0,0,1,0-88.38l5.17-5.15a62.51,62.51,0,0,1,88.38,0l17.09,17.09,17.06-17a62.42,62.42,0,0,1,88.36,0l5.17,5.16A62.49,62.49,0,0,1,239.53,111.88Z"
                  ></path>
                  <path
                    className="cls-2"
                    d="M204.24,76.59,93.65,187.18l0,0h0L35.36,129l0,0L18.3,111.83a62.5,62.5,0,0,1,0-88.38l5.17-5.15a62.51,62.51,0,0,1,88.38,0l17.09,17.09,17.06-17A62.47,62.47,0,0,1,216.66,5.91,62.5,62.5,0,0,1,204.24,76.59Z"
                  ></path>
                  <path
                    className="cls-1"
                    d="M128.94,35.39c-17.51,22-37.38,36.89-57.62,39.78a37.72,37.72,0,1,1-8-74.89C65.11.12,66.87,0,68.61,0A62.22,62.22,0,0,1,111.85,18.3Z"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div className="mt-8">
          <div>
            <h1 className="title">Thank you 🙏</h1>
            <div className="content mt-4">
              <p>
                Thank you so much for your support! We appreciate your support
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ThankYouCard;
