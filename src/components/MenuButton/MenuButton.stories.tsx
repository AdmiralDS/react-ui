import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { ReactComponent as MinusCircleOutline } from '@admiral-ds/icons/build/service/MinusCircleOutline.svg';
import { MenuButton } from '../MenuButton';
import styled, { ThemeProvider } from 'styled-components';
import { T } from '#src/components/T';
import type { Theme } from '#src/components/themes';
import type { RenderOptionProps } from '#src/components/Menu/MenuItem';
import { MenuItem } from '#src/components/Menu/MenuItem';
import { ReactComponent as StarSolid } from '@admiral-ds/icons/build/system/StarSolid.svg';
import { ALL_BORDER_RADIUS_VALUES } from '#src/components/themes/borderRadius';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';
import type { MenuButtonProps } from '#src/components/MenuButton';

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
    docs: {
      source: {
        code: null,
      },
    },
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
    disableSelectedOptionHighlight: {
      control: { type: 'boolean' },
    },
    isVisible: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    skeleton: {
      control: { type: 'boolean' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    alignSelf: {
      options: [undefined, 'auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
      control: { type: 'select' },
    },
    items: {
      control: false,
    },
    selected: {
      control: false,
    },
    active: {
      control: false,
    },
    menuWidth: {
      control: false,
    },
    menuMaxHeight: {
      control: false,
    },
    dropContainerCssMixin: {
      control: false,
    },
  },
} as ComponentMeta<typeof MenuButton>;

const handleVisibilityChange = (isVisible: boolean) => {
  if (isVisible) {
    console.log('Menu opened');
  } else {
    console.log('Menu closed');
  }
};
const logSelectedId = (id: string) => {
  console.log(`selected: ${id}`);
};
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
  const cleanProps = cleanUpProps(args) as MenuButtonProps;
  const [selected, setSelected] = React.useState<string | undefined>(undefined);

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (cleanProps as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  const model = React.useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (items: RenderOptionProps) => (
        <MenuItem dimension={cleanProps.dimension === 'xl' ? 'l' : cleanProps.dimension} {...items} key={item.id}>
          {item.display}
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
  }, [args.dimension]);

  return (
    <ThemeProvider theme={swapBorder}>
      <MenuButton
        {...cleanProps}
        selected={selected}
        onSelectItem={(id) => {
          logSelectedId(id);
          setSelected(id);
        }}
        items={model}
        onVisibilityChange={handleVisibilityChange}
        data-dropdown-container-id="menu-button-with-dropdown"
        className="menu-button-class"
      >
        test
      </MenuButton>
    </ThemeProvider>
  );
};

const Template2: ComponentStory<typeof MenuButton> = (args) => {
  const cleanProps = cleanUpProps(args) as MenuButtonProps;

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

  const [selected, setSelected] = React.useState<string | undefined>(undefined);
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
        {...cleanProps}
        selected={selected}
        onSelectItem={(id) => {
          logSelectedId(id);
          setSelected(id);
        }}
        items={model}
        onVisibilityChange={handleVisibilityChange}
      >
        test
      </MenuButton>
    </>
  );
};

