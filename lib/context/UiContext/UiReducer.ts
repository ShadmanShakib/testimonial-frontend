export type UiContextState = {
  sidebarIsActive:
    | "design"
    | "welcome"
    | "response"
    | "attribute"
    | "thankyou"
    | "advanced"
    | null;
  isAccountDropDown: boolean;
  modalIsOpen: boolean;
  activePreview: "default" | "response" | "attribute" | "thanks";
  askForEmail: boolean;
  askForHeadline: boolean;
  askForWebsite: boolean;
  askForAvatar: boolean;
  isCreateFormDialog: boolean;
  isDeleleFormDialog: boolean;
};
export const initialUiContextState: UiContextState = {
  sidebarIsActive: null,
  modalIsOpen: false,
  activePreview: "default",
  askForEmail: true,
  askForHeadline: true,
  askForWebsite: true,
  askForAvatar: true,
  isAccountDropDown: false,
  isCreateFormDialog: false,
  isDeleleFormDialog: false,
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
  | { type: "SET_MODAL_IS_OPEN" }
  | {
      type: "CLOSE_MODAL";
    }
  | {
      type: "SET_ACTIVE_PREVIEW";
      payload: "default" | "response" | "attribute" | "thanks";
    }
  | { type: "TOGGLE_ASK_FOR_EMAIL" }
  | { type: "TOGGLE_ASK_FOR_HEADLINE" }
  | { type: "TOGGLE_ASK_FOR_WEBSITE" }
  | { type: "TOGGLE_ASK_FOR_AVATAR" }
  | {
      type: "TOGGLE_ACCOUNT_DROPDOWN";
    }
  | {
      type: "OPEN_CREATE_FORM_DIALOG";
    }
  | {
      type: "CLOSE_CREATE_FORM_DIALOG";
    }
  | {
      type: "SET_DELETE_FORM_DIALOG";
    };

function UiContextReducer(
  state: UiContextState,
  action: Action
): UiContextState {
  switch (action.type) {
    case "SET_SIDEBAR_IS_ACTIVE":
      return { ...state, sidebarIsActive: action.payload };
    case "TOGGLE_ACCOUNT_DROPDOWN":
      return { ...state, isAccountDropDown: !state.isAccountDropDown };
    case "SET_MODAL_IS_OPEN":
      return { ...state, modalIsOpen: !state.modalIsOpen };
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
    case "OPEN_CREATE_FORM_DIALOG":
      return { ...state, isCreateFormDialog: true };
    case "CLOSE_CREATE_FORM_DIALOG":
      return { ...state, isCreateFormDialog: false };
    case "SET_DELETE_FORM_DIALOG":
      return { ...state, isDeleleFormDialog: !state.isDeleleFormDialog };
    default:
      return state;
  }
}
export default UiContextReducer;
