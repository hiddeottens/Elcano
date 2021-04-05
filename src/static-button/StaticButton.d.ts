import { ReactNode } from 'react';
export interface StaticButtonProps {
    children?: ReactNode;
    text: string;
    loading?: boolean;
    show?: boolean;
    zIndex?: number;
    initial?: boolean;
    onClick: () => void;
}
export declare const StaticButton: ({ children, text, loading, show, zIndex, initial, ...rest }: StaticButtonProps) => JSX.Element;
export default StaticButton;
