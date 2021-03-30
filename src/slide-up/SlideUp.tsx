import * as React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Icon } from '../Icon';
import { RoundButton } from '../round-button';
import {
  Background,
  SlideUpBody,
  SlideUpHeader,
  SlideUpContainer,
} from './SlideUpStyles';

export interface SlideUpProps {
  children?: React.ReactNode;
  show: boolean;
  onClose: () => void;
  heading: string | JSX.Element;
}

export const SlideUp = ({ show, onClose, heading, children }: SlideUpProps) => (
  <AnimatePresence>
    {show && (
      <Background>
        <SlideUpContainer
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'tween' }}
          exit={{ opacity: 0, y: '100%' }}
        >
          <SlideUpHeader px={3}>
            {heading}
            <RoundButton onClick={onClose}>
              <Icon icon="times" />
            </RoundButton>
          </SlideUpHeader>
          <SlideUpBody px={3}>{children}</SlideUpBody>
        </SlideUpContainer>
      </Background>
    )}
  </AnimatePresence>
);

export default SlideUp;
