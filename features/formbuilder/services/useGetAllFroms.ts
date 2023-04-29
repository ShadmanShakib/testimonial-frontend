import { useQuery } from "react-query";

import axios from "axios";
async function getUserForms() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/form`;
  const token = localStorage.getItem("access_token");
  const res = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  return res.data;
}

export default function useGetAllFroms() {
  const { data, isLoading, error } = useQuery("forms", getUserForms);
  return { data, isLoading, error };
}
