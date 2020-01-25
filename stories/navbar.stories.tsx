import React from 'react';
import { Navbar, ProgressiveImage, Notification } from '../src';
import styled from '@emotion/styled';

export default {
  title: 'Navbars',
};

const logoImage = {
  src: 'https://storage.cloud.google.com/borderless-assets/logo.6c36b676.png',
  preview: 'https://storage.cloud.google.com/borderless-assets/logo.6c36b676.png'
};

const Brand = styled.h1`
  padding: 0.5em;
  font-size: 1.5em;
`

export const standard = () => (
  <Navbar>
    <ProgressiveImage image={logoImage} width={25} height={25} rounded />
    <Brand>borderless</Brand>
  </Navbar>
);

standard.story = {
  name: 'Standard',
};

export const notification = () => (
  <div>
  <Navbar>
    <h1>borderless</h1>
  </Navbar>
  <Notification visible text="Test" type="success" />
  </div>
);

notification.story = {
  name: 'Notification',
};
