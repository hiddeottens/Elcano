import * as React from 'react';
import './button.css';

export interface ButtonProps {
  className: string;
  title: string;
  id: string;
  onClick: Function;
}

export default function Button(props: ButtonProps) {
  const { className, title, id, onClick } = props;
  return (
    <button onClick={() => onClick()} id={id} className={className}>
      {title}
    </button>
  );
}
