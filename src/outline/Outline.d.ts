import React, { ReactNode } from 'react';
export interface OutlineProps {
    children: ReactNode;
    isSelected: boolean;
    onSelect: () => void;
}
interface OutlineComponentProps {
    isSelected: boolean;
}
declare const OutlineComponent: import("@emotion/styled").StyledComponent<import("rebass").FlexProps & {
    children?: React.ReactNode;
} & {
    theme?: import("@emotion/react").Theme | undefined;
} & OutlineComponentProps, {}, {}>;
export declare const Outline: ({ children, isSelected, onSelect, ...rest }: OutlineProps) => JSX.Element;
export default OutlineComponent;
