export interface IForm {
  _id: string;
  values: {
    name: string;
  };
}

export interface FormListProps {
  form: IForm[];
  onDeleteForm: () => void;
}
