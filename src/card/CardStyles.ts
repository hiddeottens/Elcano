import styled from '@emotion/styled';

export interface CardProps {
  noHover?: boolean;
}

// .share-btn {
//   visibility: hidden;
// }

// .favorite-btn {
//   visibility: hidden;
//   position: absolute;
//   right: 0px;
//   top: 0px;
// }

// .card:hover .share-btn {
//   visibility: visible;
// }

// .card:hover .favorite-btn {
//   visibility: visible;
// }

export const CardShadow = styled.div`
  border: none;
  box-shadow: rgba(50, 50, 93, 0.1) 0px 5px 35px,
    rgba(0, 0, 0, 0.07) 0px 5px 15px;
  border-radius: 5px;
  padding: 5px;
`;

export const CardHover = styled.div`
  padding: 5px;
  border: 1px solid transparent;
  &:hover {
    border: none;
    box-shadow: rgba(50, 50, 93, 0.1) 0px 5px 35px,
      rgba(0, 0, 0, 0.07) 0px 5px 15px;
    border-radius: 5px;
  }
`;
