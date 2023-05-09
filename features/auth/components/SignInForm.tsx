import React from "react";
import { Input } from "@ui/index";
import { useForm } from "react-hook-form";
import { Button } from "@ui/button";
import { submitLogin } from "../services";

function SignInForm() {
  const { handleSubmit, register } = useForm();
  const onSubmit = (data: any) => {
    submitLogin(data);
  };
  return (
    <div>
      <form
        className="mx-auto flex max-w-lg flex-col "
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input register={register} name="username" placeholder="Email" />
        <Input register={register} name="password" placeholder="Password" />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default SignInForm;
