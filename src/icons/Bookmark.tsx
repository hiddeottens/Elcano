import React from 'react';
import { Icon, SVGProps, defaultIconProps } from './Icon';

export const Bookmark = ({
  title = 'Bookmark',
  size = defaultIconProps.size,
  color = defaultIconProps.color,
}: SVGProps) => (
  <Icon title={title}>
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 19C16.0007 19.3639 15.8037 19.6994 15.4856 19.8762C15.1676 20.0529 14.7786 20.0429 14.47 19.85L8.53 16.13C8.20573 15.9273 7.79427 15.9273 7.47 16.13L1.53 19.85C1.22143 20.0429 0.832448 20.0529 0.514355 19.8762C0.196263 19.6994 -0.000728975 19.3639 1.09473e-07 19V2C1.09473e-07 0.89543 0.89543 0 2 0H14C15.1046 0 16 0.89543 16 2V19Z"
        fill={color}
      />
    </svg>
  </Icon>
);

export default Bookmark;
