import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@ui/dialog";
import { Button } from "@ui/button";

interface DeleteFormDialogProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
function DeleteFormDialog(props: DeleteFormDialogProps) {
  const { open, setOpen } = props;
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Form</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this form?
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end gap-4">
          <Button onClick={() => setOpen(false)} variant={"secondary"}>
            Cancel
          </Button>

          <Button variant="destructive">Delete</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteFormDialog;
