export interface IModal {
  closeModal: () => {};
  modalIsOpen: boolean;
  setLogo: (paylaod: string | null) => {};
}
