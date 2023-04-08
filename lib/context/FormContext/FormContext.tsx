import React, { useReducer, useMemo, createContext, useCallback } from "react";
import { State, Action, ProviderProps } from "./types";
const InitialState: State = {
  backgroundColor: "#ebebeb",
  primaryColor: "#3b10b1",
  logo: null,
  title: "Share a testimonial!",
  message: "Do you love using our product? We'd love to hear about it!",
};
const FormContext = createContext<State | any>(InitialState);
const formReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_BACKGROUD_COLOR":
      return { ...state, backgroundColor: action.payload };
    case "SET_PRIMARY_COLOR":
      return { ...state, primaryColor: action.payload };
    case "SET_LOGO":
      return { ...state, logo: action.payload };
    case "SET_TITLE":
      return { ...state, title: action.payload };
    case "SET_MESSAGE":
      return { ...state, message: action.payload };
    default:
      return { ...state };
  }
};

export function FormContextProvider(props: ProviderProps) {
  const [state, dispatch] = useReducer(formReducer, InitialState);
  const setBgColor = useCallback((payload: string) => {
    dispatch({ type: "SET_BACKGROUD_COLOR", payload: payload });
  }, []);
  const setPrimaryColor = useCallback((payload: string) => {
    dispatch({ type: "SET_PRIMARY_COLOR", payload: payload });
  }, []);
  const setLogo = (payload: string | null) => {
    dispatch({ type: "SET_LOGO", payload: payload });
  };
  const setTitle = (payload: string) => {
    dispatch({ type: "SET_TITLE", payload: payload });
  };
  const setMessage = (payload: string) => {
    dispatch({ type: "SET_MESSAGE", payload: payload });
  };
  const value = {
    ...state,
    setBgColor,
    setPrimaryColor,
    setLogo,
    setTitle,
    setMessage,
  };
  return (
    <FormContext.Provider value={value}>{props.children}</FormContext.Provider>
  );
}
export default FormContext;
