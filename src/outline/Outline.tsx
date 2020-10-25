import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Flex } from '../flex';

export interface OutlineProps {
  children: ReactNode;
  isSelected: boolean;
  onSelect: () => void;
}

interface OutlineComponentProps {
  isSelected: boolean;
}

const getBorder = ({ isSelected }: OutlineComponentProps) => {
  if (isSelected) {
    return '4px solid #c3f8c0';
  }
  return '4px solid #fff';
};

const OutlineComponent = styled(Flex)<OutlineComponentProps>`
  flex-direction: column;
  padding: 20px;
  border-bottom: ${props => getBorder(props)};
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Outline = ({
  children,
  isSelected,
  onSelect,
  ...rest
}: OutlineProps) => {
  return (
    <OutlineComponent
      onClick={() => onSelect()}
      isSelected={isSelected}
      {...rest}
    >
      {children}
    </OutlineComponent>
  );
};

export default OutlineComponent;
