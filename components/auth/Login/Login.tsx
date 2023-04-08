import { useState } from "react";
import { useLoginApi } from "@/utils/services/auth";
import { useForm } from "react-hook-form";

interface LoginFormValues {
  username: string;
  password: string;
}

export default function Login() {
  const { login, isLoading, error } = useLoginApi();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  const onSubmit = async (data: LoginFormValues) => {
    await login({ username: data.username, password: data.password });
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-300">
      <div className="rounded-md bg-white p-6 shadow-md">
        <h1 className="mb-4 text-2xl font-medium">Login</h1>
        {error && <p className="mb-4 text-red-500">{error.message}</p>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="mb-2 block font-medium text-gray-700"
            >
              Username:
            </label>
            <input
              type="text"
              id="username"
              className={`w-full rounded-md border-2 border-gray-300 p-2 ${
                errors.username ? "border-red-500" : ""
              }`}
              {...register("username", {
                required: "Username is required",
              })}
            />
            {errors.username && (
              <p className="mt-2 text-red-500">{errors.username.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="mb-2 block font-medium text-gray-700"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              className={`w-full rounded-md border-2 border-gray-300 p-2 ${
                errors.password ? "border-red-500" : ""
              }`}
              {...register("password", {
                required: "Password is required",
              })}
            />
            {errors.password && (
              <p className="mt-2 text-red-500">{errors.password.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="rounded-md bg-blue-500 py-2 px-4 text-white"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
