/// <reference types="react" />
export interface ImageCardProps {
    src: string;
    alt: string;
    height?: number;
    width?: number;
}
export declare const ImageCard: ({ src, alt, width, height }: ImageCardProps) => JSX.Element;
export default ImageCard;
