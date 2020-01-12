import * as React from 'react';
import './card.css';

export interface CardProps {
  children?: any;
  noHover?: boolean;
}

const shadow = {
  border: 'none',
  boxShadow:
    'rgba(50, 50, 93, 0.1) 0px 5px 35px, rgba(0, 0, 0, 0.07) 0px 5px 15px',
  borderRadius: 5,
};

export default function Card(props: CardProps) {
  return (
    <div className="card" style={props.noHover ? shadow : undefined}>
      {...props.children}
    </div>
  );
}
