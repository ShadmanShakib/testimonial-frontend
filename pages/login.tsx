import React from "react";
import { Login } from "@/components/auth";
import { loginApi } from "@/utils/services/auth";
import { useRouter } from "next/router";

function SignIn() {
  const router = useRouter();
  React.useEffect(() => {
    if (localStorage.getItem("access_token")) {
      router.push("/app");
    }
  }, [router]);

  return (
    <div className="h-full min-h-screen ">
      <main>
        <h1 className="py-10 text-center text-3xl font-semibold text-slate-100">
          Welcome back
        </h1>
        <Login loginApi={loginApi} />
      </main>
    </div>
  );
}

export default SignIn;
