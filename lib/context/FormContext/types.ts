export interface State {
  logoUrl?: string;
  backgroundColor: string;
  buttonColor: string;
}

export type Action =
  | {
      type: "SET_BACKGROUD_COLOR";
      payload: string;
    }
  | {
      type: "SET_BUTTON_COLOR";
      payload: string;
    };
