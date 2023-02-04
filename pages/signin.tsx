import React from "react";
import { SignInForm } from "@/components/auth";
import { signinasync } from "@/utils/services/auth";
function SignIn() {
  return (
    <main>
      <h1 className="">Welcome back</h1>

      <SignInForm signinasync={signinasync} />
    </main>
  );
}

export default SignIn;
