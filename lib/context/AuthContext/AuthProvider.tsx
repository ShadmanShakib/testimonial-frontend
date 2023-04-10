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
  const logOut = () => {
    const token = localStorage.getItem("access_token");
    if (token) {
      localStorage.removeItem("access_token");
      router.push("/login");
    }
  };
  return (
    <AuthContext.Provider value={{ token, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
