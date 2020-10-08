// @ts-nocheck
import styled from '@emotion/styled';

export const Hover = styled.div({
  opacity: 0,
  transition: 'opacity 350ms ease',
});

export const DisplayOver = styled.div({
  height: '100%',
  left: '0',
  position: 'absolute',
  top: '0',
  width: '100%',
  zIndex: 2,
  transition: 'background-color 350ms ease',
  backgroundColor: 'transparent',
  padding: '20px 20px 0 20px',
  boxSizing: 'border-box',
});

export const BigTitle = styled.h2({
  textTransform: 'uppercase',
  fontFamily: 'Helvetica',
});

export const SubTitle = styled.h4({
  fontFamily: 'Helvetica',
  transform: 'translate3d(0,50px,0)',
  transition: 'transform 350ms ease',
});

export const Paragraph = styled.p({
  transform: 'translate3d(0,50px,0)',
  transition: 'transform 350ms ease',
});

export const Background = styled.div({
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  color: '#FFF',
  position: 'relative',
  width: '500px',
  height: '350px',
  cursor: 'pointer',
  backgroundImage:
    'url(https://images.pexels.com/photos/3530054/pexels-photo-3530054.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
  [`:hover ${DisplayOver}`]: {
    backgroundColor: 'rgba(0,0,0,.5)',
  },
  [`:hover ${SubTitle}, :hover ${Paragraph}`]: {
    transform: 'translate3d(0,0,0)',
  },
  [`:hover ${Hover}`]: {
    opacity: 1,
  },
});

export const CTA = styled.a({
  position: 'absolute',
  bottom: '20px',
  left: '20px',
});
