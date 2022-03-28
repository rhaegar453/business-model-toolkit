import React, { useState } from 'react';
import Modal from '.';
import Button from '../button';

export default {
  title: 'Atoms/Modal',
  component: Modal,
};

export const withDefault = (args:any) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setModalOpen(true)}>Hello World</Button>
      <Modal {...args} isOpen={modalOpen} handleClose={() => setModalOpen(false)} />
    </div>
  );
};
