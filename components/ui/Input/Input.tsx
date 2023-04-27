import React from "react";
import { InputProps } from "./Input.type";

export default function Input(props: InputProps) {
  const { register, name, ...otherProps } = props;
  return (
    <>
      <input {...register(name)} {...otherProps} />
    </>
  );
}
