import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Box } from '../box';

export const SlideUpContainer = styled(motion.span)`
  width: 100%;
  height: 90%;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  background: #fff;
  position: fixed;
  bottom: 0;
`;

export const SlideUpHeader = styled(Box)`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SlideUpBody = styled(Box)`
  overflow: scroll;
  height: 80%;
`;

export const Background = styled(Box)`
  position: fixed;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
`;
