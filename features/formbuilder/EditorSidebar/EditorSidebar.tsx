import React from "react";
import DesignBtn from "../DesignBtn";
import { Welcome, Response, AdvanceSetting } from "@/features/formbuilder";
import { AttributeSidebar } from "../AttributePage";
import BackBtn from "./BackBtn";
import FormName from "./FormName";
import TnxEditor from "../TnxPage/TnxEditor";
function EditorSidebar() {
  return (
    <div className="max-w-xl p-8">
      <div className="flex h-full flex-col">
        <BackBtn />
        <FormName />

        <div className="mt-4 flex flex-col pb-6">
          <div className="overflow-box undefined relative h-full flex-grow overflow-hidden ">
            <div className="h-full overflow-y-auto overflow-x-visible pb-12">
              <div className="mt-4 flex gap-2 rounded bg-gray-100 p-4">
                <div>💡</div>
                <p className="text-gray-700">
                  Welcome to your collection form! Your form helps you collect
                  text and video testimonials from your customers.
                </p>
              </div>
              <div className="mt-4 flex flex-col pb-6">
                <DesignBtn />
                <Welcome />
                <Response />
                <AttributeSidebar />
                <TnxEditor />
                <AdvanceSetting />
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="block w-full rounded-lg bg-black px-4 py-2.5 text-sm font-medium text-white">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditorSidebar;
