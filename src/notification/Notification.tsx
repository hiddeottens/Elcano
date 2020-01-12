import * as React from 'react';
import './notification.css';

export type NotificationType = 'success' | 'error';

export interface NotificationProps {
  visible: boolean;
  text: string;
  type: NotificationType;
};

export default function Notification(props: NotificationProps) {
  const { text, type, visible } = props;
  return (
    <div className="notification">
      <div
        className={`notification notification-slide-${visible ? 'in' : 'out'}`}
        style={{ height: '100%' }}
      >
        {
          visible &&
            <div
              style={{
                height: '100%',
                position: 'relative',
                backgroundColor: type === 'success' ? '#2ddad3' : '#f46d6d'
              }}
            >
              <p
                className="notification__text"
              >{text}
              </p>
            </div>
        }
      </div>
    </div>
  );
}
