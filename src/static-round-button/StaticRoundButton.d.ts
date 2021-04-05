import { ReactNode } from 'react';
export interface StaticRoundButtonProps {
    children: ReactNode;
    loading?: boolean;
    zIndex?: number;
    onClick: () => void;
}
export declare const StaticRoundButton: ({ children, loading, zIndex, ...rest }: StaticRoundButtonProps) => JSX.Element;
export default StaticRoundButton;
