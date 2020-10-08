import * as React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Heading } from '../heading';
import { Button } from '../button';
import { Background, ModalBody, ModalHeader } from './ModalStyles';

export interface ModalProps {
  children?: any;
  show: boolean;
  onClose: () => void;
  title: string;
}

export default function Modal({ show, onClose, title, children }: ModalProps) {
  return (
    <AnimatePresence>
      {show && (
        <Background
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ModalBody
            initial={{ opacity: 0, y: '50px' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '50px' }}
          >
            <ModalHeader>
              <Heading>{title}</Heading>
              <Button color="black" bg="white" onClick={onClose}>
                X
              </Button>
            </ModalHeader>
            {children}
          </ModalBody>
        </Background>
      )}
    </AnimatePresence>
  );
}
