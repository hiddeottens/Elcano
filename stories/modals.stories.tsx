import { setServers } from 'dns';
import React, { useState } from 'react';
import { Modal, Button } from '../src';

export default {
  title: 'Modals',
};


export const standard = () => {
  const [show, setshow] = useState(false);
  return (
    <>
    <Button backgroundColor="blue" onClick={() => setshow(!show)}>Open</Button>
    <Modal title="Test modal" show={show} onClose={() => setshow(false)} />
    </>
  )

};


standard.story = {
  name: 'Standard',
};
 