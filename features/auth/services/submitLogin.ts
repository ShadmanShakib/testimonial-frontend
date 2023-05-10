"use client";
import axios from "axios";
import { LoginSchema } from "@/lib/validations";
import * as z from "zod";

export default async function submitLogin(data: z.infer<typeof LoginSchema>) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const response = await axios.post(`${apiUrl}/auth/login`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
}
