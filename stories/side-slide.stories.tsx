import React, { useState } from 'react';
import { MenuToggle, Bar, SideSlide, Direction } from '../src';

export default {
  title: 'SideSlide',
};

export const standard = ({ ...args }) => {
  const [show, setshow] = useState(false);
  return (
    <>
      <MenuToggle onClick={() => setshow(!show)}>
        <Bar />
        <Bar />
        <Bar />
      </MenuToggle>
      <SideSlide
        {...args}
        show={show}
        onClose={() => setshow(false)}
        direction={Direction.RIGHT}
      />
    </>
  );
};

standard.story = {
  name: 'Standard',
};
