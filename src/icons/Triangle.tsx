import React from 'react';
import { Icon, SVGProps, defaultIconProps } from './Icon';

export const Triangle = ({
  title = 'Triangle',
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
        d="M21.9052 17.63L11.8128 0.37C11.676 0.141211 11.4293 0.0008087 11.1626 0H10.8626C10.5959 0.0008087 10.3492 0.141211 10.2124 0.37L0.100013 17.63C-0.0298791 17.8667 -0.0298791 18.1533 0.100013 18.39L0.240046 18.62C0.369668 18.8573 0.619822 19.0035 0.8902 19H21.115C21.3854 19.0035 21.6355 18.8573 21.7651 18.62L21.9052 18.39C22.0351 18.1533 22.0351 17.8667 21.9052 17.63Z"
        fill={color}
      />
    </svg>
  </Icon>
);

export default Triangle;
