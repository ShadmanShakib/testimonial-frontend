import React from "react";
import { State, Action } from "./UiTypes";

export const InitialState: State = {
  isDesign: false,
  isImageModal: false,
};
const UiContext = React.createContext<State | any>(InitialState);

export const UiReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "TOGGLE_ISDESIGN":
      return { ...state };
    case "TOGGLE_IMAGE_MODAL":
      return { ...state, isImageModal: !state.isImageModal };
    default:
      return { ...state };
  }
};

export default UiContext;
