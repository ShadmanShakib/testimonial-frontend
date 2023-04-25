import { useForm } from "react-hook-form";
import Image from "next/image";
import { useRouter } from "next/router";
interface LoginFormValues {
  username: string;
  password: string;
}

export default function Login({ loginApi }: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();
  const router = useRouter();
  const onSubmit = async (data: LoginFormValues) => {
    await loginApi({ username: data.username, password: data.password });
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
      router.push("/app");
    }
  };

  return (
    <div className="flex  items-center justify-center ">
      <div className="rounded-md bg-white p-6 shadow-md">
        <button className="relative mb-2 flex w-full  items-center rounded-sm border border-gray-100 bg-gray-50 py-2 px-0 text-white hover:bg-gray-300">
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
        {/* {error && <p className="mb-4 text-red-500">{error.message}</p>} */}
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4 ">
            <div className="flex ">
              <label
                htmlFor="username"
                className="mb-2 block font-medium text-gray-700"
              >
                Username:
              </label>
            </div>
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
              className={`w-full rounded-md py-2 px-3 text-gray-600 outline-none focus:ring-0 dark:text-gray-800 ${
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
            className="rounded-md bg-brand py-2 px-4 text-white"
          >
            {"Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
