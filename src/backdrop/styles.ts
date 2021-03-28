import styled from '@emotion/styled';
import { motion } from 'framer-motion';

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
  background: rgba(0, 0, 0, 0.65);
`;

export default Background;
