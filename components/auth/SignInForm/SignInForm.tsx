import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
function SignInForm({ signinasync }: any) {
  const { register, handleSubmit } = useForm();
  const onSubmit = handleSubmit((data) =>
    signinasync(data.username, data.password)
  );
  return (
    <section className="mx-auto max-w-md bg-white py-8 px-4 shadow dark:bg-gray-800 sm:rounded-lg sm:px-10">
      <div className="w-full px-3">
        <button className="relative flex  w-full items-center border border-gray-100 bg-gray-50 py-2 px-0 text-white hover:bg-gray-300">
          <Image
            src="/images/google.png"
            alt="google"
            fill
            className="mx-4 h-5 w-5 object-contain"
          />
          <span
            className="mr-4 flex h-6 items-center border-r border-gray-300"
            aria-hidden="true"
          ></span>
          <span className="-ml-16 flex-auto pl-16 pr-8 text-gray-600">
            Sign in with Google
          </span>
        </button>
      </div>
      <div className="w-full px-3">
        <label
          className="mb-1 block text-sm font-medium text-gray-500 dark:text-gray-300"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="w-full py-2 px-3 text-gray-600 outline-none dark:text-gray-800"
          type="string"
          {...register("username")}
          placeholder="Your email"
        />
      </div>
      <div className="w-full px-3">
        <label
          className="mb-1 block text-sm font-medium text-gray-500 dark:text-gray-300"
          htmlFor="password"
        >
          Password
        </label>
        <input
          {...register("password")}
          type="password"
          className="w-full py-2 px-3 text-gray-600 outline-none dark:text-gray-800 "
          placeholder="password"
        />
      </div>
      <div>
        <a
          className="text-sm text-purple-600 transition duration-150 ease-in-out hover:text-gray-600 dark:hover:text-gray-200"
          href=""
        >
          Forget password?
        </a>
      </div>
      <div className="w-full px-3">
        <button
          type="submit"
          onClick={onSubmit}
          className="w-full bg-purple-600 py-2 text-white hover:bg-purple-700"
        >
          Sign in
        </button>
      </div>
    </section>
  );
}

export default SignInForm;
