import React from 'react';
import { Card, ProductCard, CardOverlay } from '../src';

export default {
  title: 'Cards',
};

export const standard = () => <Card />;

export const showShadow = () => <Card noHover />;

const exampleProduct = {
  title: 'test',
  price: '$12',
  image: {
    src:
      'https://sc02.alicdn.com/kf/HTB10O8zdTZRMeJjSspkq6xGpXXa9/China-Factory-Wholesale-Slim-Fit-Plain-Tshirt.jpg_350x350.jpg',
    preview:
      'https://sc02.alicdn.com/kf/HTB10O8zdTZRMeJjSspkq6xGpXXa9/China-Factory-Wholesale-Slim-Fit-Plain-Tshirt.jpg_350x350.jpg',
  },
};

export const product = () => (
  <ProductCard onClick={() => {}} product={exampleProduct} />
);

export const overlay = () => (
  <CardOverlay />
);


standard.story = {
  name: 'Standard',
};

product.story = {
  name: 'Product',
};

overlay.story = {
  name: 'Overlay',
};
