import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const SlideUpBody = styled(motion.div)`
  width: 100%;
  height: 80%;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  background: #fff;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const SlideUpHeader = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Background = styled.div`
  position: fixed;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
`;
