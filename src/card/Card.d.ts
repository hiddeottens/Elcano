/// <reference types="react" />
import './card.css';
export interface CardProps {
  children?: any;
  noHover?: boolean;
}
export default function Card(props: CardProps): JSX.Element;