const Template3: ComponentStory<typeof MenuButton> = (args) => {
  const cleanProps = cleanUpProps(args) as MenuButtonProps;

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

  const [selected, setSelected] = React.useState<string | undefined>(undefined);
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
            {...cleanProps}
            appearance="primary"
            dimension="xl"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelL}
            onVisibilityChange={handleVisibilityChange}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...cleanProps}
            appearance="primary"
            dimension="xl"
            loading
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelL}
            onVisibilityChange={handleVisibilityChange}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...cleanProps}
            appearance="secondary"
            dimension="xl"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelL}
            onVisibilityChange={handleVisibilityChange}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...cleanProps}
            appearance="secondary"
            dimension="xl"
            loading
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelL}
            onVisibilityChange={handleVisibilityChange}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...cleanProps}
            appearance="ghost"
            dimension="xl"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelL}
            onVisibilityChange={handleVisibilityChange}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...cleanProps}
            appearance="ghost"
            dimension="xl"
            loading
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelL}
            onVisibilityChange={handleVisibilityChange}
          >
            Button 56
          </MenuButton>
          <DarkDiv>
            <MenuButton
              {...cleanProps}
              appearance="white"
              dimension="xl"
              selected={selected}
              onSelectItem={(id) => {
                logSelectedId(id);
                setSelected(id);
              }}
              items={modelL}
              onVisibilityChange={handleVisibilityChange}
            >
              Button 56
            </MenuButton>
          </DarkDiv>
          <DarkDiv>
            <MenuButton
              {...cleanProps}
              appearance="white"
              dimension="xl"
              loading
              selected={selected}
              onSelectItem={(id) => {
                logSelectedId(id);
                setSelected(id);
              }}
              items={modelL}
              onVisibilityChange={handleVisibilityChange}
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
            {...cleanProps}
            appearance="primary"
            dimension="l"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelL}
            onVisibilityChange={handleVisibilityChange}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...cleanProps}
            appearance="primary"
            dimension="l"
            loading
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelL}
            onVisibilityChange={handleVisibilityChange}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...cleanProps}
            appearance="secondary"
            dimension="l"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelL}
            onVisibilityChange={handleVisibilityChange}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...cleanProps}
            appearance="secondary"
            dimension="l"
            loading
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelL}
            onVisibilityChange={handleVisibilityChange}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...cleanProps}
            appearance="ghost"
            dimension="l"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelL}
            onVisibilityChange={handleVisibilityChange}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...cleanProps}
            appearance="ghost"
            dimension="l"
            loading
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelL}
            onVisibilityChange={handleVisibilityChange}
          >
            Button 56
          </MenuButton>
          <DarkDiv>
            <MenuButton
              {...cleanProps}
              appearance="white"
              dimension="l"
              selected={selected}
              onSelectItem={(id) => {
                logSelectedId(id);
                setSelected(id);
              }}
              items={modelL}
              onVisibilityChange={handleVisibilityChange}
            >
              Button 56
            </MenuButton>
          </DarkDiv>
          <DarkDiv>
            <MenuButton
              {...cleanProps}
              appearance="white"
              dimension="l"
              loading
              selected={selected}
              onSelectItem={(id) => {
                logSelectedId(id);
                setSelected(id);
              }}
              items={modelL}
              onVisibilityChange={handleVisibilityChange}
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
            {...cleanProps}
            appearance="primary"
            dimension="m"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelM}
            onVisibilityChange={handleVisibilityChange}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...cleanProps}
            appearance="primary"
            dimension="m"
            loading
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelM}
            onVisibilityChange={handleVisibilityChange}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...cleanProps}
            appearance="secondary"
            dimension="m"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelM}
            onVisibilityChange={handleVisibilityChange}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...cleanProps}
            appearance="secondary"
            dimension="m"
            loading
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelM}
            onVisibilityChange={handleVisibilityChange}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...cleanProps}
            appearance="ghost"
            dimension="m"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelM}
            onVisibilityChange={handleVisibilityChange}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...cleanProps}
            appearance="ghost"
            dimension="m"
            loading
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelM}
            onVisibilityChange={handleVisibilityChange}
          >
            Button 56
          </MenuButton>
          <DarkDiv>
            <MenuButton
              {...cleanProps}
              appearance="white"
              dimension="m"
              selected={selected}
              onSelectItem={(id) => {
                logSelectedId(id);
                setSelected(id);
              }}
              items={modelM}
              onVisibilityChange={handleVisibilityChange}
            >
              Button 56
            </MenuButton>
          </DarkDiv>
          <DarkDiv>
            <MenuButton
              {...cleanProps}
              appearance="white"
              dimension="m"
              loading
              selected={selected}
              onSelectItem={(id) => {
                logSelectedId(id);
                setSelected(id);
              }}
              items={modelM}
              onVisibilityChange={handleVisibilityChange}
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
            {...cleanProps}
            appearance="primary"
            dimension="s"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelS}
            onVisibilityChange={handleVisibilityChange}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...cleanProps}
            appearance="primary"
            dimension="s"
            loading
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelS}
            onVisibilityChange={handleVisibilityChange}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...cleanProps}
            appearance="secondary"
            dimension="s"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelS}
            onVisibilityChange={handleVisibilityChange}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...cleanProps}
            appearance="secondary"
            dimension="s"
            loading
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelS}
            onVisibilityChange={handleVisibilityChange}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...cleanProps}
            appearance="ghost"
            dimension="s"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelS}
            onVisibilityChange={handleVisibilityChange}
          >
            Button 56
          </MenuButton>
          <MenuButton
            {...cleanProps}
            appearance="ghost"
            dimension="s"
            loading
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelS}
            onVisibilityChange={handleVisibilityChange}
          >
            Button 56
          </MenuButton>
          <DarkDiv>
            <MenuButton
              {...cleanProps}
              appearance="white"
              dimension="s"
              selected={selected}
              onSelectItem={(id) => {
                logSelectedId(id);
                setSelected(id);
              }}
              items={modelS}
              onVisibilityChange={handleVisibilityChange}
            >
              Button 56
            </MenuButton>
          </DarkDiv>
          <DarkDiv>
            <MenuButton
              {...cleanProps}
              appearance="white"
              dimension="s"
              loading
              selected={selected}
              onSelectItem={(id) => {
                logSelectedId(id);
                setSelected(id);
              }}
              items={modelS}
              onVisibilityChange={handleVisibilityChange}
            >
              Button 56
            </MenuButton>
          </DarkDiv>
        </WrapperVertical>
      </Wrapper>
    </>
  );
};

