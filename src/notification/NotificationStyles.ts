// @ts-nocheck
import './notification.css';
import styled from '@emotion/styled';
import * as CSS from 'csstype';

export type NotificationType = 'success' | 'error';

export interface BodyProps {
  type: NotificationType;
}

export const Body = styled.div`
background-color: ${(props: BodyProps): CSS.GlobalsString =>
  props.type === 'success' ? '#2ddad3' : '#f46d6d'};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Wrapper = styled.div`
  width: 100%;
  top: 56px;
  position: fixed;
  text-align: center;
  color: #fff;
  z-index: 99;
  height: 25px;
`;
