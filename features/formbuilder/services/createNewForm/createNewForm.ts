import axios from "axios";
import { type createFormData } from "./types";
export default async function createNewForm(data: createFormData) {
  //base url
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  //bearer token
  const token = localStorage.getItem("access_token");

  const endpoint = `${baseUrl}/form/new`;

  try {
    const response = await axios.post(endpoint, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    console.log("Response:", response.data);
    // Do something with the response data here
  } catch (error) {
    console.error("Error:", error);
    // Handle errors here
  }
}
