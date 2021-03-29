import * as React from 'react';
import { AnimatePresence } from 'framer-motion';
import { SideSlideBody, CloseButtonLeft, CloseButtonRight } from './styles';
import { Backdrop } from '../backdrop';
import { Direction, SideSlideProps } from './types';

export const SideSlide = ({
  show,
  onClose,
  children,
  direction = Direction.LEFT,
}: SideSlideProps) => (
  <>
    <AnimatePresence>
      {show && (
        <>
          <SideSlideBody
            initial={{
              opacity: 0,
              x: direction === Direction.LEFT ? '-100%' : '100vw',
            }}
            animate={{
              opacity: 1,
              x: direction === Direction.LEFT ? 0 : 'calc(100vw - 100%)',
            }}
            transition={{ type: 'tween' }}
            exit={{
              opacity: 0,
              x: direction === Direction.LEFT ? '-100%' : '100vw',
            }}
          >
            {children}
          </SideSlideBody>

          {direction === Direction.LEFT ? (
            <CloseButtonLeft
              initial={{ opacity: 0, y: '5%' }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'tween' }}
              exit={{ opacity: 0, y: '5%' }}
              onClick={onClose}
            />
          ) : (
            <CloseButtonRight
              initial={{ opacity: 0, y: '5%' }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'tween' }}
              exit={{ opacity: 0, y: '5%' }}
              onClick={onClose}
            />
          )}
        </>
      )}
    </AnimatePresence>
    <Backdrop show={show} />
  </>
);

export default SideSlide;
