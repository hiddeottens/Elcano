import * as React from 'react';
import { CardHover, CardShadow } from './CardStyles';

export interface CardProps {
  children?: any;
  noHover?: boolean;
}

export default function Card(props: CardProps) {
  return (
    <div>
      {
        props.noHover ? 
        <CardShadow>
          {...props.children}
          </CardShadow> :
        <CardHover>
          {...props.children}
          </CardHover>
      }
    </div>
  );
}
