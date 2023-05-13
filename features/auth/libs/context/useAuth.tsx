import AuthContext from "./AuthContext";
import React from "react";
import { AuthContextValue } from "./types";
export default function useAuth(): AuthContextValue {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
