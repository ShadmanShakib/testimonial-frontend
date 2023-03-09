import React, { useContext, useMemo, createContext } from "react";
import { State, Action } from "./types";

const initState = {
  title: "",
  message: "",
  collectVideo: true,
  collectText: true,
};
const TestimonialContext = createContext(initState);

const testimonidalReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "EDIT_TITLE":
      return { ...state, title: action.payload };
    default:
      return { ...state };
  }
};
