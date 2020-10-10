import React, { forwardRef, ReactNode } from 'react';
import { Box } from 'rebass';

export interface NavProps {
  children: ReactNode;
}

export const Nav = forwardRef(({ children, ...rest }: NavProps, ref) => {
  return (
    <Box
      ref={ref}
      variant="nav"
      as="nav"
      css={{
        position: 'fixed',
        height: '4em',
        top: 0,
        width: '100%',
        zIndex: 99999,
        backgroundColor: '#000',
      }}
      {...rest}
    >
      {children}
    </Box>
  );
});

export default Nav;
