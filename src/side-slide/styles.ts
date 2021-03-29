import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const SideSlideBody = styled(motion.div)`
  width: 230px;
  height: 100%;
  background: #fff;
  position: fixed;
  z-index: 102;
  padding: 0 15px;
  top: 0;
  bottom: 0;
  left: 0;
  min-height: fill-available;
  max-height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
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
  cursor: pointer;
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

export const CloseButtonLeft = styled(motion.div)`
  position: fixed;
  z-index: 999;
  top: 20px;
  left: 290px;
  width: 30px;
  height: 30px;
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

export const CloseButtonRight = styled(motion.div)`
  position: fixed;
  z-index: 999;
  top: 20px;
  right: 290px;
  width: 30px;
  height: 30px;
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
