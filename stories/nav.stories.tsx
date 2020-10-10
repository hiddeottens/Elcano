import React, { useState } from 'react';
import { NavContainer, Nav, Notification, Button, Heading } from '../src';

export default {
  title: 'Navbar',
};

export const standard = () => {
  const [show, setshow] = useState(false);
  return (
    <>
      <NavContainer>
        <Nav>
          <Heading color="white">Test nav</Heading>
        </Nav>
        <Notification type="success" notification={show} text="Test message" />
      </NavContainer>
      <Button mt="8em" backgroundColor="blue" onClick={() => setshow(!show)}>
        {show ? 'close' : 'open'}
      </Button>
    </>
  );
};

standard.story = {
  name: 'Standard',
};
