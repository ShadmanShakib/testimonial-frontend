import React from "react";
import { Sidebar } from "@/components/common";
import {
  CreateFormDialog,
  DashHeader,
  DeleteFromDialog,
  FormList,
} from "@/features/dashboard/component";
//services
import { useGetAllFroms } from "@/features/formbuilder/services";
import { deleteForm } from "@/features/dashboard/services";
import { useDeleteForm } from "@/features/dashboard/hooks";

import { useUiContext } from "@/lib/context";

import _ from "underscore";
function Forms() {
  //Ui context
  const {
    isCreateFormDialog,
    openCreateFormDialog,
    closeCreateFormDialog,
    setDeleteFormDialog,
    isDeleteFormDialog,
    deleteFormId,
  } = useUiContext();
  const { isLoading, error, data } = useGetAllFroms();
  const { mutate } = useDeleteForm(deleteFormId);

  const setIsCreateFormDialog = () => {
    isCreateFormDialog ? closeCreateFormDialog() : openCreateFormDialog();
  };

  return (
    <main className="relative flex">
      <Sidebar />
      <div className="relative h-full flex-grow pt-8 pb-16 sm:pt-10">
        <div className="relative px-6">
          <DashHeader
            title="Your Forms"
            description="Use forms to collect testimonials from your users."
            onCreateNew={openCreateFormDialog}
          />
        </div>
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Something went wrong</div>
        ) : (
          <div className="mt-4 flex flex-col gap-1">
            <FormList onDeleteForm={setDeleteFormDialog} form={data} />;
          </div>
        )}
      </div>
      <CreateFormDialog
        open={isCreateFormDialog}
        setOpen={setIsCreateFormDialog}
      />
      <DeleteFromDialog
        onDelete={() => mutate()}
        open={isDeleteFormDialog}
        setOpen={setDeleteFormDialog}
      />
    </main>
  );
}

export default Forms;
