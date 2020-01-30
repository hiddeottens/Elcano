import * as React from 'react';
import { Heading as HeadingComponent } from './headingStyles';

export interface HeadingProps {
  children?: any;
}

export default function Heading(props: HeadingProps) {
 return (
    <HeadingComponent>
      {props.children}
   </HeadingComponent>
   );
};
