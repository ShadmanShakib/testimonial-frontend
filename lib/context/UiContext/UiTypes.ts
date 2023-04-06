export interface State {
  sidebarIsActive:
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
      type: "SET_SIDEBAR_ISACTIVE";
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
