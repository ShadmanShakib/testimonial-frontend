import React from "react";
import { Login } from "@/components/auth";

function SignIn() {
  return (
    <div className="h-full min-h-screen ">
      <main>
        <h1 className="py-10 text-center text-3xl font-semibold text-slate-100">
          Welcome back
        </h1>
        <Login />
      </main>
    </div>
  );
}

export default SignIn;
