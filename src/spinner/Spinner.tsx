import * as React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

export interface SpinnerProps {
  color?: string;
  size?: string;
  thickness?: string;
}

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const StyledSpinner = styled.div<SpinnerProps>`
  border: ${props => props.thickness || '0.2em'} solid
    ${props => props.color || 'rgba(0, 0, 0, 0.1)'};
  border-top: ${props => props.thickness || '0.2em'} solid #ffff;
  border-radius: 50%;
  width: ${props => props.size || '0.8rem'};
  height: ${props => props.size || '0.8rem'};
  animation: ${spin} 0.8s linear infinite;
`;

export const Spinner = ({ size, color, thickness }: SpinnerProps) => {
  return <StyledSpinner size={size} color={color} thickness={thickness} />;
};

export default Spinner;
