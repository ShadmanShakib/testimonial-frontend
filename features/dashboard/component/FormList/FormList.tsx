import React from "react";
import _ from "underscore";
import Card from "./Card";
import { FormListProps } from "./types";
function FormList({ form, onDeleteForm }: FormListProps) {
  return (
    <div className="flex  flex-col ">
      {_.map(form, (item) => (
        <Card
          onDeleteForm={onDeleteForm}
          key={item._id}
          name={item.values.name}
        />
      ))}
    </div>
  );
}

export default FormList;
