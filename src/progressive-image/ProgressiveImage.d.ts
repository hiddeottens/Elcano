import { Component } from 'react';
import { Image as ImageInterface } from '../common/interfaces/image';
export interface ProgressiveImageProps {
    image: ImageInterface;
    alt?: string;
    rounded?: boolean;
    width: number;
    height?: number;
}
export interface ProgressiveImageState {
    image: string;
    loading: boolean;
}
export default class ProgressiveImage extends Component<ProgressiveImageProps, ProgressiveImageState> {
    constructor(props: ProgressiveImageProps);
    componentDidMount(): void;
    componentDidUpdate(nextProps: ProgressiveImageProps): void;
    update: () => void;
    fetchImage: () => void;
    render(): JSX.Element;
}
