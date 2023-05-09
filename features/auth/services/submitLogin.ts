import axios from "axios";
import Cookie from "js-cookie";

interface LoginData {
  username: string;
  password: string;
}
interface LoginResponse {
  access_token: string;
}
export default async function submitLogin(loginData: LoginData) {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/auth/login`;
  const res = await axios.post(url, loginData);
  if (res.data) {
    const { access_token } = res.data;
    Cookie.set("access_token", access_token, { httpOnly: true, secure: true });
  }
}
