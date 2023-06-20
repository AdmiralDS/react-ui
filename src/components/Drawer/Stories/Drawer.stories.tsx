import * as React from 'react';
import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';
import { Drawer, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import {
  DrawerPlaygroundTemplate,
  DrawerWithBackdropTemplate,
  DrawerWithoutBackdropTemplate,
  DrawerNonClosableTemplate,
  DrawerPositionTemplate,
  DrawerMobileTemplate,
  DrawerWidthTemplate,
  DrawerCustomContentTemplate,
} from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import PlaygroundRaw from '!!raw-loader!./Templates/DrawerPlayground';
import DrawerWithBackdropRaw from '!!raw-loader!./Templates/DrawerWithBackdrop';
import DrawerWithoutBackdropRaw from '!!raw-loader!./Templates/DrawerWithoutBackdrop';
import DrawerNonClosableRaw from '!!raw-loader!./Templates/DrawerNonClosable';
import DrawerPositionRaw from '!!raw-loader!./Templates/DrawerPosition';
import DrawerMobileRaw from '!!raw-loader!./Templates/DrawerMobile';
import DrawerWidthRaw from '!!raw-loader!./Templates/DrawerWidth';
import DrawerCustomContentRaw from '!!raw-loader!./Templates/DrawerCustomContent';

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
    Ширина компонента задается пользователем, но не меньше 320 px. Примыкает вплотную к трем сторонам рабочей области
    браузера. Не адаптируется по ширине, но изменяет высоту, адаптируясь под высоту окна браузера.
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
const PlaygroundStory: StoryFn<typeof Drawer> = (props) => <DrawerPlaygroundTemplate {...cleanUpProps(props)} />;

export const Playground = {
  render: PlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: PlaygroundRaw,
      },
    },
  },
};

//</editor-fold>

//<editor-fold desc="Drawer с блокировкой контента страницы">
const DrawerWithBackdropStory: StoryFn<typeof Drawer> = (props) => (
  <DrawerWithBackdropTemplate {...cleanUpProps(props)} />
);

export const DrawerWithBackdropExample = {
  render: DrawerWithBackdropStory,

  parameters: {
    docs: {
      source: {
        code: DrawerWithBackdropRaw,
      },
      description: {
        story: `По умолчанию Drawer блокирует контент страницы, за это отвечает параметр backdrop, равный по умолчанию true. 
        В этом случае страница затемняется, поверх экрана накладывается цвет Opacity/Modal. Взаимодействовать с контентом 
        страницы при открытой панели нельзя. Закрытие Drawer может происходить по клику на крестик, по клику на кнопке в футере панели, 
        по нажатию на затемненную область (при closeOnBackdropClick = true), по нажатию на клавишу Escape (при closeOnEscapeKeyDown = true).`,
      },
    },
  },

  name: 'Drawer с блокировкой контента страницы (Backdrop = True)',
};

//</editor-fold>

//<editor-fold desc="Drawer без блокировки контента страницы">
const DrawerWithoutBackdropStory: StoryFn<typeof Drawer> = (props) => (
  <DrawerWithoutBackdropTemplate {...cleanUpProps(props)} />
);

export const DrawerWithoutBackdropExample = {
  render: DrawerWithoutBackdropStory,

  parameters: {
    docs: {
      source: {
        code: DrawerWithoutBackdropRaw,
      },
      description: {
        story: `Если необходим Drawer без блокировки контента страницы, то необходимо использовать параметр backdrop равный false.
        В этом случае пользователь сможет одновременно взаимодействовать и с Drawer, и с содержимым страницы. 
        Закрытие Drawer может происходить по клику на крестик, по клику на кнопке в футере панели, 
        по нажатию на клавишу Escape (при closeOnEscapeKeyDown = true).`,
      },
    },
  },

  name: 'Drawer без блокировки контента страницы (Backdrop = False)',
};

//</editor-fold>

