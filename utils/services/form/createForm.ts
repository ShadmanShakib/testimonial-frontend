import axios from "axios";
export default async function createForm(body: any) {
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const response = await axios.post(`${url}/form`, {
    body,
  });
  return response.data;
}
