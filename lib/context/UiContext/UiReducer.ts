export type UiContextState = {
  sidebarIsActive:
    | "design"
    | "welcome"
    | "response"
    | "attribute"
    | "thankyou"
    | "advanced"
    | null;
  modalIsOpen: boolean;
  activePreview: "default" | "response" | "attribute" | "thanks";
  askForEmail: boolean;
  askForHeadline: boolean;
  askForWebsite: boolean;
  askForAvatar: boolean;
};
export const initialUiContextState: UiContextState = {
  sidebarIsActive: null,
  modalIsOpen: false,
  activePreview: "default",
  askForEmail: true,
  askForHeadline: true,
  askForWebsite: true,
  askForAvatar: true,
};
export type Action =
  | {
      type: "SET_SIDEBAR_IS_ACTIVE";
      payload:
        | "design"
        | "welcome"
        | "response"
        | "attribute"
        | "thankyou"
        | "advanced"
        | null;
    }
  | { type: "SET_MODAL_IS_OPEN"; payload: boolean }
  | {
      type: "SET_ACTIVE_PREVIEW";
      payload: "default" | "response" | "attribute" | "thanks";
    }
  | { type: "TOGGLE_ASK_FOR_EMAIL" }
  | { type: "TOGGLE_ASK_FOR_HEADLINE" }
  | { type: "TOGGLE_ASK_FOR_WEBSITE" }
  | { type: "TOGGLE_ASK_FOR_AVATAR" };

function UiContextReducer(
  state: UiContextState,
  action: Action
): UiContextState {
  switch (action.type) {
    case "SET_SIDEBAR_IS_ACTIVE":
      return { ...state, sidebarIsActive: action.payload };
    case "SET_MODAL_IS_OPEN":
      return { ...state, modalIsOpen: action.payload };
    case "SET_ACTIVE_PREVIEW":
      return { ...state, activePreview: action.payload };
    case "TOGGLE_ASK_FOR_EMAIL":
      return { ...state, askForEmail: !state.askForEmail };
    case "TOGGLE_ASK_FOR_HEADLINE":
      return { ...state, askForHeadline: !state.askForHeadline };
    case "TOGGLE_ASK_FOR_WEBSITE":
      return { ...state, askForWebsite: !state.askForWebsite };
    case "TOGGLE_ASK_FOR_AVATAR":
      return { ...state, askForAvatar: !state.askForAvatar };
    default:
      return state;
  }
}
export default UiContextReducer;
