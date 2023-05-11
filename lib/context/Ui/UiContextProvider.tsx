"use client";
import React, { useReducer, useMemo, useCallback } from "react";
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
  setActivePreview: React.Dispatch<React.SetStateAction<string>>;
  askForEmailHandler: () => void;
  askForHeadlineHandler: () => void;
  askForWebsiteHandler: () => void;
  askForAvatarHandler: () => void;
  toggleModalHandler: () => void;
  toggleAccountDropDown: () => void;
  setCreateFormDialog: () => void;

  setDeleteFormDialog: () => void;
  setDeleteFormId: (id: string) => void;
  setIsDropdown: React.Dispatch<React.SetStateAction<boolean>>;
};

const UiContextProvider = ({ children }: UiContextProps) => {
  const [state, dispatch] = useReducer(UiContextReducer, initialUiContextState);
  //setting the dropdown
  const setIsDropdown = useCallback(() => {
    dispatch({ type: "SET_ISDROPDOWN" });
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
  const toggleAccountDropDown = () => {
    dispatch({ type: "TOGGLE_ACCOUNT_DROPDOWN" });
  };
  //set create form dialog

  const setCreateFormDialog = useCallback(() => {
    dispatch({ type: "SET_CREATE_FORM_DIALOG" });
  }, []);

  //set delete form dialog
  const setDeleteFormDialog = useCallback(() => {
    dispatch({ type: "SET_DELETE_FORM_DIALOG" });
  }, []);
  //set delete form id
  const setDeleteFormId = (id: string) => {
    dispatch({ type: "SET_DELETE_FORM_ID", payload: id });
  };
  const uiContextValue = useMemo<UiContextType>(
    () => ({
      ...state,
      setIsDropdown,
      setDeleteFormId,
      setDeleteFormDialog,
      toggleAccountDropDown,

      setActivePreview,
      askForEmailHandler,
      askForHeadlineHandler,
      askForWebsiteHandler,
      askForAvatarHandler,
      toggleModalHandler,
      setCreateFormDialog,
    }),
    [state]
  );

  return (
    <UiContext.Provider value={uiContextValue}>{children}</UiContext.Provider>
  );
};

export default UiContextProvider;
