import React, { Component } from 'react';
import { Image as ImageInterface } from '../common/interfaces/image';
import { Root, Wrapper, ImageComponent } from './ProgressiveImageStyles';

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
    const {
      image: { src },
    } = this.props;
    if (nextProps.image.src !== src) {
      this.update();
    }
  }

  update = () => {
    const {
      image: { preview },
    } = this.props;
    this.setState({
      loading: true,
      image: preview,
    });
    this.fetchImage();
  };

  fetchImage = () => {
    const {
      image: { src },
    } = this.props;
    if (src) {
      const image = new Image();
      image.onload = () => this.setState({ image: image.src, loading: false });
      image.src = src;
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
            isLoading={loading}
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
