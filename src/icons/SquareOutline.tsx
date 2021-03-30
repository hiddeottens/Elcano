import React from 'react';
import { Icon, SVGProps, defaultIconProps } from './Icon';

export const SquareOutline = ({
  title = 'SquareOutline',
  size = defaultIconProps.size,
  color = defaultIconProps.color,
}: SVGProps) => (
  <Icon title={title}>
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 0H16C17.1046 0 18 0.89543 18 2V16C18 17.1046 17.1046 18 16 18H2C0.89543 18 0 17.1046 0 16V2C0 0.89543 0.89543 0 2 0ZM16 16V2H2V16H16Z"
        fill={color}
      />
    </svg>
  </Icon>
);

export default SquareOutline;
