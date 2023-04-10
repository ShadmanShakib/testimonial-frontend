import { useState } from "react";
import axios from "axios";
import { useAxios } from "@/lib/hooks";
interface LoginData {
  username: string;
  password: string;
}

interface LoginResponse {
  access_token: string;
}

const useLoginApi = () => {
  const url = "http://localhost:4000/auth/login";
  const [token, setToken] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const login = async (loginData: LoginData) => {
    setIsLoading(true);
    try {
      const response = await axios.post<LoginResponse>(url, loginData);
      const { access_token } = response.data;
      setToken(access_token);
      console.log(access_token);
      localStorage.setItem("token", access_token);
      // Save token to local storage or cookie
    } catch (error: any) {
      // Handle error
      setError(error);
    }
    setIsLoading(false);
  };

  return { token, login, isLoading, error };
};

export default useLoginApi;
