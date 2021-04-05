/// <reference types="react" />
export declare type NotificationType = 'success' | 'error';
export interface NotificationProps {
    notification: boolean;
    type: NotificationType;
    text: string;
}
export declare const Notification: ({ notification, type, text, }: NotificationProps) => JSX.Element;
export default Notification;
