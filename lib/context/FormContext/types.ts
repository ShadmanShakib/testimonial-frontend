import React from "react";

export interface ProviderProps {
  children: React.ReactNode;
}
export interface State {
  logoUrl?: string;
  backgroundColor: string;

  primaryColor: string;
}

export type Action =
  | {
      type: "SET_BACKGROUD_COLOR";
      payload: string;
    }
  | {
      type: "SET_PRIMARY_COLOR";
      payload: string;
    };
