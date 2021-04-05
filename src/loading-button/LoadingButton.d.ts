import { ReactNode } from 'react';
export interface LoadingButtonProps {
    children: ReactNode;
    loading: boolean;
    [key: string]: any;
}
export declare const LoadingButton: ({ children, loading, ...rest }: LoadingButtonProps) => JSX.Element;
export default LoadingButton;
