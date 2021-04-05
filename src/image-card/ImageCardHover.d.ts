/// <reference types="react" />
export interface ImageCardHoverProps {
    src: string;
    alt: string;
    height?: number;
    width?: number;
    onClick?: () => void;
}
export declare const ImageCardHover: ({ src, onClick, alt, width, height, }: ImageCardHoverProps) => JSX.Element;
export default ImageCardHover;
