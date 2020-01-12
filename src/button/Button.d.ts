/// <reference types="react" />
import './button.css';
export interface ButtonProps {
  className: string;
  title: string;
  id: string;
  onClick: Function;
}
export default function Button(props: ButtonProps): JSX.Element;
