import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { ICreateFormDialog } from "./types";
import { Button, Input } from "@/components/ui";
import { useForm } from "react-hook-form";
function CreateFormDialog(props: ICreateFormDialog) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  const { open, setOpen } = props;

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-gray-100/60" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <div className="">
            <div className="flex w-full items-center justify-between">
              <div className="flex-grow">
                <h4
                  id="headlessui-dialog-title-18"
                  className="text-lg font-medium"
                >
                  Create a form
                </h4>
              </div>
              {/* close button */}
              <Dialog.Close asChild>
                <button
                  type="button"
                  className="-mt-1 rounded-md p-1 text-gray-500 hover:bg-zinc-50"
                  tabIndex={0}
                >
                  <Cross2Icon />
                </button>
              </Dialog.Close>
            </div>
            {/* form here   */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-4 flex flex-col gap-4"
            >
              <label htmlFor="name">Form Name</label>
              <Input register={register} name="name" required type="text" />

              <Button title="Submit" variant="primary" type="submit" />
            </form>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default CreateFormDialog;
