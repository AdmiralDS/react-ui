import type { ChangeEvent } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Button, Modal, ModalTitle, ModalContent, InputField, TextArea, T } from '@admiral-ds/react-ui';

const Separator = styled.div`
  height: 20px;
`;

// Добавлен легкий градиент, чтобы визуально было понятно, что это зона прокрутки
const SeparatorLong = styled.div`
  height: 800px;
  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.03));
  border-radius: 4px;
`;

export const ModalTextAreaScrollTemplate = () => {
  const [opened, setOpened] = useState(false);

  // Длинная строка без пробелов гарантированно вызовет скролл внутри TextArea
  const [localValue, setValue] = useState<string>(
    'ОченьдлинныйтекстбезпробеловкоторыйдолженвызватьвертикальныйскроллвнутрикомпонентаTextAreaипродемонстрироватьпроблемусвыходомнативногоскроллбаразапределыкомпонентаприналичиискроллавродительскомModalContent.Продолжаемписатьдлинныйтекстдлянадежности.',
  );

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <>
      <Button onClick={() => setOpened(true)}>Открыть Modal с TextArea</Button>

      {opened && (
        <Modal dimension="m" onClose={() => setOpened(false)}>
          <ModalTitle>Тест скролла TextArea в ModalContent</ModalTitle>
          <ModalContent>
            <InputField label="Обычное поле ввода 1" />
            <Separator />
            <InputField label="Обычное поле ввода 2" />
            <Separator />

            <T font="Body/Body 2 Long" as="div">
              TextArea (должен быть внутренний скролл)
            </T>
            <TextArea value={localValue} onChange={handleChange} rows={4} />

            <Separator />
            <InputField label="Обычное поле ввода 3" />
            <Separator />
            <InputField label="Обычное поле ввода 4" />
            <Separator />

            <SeparatorLong />

            <T font="Body/Body 2 Long" as="div">
              Конец контента модального окна.
            </T>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};
