"use client";
import { createContext } from "react";
import { UiContextType } from "./UiContextProvider";
import { initialUiContextState } from "./UiReducer";

const UiContext = createContext<UiContextType | undefined>(undefined);
export default UiContext;
