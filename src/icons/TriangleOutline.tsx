import React from 'react';
import { Icon, SVGProps, defaultIconProps } from './Icon';

export const TriangleOutline = ({
  title = 'TriangleOutline',
  size = defaultIconProps.size,
  color = defaultIconProps.color,
}: SVGProps) => (
  <Icon title={title}>
    <svg
      width={size}
      height={size}
      viewBox="0 0 23 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.8128 0.37L21.9052 17.63C22.0351 17.8667 22.0351 18.1533 21.9052 18.39L21.7651 18.62C21.6355 18.8573 21.3854 19.0035 21.115 19H0.8902C0.619822 19.0035 0.369668 18.8573 0.240046 18.62L0.100013 18.39C-0.0298791 18.1533 -0.0298791 17.8667 0.100013 17.63L10.2124 0.37C10.3492 0.141211 10.5959 0.0008087 10.8626 0H11.1626C11.4293 0.0008087 11.676 0.141211 11.8128 0.37ZM11.0026 3L2.79065 17H19.2045L11.0026 3Z"
        fill={color}
      />
    </svg>
  </Icon>
);

export default TriangleOutline;
