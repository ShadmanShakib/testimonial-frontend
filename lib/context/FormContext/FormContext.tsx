import React, { useReducer, useMemo, createContext, useCallback } from "react";
import { State, Action, ProviderProps } from "./types";
const InitialState: State = {
  backgroundColor: "",
  primaryColor: "",
};
const FormContext = createContext<State | any>(InitialState);
const formReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_BACKGROUD_COLOR":
      return { ...state, backgroundColor: action.payload };
    case "SET_PRIMARY_COLOR":
      return { ...state, primaryColor: action.payload };
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
  const value = { ...state, setBgColor, setPrimaryColor };
  return (
    <FormContext.Provider value={value}>{props.children}</FormContext.Provider>
  );
}
export default FormContext;
