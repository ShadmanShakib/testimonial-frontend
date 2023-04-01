import React, { ChangeEvent } from "react";
import ReactModal from "react-modal";
import { ImageSvg } from "@/components/icons";
import { IModal } from "./IModal";
const Modal = (props: IModal) => {
  const { closeModal, modalIsOpen, setLogo } = props;
  const handleChnage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setLogo(reader.result as string);
      };
    } else {
      setLogo(null);
    }
  };

  return (
    <ReactModal
      className="inset-0 z-[99] overflow-y-auto"
      isOpen={modalIsOpen}
      contentLabel="Example Modal"
    >
      <div className="flex min-h-screen  items-center justify-center px-4 pt-4 pb-20 text-center">
        <div className=" opacity-0" onClick={closeModal}>
          <div
            id="headlessui-dialog-overlay-31"
            aria-hidden="true"
            className="fixed inset-0 bg-gray-100 transition-opacity"
          ></div>
        </div>
        <div className="z-[100] inline-block w-full transform overflow-hidden rounded-xl border bg-white text-left align-bottom shadow-lg transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle">
          <div className="p-6">
            <label tabIndex={0}>
              <div className="flex w-full cursor-pointer justify-center rounded-md border-2 border-dashed border-gray-200 px-8 py-24 duration-150 hover:scale-[1.02] hover:border-purple-500">
                <div className="relative flex items-center justify-center ">
                  <div className="undefined false duration-100">
                    <div className="flex flex-col items-center gap-2 text-center text-gray-700">
                      <ImageSvg />
                      <p>Upload an image</p>
                      <p className="text-sm text-gray-500">
                        Max file size: 5MB, accepted: jpeg, jpg, png, gif
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0">
                    <div className="scale-110 text-purple-600">
                      <svg
                        id="dots"
                        width="32px"
                        viewBox="0 0 132 58"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        className="svelte-1tolfw7"
                      >
                        <defs></defs>
                        <g
                          id="Page-1"
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <g
                            id="dots"
                            fill="currentColor"
                            className="svelte-1tolfw7"
                          >
                            <circle
                              id="dot1"
                              cx="25"
                              cy="30"
                              r="13"
                              className="svelte-1tolfw7"
                            ></circle>
                            <circle
                              id="dot2"
                              cx="65"
                              cy="30"
                              r="13"
                              className="svelte-1tolfw7"
                            ></circle>
                            <circle
                              id="dot3"
                              cx="105"
                              cy="30"
                              r="13"
                              className="svelte-1tolfw7"
                            ></circle>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <input
                onChange={handleChnage}
                className="hidden"
                type="file"
                accept="image/png,image/jpg,image/gif,image/jpeg,image/webp"
              />
            </label>
          </div>
        </div>
      </div>
    </ReactModal>
  );
};

export default Modal;
