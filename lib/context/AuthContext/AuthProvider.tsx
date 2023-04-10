import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { useRouter } from "next/router";
const AuthProvider: React.FC<any> = ({ children }) => {
  const [token, setToken] = useState("");
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      setToken(token);
    } else {
      router.push("/login");
    }
  }, [router]);
  return (
    <AuthContext.Provider value={{ token }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