//<editor-fold desc="Drawer с обязательным условием">
const DrawerNonClosableStory: StoryFn<typeof Drawer> = (props) => (
  <DrawerNonClosableTemplate {...cleanUpProps(props)} />
);

export const DrawerNonClosableExample = {
  render: DrawerNonClosableStory,

  parameters: {
    docs: {
      source: {
        code: DrawerNonClosableRaw,
      },
      description: {
        story: `В некоторых случаях применим Drawer с обязательным условием (non-closable Drawer), то есть такая панель, 
        которую можно закрыть только нажав одну из кнопок в футере. Крестик закрытия отсутствует, 
        нажатие на затемненную область ни к чему не приводит. Для того чтобы крестик закрытия отсутствовал используйте параметр
        displayCloseIcon равный false.`,
      },
    },
  },

  name: 'Drawer с обязательным условием (non-closable Drawer)',
};

//</editor-fold>

//<editor-fold desc="Расположение компонента">
const DrawerPositionStory: StoryFn<typeof Drawer> = (props) => <DrawerPositionTemplate {...cleanUpProps(props)} />;

export const DrawerPositionExample = {
  render: DrawerPositionStory,

  parameters: {
    docs: {
      source: {
        code: DrawerPositionRaw,
      },
      description: {
        story: `Drawer может располагаться как справа (по умолчанию), так и слева. Расположение Drawerа определяется параметром position.
        При этом, компоновка элементов внутри панели не изменяется в зависимости от расположения.`,
      },
    },
  },

  name: 'Drawer. Расположение компонента',
};

//</editor-fold>

//<editor-fold desc="Адаптив">
const DrawerMobileStory: StoryFn<typeof Drawer> = (props) => <DrawerMobileTemplate {...cleanUpProps(props)} />;

export const DrawerMobileExample = {
  render: DrawerMobileStory,

  parameters: {
    docs: {
      source: {
        code: DrawerMobileRaw,
      },
      description: {
        story: `Адаптируясь на мобильных устройствах, компонент имеет несколько иную структуру, отступы и размеры.
        На мобильных устройствах компонент всегда появляется с правой стороны экрана. 
        Заполняет весь экран по ширине, кроме стандартного отступа для контента с левой стороны.\nДля того чтобы 
        перевести компонент в адаптивный режим, используйте параметр mobile.`,
      },
    },
  },

  name: 'Drawer. Адаптив (mobile)',
};

//</editor-fold>

//<editor-fold desc="Ширина компонента">
const DrawerWidthStory: StoryFn<typeof Drawer> = (props) => <DrawerWidthTemplate {...cleanUpProps(props)} />;

export const DrawerWidthExample = {
  render: DrawerWidthStory,

  parameters: {
    docs: {
      source: {
        code: DrawerWidthRaw,
      },
      description: {
        story: `Ширина компонента задается пользователем, но не меньше 320 px. Drawer подстраивает свою ширину под ширину контента,
        либо пользователь может задать ширину компонента напрямую через параметры style или используя classname.`,
      },
    },
  },

  name: 'Drawer. Ширина компонента',
};

//</editor-fold>

//<editor-fold desc="Свободное (кастомизированное) наполнение">
const DrawerCustomContentStory: StoryFn<typeof Drawer> = (props) => (
  <DrawerCustomContentTemplate {...cleanUpProps(props)} />
);

export const DrawerCustomContentExample = {
  render: DrawerCustomContentStory,

  parameters: {
    docs: {
      source: {
        code: DrawerCustomContentRaw,
      },
      description: {
        story: `Наполнение Drawer контентом полностью контролируется пользователем. Пользователь может разместить внутри Drawer
        любые свои компоненты, а также может воспользоваться вспомогательными компонентами DrawerTitle, DrawerContent, DrawerButtonPanel, 
        экспортируемыми из библиотеки @admiral-ds/react-ui.`,
      },
    },
  },

  name: 'Drawer. Свободное (кастомизированное) наполнение',
};
