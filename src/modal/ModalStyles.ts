import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Button } from '../button';

export const ModalBody = styled(motion.div)`
  width: 100%;
  height: 50%;
  border-radius: 16px;
  background: #fff;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin: 1rem;
  @media (min-width: 650px) {
    width: 50%;
  }
`;

export const ModalHeader = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalCloseButton = styled(Button)`
  width: auto;
  color: #000;
  box-shadow: none;
`;

export const Background = styled(motion.div)`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
`;
