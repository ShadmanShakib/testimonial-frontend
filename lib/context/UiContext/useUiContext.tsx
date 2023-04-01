import React from "react";
import UiContext from "./UiContext";
export default function useUiContext() {
  const context = React.useContext(UiContext);
  if (context === undefined) {
    throw new Error(`UseFormContext must within FormProvider`);
  }
  return context;
}
