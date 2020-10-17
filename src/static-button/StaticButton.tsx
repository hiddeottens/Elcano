import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { AnimatePresence, motion } from 'framer-motion';
import { LoadingButton } from '../loading-button';

export interface StaticButtonProps {
  children: ReactNode;
  text: string;
  loading: boolean;
  show: boolean;
  zIndex: number;
  onClick: () => void;
}

interface ContainerProps {
  zIndex: number;
}

const Container = styled(motion.div)<ContainerProps>`
  padding: 8px;
  box-sizing: border-box;
  width: 100%;
  position: fixed;
  bottom: 0px;
  left: 0px;
  text-align: right;
  background: #fff;
  box-shadow: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: ${props => props.zIndex};
`;

export const StaticButton = ({
  children = null,
  text,
  loading,
  show = true,
  zIndex = 1,
  ...rest
}: StaticButtonProps) => (
  <AnimatePresence>
    {show && (
      <Container
        zIndex={zIndex}
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
      >
        {children}
        <LoadingButton {...rest} loading={loading} width={[1, 1, 1 / 4]}>
          {text}
        </LoadingButton>
      </Container>
    )}
  </AnimatePresence>
);

export default StaticButton;
