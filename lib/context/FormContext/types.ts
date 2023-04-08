import React from "react";

export interface ProviderProps {
  children: React.ReactNode;
}
export interface State {
  logo?: string | null;
  backgroundColor: string;
  title: string;
  primaryColor: string;
  message: string;
}

export type Action =
  | {
      type: "SET_BACKGROUD_COLOR";
      payload: string;
    }
  | {
      type: "SET_PRIMARY_COLOR";
      payload: string;
    }
  | {
      type: "SET_LOGO";
      payload: string | null;
    }
  | {
      type: "SET_TITLE";
      payload: string;
    }
  | {
      type: "SET_MESSAGE";
      payload: string;
    };
