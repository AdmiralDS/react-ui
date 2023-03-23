import { Button } from '#src/components/Button';
import { hexToRgba } from '#src/components/common/utils/hexToRgba';
import { Option } from '#src/components/input/Select';
import { InputField, SelectField } from '#src/components/form';
import { Modal, ModalButtonPanel, ModalContent, ModalTitle } from '#src/components/Modal';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { withDesign } from 'storybook-addon-designs';
import styled, { css, ThemeProvider } from 'styled-components';
import type { Theme } from '#src/components/themes';
import { ALL_BORDER_RADIUS_VALUES } from '#src/components/themes/borderRadius';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;
const Separator = styled.div`
  height: 20px;
`;

const Description = () => (
  <Desc>
    Модальное окно используется для ситуаций, когда требуется акцентировать внимание пользователя на подтверждении
    какого-либо действия. Всплывает по центру страницы и блокирует содержимое страницы, которое расположено под
    модальным окном.
  </Desc>
);

export default {
  title: 'Admiral-2.1/Modal',
  decorators: [withDesign],
  component: Modal,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: <Description />,
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A49046',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A49211',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A49265',
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
    displayCloseIcon: {
      control: { type: 'boolean' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Modal>;

const OPTIONS_SIMPLE = [
  'teeext 1',
  'text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text ',
  'text 3',
  'text 4',
  'text 5',
  'texttt 6',
];

interface Props {
  onYesClick: (p: { selected: number | string | null; inputValue: string }) => void;
  onNoClick: () => void;
}

const ModalForm = ({ onYesClick, onNoClick }: Props) => {
  const [selected, setSelected] = React.useState('');
  const [inputValue, setInputValue] = React.useState('');
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
  };

  return (
    <>
      <ModalContent>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
        quam quasi quod ut veritatis?
        <Separator />
        <SelectField
          label="label"
          className="Search"
          value={selected}
          onChange={handleSelectChange}
          placeholder="Placeholder"
        >
          {OPTIONS_SIMPLE.map((option, ind) => (
            <Option key={option} value={option} disabled={ind === 4}>
              {option}
            </Option>
          ))}
        </SelectField>
        <Separator />
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

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
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
    </ThemeProvider>
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
  background-color: ${({ theme }) => hexToRgba(theme.color['Error/Error 20'], 0.6)};
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
          <h1 id="modal-title" style={{ paddingLeft: '24px' }}>
            <strong>Modal title</strong>
          </h1>
          <i style={{ paddingLeft: '24px' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </i>
          <div
            style={{
              marginTop: '40px',
              width: '80%',
              display: 'flex',
              justifyContent: 'space-between',
              paddingLeft: '24px',
            }}
          >
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

export const ModalOneButton = Template2.bind({});
ModalOneButton.args = {};
ModalOneButton.storyName = 'Modal. Пример c одной кнопкой.';

export const ModalNoButton = Template3.bind({});
ModalNoButton.args = {};
ModalNoButton.storyName = 'Modal. Пример без кнопок.';

export const ModalScroll = Template4.bind({});
ModalScroll.args = {};
ModalScroll.storyName = 'Modal. Пример со скроллом.';

export const CustomModal = Template5.bind({});
CustomModal.args = {};
CustomModal.storyName = 'Modal. Свободное (кастомизированное) наполнение.';
