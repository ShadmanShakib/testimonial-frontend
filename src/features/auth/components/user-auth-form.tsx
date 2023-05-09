"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/lib/validations";
import * as z from "zod";

type Props = {};
type FormData = z.infer<typeof LoginSchema>;
const UserAuthForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(LoginSchema),
  });
  const onSubmit = (data: FormData) => console.log(data);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col max-w-lg mx-auto gap-5"
    >
      <Input type="text" placeholder="Username" {...register("username")} />
      {errors.username && (
        <p className="px-1 text-xs text-red-600">{errors.username.message}</p>
      )}
      <Input type="password" placeholder="Password" {...register("password")} />
      {errors.password && (
        <p className="px-1 text-xs text-red-600">{errors.password.message}</p>
      )}
      <Button>Sign in</Button>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <input {...register("remember")} type="checkbox" />
          <label>Remember me</label>
        </div>
        <a href="#">Forgot Password?</a>
      </div>
      <hr />
    </form>
  );
};
export default UserAuthForm;
