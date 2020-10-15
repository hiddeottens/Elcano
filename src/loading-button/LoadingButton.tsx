import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Button } from '../button';
import { Loader } from '../loader';

export interface LoadingButtonProps {
  children: ReactNode;
  loading: boolean;
  [key: string]: any;
}

interface StyledLoadingButtonProps {
  loading: boolean;
}

const StyledLoadingButton = styled(Button)<StyledLoadingButtonProps>`
  opacity: ${props => (props.loading ? '0.6' : '1')};
  transition: 0.3s;
  cursor: ${props => (props.loading ? 'not-allowed' : 'pointer')};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingButton = ({
  children,
  loading,
  ...rest
}: LoadingButtonProps) => {
  return (
    <StyledLoadingButton {...rest} disabled={loading} loading={loading}>
      {!loading ? children : <Loader />}
    </StyledLoadingButton>
  );
};

export default LoadingButton;
