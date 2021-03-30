import React from 'react';
import { Icon, SVGProps, defaultIconProps } from './Icon';

export const Moon = ({
  title = 'Moon',
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
        d="M20 12.7481C18.5872 17.4116 14.0731 20.4279 9.21976 19.9513C4.36641 19.4747 0.526434 15.6381 0.0494193 10.7889C-0.427595 5.93981 2.59129 1.42964 7.25891 0.0180811C7.44011 -0.0299699 7.63329 0.0192289 7.76935 0.148081L7.85943 0.238081C7.96659 0.350619 8.02112 0.503181 8.00956 0.658081C7.62374 3.76601 8.69114 6.8784 10.9036 9.09678C13.1161 11.3152 16.2274 12.3926 19.3394 12.0181C19.4945 12.0065 19.6472 12.061 19.7598 12.1681L19.8499 12.2581C19.9788 12.394 20.0281 12.587 19.98 12.7681L20 12.7481Z"
        fill={color}
      />
    </svg>
  </Icon>
);

export default Moon;
