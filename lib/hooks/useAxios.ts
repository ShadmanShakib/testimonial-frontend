import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useState, useEffect } from "react";

type UseAxiosReturnType<T> = {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
};

export default function useAxios<T>(
  url: string,
  options?: AxiosRequestConfig
): UseAxiosReturnType<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response: AxiosResponse<T> = await axios(url, options);
        setData(response.data);
      } catch (error: any) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, options]);

  return { data, isLoading, error };
}
