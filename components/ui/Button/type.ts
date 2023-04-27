export default interface IButton {
  title: string;
  variant: "primary" | "secondary ";
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  variant: "primary" | "secondary ";
}
