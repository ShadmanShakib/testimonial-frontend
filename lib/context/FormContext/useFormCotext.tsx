import React from "react";
import FormContext from "./FormContext";

export default function useFormCotext() {
  const context = React.useContext(FormContext);
  if (context === undefined) {
    throw new Error(`UseFormContext must within FormProvider `);
  }
  return context;
}
