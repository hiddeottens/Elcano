import React, { forwardRef } from 'react';

export interface SVGProps {
  size?: number;
  color?: string;
  title?: string;
}

export const defaultIconProps: SVGProps = { color: '#b5b5b5', size: 24 };

interface IconProps {
  title: string;
  children: React.ReactNode;
}

export const Icon = forwardRef<HTMLDivElement, IconProps>(
  ({ title, children }: IconProps, ref) => {
    return (
      <div ref={ref} title={title}>
        {children}
      </div>
    );
  }
);

Icon.displayName = 'icon';
