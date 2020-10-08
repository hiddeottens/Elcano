import * as React from 'react';
import { Card } from '../card';
import {
  Background,
  DisplayOver,
  BigTitle,
  Hover,
  SubTitle,
  Paragraph,
  CTA,
} from './CardOverlayStyles';

export interface CardProps {
  children?: any;
  noHover?: boolean;
}

export default function CardOverlay() {
  return (
    <Card noHover>
      <Background>
        <DisplayOver>
          <BigTitle>Really Cool Title!</BigTitle>
          <Hover>
            <SubTitle>You could vacation here!</SubTitle>
            <Paragraph>
              More description about this really cool random desert photo from
              unsplash!
            </Paragraph>
            <CTA>View More +</CTA>
          </Hover>
        </DisplayOver>
      </Background>
    </Card>
  );
}
