import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Background = styled(motion.div)`
  z-index: 101;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.65);
  content: '';
  position: fixed;
`;

export default Background;
