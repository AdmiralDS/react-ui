import { useState } from 'react';
import styled from 'styled-components';
import { Button, Modal, ModalTitle, ModalContent, InputField, TextArea } from '@admiral-ds/react-ui';
import type { ChangeEvent } from 'react';

const Separator = styled.div`
  height: 20px;
`;

const SeparatorLong = styled.div`
  height: 800px;
`;

export const ScrollbarInModalTemplate = () => {
  const [opened, setOpened] = useState(false);
  const [localValue, setValue] = useState<string>(
    'A long time ago in a galaxy far, far away... Since the fall of the EMPIRE, the NEW REPUBLIC has maintained order. \n And yet, remote hyperspace routes are increasingly plagued by piracy. \n These PIRATES boldly brand their armored hulls as a sign to all ships. \n Surrender or die....',
  );

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
  };

  return (
    <>
      <Button onClick={() => setOpened(true)}>Открыть форму</Button>
      {opened && (
        <Modal
          dimension={'m'}
          onClose={() => {
            setOpened(false);
          }}
        >
          <ModalTitle>Modal title</ModalTitle>
          <ModalContent>
            <InputField label={'field 1'} />
            <Separator />
            <InputField label={'field 2'} />
            <Separator />
            <TextArea value={localValue} onChange={handleChange} />
            <Separator />
            <Separator />
            <InputField label={'field 3'} />
            <Separator />
            <InputField label={'field 4'} />
            <SeparatorLong />
          </ModalContent>
        </Modal>
      )}
    </>
  );
};
