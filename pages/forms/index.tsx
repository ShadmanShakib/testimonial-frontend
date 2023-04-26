import React from "react";
import { Sidebar } from "@/components/common";
import { Header, FormList } from "@/features/formbuilder";
import { getUserForms } from "@/utils/services/form";
import _ from "underscore";
function Forms() {
  const [forms, setForms] = React.useState([]);
  React.useEffect(() => {
    getUserForms().then((res) => {
      setForms(res);
    });
  }, []);
  return (
    <main className="flex">
      <Sidebar />
      {forms && <pre>{JSON.stringify(forms, null, 2)}</pre>}
      <div className="relative h-full flex-grow pt-8 pb-16 sm:pt-10">
        <div className="relative px-6">
          <Header />
        </div>
        <div className="mt-4 flex flex-col gap-1">
          {forms.length > 0 &&
            _.map(forms, (form: any) => {
              return <FormList key={form._id} title={form.values.title} />;
            })}
        </div>
      </div>
    </main>
  );
}

export default Forms;
