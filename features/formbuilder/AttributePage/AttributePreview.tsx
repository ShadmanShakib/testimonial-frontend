import React from "react";
import { Input } from "@/components/ui";
import { useForm } from "react-hook-form";
import { AvatorUpload, Button } from "@/components/ui";
function AttributePage() {
  const { register } = useForm();
  return (
    <div className="relative flex w-full max-w-lg flex-col rounded-xl border bg-white px-2 pb-4 pt-4 sm:p-4">
      <form className="mt-5 flex flex-col gap-4 text-black">
        <Input label="Your name" {...register("name")} />
        <Input label="Email address" {...register("emailaddress")} />
        <Input label="Headline" {...register("headline")} />
        <Input label="Your website" {...register("website")} />
        <AvatorUpload />
        <Button variant="primary" title="Submit" />
      </form>
    </div>
  );
}

export default AttributePage;
