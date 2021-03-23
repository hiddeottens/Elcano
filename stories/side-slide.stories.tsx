import React, { useState } from 'react';
import { Button, SideSlide } from '../src';

export default {
  title: 'SideSlide',
};

export const standard = () => {
  const [show, setshow] = useState(false);
  return (
    <>
      <Button onClick={() => setshow(!show)}>Click me</Button>
      <SideSlide show={show} onClose={() => setshow(false)} />
    </>
  );
};

standard.story = {
  name: 'Standard',
};
