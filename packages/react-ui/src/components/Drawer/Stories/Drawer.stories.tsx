import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import type { Theme } from '@admiral-ds/react-ui';
import {
  Drawer,
  DrawerButtonPanel,
  DrawerContent,
  DrawerTitle,
  Button,
  InputField,
  ALL_BORDER_RADIUS_VALUES,
} from '@admiral-ds/react-ui';

import {
  DrawerPlaygroundTemplate,
  DrawerWithBackdropTemplate,
  DrawerWithoutBackdropTemplate,
  DrawerNonClosableTemplate,
  DrawerPositionTemplate,
} from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import PlaygroundRaw from '!!raw-loader!./Templates/DrawerPlayground';
import DrawerWithBackdropRaw from '!!raw-loader!./Templates/DrawerWithBackdrop';
import DrawerWithoutBackdropRaw from '!!raw-loader!./Templates/DrawerWithoutBackdrop';
import DrawerNonClosableRaw from '!!raw-loader!./Templates/DrawerNonClosable';
import DrawerPositionRaw from '!!raw-loader!./Templates/DrawerPosition';

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
  decorators: [withDesign],
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
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Drawer>;

const ContentArea = styled.div`
  display: flex;
  height: 100%;
  background: ${({ theme }) => theme.color['Success/Success 20']};
`;

const Template5: ComponentStory<typeof Drawer> = (args) => {
  const [opened, setOpened] = React.useState(false);

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <Button onClick={() => setOpened(true)}>Open mobile drawer</Button>
      <Drawer
        {...args}
        isOpen={opened}
        onClose={() => setOpened(false)}
        mobile
        closeOnEscapeKeyDown
        aria-labelledby="drawer-title"
      >
        <DrawerTitle id="drawer-title">Drawer title</DrawerTitle>
        <DrawerContent>
          <ContentArea />
        </DrawerContent>
        <DrawerButtonPanel>
          <Button appearance="primary" dimension="m" onClick={() => setOpened(false)}>
            Yes button
          </Button>
          <Button appearance="secondary" dimension="m" onClick={() => setOpened(false)}>
            No button
          </Button>
        </DrawerButtonPanel>
      </Drawer>
    </ThemeProvider>
  );
};

const Template6: ComponentStory<typeof Drawer> = (args) => {
  const [opened, setOpened] = React.useState(false);

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <Button onClick={() => setOpened(true)}>Open drawer</Button>
      <Drawer
        {...args}
        isOpen={opened}
        onClose={() => setOpened(false)}
        closeOnBackdropClick
        closeOnEscapeKeyDown
        aria-labelledby="drawer-title"
      >
        <DrawerTitle id="drawer-title">Drawer title</DrawerTitle>
        <DrawerContent style={{ width: '500px' }}>
          <ContentArea />
        </DrawerContent>
      </Drawer>
    </ThemeProvider>
  );
};

