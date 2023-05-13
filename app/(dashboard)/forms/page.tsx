import React from "react";
import { FormPage, FormList } from "@/features/dashboard/components";

type Props = {};

export default function Dashboard({}: Props) {
  return (
    <div>
      <FormPage />
      <FormList />
    </div>
  );
}
