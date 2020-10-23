import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { RoundButton } from '../round-button';

export interface StaticRoundButtonProps {
  children: ReactNode;
  loading?: boolean;
  zIndex?: number;
  onClick: () => void;
}

interface ContainerProps {
  zIndex: number;
}

const Container = styled.div<ContainerProps>`
  padding: 8px;
  box-sizing: border-box;
  width: 100%;
  position: fixed;
  bottom: 0px;
  left: 0px;
  text-align: right;
  background: none;
  box-shadow: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: ${props => props.zIndex};
`;

export const StaticRoundButton = ({
  children,
  loading = false,
  zIndex = 1,
  ...rest
}: StaticRoundButtonProps) => (
  <Container zIndex={zIndex}>
    <RoundButton {...rest} loading={loading}>
      {children}
    </RoundButton>
  </Container>
);

export default StaticRoundButton;
