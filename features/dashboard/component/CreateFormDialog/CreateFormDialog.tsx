import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ICreateFormDialog, formData } from "./types";
import { Input } from "@/components/ui";
import { Button } from "@ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@ui/dialog";
import { useCreateForm } from "../../hooks";
import { useToast } from "@ui/use-toast";
function CreateFormDialog(props: ICreateFormDialog) {
  const { isLoading, isSuccess, mutateAsync } = useCreateForm();
  const { toast } = useToast();
  const { open, setOpen } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<formData>();
  const onSubmit: SubmitHandler<formData> = async (data) => {
    const postData = {
      values: {
        name: data.name,
      },
    };
    await mutateAsync(postData);
    if (!isLoading) {
      setOpen();
      reset();
      toast({
        title: "Form created successfully",
      });
    }
  };

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
              {isLoading ? "Creating..." : "Create"}
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CreateFormDialog;
