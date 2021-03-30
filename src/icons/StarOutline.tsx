import React from 'react';
import { Icon, SVGProps, defaultIconProps } from './Icon';

export const StarOutline = ({
  title = 'StarOutline',
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.39166 0.319989C9.46995 0.124384 9.66017 -0.00277823 9.87035 -1.09465e-05H10.1296C10.3379 -0.0044425 10.5261 0.124037 10.5983 0.319989L13.0815 6.20999L19.454 6.71999C19.6591 6.73254 19.8344 6.87241 19.8928 7.06999L19.9725 7.31999C20.0381 7.50868 19.9829 7.71839 19.8329 7.84999L14.9863 12L16.4223 18.22C16.4709 18.4188 16.3963 18.6275 16.2328 18.75L16.0134 18.9C15.9282 18.967 15.8225 19.0023 15.7143 19C15.6229 19.0019 15.533 18.9776 15.455 18.93L9.99999 15.6L4.57492 18.93C4.49692 18.9776 4.40695 19.0019 4.31563 19C4.20738 19.0023 4.10167 18.967 4.01646 18.9L3.76714 18.75C3.60364 18.6275 3.52904 18.4188 3.57766 18.22L5.01371 12L0.177024 7.85999C0.0192942 7.72917 -0.0404113 7.51364 0.027436 7.31999L0.137134 7.06999C0.195462 6.87241 0.370823 6.73254 0.575926 6.71999L6.94839 6.20999L9.39166 0.319989ZM16.6517 8.24999L11.8549 7.86999L9.99999 3.40999L8.14509 7.86999L3.3483 8.24999L7.00822 11.38L5.88132 16.06L9.99999 13.55L14.1087 16.06L12.9918 11.38L16.6517 8.24999Z"
        fill={color}
      />
    </svg>
  </Icon>
);

export default StarOutline;
