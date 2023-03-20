import { QuestionMarkSvg } from "@/components/icons";
import React from "react";

function PreviewEditor() {
  return (
    <div>
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
      <div className="flex items-center gap-2 ">
        <input
          name="collect_rating"
          id="collect_rating"
          type="checkbox"
          className="checked:bg-primary checked:focus:bg-primary-400 hover:checked:bg-primary-400 block flex-none appearance-none rounded-md border-gray-300 bg-contain bg-center bg-no-repeat text-sm shadow-sm focus:outline-none focus:ring-0 focus:ring-transparent disabled:cursor-not-allowed"
        />
        <div className="flex-grow">
          <label className="block text-sm font-medium text-gray-800">
            <div className="flex items-center gap-2">
              Collect Ratings <div></div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default PreviewEditor;
