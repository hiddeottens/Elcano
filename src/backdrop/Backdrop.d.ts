import * as React from 'react';
export interface BackdropProps {
    children?: React.ReactNode;
    show: boolean;
}
export declare function Backdrop({ show, children }: BackdropProps): JSX.Element;
