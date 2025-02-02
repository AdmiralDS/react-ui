import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import styled from 'styled-components';
import { Modal, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { ModalTwoButtonsTemplate } from './ModalTwoButtons.template';
import { ModalOneButtonTemplate } from './ModalOneButton.template';
import { ModalWithoutButtonsTemplate } from './ModalWithoutButtons.template';
import { ModalScrollTemplate } from './ModalScroll.template';
import { ModalCustomContentTemplate } from './ModalCustomContent.template';
import { ModalCustomOverlayTemplate } from './ModalCustomOverlay.template';
import { ModalStatusIconTemplate } from './ModalStatusIcon.template';

// Imports of text sources
import ModalTwoButtonsRaw from './ModalTwoButtons.template?raw';
import ModalOneButtonRaw from './ModalOneButton.template?raw';
import ModalWithoutButtonsRaw from './ModalWithoutButtons.template?raw';
import ModalScrollRaw from './ModalScroll.template?raw';
import ModalCustomContentRaw from './ModalCustomContent.template?raw';
import ModalCustomOverlayRaw from './ModalCustomOverlay.template?raw';
import ModalStatusIconRaw from './ModalStatusIcon.template?raw';

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
  decorators: undefined,
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
    overlayClassName: {
      control: { type: 'text' },
    },
    container: {
      control: false,
    },
    overlayStyledCss: {
      control: false,
    },
    locale: {
      control: false,
    },
    overlayStyle: {
      control: false,
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
  },
} as Meta<typeof Modal>;

//<editor-fold desc="Пример c двумя кнопками">
const ModalTwoButtonsStory: StoryFn<typeof Modal> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <ModalTwoButtonsTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const ModalTwoButtonsExample = {
  render: ModalTwoButtonsStory,

  parameters: {
    docs: {
      source: {
        code: ModalTwoButtonsRaw,
      },
    },
  },

  name: 'Modal. Пример c двумя кнопками.',
};

//</editor-fold>

//<editor-fold desc="Пример c одной кнопкой">
const ModalOneButtonStory: StoryFn<typeof Modal> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <ModalOneButtonTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const ModalOneButtonExample = {
  render: ModalOneButtonStory,

  parameters: {
    docs: {
      source: {
        code: ModalOneButtonRaw,
      },
    },
  },

  name: 'Modal. Пример c одной кнопкой.',
};

//</editor-fold>

//<editor-fold desc="Пример без кнопок">
const ModalWithoutButtonsStory: StoryFn<typeof Modal> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <ModalWithoutButtonsTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const ModalWithoutButtonsExample = {
  render: ModalWithoutButtonsStory,

  parameters: {
    docs: {
      source: {
        code: ModalWithoutButtonsRaw,
      },
    },
  },

  name: 'Modal. Пример без кнопок.',
};

//</editor-fold>

//<editor-fold desc="Пример со скроллом">
const ModalScrollStory: StoryFn<typeof Modal> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <ModalScrollTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const ModalScrollExample = {
  render: ModalScrollStory,

  parameters: {
    docs: {
      source: {
        code: ModalScrollRaw,
      },
    },
  },

  name: 'Modal. Пример со скроллом.',
};

//</editor-fold>

//<editor-fold desc="Свободное (кастомизированное) наполнение">
const ModalCustomContentStory: StoryFn<typeof Modal> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <ModalCustomContentTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const ModalCustomContentExample = {
  render: ModalCustomContentStory,

  parameters: {
    docs: {
      source: {
        code: ModalCustomContentRaw,
      },
    },
  },

  name: 'Modal. Свободное (кастомизированное) наполнение.',
};

//</editor-fold>

//<editor-fold desc="Кастомизация подложки модального окна">
const ModalCustomOverlayStory: StoryFn<typeof Modal> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <ModalCustomOverlayTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const ModalCustomOverlayExample = {
  render: ModalCustomOverlayStory,

  parameters: {
    docs: {
      source: {
        code: ModalCustomOverlayRaw,
      },
    },
  },

  name: 'Modal. Кастомизация подложки модального окна.',
};

//</editor-fold>

//<editor-fold desc="Статусные иконки">
const ModalStatusIconStory: StoryFn<typeof Modal> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <ModalStatusIconTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const ModalStatusIconExample = {
  render: ModalStatusIconStory,

  parameters: {
    docs: {
      source: {
        code: ModalStatusIconRaw,
      },
    },
  },

  name: 'Modal. Статусные иконки.',
};

//</editor-fold>
