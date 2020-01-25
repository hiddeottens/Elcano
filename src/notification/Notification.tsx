import * as React from 'react';
import './notification.css';
import { Wrapper, Body } from './NotificationStyles';

export type NotificationType = 'success' | 'error';

export interface NotificationProps {
  visible: boolean;
  text: string;
  type: NotificationType;
}

export default function Notification(props: NotificationProps) {
  const { text, type, visible } = props;
  return (
    <Wrapper>
      <div
        className={`notification notification-slide-${visible ? 'in' : 'out'}`}
        style={{ height: '100%' }}
      >
        {visible && (
          <Body type={type}>
            <p>{text}</p>
          </Body>
        )}
      </div>
    </Wrapper>
  );
}
