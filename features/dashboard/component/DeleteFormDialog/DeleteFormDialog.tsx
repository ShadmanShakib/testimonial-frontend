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
  onDelete: () => void;
  isLoading?: boolean;
}
function DeleteFormDialog(props: DeleteFormDialogProps) {
  const { open, setOpen, onDelete, isLoading } = props;
  return (
    <Dialog open={open} onOpenChange={setOpen}>
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

          <Button onClick={onDelete} variant="destructive">
            {isLoading ? "Loading..." : "Delete"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteFormDialog;