const Template7: ComponentStory<typeof Drawer> = (args) => {
  const [opened, setOpened] = React.useState(false);
  return (
    <>
      <Button onClick={() => setOpened(true)}>Open drawer with custom content</Button>
      <Drawer {...args} isOpen={opened} onClose={() => setOpened(false)} aria-labelledby="drawer-title">
        <h1 id="drawer-title" style={{ paddingLeft: '24px' }}>
          <strong>Drawer title</strong>
        </h1>
        <i style={{ padding: '0 24px', height: '100%' }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
          quam quasi quod ut veritatis?
        </i>
        <div
          style={{
            marginTop: '40px',
            width: '80%',
            display: 'flex',
            justifyContent: 'space-around',
            alignSelf: 'flex-end',
            padding: '0 24px',
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
      </Drawer>
    </>
  );
};

//<editor-fold desc="Playground">
const PlaygroundStory: ComponentStory<typeof Drawer> = (props) => <DrawerPlaygroundTemplate {...cleanUpProps(props)} />;
export const Playground = PlaygroundStory.bind({});
Playground.parameters = {
  docs: {
    source: {
      code: PlaygroundRaw,
    },
  },
};
//</editor-fold>

//<editor-fold desc="Drawer с блокировкой контента страницы">
const DrawerWithBackdropStory: ComponentStory<typeof Drawer> = (props) => (
  <DrawerWithBackdropTemplate {...cleanUpProps(props)} />
);
export const DrawerWithBackdropExample = DrawerWithBackdropStory.bind({});
DrawerWithBackdropExample.parameters = {
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
};
DrawerWithBackdropExample.storyName = 'Drawer с блокировкой контента страницы (Backdrop = True)';
//</editor-fold>

//<editor-fold desc="Drawer без блокировки контента страницы">
const DrawerWithoutBackdropStory: ComponentStory<typeof Drawer> = (props) => (
  <DrawerWithoutBackdropTemplate {...cleanUpProps(props)} />
);
export const DrawerWithoutBackdropExample = DrawerWithoutBackdropStory.bind({});
DrawerWithoutBackdropExample.parameters = {
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
};
DrawerWithoutBackdropExample.storyName = 'Drawer без блокировки контента страницы (Backdrop = False)';
//</editor-fold>

//<editor-fold desc="Drawer с обязательным условием">
const DrawerNonClosableStory: ComponentStory<typeof Drawer> = (props) => (
  <DrawerNonClosableTemplate {...cleanUpProps(props)} />
);
export const DrawerNonClosableExample = DrawerNonClosableStory.bind({});
DrawerNonClosableExample.parameters = {
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
};
DrawerNonClosableExample.storyName = 'Drawer с обязательным условием (non-closable Drawer)';
//</editor-fold>

//<editor-fold desc="Расположение компонента">
const DrawerPositionStory: ComponentStory<typeof Drawer> = (props) => (
  <DrawerPositionTemplate {...cleanUpProps(props)} />
);
export const DrawerPositionExample = DrawerPositionStory.bind({});
DrawerPositionExample.parameters = {
  docs: {
    source: {
      code: DrawerPositionRaw,
    },
    description: {
      story: `Drawer может располагаться как справа (по умолчанию), так и слева. Расположение Drawerа определяется параметром position.
      При этом, компоновка элементов внутри панели не изменяется в зависимости от расположения.`,
    },
  },
};
DrawerPositionExample.storyName = 'Drawer. Расположение компонента';
//</editor-fold>

export const DrawerMobile = Template5.bind({});
DrawerMobile.args = {};
DrawerMobile.storyName = 'Drawer. Адаптив (mobile)';
DrawerMobile.parameters = {
  docs: {
    description: {
      story: `Адаптируясь на мобильных устройствах, компонент имеет несколько иную структуру, отступы и размеры.
      На мобильных устройствах компонент всегда появляется с правой стороны экрана. 
      Заполняет весь экран по ширине, кроме стандартного отступа для контента с левой стороны.\nДля того чтобы 
      перевести компонент в адаптивный режим, используйте параметр mobile.`,
    },
  },
};

export const DrawerWidth = Template6.bind({});
DrawerWidth.args = {};
DrawerWidth.storyName = 'Drawer. Ширина компонента';
DrawerWidth.parameters = {
  docs: {
    description: {
      story: `Ширина компонента задается пользователем, но не меньше 320 px. Drawer подстраивает свою ширину под ширину контента,
      либо пользователь может задать ширину компонента напрямую через параметры style или используя classname.`,
    },
  },
};

export const DrawerCustomContent = Template7.bind({});
DrawerCustomContent.args = {};
DrawerCustomContent.storyName = 'Drawer. Свободное (кастомизированное) наполнение';
DrawerCustomContent.parameters = {
  docs: {
    description: {
      story: `Наполнение Drawer контентом полностью контролируется пользователем. Пользователь может разместить внутри Drawer
      любые свои компоненты, а также может воспользоваться вспомогательными компонентами DrawerTitle, DrawerContent, DrawerButtonPanel, 
      экспортируемыми из библиотеки @admiral-ds/react-ui.`,
    },
  },
};
