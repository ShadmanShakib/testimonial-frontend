import React from "react";
import _ from "underscore";
import Card from "./Card";
import { FormListProps } from "./types";
function FormList({ form }: FormListProps) {
  return (
    <div className="flex  flex-col ">
      {_.map(form, (item) => (
        <Card key={item._id} name={item.values.name} />
      ))}
    </div>
  );
}

export default FormList;
