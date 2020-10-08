import React from 'react';
import { ProgressiveImage } from '../src';

export default {
  title: 'Image',
};

const image = {
  src:
    'https://img.huffingtonpost.com/asset/5dcc613f1f00009304dee539.jpeg?cache=QaTFuOj2IM&ops=crop_834_777_4651_2994%2Cscalefit_720_noupscale',
  preview:
    'https://img.huffingtonpost.com/asset/5dcc613f1f00009304dee539.jpeg?cache=QaTFuOj2IM&ops=crop_834_777_4651_2994%2Cscalefit_720_noupscale',
};

export const standard = () => (
  <ProgressiveImage image={image} width={400} height={200} />
);

standard.story = {
  name: 'Standard',
};
