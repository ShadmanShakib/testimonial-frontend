import React from "react";
import FormItem from "./FormItem";

type Props = {};

function FormList({}: Props) {
  return (
    <div>
      <FormItem name="New Form 101" details="0 responces" />
    </div>
  );
}

export default FormList;
