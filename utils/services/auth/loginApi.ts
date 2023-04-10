import axios from "axios";
interface LoginData {
  username: string;
  password: string;
}
interface LoginResponse {
  access_token: string;
}
export default async function loginApi(loginData: LoginData) {
  const url = "http://localhost:4000/auth/login";
  const res = await axios.post(url, loginData);
  if (res.data) {
    const { access_token } = res.data;
    localStorage.setItem("access_token", access_token);
  }
}
