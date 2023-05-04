import { Button } from '#src/components/Button';
import { hexToRgba } from '#src/components/common/utils/hexToRgba';
import { Option } from '#src/components/input/Select';
import { InputField, SelectField } from '#src/components/form';
import type { DrawerProps } from '#src/components/Drawer';
import { Drawer, DrawerButtonPanel, DrawerContent, DrawerTitle } from '#src/components/Drawer';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { withDesign } from 'storybook-addon-designs';
import styled, { css, ThemeProvider } from 'styled-components';
import type { Theme } from '#src/components/themes';
import { ALL_BORDER_RADIUS_VALUES } from '#src/components/themes/borderRadius';
import { ReactComponent as ArrowLeftOutline } from '@admiral-ds/icons/build/system/ArrowLeftOutline.svg';
import { ReactComponent as ArrowRightOutline } from '@admiral-ds/icons/build/system/ArrowRightOutline.svg';

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
    Компонент Drawer — это панель, которая накладывается поверх страницы, выдвигаясь c правой или левой части экрана. Он
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

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContentArea = styled.div`
  display: flex;
  height: 500px;
  background: ${({ theme }) => theme.color['Success/Success 20']};
`;

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

const DrawerForm = ({ onYesClick, onNoClick }: Props) => {
  const [selected, setSelected] = React.useState('');
  const [inputValue, setInputValue] = React.useState('');
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
  };

  return (
    <>
      <DrawerContent>
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
      </DrawerContent>
      <DrawerButtonPanel>
        <Button appearance="primary" dimension="m" onClick={() => onYesClick({ selected, inputValue })}>
          Yes button
        </Button>
        <Button appearance="secondary" dimension="m" onClick={onNoClick}>
          No button
        </Button>
      </DrawerButtonPanel>
    </>
  );
};

const Template1: ComponentStory<typeof Drawer> = (args) => {
  const [opened, setOpened] = React.useState(false);

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <Button onClick={() => setOpened(true)}>Open drawer with 2 buttons</Button>
      <Drawer
        {...args}
        isOpen={opened}
        onClose={() => {
          setOpened(false);
        }}
        closeOnBackdropClick
        closeOnEscapeKeyDown
        style={{ width: '480px' }}
        aria-labelledby="drawer-title"
      >
        <DrawerTitle id="drawer-title">Drawer title</DrawerTitle>
        <DrawerForm
          onYesClick={(p) => {
            console.log(`value ${p.inputValue}`);
            setOpened(false);
          }}
          onNoClick={() => setOpened(false)}
        />
      </Drawer>
    </ThemeProvider>
  );
};

const Template2: ComponentStory<typeof Drawer> = (args) => {
  const [opened, setOpened] = React.useState(false);

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <Button onClick={() => setOpened(true)}>Open drawer with 2 buttons</Button>
      <Drawer
        {...args}
        isOpen={opened}
        onClose={() => {
          setOpened(false);
        }}
        backdrop={false}
        closeOnEscapeKeyDown
        style={{ width: '480px' }}
        aria-labelledby="drawer-title"
      >
        <DrawerTitle id="drawer-title">Drawer title</DrawerTitle>
        <DrawerForm
          onYesClick={(p) => {
            console.log(`value ${p.inputValue}`);
            setOpened(false);
          }}
          onNoClick={() => setOpened(false)}
        />
      </Drawer>
    </ThemeProvider>
  );
};

const Template3: ComponentStory<typeof Drawer> = (args) => {
  const [opened, setOpened] = React.useState(false);

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <Button onClick={() => setOpened(true)}>Open drawer with 2 buttons</Button>
      <Drawer
        {...args}
        isOpen={opened}
        displayCloseIcon={false}
        style={{ width: '480px' }}
        aria-labelledby="drawer-title"
      >
        <DrawerTitle id="drawer-title">Drawer title</DrawerTitle>
        <DrawerForm
          onYesClick={(p) => {
            console.log(`value ${p.inputValue}`);
            setOpened(false);
          }}
          onNoClick={() => setOpened(false)}
        />
      </Drawer>
    </ThemeProvider>
  );
};

const Template4: ComponentStory<typeof Drawer> = (args) => {
  const [opened, setOpened] = React.useState(false);
  const [position, setPosition] = React.useState<DrawerProps['position']>('right');

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <ButtonWrapper>
        <Button
          onClick={() => {
            setPosition('left');
            setOpened(true);
          }}
        >
          <ArrowLeftOutline />
          Open drawer with 'left' position
        </Button>
        <Button
          onClick={() => {
            setPosition('right');
            setOpened(true);
          }}
        >
          Open drawer with 'right' position
          <ArrowRightOutline />
        </Button>
      </ButtonWrapper>
      <Drawer
        {...args}
        isOpen={opened}
        onClose={() => {
          setOpened(false);
        }}
        position={position}
        closeOnBackdropClick
        closeOnEscapeKeyDown
        style={{ width: '480px' }}
        aria-labelledby="drawer-title"
      >
        <DrawerTitle id="drawer-title">Drawer title</DrawerTitle>
        <DrawerContent>
          <ContentArea />
        </DrawerContent>
      </Drawer>
    </ThemeProvider>
  );
};

const Template5: ComponentStory<typeof Drawer> = (args) => {
  const [opened, setOpened] = React.useState(false);

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <Button
        onClick={() => {
          setOpened(true);
        }}
      >
        Open mobile drawer
      </Button>
      <Drawer
        {...args}
        isOpen={opened}
        onClose={() => {
          setOpened(false);
        }}
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

export const DrawerWithBackdrop = Template1.bind({});
DrawerWithBackdrop.args = {};
DrawerWithBackdrop.storyName = 'Drawer с блокировкой контента страницы (Backdrop = True)';
DrawerWithBackdrop.parameters = {
  docs: {
    description: {
      story: `Поверх экрана накладывается цвет Opacity/Modal. Взаимодействовать с контентом 
      страницы при открытой панели нельзя. Нажатие на затемненную область приводит 
      к закрытию боковой панели. Закрытие так же происходит по нажатию на крестик либо кнопке внизу панели.`,
    },
  },
};

export const DrawerWithoutBackdrop = Template2.bind({});
DrawerWithoutBackdrop.args = {};
DrawerWithoutBackdrop.storyName = 'Drawer без блокировки (Backdrop = False)';

export const DrawerWithoutCloseIcon = Template3.bind({});
DrawerWithoutCloseIcon.args = {};
DrawerWithoutCloseIcon.storyName = 'Drawer с обязательным условием (non-closable Drawer)';

export const DrawerPosition = Template4.bind({});
DrawerPosition.args = {};
DrawerPosition.storyName = 'Drawer. Расположение компонента';
DrawerPosition.parameters = {
  docs: {
    description: {
      story: `Drawer может располагаться как справа, так и слева. Расположение Drawerа определяется параметром position.
      При этом, компоновка элементов внутри панели не изменяется в зависимости от расположения.`,
    },
  },
};

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
