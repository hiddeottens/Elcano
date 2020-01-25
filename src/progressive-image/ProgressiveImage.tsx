import React, { Component } from 'react';
import { Image as ImageInterface } from '../common/interfaces/image';
import {
  Root,
  Wrapper,
  ImageComponent
} from './ProgressiveImageStyles'

export interface ProgressiveImageProps {
  image: ImageInterface;
  alt?: string;
  rounded?: boolean;
  width: number;
  height: number;
}

export interface ProgressiveImageState {
  image: string;
  loading: boolean;
}
export default class ProgressiveImage extends Component<
  ProgressiveImageProps,
  ProgressiveImageState
> {
  constructor(props: ProgressiveImageProps) {
    super(props);
    this.state = {
      loading: true,
      image: props.image.preview,
    };
  }

  componentDidMount() {
    this.fetchImage();
  }

  componentDidUpdate(nextProps: ProgressiveImageProps) {
    if (nextProps.image.src !== this.props.image.src) {
      this.update();
    }
  }

  update = () => {
    this.setState({
      loading: true,
      image: this.props.image.preview,
    });
    this.fetchImage();
  };

  fetchImage = () => {
    if (this.props.image.src) {
      const image = new Image();
      image.onload = () => this.setState({ image: image.src, loading: false });
      image.src = this.props.image.src;
    }
  };

  render() {
    const { loading, image } = this.state;
    const { alt, width, height, rounded, ...rest } = this.props;
    return (
      <Root width={width}>
        <Wrapper width={width} height={height} rounded={rounded}>
          <ImageComponent
            src={image}
            alt={alt}
            loading={loading}
            width={width}
            height={height}
            rounded={rounded}
            {...rest}
          />
        </Wrapper>
      </Root>
    );
  }
}
