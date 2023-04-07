import UiContext from "./UiContext";
import React, { useCallback } from "react";
import { UiReducer, InitialState } from "./UiContext";
export default function UiProvider(props: any) {
  const [state, dispatch] = React.useReducer(UiReducer, InitialState);
  const setIsModal = () => {
    dispatch({ type: "TOGGLE_IMAGE_MODAL" });
  };
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  //expand sidebar
  const setSidebarIsActive = (
    payload:
      | "design"
      | "welcome"
      | "response"
      | "attribute"
      | "thankyou"
      | "advanced"
      | null
  ) => {
    dispatch({ type: "SET_SIDEBAR_ISACTIVE", payload: payload });
  };
  const setActivePreview = useCallback(
    (payload: "default" | "response" | "attribute" | "thanks") => {
      dispatch({ type: "SET_ACTIVE_PREVIEW", payload: payload });
    },
    []
  );
  const value = {
    ...state,
    setIsModal,
    closeModal,
    setSidebarIsActive,
    setActivePreview,
  };
  return (
    <UiContext.Provider value={value}>{props.children}</UiContext.Provider>
  );
}
