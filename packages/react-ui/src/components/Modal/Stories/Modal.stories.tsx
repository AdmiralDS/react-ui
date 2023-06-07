import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import styled, { css } from 'styled-components';
import {
  Modal,
  ModalButtonPanel,
  ModalContent,
  ModalTitle,
  Button,
  ALL_BORDER_RADIUS_VALUES,
} from '@admiral-ds/react-ui';

import { ModalTwoButtonsTemplate, ModalOneButtonTemplate, ModalWithoutButtonsTemplate } from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import ModalTwoButtonsRaw from '!!raw-loader!./Templates/ModalTwoButtons';
import ModalOneButtonRaw from '!!raw-loader!./Templates/ModalOneButton';
import ModalWithoutButtonsRaw from '!!raw-loader!./Templates/ModalWithoutButtons';

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

const overlayStyles = css`
  background-color: ${({ theme }) => `${theme.color['Error/Error 20']}66`};
`;

const Template6: ComponentStory<typeof Modal> = (args) => {
  const [opened, setOpened] = React.useState(false);
  return (
    <>
      <Button onClick={() => setOpened(true)}>Open modal with custom overlay</Button>
      {opened && (
        <Modal
          {...args}
          onClose={() => {
            setOpened(false);
          }}
          aria-labelledby="modal-title"
          overlayStyledCss={overlayStyles}
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

//<editor-fold desc="Пример c двумя кнопками">
const ModalTwoButtonsStory: ComponentStory<typeof Modal> = (props) => (
  <ModalTwoButtonsTemplate {...cleanUpProps(props)} />
);
export const ModalTwoButtonsExample = ModalTwoButtonsStory.bind({});
ModalTwoButtonsExample.parameters = {
  docs: {
    source: {
      code: ModalTwoButtonsRaw,
    },
  },
};
ModalTwoButtonsExample.storyName = 'Modal. Пример c двумя кнопками.';
//</editor-fold>

//<editor-fold desc="Пример c одной кнопкой">
const ModalOneButtonStory: ComponentStory<typeof Modal> = (props) => (
  <ModalOneButtonTemplate {...cleanUpProps(props)} />
);
export const ModalOneButtonExample = ModalOneButtonStory.bind({});
ModalOneButtonExample.parameters = {
  docs: {
    source: {
      code: ModalOneButtonRaw,
    },
  },
};
ModalOneButtonExample.storyName = 'Modal. Пример c одной кнопкой.';
//</editor-fold>

//<editor-fold desc="Пример без кнопок">
const ModalWithoutButtonsStory: ComponentStory<typeof Modal> = (props) => (
  <ModalWithoutButtonsTemplate {...cleanUpProps(props)} />
);
export const ModalWithoutButtonsExample = ModalWithoutButtonsStory.bind({});
ModalWithoutButtonsExample.parameters = {
  docs: {
    source: {
      code: ModalWithoutButtonsRaw,
    },
  },
};
ModalWithoutButtonsExample.storyName = 'Modal. Пример без кнопок.';
//</editor-fold>

export const ModalScroll = Template4.bind({});
ModalScroll.args = {};
ModalScroll.storyName = 'Modal. Пример со скроллом.';

export const CustomModal = Template5.bind({});
CustomModal.args = {};
CustomModal.storyName = 'Modal. Свободное (кастомизированное) наполнение.';

export const CustomOverlay = Template6.bind({});
CustomOverlay.args = {};
CustomOverlay.storyName = 'Modal. Кастомизация подложки модального окна.';
CustomOverlay.parameters = {
  docs: {
    description: {
      story: `У пользователя есть возможность кастомизировать внешний вид подложки модального окна.
      Для этого можно воспользоваться параметром overlayStyledCss, чтобы задать миксин со стилями для подложки.
      Либо можно воспользоваться параметрами overlayClassName, overlayStyle.`,
    },
  },
};
