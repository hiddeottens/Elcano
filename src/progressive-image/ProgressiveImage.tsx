import React, { Component } from 'react';
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
  constructor(props: ProgressiveImageProps) {
    super(props);
    this.state = {
      loading: true,
      image: props.image.preview
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
      image: this.props.image.preview
    });
    this.fetchImage();
  }

  fetchImage = () => {
    if (this.props.image.src) {
      const image = new Image();
      image.onload = () => this.setState({ image: image.src, loading: false });
      image.src = this.props.image.src;
    }
  }

  renderStyle = (loading: boolean) => ({
    transition: '0.5s filter linear',
    filter: `${loading ? 'blur(15px)' : ''}`,
    WebkitFilter: `${loading ? 'blur(15px)' : ''}`,
    MozFilter: `${loading ? 'blur(15px)' : ''}`,
    OFilter: `${loading ? 'blur(15px)' : ''}`,
    msFilter: `${loading ? 'blur(15px)' : ''}`
  })

  render() {
    const { loading, image } = this.state;
    const { style, alt, ...rest } = this.props;
    return (
      <img
        src={image}
        alt={alt}
        style={{
          ...style,
          ...this.renderStyle(loading)
        }}
        {...rest}
      />
    );
  }
}
