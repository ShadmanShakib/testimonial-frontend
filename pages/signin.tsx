import React from "react";
import { SignInForm, Login } from "@/components/auth";
import { signinasync } from "@/utils/services/auth";
import { Header } from "@/components/common";
import { useEffect } from "react";
import Router from "next/router";

function SignIn() {
  const accessToken = sessionStorage.getItem("access_token");
  useEffect(() => {
    if (accessToken) {
      Router.push("/app/");
    }
  }, [accessToken]);
  return (
    <div className="h-full min-h-screen bg-slate-900">
      <Header />
      <main>
        <h1 className="py-10 text-center text-3xl font-semibold text-slate-100">
          Welcome back
        </h1>
        {/* <SignInForm signinasync={signinasync} /> */}
        <Login />
      </main>
    </div>
  );
}

export default SignIn;
