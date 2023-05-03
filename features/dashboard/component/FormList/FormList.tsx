import React from "react";
import _ from "underscore";
import Card from "./Card";
import { FormListProps } from "./types";
import { useUiContext } from "@/lib/context";
function FormList({ form, onDeleteForm }: FormListProps) {
  const { setDeleteFormId } = useUiContext();
  const handleDelete = (id: string) => {
    onDeleteForm();
    setDeleteFormId(id);
  };
  return (
    <div className="flex  flex-col ">
      {_.map(form, (item) => (
        <Card
          onDeleteForm={() => handleDelete(item._id)}
          key={item._id}
          name={item.values.name}
        />
      ))}
    </div>
  );
}

export default FormList;
