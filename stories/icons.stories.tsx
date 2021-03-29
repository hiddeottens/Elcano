import React from 'react';
import { CartIcon } from '../src';

export default {
  title: 'Icons',
};

export const standard = () => <CartIcon count={3} />;

standard.story = {
  name: 'Standard',
};
