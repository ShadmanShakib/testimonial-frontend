import { UseFormRegister } from "react-hook-form";
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  register: UseFormRegister<any>;
  required?: boolean;
  name: string;
}
