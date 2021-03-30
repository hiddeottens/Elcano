import React from 'react';
import { Icon, SVGProps, defaultIconProps } from './Icon';

export const Heart = ({
  title = 'Heart',
  size = defaultIconProps.size,
  color = defaultIconProps.color,
}: SVGProps) => (
  <Icon title={title}>
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 5.5C20 2.46243 17.5376 0 14.5 0C12.7819 0.0535358 11.1586 0.800238 10 2.07C8.84137 0.800238 7.2181 0.0535358 5.5 0C2.46243 0 0 2.46243 0 5.5C0 9.42 4.75 13.75 7 16L9.28 18.28C9.42052 18.4207 9.61116 18.4998 9.81 18.5H10.19C10.3888 18.4998 10.5795 18.4207 10.72 18.28L13 16C15.25 13.75 20 9.42 20 5.5Z"
        fill={color}
      />
    </svg>
  </Icon>
);

export default Heart;
