import React from "react";
import { InputProps } from "./Input.type";

export default function Input(props: InputProps) {
  const { register, name, ...otherProps } = props;
  return (
    <>
      <input
        className="rounded-md border py-2.5 px-2 text-sm focus:border-brand focus:ring-brand"
        {...register(name)}
        {...otherProps}
      />
    </>
  );
}
