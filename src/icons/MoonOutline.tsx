import React from 'react';
import { Icon, SVGProps, defaultIconProps } from './Icon';

export const MoonOutline = ({
  title = 'MoonOutline',
  size = defaultIconProps.size,
  color = defaultIconProps.color,
}: SVGProps) => (
  <Icon title={title}>
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.25259 0H7.39259C7.52425 0.00293956 7.64966 0.0567369 7.74259 0.150131L7.83259 0.240209C7.93965 0.352845 7.99414 0.50554 7.98259 0.660575C7.63041 3.5594 8.53663 6.47027 10.4717 8.65579C12.4067 10.8413 15.185 12.0918 18.1026 12.0905C18.5105 12.0888 18.9179 12.062 19.3226 12.0105H19.3826C19.5217 12 19.659 12.047 19.7626 12.1406L19.8526 12.2306C19.9814 12.3667 20.0306 12.5599 19.9826 12.7411C18.571 17.4087 14.0609 20.4276 9.21173 19.9506C4.3626 19.4736 0.525975 15.6336 0.0493763 10.7802C-0.427223 5.92689 2.58904 1.41279 7.25259 0ZM9.52259 10.4991C7.45084 8.43468 6.19373 5.6908 5.98259 2.77241C3.03076 4.51657 1.47436 7.91439 2.08052 11.2911C2.68667 14.6679 5.32745 17.311 8.70127 17.9177C12.0751 18.5244 15.4699 16.9666 17.2126 14.0122C14.3106 13.8046 11.5806 12.5574 9.52259 10.4991Z"
        fill={color}
      />
    </svg>
  </Icon>
);

export default MoonOutline;
