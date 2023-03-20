export interface State {
  title: string;
  message: string;
  collectVideo: boolean;
  collectText: boolean;
}

export type Action =
  | {
      type: "EDIT_TITLE";
      payload: string;
    }
  | { type: "SET_MESSAGE"; payload: string }
  | {
      type: "TOGGLE_VIDEO_SWITCH";
    }
  | {
      type: "TOGGLE_TEXT_SWITCH";
    };
