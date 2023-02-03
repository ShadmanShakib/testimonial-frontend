import React from "react";
import { SignInForm } from "@/components/auth";
import { signinasync } from "@/utils/services/auth";
function SignIn() {
  return (
    <main>
      <h1 className="">Welcome back</h1>
      <button
        className="bg-red-500"
        onClick={() => signinasync("username29", "password29")}
      >
        Click
      </button>
      <SignInForm />
    </main>
  );
}

export default SignIn;
