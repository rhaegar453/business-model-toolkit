import React, { useState } from 'react';
import Modal from '.';
import Button from '../button';
import Text from '../text';

export default {
  title: 'Atoms/Modal',
  component: Modal,
};

export const withDefault = (args:any) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setModalOpen(true)}>Hello World</Button>
      <Modal {...args} isOpen={modalOpen} handleClose={() => setModalOpen(false)}>
        <Text size="large">Hello World this is Shivaraj Bakale</Text>
      </Modal>
    </div>
  );
};
