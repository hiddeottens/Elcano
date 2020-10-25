import * as React from 'react';
import { AnimatePresence } from 'framer-motion';
import { RoundButton } from '../round-button';
import { Heading } from '../heading';
import { Background, SlideUpBody, SlideUpHeader } from './SlideUpStyles';

export interface SlideUpProps {
  children?: any;
  show: boolean;
  onClose: () => void;
  title: string;
}

export const SlideUp = ({ show, onClose, title, children }: SlideUpProps) => (
  <AnimatePresence>
    {show && (
      <Background>
        <SlideUpBody
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'tween' }}
          exit={{ opacity: 0, y: '100%' }}
        >
          <SlideUpHeader>
            <Heading>{title}</Heading>
            <RoundButton onClick={onClose}>X</RoundButton>
          </SlideUpHeader>
          {children}
        </SlideUpBody>
      </Background>
    )}
  </AnimatePresence>
);

export default SlideUp;
