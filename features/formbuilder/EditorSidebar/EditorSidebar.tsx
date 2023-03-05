import React from "react";
import DesignBtn from "../DesignBtn";
import { Welcome, Response } from "@/features/formbuilder";
import BackBtn from "./BackBtn";
import FormName from "./FormName";
function EditorSidebar() {
  return (
    <div className="max-w-xl p-8">
      <div className="flex h-full flex-col">
        <BackBtn />
        <FormName />
        <div className="mt-4 flex gap-2 rounded bg-gray-100 p-4">
          <div>💡</div>
          <p className="text-gray-700">
            Welcome to your collection form! Your form helps you collect text
            and video testimonials from your customers.
          </p>
        </div>
        <div className="mt-4 flex flex-col pb-6">
          <DesignBtn />
          <Welcome />
          <Response />
        </div>
      </div>
    </div>
  );
}

export default EditorSidebar;
