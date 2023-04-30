import React, { use } from "react";
import { Sidebar } from "@/components/common";
// import { FormList } from "@/features/formbuilder";
import { CreateFormDialog, FormHeader } from "@/features/dashboard/component";
import { useGetAllFroms } from "@/features/formbuilder/services";
import { useUiContext } from "@/lib/context";
import { FormList } from "@/features/dashboard/component";

import _ from "underscore";
function Forms() {
  //services to fetch data
  const { isLoading, error, data } = useGetAllFroms();

  //Ui context
  const { isCreateFormDialog, openCreateFormDialog, closeCreateFormDialog } =
    useUiContext();
  const setIsCreateFormDialog = () => {
    isCreateFormDialog ? closeCreateFormDialog() : openCreateFormDialog();
  };

  return (
    <main className="relative flex">
      <Sidebar />
      <div className="relative h-full flex-grow pt-8 pb-16 sm:pt-10">
        <div className="relative px-6">
          <FormHeader onCreateNew={openCreateFormDialog} />
        </div>
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Something went wrong</div>
        ) : (
          <div className="mt-4 flex flex-col gap-1">
            <FormList form={data} />;
          </div>
        )}
      </div>
      <CreateFormDialog
        open={isCreateFormDialog}
        setOpen={setIsCreateFormDialog}
      />
    </main>
  );
}

export default Forms;
