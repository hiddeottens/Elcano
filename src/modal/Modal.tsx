import * as React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Heading } from '../heading';
import { ModalBody, ModalHeader, ModalCloseButton } from './styles';
import { Backdrop } from '../backdrop';

export interface ModalProps {
  children?: React.ReactNode;
  show: boolean;
  onClose: () => void;
  title: string;
}

export function Modal({ show, onClose, title, children }: ModalProps) {
  return (
    <AnimatePresence>
      <Backdrop show={show}>
        <ModalBody
          initial={{ opacity: 0, y: '50px' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '50px' }}
        >
          <ModalHeader>
            <Heading>{title}</Heading>
            <ModalCloseButton
              variant="minimal"
              color="black"
              bg="white"
              onClick={onClose}
            >
              X
            </ModalCloseButton>
          </ModalHeader>
          {children}
        </ModalBody>
      </Backdrop>
    </AnimatePresence>
  );
}
