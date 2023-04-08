import { createContext } from "react";
import { UiContextType } from "./UiProvider";
export const UiContext = createContext<UiContextType | undefined>(undefined);

export default UiContext;
