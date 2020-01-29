import React from 'react';
import { Modal } from '../src';

export default {
  title: 'Modals',
};


export const standard = () => <Modal show={true} />;


standard.story = {
  name: 'Standard',
};