const Template4: ComponentStory<typeof MenuButton> = (args) => {
  const cleanProps = cleanUpProps(args) as MenuButtonProps;

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

  const [selected, setSelected] = React.useState<string | undefined>(undefined);
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
            {...cleanProps}
            appearance="primary"
            dimension="xl"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelL}
            onVisibilityChange={handleVisibilityChange}
          >
            <StarSolid />
            Button 56
          </MenuButton>
          <MenuButton
            {...cleanProps}
            appearance="secondary"
            dimension="xl"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelL}
            onVisibilityChange={handleVisibilityChange}
          >
            <StarSolid />
            Button 56
          </MenuButton>
          <MenuButton
            {...cleanProps}
            appearance="ghost"
            dimension="xl"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelL}
            onVisibilityChange={handleVisibilityChange}
          >
            <StarSolid />
            Button 56
          </MenuButton>
          <DarkDiv>
            <MenuButton
              {...cleanProps}
              appearance="white"
              dimension="xl"
              selected={selected}
              onSelectItem={(id) => {
                logSelectedId(id);
                setSelected(id);
              }}
              items={modelL}
              onVisibilityChange={handleVisibilityChange}
            >
              <StarSolid />
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
            {...cleanProps}
            appearance="primary"
            dimension="l"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelL}
            onVisibilityChange={handleVisibilityChange}
          >
            <StarSolid />
            Button 56
          </MenuButton>
          <MenuButton
            {...cleanProps}
            appearance="secondary"
            dimension="l"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelL}
            onVisibilityChange={handleVisibilityChange}
          >
            <StarSolid />
            Button 56
          </MenuButton>
          <MenuButton
            {...cleanProps}
            appearance="ghost"
            dimension="l"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelL}
            onVisibilityChange={handleVisibilityChange}
          >
            <StarSolid />
            Button 56
          </MenuButton>
          <DarkDiv>
            <MenuButton
              {...cleanProps}
              appearance="white"
              dimension="l"
              selected={selected}
              onSelectItem={(id) => {
                logSelectedId(id);
                setSelected(id);
              }}
              items={modelL}
              onVisibilityChange={handleVisibilityChange}
            >
              <StarSolid />
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
            {...cleanProps}
            appearance="primary"
            dimension="m"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelM}
            onVisibilityChange={handleVisibilityChange}
          >
            <StarSolid />
            Button 56
          </MenuButton>
          <MenuButton
            {...cleanProps}
            appearance="secondary"
            dimension="m"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelM}
            onVisibilityChange={handleVisibilityChange}
          >
            <StarSolid />
            Button 56
          </MenuButton>
          <MenuButton
            {...cleanProps}
            appearance="ghost"
            dimension="m"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelM}
            onVisibilityChange={handleVisibilityChange}
          >
            <StarSolid />
            Button 56
          </MenuButton>
          <DarkDiv>
            <MenuButton
              {...cleanProps}
              appearance="white"
              dimension="m"
              selected={selected}
              onSelectItem={(id) => {
                logSelectedId(id);
                setSelected(id);
              }}
              items={modelM}
              onVisibilityChange={handleVisibilityChange}
            >
              <StarSolid />
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
            {...cleanProps}
            appearance="primary"
            dimension="s"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelS}
            onVisibilityChange={handleVisibilityChange}
          >
            <StarSolid />
            Button 56
          </MenuButton>
          <MenuButton
            {...cleanProps}
            appearance="secondary"
            dimension="s"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelS}
            onVisibilityChange={handleVisibilityChange}
          >
            <StarSolid />
            Button 56
          </MenuButton>
          <MenuButton
            {...cleanProps}
            appearance="ghost"
            dimension="s"
            selected={selected}
            onSelectItem={(id) => {
              logSelectedId(id);
              setSelected(id);
            }}
            items={modelS}
            onVisibilityChange={handleVisibilityChange}
          >
            <StarSolid />
            Button 56
          </MenuButton>
          <DarkDiv>
            <MenuButton
              {...cleanProps}
              appearance="white"
              dimension="s"
              selected={selected}
              onSelectItem={(id) => {
                logSelectedId(id);
                setSelected(id);
              }}
              items={modelS}
              onVisibilityChange={handleVisibilityChange}
            >
              <StarSolid />
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

export const MenuButtonOptions = Template2.bind({});
MenuButtonOptions.args = {};
MenuButtonOptions.storyName = 'MenuButton. Задизейбленные и кастомизированные опции.';

export const MenuButtonVariants = Template3.bind({});
MenuButtonVariants.args = {};
MenuButtonVariants.storyName = 'MenuButton. Размеры и стили.';

export const MenuButtonIcon = Template4.bind({});
MenuButtonIcon.args = {};
MenuButtonIcon.storyName = 'MenuButton с иконкой';
