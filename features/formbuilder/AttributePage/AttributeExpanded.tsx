import React from "react";
import { RightSwitch } from "@/components/ui";
export default function AttributeExpanded() {
  return (
    <div className="rounded-md border bg-white p-4 text-sm font-medium text-gray-600 shadow-sm">
      <RightSwitch onChange={() => {}} label="Ask for Email Address" />
      <hr className="my-2" />
      <RightSwitch onChange={() => {}} label="Ask for Headline" />
      <hr className="my-2" />
      <RightSwitch onChange={() => {}} label="Ask for Website" />
      <hr className="my-2" />
      <RightSwitch onChange={() => {}} label="Ask for Avatars" />
    </div>
  );
}
