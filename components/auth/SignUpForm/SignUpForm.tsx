import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import Link from "next/link";

function SignUpForm({ onSubmit }: any) {
  const { register, handleSubmit } = useForm();
  const onSubmitFunc = handleSubmit((data) =>
    onSubmit(data.username, data.password)
  );
  return (
    <form
      onSubmit={onSubmitFunc}
      className="mx-auto max-w-md bg-white py-8 px-4 shadow dark:bg-gray-800 sm:rounded-lg sm:px-10"
    >
      <button className="relative   mb-2 flex w-full  items-center rounded-sm border border-gray-100 bg-gray-50 py-2 px-0 text-white hover:bg-gray-300">
        <Image
          src="/images/google.png"
          alt="google"
          height={100}
          width={100}
          className="mx-4 h-5 w-5 object-contain"
        />
        <span
          className="mr-4 flex h-6 items-center border-r border-slate-400"
          aria-hidden="true"
        ></span>
        <span className="-ml-16 flex-auto pl-16 pr-8 text-gray-900">
          Sign in with Google
        </span>
      </button>
      <div className="mb-2 w-full">
        <label
          className="mb-1 block text-sm font-medium text-gray-500 dark:text-gray-300"
          htmlFor="firstName"
        >
          First name
        </label>
        <input
          className="w-full px-3  py-2 outline-none"
          placeholder="Your first name"
          type="text"
          {...register("username")}
        />
      </div>

      <div className="mb-4 w-full ">
        <label
          className="mb-1 block text-sm font-medium text-gray-500 dark:text-gray-300"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="w-full px-3 py-2 outline-none"
          placeholder="Password"
          type="password"
          {...register("password")}
        />
      </div>
      <div className="w-full">
        <button
          type="submit"
          className="w-full bg-purple-600 py-2 text-white hover:bg-purple-700"
        >
          Sign up
        </button>
      </div>
      <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
        Already have an account?{" "}
        <Link
          className="text-purple-600 transition duration-150 ease-in-out hover:text-gray-600 dark:hover:text-gray-200"
          href="/signin"
        >
          Sign in
        </Link>
      </div>
    </form>
  );
}

export default SignUpForm;
