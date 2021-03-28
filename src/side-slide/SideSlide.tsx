import * as React from 'react';
import { AnimatePresence } from 'framer-motion';
import { RoundButton } from '../round-button';
import { SideSlideBody, CloseButtonContainer, CloseButton } from './styles';
import { Backdrop } from '../backdrop';

export interface SideSlideProps {
  children?: React.ReactNode;
  show: boolean;
  onClose: () => void;
}

export const SideSlide = ({ show, onClose, children }: SideSlideProps) => (
  <AnimatePresence>
    <Backdrop show={show}>
      <SideSlideBody
        initial={{ opacity: 0, x: '-100%' }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'tween' }}
        exit={{ opacity: 0, x: '-100%' }}
      >
        {children}
      </SideSlideBody>

      <CloseButtonContainer
        initial={{ opacity: 0, y: '5%' }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'tween' }}
        exit={{ opacity: 0, y: '5%' }}
      >
        <CloseButton onClick={onClose} />
      </CloseButtonContainer>
    </Backdrop>
  </AnimatePresence>
);
