import { Button } from '#/components/Button';
import { hexToRgba } from '#/components/common/utils/hexToRgba';
import { DropDownItem } from '#/components/DropDownItem';
import { InputField, SelectField } from '#/components/form';
import { Modal, ModalButtonPanel, ModalContent, ModalTitle } from '#/components/Modal';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import styled, { css } from 'styled-components';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Модальное окно используется для ситуаций, когда требуется акцентировать внимание пользователя на подтверждении
    какого-либо действия. Всплывает по центру страницы и блокирует содержимое страницы, которое расположено под
    модальным окном.
  </Desc>
);

export default {
  title: 'Example/Modal',
  decorators: [withDesign],
  component: Modal,
  parameters: {
    componentSubtitle: <Description />,
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/HCiO63zg2hPSXTHuEdpRtG/Admiral-2.0-UI-Kit?node-id=39%3A49211',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/HCiO63zg2hPSXTHuEdpRtG/Admiral-2.0-UI-Kit?node-id=39%3A49265',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: ['xl', 'l', 'm', 's'],
      control: { type: 'radio' },
    },
    mobile: {
      control: { type: 'boolean' },
    },
    closeOnEscapeKeyDown: {
      control: { type: 'boolean' },
    },
    closeOnOutsideClick: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Modal>;

const options = [
  { id: 1, label: 'Option one', value: '1' },
  { id: 2, label: 'Option two', value: '2' },
  { id: 3, label: 'Option three', value: '3' },
  { id: 4, label: 'Option four', value: '4' },
  { id: 5, label: 'Option five', value: '5' },
  { id: 6, label: 'Option six', value: '6' },
  { id: 7, label: 'Option seven', value: '7' },
];

interface Props {
  onYesClick: (p: { selected: number | string | null; inputValue: string }) => void;
  onNoClick: () => void;
}

const ModalForm = ({ onYesClick, onNoClick }: Props) => {
  const [selected, setSelected] = React.useState<any>(null);
  const [inputValue, setInputValue] = React.useState('');
  const handleSelectChange = (value: number | string | null) => {
    console.log(`>>>>> value ${value}`);
    setSelected(value);
  };

  return (
    <>
      <ModalContent>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
        quam quasi quod ut veritatis?
        <SelectField label="select Field" placeholder="Выберете опцию" value={selected} onChange={handleSelectChange}>
          {options.map((item) => {
            return (
              <DropDownItem role="option" value={item.label} key={item.id}>
                {item.label}
              </DropDownItem>
            );
          })}
        </SelectField>
        <InputField
          label="введите значение"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      </ModalContent>
      <ModalButtonPanel>
        <Button appearance="primary" dimension="m" onClick={() => onYesClick({ selected, inputValue })}>
          Yes button
        </Button>
        <Button appearance="secondary" dimension="m" onClick={onNoClick}>
          No button
        </Button>
      </ModalButtonPanel>
    </>
  );
};

const Template1: ComponentStory<typeof Modal> = (args) => {
  const [opened, setOpened] = React.useState(false);
  return (
    <>
      <Button onClick={() => setOpened(true)}>Open modal with 2 buttons</Button>
      {opened && (
        <Modal
          {...args}
          onClose={() => {
            setOpened(false);
          }}
          aria-labelledby="modal-title"
        >
          <ModalTitle id="modal-title">Modal title</ModalTitle>
          <ModalForm
            onYesClick={(p) => {
              console.log(`value ${p.inputValue}`);
              setOpened(false);
            }}
            onNoClick={() => setOpened(false)}
          />
        </Modal>
      )}
    </>
  );
};

const Template2: ComponentStory<typeof Modal> = (args) => {
  const [opened, setOpened] = React.useState(false);
  return (
    <>
      <Button onClick={() => setOpened(true)}>Open modal with 1 button</Button>
      {opened && (
        <Modal
          {...args}
          onClose={() => {
            setOpened(false);
          }}
          aria-labelledby="modal-title"
        >
          <ModalTitle id="modal-title">Modal title</ModalTitle>
          <ModalContent>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </ModalContent>
          <ModalButtonPanel>
            <Button appearance="primary" dimension="m" onClick={() => setOpened(false)}>
              Yes button
            </Button>
          </ModalButtonPanel>
        </Modal>
      )}
    </>
  );
};

const Template3: ComponentStory<typeof Modal> = (args) => {
  const [opened, setOpened] = React.useState(false);
  return (
    <>
      <Button onClick={() => setOpened(true)}>Open modal without buttons</Button>
      {opened && (
        <Modal
          {...args}
          onClose={() => {
            setOpened(false);
          }}
          aria-labelledby="modal-title"
        >
          <ModalTitle id="modal-title">Modal title</ModalTitle>
          <ModalContent>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

const Template4: ComponentStory<typeof Modal> = (args) => {
  const [opened, setOpened] = React.useState(false);
  return (
    <>
      <Button onClick={() => setOpened(true)}>Open modal with scrollable content</Button>
      {opened && (
        <Modal
          {...args}
          onClose={() => {
            setOpened(false);
          }}
          aria-labelledby="modal-title"
          style={{ height: '90vh' }} // IE bug https://github.com/philipwalton/flexbugs#flexbug-3
        >
          <ModalTitle id="modal-title">Modal title</ModalTitle>
          <ModalContent>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate
            ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam
            quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus
            nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam
            quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus
            nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam
            quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus
            nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam
            quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus
            nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam
            quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus
            nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam quasi quod ut veritatis? Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati quam
            quasi quod ut veritatis?
          </ModalContent>
          <ModalButtonPanel>
            <Button appearance="primary" dimension="m" onClick={() => setOpened(false)}>
              Yes button
            </Button>
            <Button appearance="secondary" dimension="m" onClick={() => setOpened(false)}>
              No button
            </Button>
          </ModalButtonPanel>
        </Modal>
      )}
    </>
  );
};

const overlayStyles = css`
  background-color: ${({ theme }) => hexToRgba(theme.color.background.secondary, 0.6)};
`;

const Template5: ComponentStory<typeof Modal> = (args) => {
  const [opened, setOpened] = React.useState(false);
  return (
    <>
      <Button onClick={() => setOpened(true)}>Open modal with custom content</Button>
      {opened && (
        <Modal
          {...args}
          dimension="l"
          onClose={() => {
            setOpened(false);
          }}
          aria-labelledby="modal-title"
          overlayStyledCss={overlayStyles}
        >
          <h1 id="modal-title">
            <strong>Modal title</strong>
          </h1>
          <i>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </i>
          <div style={{ marginTop: '40px', width: '80%', display: 'flex', justifyContent: 'space-between' }}>
            <Button appearance="primary" dimension="m" onClick={() => setOpened(false)}>
              First button
            </Button>
            <Button appearance="primary" dimension="m" onClick={() => setOpened(false)}>
              Second button
            </Button>
            <Button appearance="primary" dimension="m" onClick={() => setOpened(false)}>
              Third button
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
};

export const ModalTwoButtons = Template1.bind({});
ModalTwoButtons.args = {};
ModalTwoButtons.storyName = 'Modal. Пример c двумя кнопками.';
ModalTwoButtons.parameters = {
  docs: {
    source: {
      type: 'code',
    },
  },
};

export const ModalOneButton = Template2.bind({});
ModalOneButton.args = {};
ModalOneButton.storyName = 'Modal. Пример c одной кнопкой.';
ModalOneButton.parameters = {
  docs: {
    source: {
      type: 'code',
    },
  },
};

export const ModalNoButton = Template3.bind({});
ModalNoButton.args = {};
ModalNoButton.storyName = 'Modal. Пример без кнопок.';
ModalNoButton.parameters = {
  docs: {
    source: {
      type: 'code',
    },
  },
};

export const ModalScroll = Template4.bind({});
ModalScroll.args = {};
ModalScroll.storyName = 'Modal. Пример со скроллом.';
ModalScroll.parameters = {
  docs: {
    source: {
      type: 'code',
    },
  },
};

export const CustomModal = Template5.bind({});
CustomModal.args = {};
CustomModal.storyName = 'Modal. Свободное (кастомизированное) наполнение.';
CustomModal.parameters = {
  docs: {
    source: {
      type: 'code',
    },
  },
};
