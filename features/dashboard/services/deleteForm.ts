import axios from "axios";
export default async function deleteForm(id: string) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/form/${id}`;
  try {
    const res = await axios.delete(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });
    return res.data;
  } catch (e) {
    console.log(e);
  }
}
