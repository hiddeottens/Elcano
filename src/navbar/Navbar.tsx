import * as React from 'react';
import styled from '@emotion/styled'

export interface NavbarProps {
  children?: any;
}

const Nav = styled.nav`
    width: 100%;
    border: none;
    box-shadow: 0 4px 8px #f0f1f2;
    height: 1em;
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    padding: 1em;
    z-index: 500;
`;

export default function Navbar(props: NavbarProps) {
  const { children } = props;
  return (
    <Nav>
      {children}
    </Nav>
  );
}
