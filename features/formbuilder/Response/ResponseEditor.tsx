import React from "react";
import { QuestionMarkSvg } from "@/components/icons";
import { Checkbox } from "@/components/ui";
function PreviewEditor() {
  return (
    <div className="py-4">
      <div className="flex flex-col gap-4">
        <div className="">
          <label className="block text-sm font-medium text-gray-800">
            <div className="flex items-center gap-2">
              Prompt
              <div className="text-gray-400">
                <QuestionMarkSvg />
              </div>
              <div></div>
            </div>
          </label>
          <textarea
            name="message"
            placeholder="- What do you like most about Notion 
- Would you recommend us to a friend?"
            className="focus:border-primary mt-2 block h-40 w-full appearance-none rounded-md border-gray-300 py-2.5 text-sm shadow-sm focus:ring-purple-600"
          ></textarea>
        </div>
        <Checkbox label="Collect Ratings" />
        <Checkbox label="Collect Image Attachments" />
      </div>
    </div>
  );
}

export default PreviewEditor;
