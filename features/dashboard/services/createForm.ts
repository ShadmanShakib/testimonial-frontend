import axios from "axios";

interface createFormData {
  values: {
    name: string;
  };
}

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
    return response;
  } catch (error) {
    console.error("Error:", error);
  }
}
