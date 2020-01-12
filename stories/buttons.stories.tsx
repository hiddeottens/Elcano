import React from 'react';
import { Button } from '../src';

export default {
  title: 'Buttons',
};

export const standard = () => (
  <Button
    className="red-btn-fill"
    title="Test me!"
    onClick={() => {}}
    id="red-btn"
  />
);

export const empty = () => (
  <Button
    className="red-btn-empty"
    title="Test me!"
    onClick={() => {}}
    id="red-btn"
  />
);

standard.story = {
  name: 'Standard',
};

empty.story = {
  name: 'Empty',
};
