/// <reference types="react" />
export interface IconProps {
    icon: string;
    size?: number;
    active?: boolean;
    onClick?: () => void;
    style?: any;
}
export declare const Icon: ({ onClick, style, icon, size, active, }: IconProps) => JSX.Element;
