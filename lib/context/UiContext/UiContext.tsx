import React from "react";
import { State, Action } from "./UiTypes";

export const InitialState: State = {
  sidebarIsExpanded: null,
  modalIsOpen: false,
};
const UiContext = React.createContext<State | any>(InitialState);

export const UiReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_SIDEBAR_ISEXPANDED":
      return { ...state, sidebarIsExpanded: action.payload };
    case "TOGGLE_IMAGE_MODAL":
      return { ...state, modalIsOpen: !state.modalIsOpen };
    case "CLOSE_MODAL":
      return { ...state, modalIsOpen: false };
    default:
      return { ...state };
  }
};

export default UiContext;
