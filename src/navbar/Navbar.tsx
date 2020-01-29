import * as React from 'react';
import styled from '@emotion/styled'

export interface NavbarProps {
  children?: any;
}

const Nav = styled.nav`
    width: 100%;
    border: none;
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
    height: 1em;
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    padding: 1em;
    z-index: 500;
    background: white;
`;

export default function Navbar(props: NavbarProps) {
  const { children } = props;
  return (
    <Nav>
      {children}
    </Nav>
  );
}
