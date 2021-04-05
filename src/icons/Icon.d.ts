import React from 'react';
export interface SVGProps {
    size?: number;
    color?: string;
    title?: string;
}
export declare const defaultIconProps: SVGProps;
interface IconProps {
    title: string;
    children: React.ReactNode;
}
export declare const Icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<HTMLDivElement>>;
export {};
