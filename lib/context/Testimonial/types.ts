export interface State {
  title: string;
  message: string;
  collectVideo: boolean;
  collectText: boolean;
}

export type Action = {
  type: "EDIT_TITLE";
  payload: string;
};
