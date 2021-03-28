import React, { useState } from 'react';
import { MenuToggle, Bar, SideSlide } from '../src';

export default {
  title: 'SideSlide',
};

export const standard = () => {
  const [show, setshow] = useState(false);
  return (
    <>
      <MenuToggle onClick={() => setshow(!show)}>
        <Bar />
        <Bar />
        <Bar />
      </MenuToggle>
      <SideSlide show={show} onClose={() => setshow(false)} />
    </>
  );
};

standard.story = {
  name: 'Standard',
};
