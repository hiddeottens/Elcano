import React from 'react';
import { Icon, SVGProps, defaultIconProps } from './Icon';

export const BookmarkOutline = ({
  title = 'BookmarkOutline',
  size = defaultIconProps.size,
  color = defaultIconProps.color,
}: SVGProps) => (
  <Icon title={title}>
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 0H14C15.1046 0 16 0.89543 16 2V19C16 19.5523 15.5523 20 15 20C14.8128 20.0006 14.6291 19.9486 14.47 19.85L8.53 16.13C8.20573 15.9273 7.79427 15.9273 7.47 16.13L1.53 19.85C1.37086 19.9486 1.18723 20.0006 1 20C0.447715 20 0 19.5523 0 19V2C0 0.89543 0.89543 0 2 0ZM14 17.19V2H2V17.19L6.41 14.44C7.38281 13.832 8.61719 13.832 9.59 14.44L14 17.19Z"
        fill={color}
      />
    </svg>
  </Icon>
);

export default BookmarkOutline;
