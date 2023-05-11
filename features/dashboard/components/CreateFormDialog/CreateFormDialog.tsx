"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@ui/dialog";
import { Input, Button } from "@ui/index";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { CreateFormSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";

type Props = {
  open: boolean;
  setOpen: () => void;
};
type FormData = z.infer<typeof CreateFormSchema>;
function CreateFormDialog({ open, setOpen }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(CreateFormSchema) });
  const onSubmit = (data: FormData) => console.log(data);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a form</DialogTitle>
          <DialogDescription>
            You can create different forms to collect different testimonial
            types
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <label htmlFor="">Form name</label>
          <Input {...register("name")} placeholder="new name" />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          <Button>Create form</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default CreateFormDialog;
