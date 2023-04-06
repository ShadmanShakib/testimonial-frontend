import React from "react";
import { Checkbox, Input } from "@/components/ui";
import { useForm } from "react-hook-form";

interface FormValues {
  title: string;
}
function ThankExpanded() {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit = (data: FormValues) => {
    console.log(data);
  };
  return (
    <div className="p-1">
      <Checkbox
        checked={false}
        id="customthankspage"
        onChange={() => {}}
        label="Use Custom Thank You page"
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Title"
          placeholder="Thank you for your feedback 🙏"
          {...register("title")}
        />
      </form>
    </div>
  );
}

export default ThankExpanded;
