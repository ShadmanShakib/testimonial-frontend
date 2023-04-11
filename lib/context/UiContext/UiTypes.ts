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
