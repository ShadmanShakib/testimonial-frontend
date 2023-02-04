import axios from "axios";

export default function signinasync(username: string, password: string) {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`;
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
    .catch((error) => {
      console.log(error);
    });
}
