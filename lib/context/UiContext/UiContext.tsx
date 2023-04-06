import React from "react";
import { State, Action } from "./UiTypes";

export const InitialState: State = {
  sidebarIsActive: null,
  modalIsOpen: false,
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
    default:
      return { ...state };
  }
};

export default UiContext;
