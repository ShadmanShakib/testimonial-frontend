import React from "react";
import { SignInForm } from "@/components/auth";
import { signinasync } from "@/utils/services/auth";
import { Header } from "@/components/common";
function SignIn() {
  return (
    <div className="h-full min-h-screen bg-slate-900">
      <Header />
      <main>
        <h1 className="py-10 text-center text-3xl font-semibold text-slate-100">
          Welcome back
        </h1>
        <SignInForm signinasync={signinasync} />
      </main>
    </div>
  );
}

export default SignIn;
