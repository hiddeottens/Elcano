import React from 'react';
import { Loader } from '../src';

export default {
  title: 'Loaders',
};

export const standard = () => <Loader />;

standard.story = {
  name: 'Standard',
};
