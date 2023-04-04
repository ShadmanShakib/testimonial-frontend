export interface State {
  sidebarIsExpanded:
    | "design"
    | "welcome"
    | "response"
    | "attribute"
    | "thankyou"
    | "advanced"
    | null;
  modalIsOpen: boolean;
}

export type Action =
  | {
      type: "SET_SIDEBAR_ISEXPANDED";
      payload:
        | "design"
        | "welcome"
        | "response"
        | "attribute"
        | "thankyou"
        | "advanced"
        | null;
    }
  | {
      type: "TOGGLE_IMAGE_MODAL";
    }
  | {
      type: "CLOSE_MODAL";
    };
