/// <reference types="react" />
import './notification.css';
export declare type NotificationType = 'success' | 'error';
export interface NotificationProps {
  visible: boolean;
  text: string;
  type: NotificationType;
}
export default function Notification(props: NotificationProps): JSX.Element;
