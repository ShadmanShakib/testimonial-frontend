import React from "react";
import { State, Action } from "./UiTypes";

export const InitialState: State = {
  sidebarIsActive: null,
  modalIsOpen: false,
  activePreview: "default",
};
const UiContext = React.createContext<State | any>(InitialState);

export const UiReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_SIDEBAR_ISACTIVE":
      return { ...state, sidebarIsActive: action.payload };
    case "TOGGLE_IMAGE_MODAL":
      return { ...state, modalIsOpen: !state.modalIsOpen };
    case "CLOSE_MODAL":
      return { ...state, modalIsOpen: false };
    case "SET_ACTIVE_PREVIEW":
      return { ...state, activePreview: action.payload };

    default:
      return { ...state };
  }
};

export default UiContext;
