export interface State {
  isDesign: boolean;
  isImageModal: boolean;
}

export type Action =
  | {
      type: "TOGGLE_ISDESIGN";
    }
  | {
      type: "TOGGLE_IMAGE_MODAL";
    };
