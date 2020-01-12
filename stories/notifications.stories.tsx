import React from 'react';
import { Notification } from '../src';

export default {
  title: 'Notifications',
};

export const success = () => (
  <Notification visible text="Test" type="success" />
);

success.story = {
  name: 'Success',
};

export const error = () => <Notification visible text="Test" type="error" />;

error.story = {
  name: 'Error',
};
