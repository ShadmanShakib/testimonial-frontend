import React, { useContext, useMemo, createContext, useReducer } from "react";
import { State, Action } from "./types";

const initState: State = {
  title: "Share a testimonial",
  message: "This is a message about this product",
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
    case "TOGGLE_VIDEO_SWITCH":
      return { ...state, collectVideo: !state.collectVideo };
    case "TOGGLE_TEXT_SWITCH":
      return { ...state, collectText: !state.collectText };
    default:
      return { ...state };
  }
};

export const TestimonialProvider = (props: any) => {
  const [state, dispatch] = useReducer(testimonidalReducer, initState);
  //edit testimonial title
  const editTitle = (payload: string) => {
    dispatch({ type: "EDIT_TITLE", payload: payload });
  };
  //edit testimonial message
  const editMessage = (payload: string) => {
    dispatch({ type: "SET_MESSAGE", payload: payload });
  };
  //toggle text
  const toggleTextCheckbox = () => {
    dispatch({ type: "TOGGLE_TEXT_SWITCH" });
  };
  const toggleVideoCheckbox = () => {
    dispatch({ type: "TOGGLE_VIDEO_SWITCH" });
  };
  const value = {
    ...state,
    editTitle,
    editMessage,
    toggleTextCheckbox,
    toggleVideoCheckbox,
  };
  return (
    <TestimonialContext.Provider value={value}>
      {props.children}
    </TestimonialContext.Provider>
  );
};

export default TestimonialContext;
