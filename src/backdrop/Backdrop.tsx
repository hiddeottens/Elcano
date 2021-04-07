import * as React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Background } from './styles';

export interface BackdropProps {
  children?: React.ReactNode;
  show: boolean;
  onClick?: () => void;
}

export function Backdrop({ show, children, onClick }: BackdropProps) {
  return (
    <AnimatePresence>
      {show && (
        <Background
          onClick={onClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
        >
          {children}
        </Background>
      )}
    </AnimatePresence>
  );
}
