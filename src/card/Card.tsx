import * as React from 'react';
import { CardHover, CardShadow } from './CardStyles';

export interface CardProps {
  children?: any;
  noHover?: boolean;
}

export default function Card({ noHover, children }: CardProps) {
  return (
    <>
      {noHover ? (
        <CardShadow>{...children}</CardShadow>
      ) : (
        <CardHover>{...children}</CardHover>
      )}
    </>
  );
}
