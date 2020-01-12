import { Component } from 'react';
import { Image } from '../common/interfaces/image';
export interface ProgressiveImageProps {
    image: Image;
    style?: any;
    alt?: string;
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
    renderStyle: (loading: boolean) => {
        transition: string;
        filter: string;
        WebkitFilter: string;
        MozFilter: string;
        OFilter: string;
        msFilter: string;
    };
    render(): JSX.Element;
}
