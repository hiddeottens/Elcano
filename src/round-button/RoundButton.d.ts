import { ReactNode } from 'react';
export interface RoundButtonProps {
    children: ReactNode;
    loading?: boolean;
    onClick: () => void;
    backgroundColor?: string;
}
export declare const RoundButton: ({ children, loading, ...rest }: RoundButtonProps) => JSX.Element;
export default RoundButton;
