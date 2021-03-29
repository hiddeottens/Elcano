import styled from '@emotion/styled';

export const CartIconBody = styled.span`
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;
  margin-left: 5px;
  padding: 3px;
  border: 1px solid #0fc3ff;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  color: #0fc3ff;
  font-size: 12px;
  line-height: 22px;
  text-align: center;
  letter-spacing: -0.7px;
  &:after {
    position: absolute;
    bottom: 90%;
    left: 50%;
    width: 10px;
    height: 6px;
    margin-bottom: 1px;
    margin-left: -6px;
    border: 1px solid #0fc3ff;
    border-bottom: 0;
    border-top-left-radius: 99px;
    border-top-right-radius: 99px;
    content: '';
    pointer-events: none;
  }
`;

export default CartIconBody;
