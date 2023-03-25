import React from "react";
import type { ITitle } from "./type";
function Title(props: ITitle) {
  return <h1 className=" text-lg font-semibold">{props.title}</h1>;
}

export default Title;
