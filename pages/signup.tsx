import React from "react";
import { SignupForm } from "@/components/auth";
import { Header } from "@/components/common";
import { signupapi } from "@/utils/services/auth";
function Signup() {
  return (
    <div className="h-full min-h-screen bg-slate-900 ">
      <Header />
      <main className="pt-20">
        <h1 className="mx-auto mb-10 max-w-3xl px-4 text-center text-3xl text-slate-100 sm:px-6">
          Sign up for for free
        </h1>
        <SignupForm onSubmit={signupapi} />
      </main>
    </div>
  );
}

export default Signup;
