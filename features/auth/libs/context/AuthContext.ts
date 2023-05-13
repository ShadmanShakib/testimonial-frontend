"use client";
import { createContext } from "react";
import { AuthContextValue } from "./types";

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export default AuthContext;
