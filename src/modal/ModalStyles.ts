// @ts-nocheck
import styled from '@emotion/styled';
import { Card } from '../card'

export interface ModalProps {
  show: boolean;
}

export const Content = styled(Card)`
  visibility: ${(props: ModalProps) => 
    props.show ? 'visible' : 'hidden'
  };
`;

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: ${(props: ModalProps) => 
    props.show ? '0.5' : '0'
  };
  transition: opacity .15s linear;
`;