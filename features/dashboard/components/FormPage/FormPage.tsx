"use client";
import React from "react";
import { DashHeader, CreateFormDialog } from "@/features/dashboard/components";
import { useUiContext } from "@/lib/context/ui";

type Props = {};

export default function FormPage({}: Props) {
  const { isCreateFormDialog, setCreateFormDialog } = useUiContext();
  return (
    <div>
      <DashHeader
        handleClick={setCreateFormDialog}
        title="Your forms"
        description="Use forms to collect your testimonial form users"
      />
      <CreateFormDialog
        open={isCreateFormDialog}
        setOpen={setCreateFormDialog}
      />
    </div>
  );
}
