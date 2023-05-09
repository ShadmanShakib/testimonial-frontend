import React from "react";
import { UserAuthForm } from "@features/auth/components";
type Props = {};

export default function Login({}: Props) {
  return (
    <div className="text-center">
      <h1 className="text-3xl mb-6 ">Sign in with Testiwizard</h1>
      <UserAuthForm />
    </div>
  );
}
