import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const SideSlideBody = styled(motion.div)`
  width: 260px;
  height: 100%;
  background: #fff;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const CloseButtonContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const Bar = styled.span`
  background-color: #0fc3ff;
  display: block;
  position: absolute;
  top: calc(50% - 1px);
  z-index: 0;
  width: 22px;
  height: 2px;
  opacity: 1;
  transition: transform 0.15s ease-in 0s, margin 0.15s ease-in 0.2s,
    opacity 0s ease-in 0.15s;
  transform: rotate(0deg);
  pointer-events: none;
`;

export const MenuToggle = styled.button`
  position: absolute;
  z-index: 50;
  left: 15px;
  width: 60px;
  height: 30px;
  padding: 0;
  background-color: #fff;
  display: block;
  border: none;
  outline: none;
  & span:first-child {
    margin-top: -7px;
  }
  & span:nth-child(2) {
    margin-top: -1px;
  }
  & span:last-child {
    margin-top: 5px;
  }
`;

export const CloseButton = styled.div`
  position: fixed;
  z-index: 999;
  top: 20px;
  opacity: 1;
  cursor: pointer;
  &:before {
    transform: rotate(45deg);
    position: absolute;
    left: 0;
    width: 2px;
    display: block;
    height: 30px;
    margin-left: 20px;
    margin-top: 5px;
    background-color: #fff;
    content: '';
  }
  &:after {
    transform: rotate(-45deg);
    position: absolute;
    left: 0;
    width: 2px;
    display: block;
    height: 30px;
    margin-left: 20px;
    margin-top: 5px;
    background-color: #fff;
    content: '';
  }
`;
