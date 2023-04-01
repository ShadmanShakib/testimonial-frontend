import UiContext from "./UiContext";
import React from "react";
import { UiReducer, InitialState } from "./UiContext";
export default function UiProvider(props: any) {
  const [state, dispatch] = React.useReducer(UiReducer, InitialState);
  const setIsModal = () => {
    dispatch({ type: "TOGGLE_IMAGE_MODAL" });
  };
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  const value = { ...state, setIsModal, closeModal };
  return (
    <UiContext.Provider value={value}>{props.children}</UiContext.Provider>
  );
}
