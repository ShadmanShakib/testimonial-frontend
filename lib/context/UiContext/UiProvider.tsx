import React, { useReducer, useMemo } from "react";
import UiContext from "./UiContext";
import {
  default as UiContextReducer,
  UiContextState,
  initialUiContextState,
} from "./UiReducer";

type UiContextProps = {
  children: React.ReactNode;
};

export type UiContextType = UiContextState & {
  setSidebarIsActive: React.Dispatch<React.SetStateAction<string | null>>;
  setActivePreview: React.Dispatch<React.SetStateAction<string>>;
  askForEmailHandler: () => void;
  askForHeadlineHandler: () => void;
  askForWebsiteHandler: () => void;
  askForAvatarHandler: () => void;
  toggleModalHandler: () => void;
  closeModal: any;
};

const UiContextProvider = ({ children }: UiContextProps) => {
  const [state, dispatch] = useReducer(UiContextReducer, initialUiContextState);

  const setSidebarIsActive = (value: any | null) => {
    dispatch({ type: "SET_SIDEBAR_IS_ACTIVE", payload: value });
  };
  const closeModal = useMemo(() => {
    dispatch({ type: "CLOSE_MODAL" });
  }, []);
  const toggleModalHandler = () => {
    dispatch({ type: "SET_MODAL_IS_OPEN" });
  };
  const setActivePreview = (value: any) => {
    dispatch({ type: "SET_ACTIVE_PREVIEW", payload: value });
  };

  const askForEmailHandler = () => {
    dispatch({ type: "TOGGLE_ASK_FOR_EMAIL" });
  };

  const askForHeadlineHandler = () => {
    dispatch({ type: "TOGGLE_ASK_FOR_HEADLINE" });
  };

  const askForWebsiteHandler = () => {
    dispatch({ type: "TOGGLE_ASK_FOR_WEBSITE" });
  };

  const askForAvatarHandler = () => {
    dispatch({ type: "TOGGLE_ASK_FOR_AVATAR" });
  };

  const uiContextValue = useMemo<UiContextType>(
    () => ({
      ...state,
      setSidebarIsActive,
      setActivePreview,
      askForEmailHandler,
      askForHeadlineHandler,
      askForWebsiteHandler,
      askForAvatarHandler,
      toggleModalHandler,
      closeModal,
    }),
    [state]
  );

  return (
    <UiContext.Provider value={uiContextValue}>{children}</UiContext.Provider>
  );
};

export default UiContextProvider;
