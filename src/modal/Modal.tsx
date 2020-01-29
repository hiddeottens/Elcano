import * as React from 'react';
import { Background, Content } from './ModalStyles'; 

export interface ModalProps {
  children?: any;
  show: boolean;
}

export default function Modal(props: ModalProps) {
  const { show } = props;
    return (
      <Background show={show}>
          <Content show noHover>
          </Content>
      </Background>
    );
}
