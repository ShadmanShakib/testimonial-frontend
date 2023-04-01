export interface State {
  isDesign: boolean;
  modalIsOpen: boolean;
}

export type Action =
  | {
      type: "TOGGLE_ISDESIGN";
    }
  | {
      type: "TOGGLE_IMAGE_MODAL";
    };
