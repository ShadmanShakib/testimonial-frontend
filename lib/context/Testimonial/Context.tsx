import React, { useContext, useMemo, createContext, useReducer } from "react";
import { State, Action } from "./types";

const initState: State = {
  title: "Share a testimonialat",
  message: "",
  collectVideo: true,
  collectText: true,
};
const TestimonialContext = createContext<State | any>(initState);

const testimonidalReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "EDIT_TITLE":
      return { ...state, title: action.payload };
    case "SET_MESSAGE":
      return { ...state, message: action.payload };
    default:
      return { ...state };
  }
};

export const TestimonialProvider = (props: any) => {
  const [state, dispatch] = useReducer(testimonidalReducer, initState);
  const editTitle = (payload: string) => {
    dispatch({ type: "EDIT_TITLE", payload: payload });
  };
  const value = { ...state, editTitle };
  return (
    <TestimonialContext.Provider value={value}>
      {props.children}
    </TestimonialContext.Provider>
  );
};

export default TestimonialContext;
