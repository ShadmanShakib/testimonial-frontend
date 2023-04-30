import axios from "axios";
export default async function createForm(data: any) {
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const access_token = localStorage.getItem("access_token");
  const response = await axios.post(`${url}/form`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
      "content-type": "application/json",
    },
  });
  return response.data;
}
