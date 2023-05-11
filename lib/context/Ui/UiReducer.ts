"use client";
export type UiContextState = {
  //dashboard
  isDropdown: boolean;

  isAccountDropDown: boolean;
  modalIsOpen: boolean;
  activePreview: "default" | "response" | "attribute" | "thanks";
  askForEmail: boolean;
  askForHeadline: boolean;
  askForWebsite: boolean;
  askForAvatar: boolean;
  isCreateFormDialog: boolean;
  isDeleteFormDialog: boolean;
  deleteFormId: string;
};
export const initialUiContextState: UiContextState = {
  isDropdown: false,

  modalIsOpen: false,
  activePreview: "default",
  askForEmail: true,
  askForHeadline: true,
  askForWebsite: true,
  askForAvatar: true,
  isAccountDropDown: false,
  isCreateFormDialog: false,
  isDeleteFormDialog: false,
  deleteFormId: "",
};
export type Action =
  | {
      type: "SET_ISDROPDOWN";
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
      type: "SET_CREATE_FORM_DIALOG";
    }
  | {
      type: "SET_DELETE_FORM_DIALOG";
    }
  | {
      type: "SET_DELETE_FORM_ID";
      payload: string;
    };

function UiContextReducer(
  state: UiContextState,
  action: Action
): UiContextState {
  switch (action.type) {
    case "SET_ISDROPDOWN":
      return { ...state, isDropdown: !state.isDropdown };

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
    case "SET_CREATE_FORM_DIALOG":
      return { ...state, isCreateFormDialog: !state.isCreateFormDialog };

    case "SET_DELETE_FORM_DIALOG":
      return {
        ...state,
        isDeleteFormDialog: !state.isDeleteFormDialog,
      };
    case "SET_DELETE_FORM_ID":
      return { ...state, deleteFormId: action.payload };
    default:
      return state;
  }
}
export default UiContextReducer;
