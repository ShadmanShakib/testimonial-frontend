import React from "react";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useForm, SubmitHandler } from "react-hook-form";
import { ICreateFormDialog, formData } from "./types";
import { Input } from "@/components/ui";
import { Button } from "@ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@ui/dialog";
import { createNewForm } from "@/features/formbuilder/services";

function CreateFormDialog(props: ICreateFormDialog) {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<formData>();
  const onSubmit: SubmitHandler<formData> = async (data) => {
    const postData = {
      values: {
        name: data.name,
      },
    };
    createNewForm(postData);
  };
  const { open, setOpen } = props;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <div className="">
          <DialogHeader>
            <DialogTitle>Create a form</DialogTitle>
          </DialogHeader>

          {/* form here   */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-4 flex flex-col gap-4"
          >
            <label htmlFor="name">Form Name</label>
            <Input register={register} name="name" required type="text" />

            <Button variant="default" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CreateFormDialog;
