import React from 'react';
import { Image } from 'rebass';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const ProductCardContainer = styled(motion.div)`
  cursor: pointer;
  display: flex;
  position: relative;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 1px,
      rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px;
  }
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

export interface ImageCardHoverProps {
  src: string;
  alt: string;
  height?: number;
  width?: number;
  onClick?: () => void;
}

export const ImageCardHover = ({
  src,
  onClick,
  alt,
  width,
  height,
}: ImageCardHoverProps) => (
  <ProductCardContainer whileHover={{ scale: 1.01 }} onClick={onClick}>
    <StyledImage src={src} alt={alt} width={width} height={height} />
  </ProductCardContainer>
);

export default ImageCardHover;
