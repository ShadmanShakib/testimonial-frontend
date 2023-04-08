import React from "react";
import { Input } from "@/components/ui";
import { useForm } from "react-hook-form";
import { useUiContext } from "@/lib/context";
import { AvatorUpload, Button } from "@/components/ui";

function AttributePage() {
  const { register } = useForm();
  const { askForAvatar, askForEmail, askForHeadline, askForWebsite } =
    useUiContext();
  return (
    <div className="relative flex w-full max-w-lg flex-col rounded-xl border bg-white px-2 pb-4 pt-4 sm:p-4">
      <h1 className="text-xl">Almost done </h1>
      <form className="mt-5 flex flex-col gap-4 text-black">
        <Input label="Your name" {...register("name")} />
        {askForEmail && (
          <Input label="Email address" {...register("emailaddress")} />
        )}
        {askForHeadline && <Input label="Headline" {...register("headline")} />}

        {askForWebsite && (
          <Input label="Your website" {...register("website")} />
        )}
        {askForAvatar && <AvatorUpload />}
        <Button variant="primary" title="Submit" />
      </form>
      <p className="mt-4 px-4 text-center text-xs text-gray-500">
        By submitting, you give us permission to use this testimonial across
        social channels and other marketing efforts
      </p>
    </div>
  );
}

export default AttributePage;
