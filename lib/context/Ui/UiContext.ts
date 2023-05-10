"use client";
import { createContext } from "react";
import { UiContextType } from "./UiContextProvider";
import { initialUiContextState } from "./UiReducer";

const UiContext = createContext<UiContextType | any>(initialUiContextState);
export default UiContext;
