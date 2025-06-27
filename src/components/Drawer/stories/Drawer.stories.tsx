import * as React from 'react';
import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import { Drawer, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { DrawerPlaygroundTemplate } from './DrawerPlayground.template';
import { DrawerWithBackdropTemplate } from './DrawerWithBackdrop.template';
import { DrawerWithoutBackdropTemplate } from './DrawerWithoutBackdrop.template';
import { DrawerNonClosableTemplate } from './DrawerNonClosable.template';
import { DrawerPositionTemplate } from './DrawerPosition.template';
import { DrawerMobileTemplate } from './DrawerMobile.template';
import { DrawerWidthTemplate } from './DrawerWidth.template';
import { DrawerCustomContentTemplate } from './DrawerCustomContent.template';

// Imports of text sources
import DrawerPlaygroundRaw from './DrawerPlayground.template?raw';
import DrawerWithBackdropRaw from './DrawerWithBackdrop.template?raw';
import DrawerWithoutBackdropRaw from './DrawerWithoutBackdrop.template?raw';
import DrawerNonClosableRaw from './DrawerNonClosable.template?raw';
import DrawerPositionRaw from './DrawerPosition.template?raw';
import DrawerMobileRaw from './DrawerMobile.template?raw';
import DrawerWidthRaw from './DrawerWidth.template?raw';
import DrawerCustomContentRaw from './DrawerCustomContent.template?raw';

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
    Компонент Drawer — это панель, которая накладывается поверх страницы, выдвигаясь c правой или левой части экрана. Он
    содержит набор информации или действий. Поскольку пользователь может взаимодействовать с Drawer, не покидая текущую
    страницу, задачи могут выполняться более эффективно в том же контексте. Используется для детализации, создания или
    редактирования информации.
    <Separator />
    Drawer может быть как с блокировкой контента под ним, в таком случае страница затемняется, либо без блокировки,
    тогда пользователь может одновременно взаимодействовать и с Drawer, и с содержимым страницы.
    <Separator />
    Ширина компонента задается пользователем. Примыкает вплотную к трем сторонам рабочей области браузера. Не
    адаптируется по ширине, но изменяет высоту, адаптируясь под высоту окна браузера.
  </Desc>
);

export default {
  title: 'Admiral-2.1/Drawer',
  decorators: undefined,
  component: Drawer,
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
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=156590-123731&t=Yf2eZgLCEQLDBxVT-4',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=156738-124020&t=Yf2eZgLCEQLDBxVT-4',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=165565-157419&t=Yf2eZgLCEQLDBxVT-4',
      },
    ],
  },
  argTypes: {
    isOpen: {
      control: { type: 'boolean' },
    },
    position: {
      options: ['right', 'left'],
      control: { type: 'radio' },
    },
    backdrop: {
      control: { type: 'boolean' },
    },
    mobile: {
      control: { type: 'boolean' },
    },
    closeOnEscapeKeyDown: {
      control: { type: 'boolean' },
    },
    closeOnBackdropClick: {
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
    overlayCssMixin: {
      control: false,
    },
    overlayStyle: {
      control: false,
    },
    locale: {
      control: false,
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
  },
} as Meta<typeof Drawer>;

//<editor-fold desc="Playground">
const PlaygroundStory: StoryFn<typeof Drawer> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <DrawerPlaygroundTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const Playground = {
  render: PlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: DrawerPlaygroundRaw,
      },
    },
  },
};

//</editor-fold>

//<editor-fold desc="Drawer с блокировкой контента страницы">
const DrawerWithBackdropStory: StoryFn<typeof Drawer> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <DrawerWithBackdropTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const DrawerWithBackdropExample = {
  render: DrawerWithBackdropStory,

  parameters: {
    docs: {
      source: {
        code: DrawerWithBackdropRaw,
      },
    },
  },

  name: 'Drawer с блокировкой контента страницы (Backdrop = True)',
};

//</editor-fold>

//<editor-fold desc="Drawer без блокировки контента страницы">
const DrawerWithoutBackdropStory: StoryFn<typeof Drawer> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <DrawerWithoutBackdropTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const DrawerWithoutBackdropExample = {
  render: DrawerWithoutBackdropStory,

  parameters: {
    docs: {
      source: {
        code: DrawerWithoutBackdropRaw,
      },
    },
  },

  name: 'Drawer без блокировки контента страницы (Backdrop = False)',
};

//</editor-fold>

//<editor-fold desc="Drawer с обязательным условием">
const DrawerNonClosableStory: StoryFn<typeof Drawer> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <DrawerNonClosableTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const DrawerNonClosableExample = {
  render: DrawerNonClosableStory,

  parameters: {
    docs: {
      source: {
        code: DrawerNonClosableRaw,
      },
    },
  },

  name: 'Drawer с обязательным условием (non-closable Drawer)',
};

//</editor-fold>

//<editor-fold desc="Расположение компонента">
const DrawerPositionStory: StoryFn<typeof Drawer> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <DrawerPositionTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const DrawerPositionExample = {
  render: DrawerPositionStory,

  parameters: {
    docs: {
      source: {
        code: DrawerPositionRaw,
      },
    },
  },

  name: 'Drawer. Расположение компонента',
};

//</editor-fold>

//<editor-fold desc="Адаптив">
const DrawerMobileStory: StoryFn<typeof Drawer> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <DrawerMobileTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const DrawerMobileExample = {
  render: DrawerMobileStory,

  parameters: {
    docs: {
      source: {
        code: DrawerMobileRaw,
      },
    },
  },

  name: 'Drawer. Адаптив (mobile)',
};

//</editor-fold>

//<editor-fold desc="Ширина компонента">
const DrawerWidthStory: StoryFn<typeof Drawer> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <DrawerWidthTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const DrawerWidthExample = {
  render: DrawerWidthStory,

  parameters: {
    docs: {
      source: {
        code: DrawerWidthRaw,
      },
    },
  },

  name: 'Drawer. Ширина компонента',
};

//</editor-fold>

//<editor-fold desc="Свободное (кастомизированное) наполнение">
const DrawerCustomContentStory: StoryFn<typeof Drawer> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <DrawerCustomContentTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const DrawerCustomContentExample = {
  render: DrawerCustomContentStory,

  parameters: {
    docs: {
      source: {
        code: DrawerCustomContentRaw,
      },
    },
  },

  name: 'Drawer. Свободное (кастомизированное) наполнение',
};
