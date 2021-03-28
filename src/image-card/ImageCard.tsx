import React from 'react';
import { Flex, Image } from 'rebass';
import styled from '@emotion/styled';

const ProductCardContainer = styled(Flex)`
  display: flex;
  position: relative;
  width: fit-content;
  border-radius: 8px;
  overflow: hidden;
`;

interface ImageProps {
  height?: number;
  width?: number;
}

const StyledImage = styled(Image)<ImageProps>`
  width: ${props => props.width || 200}px;
  height: ${props => props.height || 300}px;
  object-fit: cover;
`;

export interface ImageCardProps {
  src: string;
  alt: string;
  height?: number;
  width?: number;
}

export const ImageCard = ({ src, alt, width, height }: ImageCardProps) => (
  <ProductCardContainer>
    <StyledImage src={src} alt={alt} width={width} height={height} />
  </ProductCardContainer>
);

export default ImageCard;
