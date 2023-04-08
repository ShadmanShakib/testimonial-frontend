import React from "react";
import { RightSwitch } from "@/components/ui";
import { useUiContext } from "@/lib/context";
export default function AttributeExpanded() {
  const {
    askForAvatarHandler,
    askForAvatar,
    askForEmail,
    askForEmailHandler,
    askForHeadline,
    askForWebsite,
    askForWebsiteHandler,
    askForHeadlineHandler,
  } = useUiContext();
  return (
    <div className="rounded-md border bg-white p-4 text-sm font-medium text-gray-600 shadow-sm">
      <RightSwitch
        isChecked={askForEmail}
        onChange={askForEmailHandler}
        label="Ask for Email Address"
      />
      <hr className="my-2" />
      <RightSwitch
        isChecked={askForHeadline}
        onChange={askForHeadlineHandler}
        label="Ask for Headline"
      />
      <hr className="my-2" />
      <RightSwitch
        isChecked={askForWebsite}
        onChange={askForWebsiteHandler}
        label="Ask for Website"
      />
      <hr className="my-2" />
      <RightSwitch
        isChecked={askForAvatar}
        onChange={askForAvatarHandler}
        label="Ask for Avatars"
      />
    </div>
  );
}
