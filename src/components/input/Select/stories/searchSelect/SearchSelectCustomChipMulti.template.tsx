import * as React from 'react';

import { Button, Modal, ModalButtonPanel, ModalContent, ModalTitle, Option, Select, T } from '@admiral-ds/react-ui';
import type { SelectProps } from '@admiral-ds/react-ui';
import { Separator } from '#src/components/input/Select/stories/styled';

export const SearchSelectCustomChipMultiTemplate = (props: SelectProps) => {
  const [selectValue, setSelectValue] = React.useState<string[]>(
    Array.from({ length: 5 }).map((_, ind) => String(ind)),
  );
  const [modalOpened, setModalOpened] = React.useState(false);
  const [valueToDelete, setValueToDelete] = React.useState<string | null>(null);

  const handleSelectedChange = (value: string | Array<string>) => {
    if (Array.isArray(value)) setSelectValue(value);
  };
  const deleteValue = (value: string) => setSelectValue((prev) => prev.filter((prevValue) => prevValue !== value));

  const onCloseModal = () => {
    setValueToDelete(null);
    setModalOpened(false);
  };
  const onOpenModal = () => setModalOpened(true);

  const onChipClose = (data: any) => {
    // eslint-disable-next-line no-console
    console.log(data);
    setValueToDelete(data.value);
    onOpenModal();
  };

  const renderChip = (ind: number, disabled: boolean) => () => ({
    children: `${ind} $`,
    onClose: onChipClose,
    disabled: disabled,
  });

  const onYes = () => {
    if (valueToDelete) deleteValue(valueToDelete);
    onCloseModal();
  };

  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Также следует помнить, что при использовании renderChip в Option нужно прокидывать все пропсы, включая disabled
        и readOnly при наличии, для корректного отображения чипсов.
      </T>
      <Separator />
      <Select
        {...props}
        value={selectValue}
        multiple={true}
        onSelectedChange={handleSelectedChange}
        mode="searchSelect"
      >
        {Array.from({ length: 20 }).map((_option, ind) => (
          <Option
            key={ind}
            data-id={`Id-${ind}`}
            data-value={`My Value ${ind}`}
            value={String(ind)}
            renderChip={renderChip(ind, [0, 2].includes(ind))}
            disabled={[0, 2].includes(ind)}
          >
            {ind}
          </Option>
        ))}
      </Select>
      {modalOpened && (
        <Modal onClose={onCloseModal}>
          <ModalTitle>Попап неуверенности</ModalTitle>
          <ModalContent>Уверены, что хотите удалить опцию?</ModalContent>
          <ModalButtonPanel>
            <Button appearance="primary" dimension="m" onClick={onYes}>
              О да
            </Button>
            <Button appearance="secondary" dimension="m" onClick={onCloseModal}>
              Нет, был не прав
            </Button>
          </ModalButtonPanel>
        </Modal>
      )}
    </>
  );
};
