import React, { ReactNode } from 'react';
import { Button } from '../button';
import { Loader } from '../loader';

export interface RoundButtonProps {
  children: ReactNode;
  loading?: boolean;
  onClick: () => void;
  backgroundColor?: string;
}

export const RoundButton = ({
  children,
  loading = false,
  ...rest
}: RoundButtonProps) => {
  return (
    <Button variant="round" {...rest}>
      {!loading ? children : <Loader />}
    </Button>
  );
};

export default RoundButton;
