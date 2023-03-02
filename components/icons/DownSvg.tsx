import React from "react";
import cn from "classnames";
export default function DownSvg({ show }: IDownSvg) {
  const cls = cn("text-gray-600 duration-200 transform", {
    "rotate-180": show,
  });
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cls}
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );
}

interface IDownSvg {
  show: boolean;
}
