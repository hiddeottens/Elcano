import React, { forwardRef, ReactNode } from 'react';
import { Box } from 'rebass';

export interface NavContainerProps {
  children: ReactNode;
}

export const NavContainer = forwardRef(
  ({ children, ...rest }: NavContainerProps, ref) => {
    return (
      <Box
        ref={ref}
        variant="navContainer"
        css={{
          width: '100%',
          position: 'fixed',
          height: '6em',
          top: 0,
          left: 0,
          zIndex: 99999,
        }}
        {...rest}
      >
        {children}
      </Box>
    );
  }
);

export default NavContainer;
