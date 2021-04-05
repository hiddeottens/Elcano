import * as React from 'react';
export interface SlideUpProps {
    children?: React.ReactNode;
    show: boolean;
    onClose: () => void;
    heading: string | JSX.Element;
}
export declare const SlideUp: ({ show, onClose, heading, children }: SlideUpProps) => JSX.Element;
export default SlideUp;
