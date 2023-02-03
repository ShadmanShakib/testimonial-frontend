import React from "react";

function SignUpForm() {
  return (
    <form className="mx-auto max-w-md bg-white py-8 px-4 shadow dark:bg-gray-800 sm:rounded-lg sm:px-10">
      <div>
        <label
          className="mb-1 block text-sm font-medium text-gray-500 dark:text-gray-300"
          htmlFor="firstName"
        >
          First name
        </label>
        <input
          className="px-3 py-2 outline-none"
          placeholder="Your first name"
          type="text"
        />
      </div>
      <div className="-mx-3 mb-4 flex flex-wrap">
        <div className="w-full px-3">
          <label
            className="mb-1 block text-sm font-medium text-gray-500 dark:text-gray-300"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="px-3 py-2 outline-none"
            placeholder="you@example.com"
            type="email"
            name=""
            id=""
          />
        </div>
      </div>
      <div className="w-full px-3">
        <label
          className="mb-1 block text-sm font-medium text-gray-500 dark:text-gray-300"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="px-3 py-2 outline-none"
          placeholder="Password"
          type="password"
          name=""
          id=""
        />
      </div>
      <button type="submit" className="">
        Sign up
      </button>
    </form>
  );
}

export default SignUpForm;
