import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { ReactComponent as MinusCircleOutline } from '@admiral-ds/icons/build/service/MinusCircleOutline.svg';
import { MenuButton } from '../MenuButton';
import styled, { ThemeProvider } from 'styled-components';
import { T } from '#src/components/T';
import { Theme } from '#src/components/themes';
import { MenuItem, RenderOptionProps } from '#src/components/MenuItem';

const DarkDiv = styled.div`
  background-color: ${({ theme }) => theme.color['Special/Dark Static Neutral 00']};
  padding: 2px;
`;
const WrapperVertical = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
`;
const Wrapper = styled.div`
  display: flex;
`;
const Separator = styled.div`
  height: 20px;
  width: 20px;
`;

export default {
  title: 'Admiral-2.1/MenuButton',
  decorators: [withDesign],
  component: MenuButton,
  parameters: {
    layout: 'centered',
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A24517',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A24648',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A24734',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A24784',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A24834',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A24673',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A24759',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A24809',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A24859',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=10888%3A71085',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=10888%3A71109',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=10888%3A71133',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=10888%3A71157',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=10888%3A71490',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=10888%3A71514',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=11005%3A69548',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=11047%3A69703',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=11047%3A69794',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=11047%3A69881',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: ['xl', 'l', 'm', 's'],
      control: { type: 'radio' },
    },
    appearance: {
      options: ['primary', 'secondary', 'ghost', 'white'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    skeleton: {
      control: { type: 'boolean' },
    },
    themeBorderKind: {
      control: {
        type: 'radio',
        options: ['Border radius 0', 'Border radius 2', 'Border radius 4', 'Border radius 8'],
      },
    },
  },
} as ComponentMeta<typeof MenuButton>;

const items = [
  {
    id: '1',
    display: 'Option one',
  },
  {
    id: '2',
    display: 'Option two',
  },
  {
    id: '3',
    display: 'Option three',
  },
  {
    id: '4',
    display: 'Option four',
  },
  {
    id: '5',
    display: 'Option five',
    disabled: true,
  },
  {
    id: '6',
    display: 'Option six',
  },
  {
    id: '7',
    display: 'Option seven',
  },
];

const Template1: ComponentStory<typeof MenuButton> = (args) => {
  const [selected, setSelected] = React.useState<string | null>(null);
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }
  const model = React.useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (items: RenderOptionProps) => (
        <MenuItem dimension={args.dimension === 'xl' ? 'l' : args.dimension} {...items} key={item.id}>
          {item.display}
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
  }, [args.dimension]);

  return (
    <ThemeProvider theme={swapBorder}>
      <MenuButton
        {...args}
        selected={selected}
        onChange={(id) => {
          console.log(`selected: ${id}`);
          setSelected(id);
        }}
        items={model}
        onOpen={() => console.log('open menu')}
        onClose={() => console.log('close menu')}
      >
        test
      </MenuButton>
    </ThemeProvider>
  );
};

const Template2: ComponentStory<typeof MenuButton> = (args) => {
  const items = [
    {
      id: '1',
      display: 'Option one',
    },
    {
      id: '2',
      display: (
        <div style={{ display: 'flex', width: '115px', justifyContent: 'space-between', alignItems: 'center' }}>
          <MinusCircleOutline width={20} height={20} />
          Option two
        </div>
      ),
      disabled: true,
    },
    {
      id: '3',
      display: 'Option three',
    },
    {
      id: '4',
      display: 'Option four',
    },
  ];

  const [selected, setSelected] = React.useState<string | null>(null);
  const model = React.useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (items: RenderOptionProps) => (
        <MenuItem dimension={args.dimension === 'xl' ? 'l' : args.dimension} {...items} key={item.id}>
          {item.display}
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
  }, [args.dimension]);

  return (
    <>
      <MenuButton
        {...args}
        selected={selected}
        onChange={(id) => {
          console.log(`selected: ${id}`);
          setSelected(id);
        }}
        items={model}
        onOpen={() => console.log('open menu')}
        onClose={() => console.log('close menu')}
      >
        test
      </MenuButton>
    </>
  );
};

const Template3: ComponentStory<typeof MenuButton> = (args) => {
  const items = [
    {
      id: '1',
      display: 'Option one',
    },
    {
      id: '2',
      display: (
        <div style={{ display: 'flex', width: '115px', justifyContent: 'space-between', alignItems: 'center' }}>
          <MinusCircleOutline width={20} height={20} />
          Option two
        </div>
      ),
      disabled: true,
    },
    {
      id: '3',
      display: 'Option three',
    },
    {
      id: '4',
      display: 'Option four',
    },
  ];

  const [selected, setSelected] = React.useState<string | null>(null);
  const modelL = React.useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (items: RenderOptionProps) => (
        <MenuItem dimension="l" {...items} key={item.id}>
          {item.display}
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
  }, []);
  const modelM = React.useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (items: RenderOptionProps) => (
        <MenuItem dimension="m" {...items} key={item.id}>
          {item.display}
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
  }, []);
  const modelS = React.useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (items: RenderOptionProps) => (
        <MenuItem dimension="s" {...items} key={item.id}>
          {item.display}
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
  }, []);

  return (
    <>
      <Wrapper>
        <WrapperVertical>
          <T font="Body/Body 1 Long" as="div">
            Size XL
          </T>
          <MenuButton
            {...args}
            appearance="primary"
            dimension="xl"
            selected={selected}
            onChange={(id) => {
              console.log(`selected: ${id}`);
              setSelected(id);
            }}
            items={modelL}
            onOpen={() => console.log('open menu')}
            onClose={() => console.log('close menu')}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...args}
            appearance="primary"
            dimension="xl"
            loading
            selected={selected}
            onChange={(id) => {
              console.log(`selected: ${id}`);
              setSelected(id);
            }}
            items={modelL}
            onOpen={() => console.log('open menu')}
            onClose={() => console.log('close menu')}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...args}
            appearance="secondary"
            dimension="xl"
            selected={selected}
            onChange={(id) => {
              console.log(`selected: ${id}`);
              setSelected(id);
            }}
            items={modelL}
            onOpen={() => console.log('open menu')}
            onClose={() => console.log('close menu')}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...args}
            appearance="secondary"
            dimension="xl"
            loading
            selected={selected}
            onChange={(id) => {
              console.log(`selected: ${id}`);
              setSelected(id);
            }}
            items={modelL}
            onOpen={() => console.log('open menu')}
            onClose={() => console.log('close menu')}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...args}
            appearance="ghost"
            dimension="xl"
            selected={selected}
            onChange={(id) => {
              console.log(`selected: ${id}`);
              setSelected(id);
            }}
            items={modelL}
            onOpen={() => console.log('open menu')}
            onClose={() => console.log('close menu')}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...args}
            appearance="ghost"
            dimension="xl"
            loading
            selected={selected}
            onChange={(id) => {
              console.log(`selected: ${id}`);
              setSelected(id);
            }}
            items={modelL}
            onOpen={() => console.log('open menu')}
            onClose={() => console.log('close menu')}
          >
            Button 56
          </MenuButton>
          <DarkDiv>
            <MenuButton
              {...args}
              appearance="white"
              dimension="xl"
              selected={selected}
              onChange={(id) => {
                console.log(`selected: ${id}`);
                setSelected(id);
              }}
              items={modelL}
              onOpen={() => console.log('open menu')}
              onClose={() => console.log('close menu')}
            >
              Button 56
            </MenuButton>
          </DarkDiv>
          <DarkDiv>
            <MenuButton
              {...args}
              appearance="white"
              dimension="xl"
              loading
              selected={selected}
              onChange={(id) => {
                console.log(`selected: ${id}`);
                setSelected(id);
              }}
              items={modelL}
              onOpen={() => console.log('open menu')}
              onClose={() => console.log('close menu')}
            >
              Button 56
            </MenuButton>
          </DarkDiv>
        </WrapperVertical>
        <Separator />
        <WrapperVertical>
          <T font="Body/Body 1 Long" as="div">
            Size L
          </T>
          <MenuButton
            {...args}
            appearance="primary"
            dimension="l"
            selected={selected}
            onChange={(id) => {
              console.log(`selected: ${id}`);
              setSelected(id);
            }}
            items={modelL}
            onOpen={() => console.log('open menu')}
            onClose={() => console.log('close menu')}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...args}
            appearance="primary"
            dimension="l"
            loading
            selected={selected}
            onChange={(id) => {
              console.log(`selected: ${id}`);
              setSelected(id);
            }}
            items={modelL}
            onOpen={() => console.log('open menu')}
            onClose={() => console.log('close menu')}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...args}
            appearance="secondary"
            dimension="l"
            selected={selected}
            onChange={(id) => {
              console.log(`selected: ${id}`);
              setSelected(id);
            }}
            items={modelL}
            onOpen={() => console.log('open menu')}
            onClose={() => console.log('close menu')}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...args}
            appearance="secondary"
            dimension="l"
            loading
            selected={selected}
            onChange={(id) => {
              console.log(`selected: ${id}`);
              setSelected(id);
            }}
            items={modelL}
            onOpen={() => console.log('open menu')}
            onClose={() => console.log('close menu')}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...args}
            appearance="ghost"
            dimension="l"
            selected={selected}
            onChange={(id) => {
              console.log(`selected: ${id}`);
              setSelected(id);
            }}
            items={modelL}
            onOpen={() => console.log('open menu')}
            onClose={() => console.log('close menu')}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...args}
            appearance="ghost"
            dimension="l"
            loading
            selected={selected}
            onChange={(id) => {
              console.log(`selected: ${id}`);
              setSelected(id);
            }}
            items={modelL}
            onOpen={() => console.log('open menu')}
            onClose={() => console.log('close menu')}
          >
            Button 56
          </MenuButton>
          <DarkDiv>
            <MenuButton
              {...args}
              appearance="white"
              dimension="l"
              selected={selected}
              onChange={(id) => {
                console.log(`selected: ${id}`);
                setSelected(id);
              }}
              items={modelL}
              onOpen={() => console.log('open menu')}
              onClose={() => console.log('close menu')}
            >
              Button 56
            </MenuButton>
          </DarkDiv>
          <DarkDiv>
            <MenuButton
              {...args}
              appearance="white"
              dimension="l"
              loading
              selected={selected}
              onChange={(id) => {
                console.log(`selected: ${id}`);
                setSelected(id);
              }}
              items={modelL}
              onOpen={() => console.log('open menu')}
              onClose={() => console.log('close menu')}
            >
              Button 56
            </MenuButton>
          </DarkDiv>
        </WrapperVertical>
        <Separator />
        <WrapperVertical>
          <T font="Body/Body 1 Long" as="div">
            Size M
          </T>
          <MenuButton
            {...args}
            appearance="primary"
            dimension="m"
            selected={selected}
            onChange={(id) => {
              console.log(`selected: ${id}`);
              setSelected(id);
            }}
            items={modelM}
            onOpen={() => console.log('open menu')}
            onClose={() => console.log('close menu')}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...args}
            appearance="primary"
            dimension="m"
            loading
            selected={selected}
            onChange={(id) => {
              console.log(`selected: ${id}`);
              setSelected(id);
            }}
            items={modelM}
            onOpen={() => console.log('open menu')}
            onClose={() => console.log('close menu')}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...args}
            appearance="secondary"
            dimension="m"
            selected={selected}
            onChange={(id) => {
              console.log(`selected: ${id}`);
              setSelected(id);
            }}
            items={modelM}
            onOpen={() => console.log('open menu')}
            onClose={() => console.log('close menu')}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...args}
            appearance="secondary"
            dimension="m"
            loading
            selected={selected}
            onChange={(id) => {
              console.log(`selected: ${id}`);
              setSelected(id);
            }}
            items={modelM}
            onOpen={() => console.log('open menu')}
            onClose={() => console.log('close menu')}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...args}
            appearance="ghost"
            dimension="m"
            selected={selected}
            onChange={(id) => {
              console.log(`selected: ${id}`);
              setSelected(id);
            }}
            items={modelM}
            onOpen={() => console.log('open menu')}
            onClose={() => console.log('close menu')}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...args}
            appearance="ghost"
            dimension="m"
            loading
            selected={selected}
            onChange={(id) => {
              console.log(`selected: ${id}`);
              setSelected(id);
            }}
            items={modelM}
            onOpen={() => console.log('open menu')}
            onClose={() => console.log('close menu')}
          >
            Button 56
          </MenuButton>
          <DarkDiv>
            <MenuButton
              {...args}
              appearance="white"
              dimension="m"
              selected={selected}
              onChange={(id) => {
                console.log(`selected: ${id}`);
                setSelected(id);
              }}
              items={modelM}
              onOpen={() => console.log('open menu')}
              onClose={() => console.log('close menu')}
            >
              Button 56
            </MenuButton>
          </DarkDiv>
          <DarkDiv>
            <MenuButton
              {...args}
              appearance="white"
              dimension="m"
              loading
              selected={selected}
              onChange={(id) => {
                console.log(`selected: ${id}`);
                setSelected(id);
              }}
              items={modelM}
              onOpen={() => console.log('open menu')}
              onClose={() => console.log('close menu')}
            >
              Button 56
            </MenuButton>
          </DarkDiv>
        </WrapperVertical>
        <Separator />
        <WrapperVertical>
          <T font="Body/Body 1 Long" as="div">
            Size S
          </T>
          <MenuButton
            {...args}
            appearance="primary"
            dimension="s"
            selected={selected}
            onChange={(id) => {
              console.log(`selected: ${id}`);
              setSelected(id);
            }}
            items={modelS}
            onOpen={() => console.log('open menu')}
            onClose={() => console.log('close menu')}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...args}
            appearance="primary"
            dimension="s"
            loading
            selected={selected}
            onChange={(id) => {
              console.log(`selected: ${id}`);
              setSelected(id);
            }}
            items={modelS}
            onOpen={() => console.log('open menu')}
            onClose={() => console.log('close menu')}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...args}
            appearance="secondary"
            dimension="s"
            selected={selected}
            onChange={(id) => {
              console.log(`selected: ${id}`);
              setSelected(id);
            }}
            items={modelS}
            onOpen={() => console.log('open menu')}
            onClose={() => console.log('close menu')}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...args}
            appearance="secondary"
            dimension="s"
            loading
            selected={selected}
            onChange={(id) => {
              console.log(`selected: ${id}`);
              setSelected(id);
            }}
            items={modelS}
            onOpen={() => console.log('open menu')}
            onClose={() => console.log('close menu')}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...args}
            appearance="ghost"
            dimension="s"
            selected={selected}
            onChange={(id) => {
              console.log(`selected: ${id}`);
              setSelected(id);
            }}
            items={modelS}
            onOpen={() => console.log('open menu')}
            onClose={() => console.log('close menu')}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...args}
            appearance="ghost"
            dimension="s"
            loading
            selected={selected}
            onChange={(id) => {
              console.log(`selected: ${id}`);
              setSelected(id);
            }}
            items={modelS}
            onOpen={() => console.log('open menu')}
            onClose={() => console.log('close menu')}
          >
            Button 56
          </MenuButton>
          <DarkDiv>
            <MenuButton
              {...args}
              appearance="white"
              dimension="s"
              selected={selected}
              onChange={(id) => {
                console.log(`selected: ${id}`);
                setSelected(id);
              }}
              items={modelS}
              onOpen={() => console.log('open menu')}
              onClose={() => console.log('close menu')}
            >
              Button 56
            </MenuButton>
          </DarkDiv>
          <DarkDiv>
            <MenuButton
              {...args}
              appearance="white"
              dimension="s"
              loading
              selected={selected}
              onChange={(id) => {
                console.log(`selected: ${id}`);
                setSelected(id);
              }}
              items={modelS}
              onOpen={() => console.log('open menu')}
              onClose={() => console.log('close menu')}
            >
              Button 56
            </MenuButton>
          </DarkDiv>
        </WrapperVertical>
      </Wrapper>
    </>
  );
};

export const MenuButtonBase = Template1.bind({});
MenuButtonBase.args = {};
MenuButtonBase.storyName = 'MenuButton. Базовый пример.';
MenuButtonBase.parameters = {
  docs: {
    source: {
      type: 'code',
    },
  },
};

export const MenuButtonOptions = Template2.bind({});
MenuButtonOptions.args = {};
MenuButtonOptions.storyName = 'MenuButton. Задизейбленные и кастомизированные опции.';
MenuButtonOptions.parameters = {
  docs: {
    source: {
      type: 'code',
    },
  },
};

export const MenuButtonVariants = Template3.bind({});
MenuButtonVariants.args = {};
MenuButtonVariants.storyName = 'MenuButton. Размеры и стили.';
MenuButtonVariants.parameters = {
  docs: {
    source: {
      type: 'code',
    },
  },
};
