import axios from "axios";

export default function signupapi(username: string, password: string) {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/signup`;
  const data = JSON.stringify({
    username: username,
    password: password,
  });

  const config = {
    method: "post",
    url: url,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then((res) => console.log(res.data))
    .catch((err) => console.error(err));
}
