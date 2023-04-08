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
  activePreview: "default" | "response" | "attribute" | "thanks";
  askForEmail: boolean;
  askForHeadline: boolean;
  askForWebsite: boolean;
  askForAvator: boolean;
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
    }
  | {
      type: "SET_ACTIVE_PREVIEW";
      payload: "default" | "response" | "attribute" | "thanks";
    }
  | {
      type: string;
      payload: boolean;
    };

export interface UiContextProps {
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
  askForAvator: boolean;

  setSidebarIsActive: React.Dispatch<React.SetStateAction<string | null>>;
  setActivePreview: React.Dispatch<React.SetStateAction<string>>;
  askForEmailHandler: () => void;
  askForHeadlineHandler: () => void;
  askForWebsiteHandler: () => void;
  askForAvatarHandler: () => void;
}
