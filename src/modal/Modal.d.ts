import * as React from 'react';
export interface ModalProps {
    children?: React.ReactNode;
    show: boolean;
    onClose: () => void;
    title: string;
}
export declare function Modal({ show, onClose, title, children }: ModalProps): JSX.Element;
