import styled from '@emotion/styled';

export interface ImageProps {
  isLoading: boolean;
  rounded?: boolean;
}

export interface RootProps {
  width: number;
}

export interface WrapperProps {
  width: number;
  height?: number;
  rounded?: boolean;
}

export const Root = styled.div`
  width: ${(props: RootProps) => `${props.width}px`};
`;

export const Wrapper = styled.div`
  position: relative;
  height: 0;
  padding-top: ${(props: WrapperProps) =>
    `calc(${props.height || 0} / ${props.width} * 100%)`};
  background: #e5e5e5;
  background-size: cover;
  border-radius: ${(props: WrapperProps) => (props.rounded ? '50%' : '')};
`;

export const ImageComponent = styled.img`
  filter: ${(props: ImageProps) => (props.isLoading ? 'blur(15px)' : '')};
  transition: 0.5s filter linear;
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  border-radius: ${(props: ImageProps) => (props.rounded ? '50%' : '')};
`;
