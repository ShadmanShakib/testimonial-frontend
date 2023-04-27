import React from "react";
import Item from "./Item";
function FormList(props: any) {
  return (
    <div className="ml-4 block rounded-lg hover:bg-gray-50 ">
      <div className="group flex items-center gap-4 px-4 py-2.5">
        <Item title={props.title} />
      </div>
    </div>
  );
}

export default FormList;
