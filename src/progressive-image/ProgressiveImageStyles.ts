// @ts-nocheck
import styled from '@emotion/styled';
import * as CSS from 'csstype';


export interface ImageProps {
  loading: boolean;
  rounded?: boolean;
}

export interface RootProps {
  width: number;
}

export interface WrapperProps {
  width: number;
  height: number;
  rounded?: boolean;
}

export const Root = styled.div`
  width: ${(props: RootProps): CSS.GlobalsString => 
    `${props.width}px`}
`

export const Wrapper = styled.div`
  position: relative;
  height: 0;
  padding-top: ${(props: WrapperProps): CSS.GlobalsString =>
    `calc(${props.height} / ${props.width} * 100%)`};
  background: #E5E5E5;
  background-size: cover;
  border-radius: ${(props: WrapperProps): CSS.GlobalsString =>
    props.rounded ? '50%' : ''};
`

export const ImageComponent = styled.img`
  filter: ${(props: ImageProps): CSS.GlobalsString =>
  props.loading ? 'blur(15px)' : ''};
  transition: 0.5s filter linear;
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  border-radius: ${(props: ImageProps): CSS.GlobalsString =>
    props.rounded ? '50%' : ''};
`
