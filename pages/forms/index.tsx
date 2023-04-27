import React from "react";
import { Sidebar } from "@/components/common";
import { FormList } from "@/features/formbuilder";
import { CreateFormDialog, FormHeader } from "@/features/dashboard/component";
import { getUserForms } from "@/utils/services/form";
import { useUiContext } from "@/lib/context";
import _ from "underscore";
function Forms() {
  //fetch data
  const [forms, setForms] = React.useState([]);
  React.useEffect(() => {
    getUserForms().then((res) => {
      setForms(res);
    });
  }, []);
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
        <div className="mt-4 flex flex-col gap-1">
          {forms.length > 0 &&
            _.map(forms, (form: any) => {
              return <FormList key={form._id} title={form.values.title} />;
            })}
        </div>
      </div>
      <CreateFormDialog
        open={isCreateFormDialog}
        setOpen={setIsCreateFormDialog}
      />
    </main>
  );
}

export default Forms;
