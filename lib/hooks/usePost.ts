import { useState } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

type UsePostReturnType<T> = [
  (data?: any, config?: AxiosRequestConfig) => Promise<AxiosResponse<T>>,
  {
    data: T | null;
    error: any;
    isLoading: boolean;
  }
];

function usePost<T = any>(url: string): UsePostReturnType<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const doPost = async (postData?: any, config?: AxiosRequestConfig) => {
    setIsLoading(true);
    try {
      const response = await axios.post<T>(url, postData, config);
      setData(response.data);
      setIsLoading(false);
      return response;
    } catch (error) {
      setError(error);
      setIsLoading(false);
      throw error;
    }
  };

  return [doPost, { data, error, isLoading }];
}

export default usePost;
