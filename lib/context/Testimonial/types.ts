export interface State {
  title: string;
  message: string;
  collectVideo: boolean;
  collectAudio: boolean;
}

export type Action = {
  type: "EDIT_TITLE";
  payload: string;
};
