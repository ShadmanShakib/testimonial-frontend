import React, { ChangeEvent } from "react";

interface Props {
  onImageSelect: (files: FileList | null) => void;
}

const ImageUploader: React.FC<Props> = ({ onImageSelect }) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    onImageSelect(files);
  };

  return (
    <div className="mt-4">
      <div>
        <div className="mb-2">
          <div className="block text-sm font-medium text-gray-800">
            <div className="flex items-center gap-2">
              Pick an image <div></div>
            </div>
          </div>
        </div>
        <div className="h-32 w-full cursor-pointer rounded-md border border-dashed border-gray-300 p-4 duration-200 ">
          <label tabIndex={0}>
            <div className="flex h-full cursor-pointer flex-col items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                style={{ strokeWidth: 2 }}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-500"
              >
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"></path>
                <line x1="16" y1="5" x2="22" y2="5"></line>
                <line x1="19" y1="2" x2="19" y2="8"></line>
                <circle cx="9" cy="9" r="2"></circle>
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
              </svg>
              <p className="text-sm text-gray-400">
                Max file size: 2MB, accepted: jpeg, jpg, png, gif
              </p>
            </div>
            <input
              type="file"
              multiple
              accept="image/png,image/jpg,image/gif,image/jpeg,image/webp"
              autoComplete="off"
              style={{ display: "none" }}
              onChange={handleInputChange}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
