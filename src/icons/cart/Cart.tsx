import * as React from 'react';
import { CartIconBody } from './styles';

export interface CartIconProps {
  count?: number;
}

export const CartIcon = ({ count = 0 }: CartIconProps) => (
  <CartIconBody>{count}</CartIconBody>
);
