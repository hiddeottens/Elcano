import React from 'react';
import { ImageCard } from '../src';

export default {
  title: 'Image Card',
};

const src =
  'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20';

export const standard = () => <ImageCard src={src} alt="waddup" />;

standard.story = {
  name: 'Standard',
};
