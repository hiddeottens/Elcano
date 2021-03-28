import * as React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Background } from './styles';

export interface BackdropProps {
  children: React.ReactNode;
  show: boolean;
}

export function Backdrop({ show, children }: BackdropProps) {
  return (
    <AnimatePresence>
      {show && (
        <Background
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
