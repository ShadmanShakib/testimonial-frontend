import axios, { AxiosResponse } from "axios";
import { useQuery } from "react-query";

interface ApiResponse<T> {
  data: T;
}

export default function useApi<T>(url: string) {
  const token = localStorage.getItem("access_token");
  return useQuery<T, Error>(["api", url], async () => {
    const response: AxiosResponse<ApiResponse<T>> = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data.data;
  });
}
