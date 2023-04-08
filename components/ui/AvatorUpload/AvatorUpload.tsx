/* eslint-disable @next/next/no-img-element */
import React from "react";

const AvatarUpload = () => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor="avatar"
        className="block text-sm font-medium text-gray-800"
      >
        <div className="flex items-center gap-2">
          Your Avatar
          <div></div>
        </div>
      </label>
      <div className="flex items-center gap-2">
        <label tabIndex={0}>
          <span className="sr-only" aria-label="required">
            required
          </span>
          <div className="flex items-center gap-2">
            <img
              src="https://ik.imagekit.io/senja/tr:f-jpeg/Avatars/avatar_aOgsMJ-eZ.png?ik-sdk-version=javascript-1.4.3&amp;updatedAt=1657796891741"
              alt=""
              className="h-10 w-10 rounded-full object-cover"
            />
            <button
              type="button"
              className="rounded-md border px-4 py-2 text-sm font-semibold shadow-sm"
            >
              Pick an image
            </button>
          </div>
          <input
            type="file"
            accept="image/png,image/jpg,image/gif,image/jpeg,image/webp"
            autoComplete="off"
            style={{ display: "none" }}
          />
        </label>
        <div className="ml-2 text-gray-600"> </div>
      </div>
    </div>
  );
};

export default AvatarUpload;
