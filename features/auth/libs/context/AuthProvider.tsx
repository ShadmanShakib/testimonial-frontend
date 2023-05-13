"use client";
import React, { useReducer } from "react";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import AuthContext from "./AuthContext";
import { AuthContextValue, DecodedToken } from "./types";
import authReducer from "./authReducer";
import { submitLogin } from "@auth/services";

interface AuthProviderProps {
  children: React.ReactNode;
}
const initState = {
  user: null,
};
export default function AuthProvider({ children }: AuthProviderProps) {
  const [state, dispatch] = useReducer(authReducer, initState);

  const signin = async (username: string, password: string) => {
    const data = await submitLogin({ username, password });
    if (data) {
      Cookies.set("access_token", data.access_token);
      const decodedToken = jwtDecode<DecodedToken>(data.access_token);
      console.log(decodedToken);
    }
  };
  const value = { ...state, signin };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
