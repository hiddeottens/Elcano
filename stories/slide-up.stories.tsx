import React, { useState } from 'react';
import { SlideUp, StaticRoundButton } from '../src';

export default {
  title: 'SlideUp',
};

export const standard = () => {
  const [show, setshow] = useState(false);
  return (
    <>
      <StaticRoundButton onClick={() => setshow(!show)}>+</StaticRoundButton>
      <SlideUp
        heading="Add some stuff"
        show={show}
        onClose={() => setshow(false)}
      />
    </>
  );
};

standard.story = {
  name: 'Standard',
};
