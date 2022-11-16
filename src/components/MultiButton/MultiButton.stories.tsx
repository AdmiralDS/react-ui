import { MultiButton, MultiButtonItem } from '#src/components/MultiButton';
import React, { MouseEvent } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import styled, { ThemeProvider } from 'styled-components';
import { Theme } from '#src/components/themes';
import { MenuItem, RenderOptionProps } from '#src/components/Menu/MenuItem';
import { ReactComponent as BonusSolid } from '@admiral-ds/icons/build/category/BonusSolid.svg';

const Separator = styled.div`
  width: 20px;
  height: 20px;
`;

export default {
  title: 'Admiral-2.1/MultiButton',
  decorators: [withDesign],
  component: MultiButton,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A17173',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A19496',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A19544',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A19592',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A19640',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A19520',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A19568',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A19616',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A19664',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A19900',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: ['xl', 'l', 'm', 's'],
      control: { type: 'radio' },
    },
    appearance: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    themeBorderKind: {
      options: ['Border radius 0', 'Border radius 2', 'Border radius 4', 'Border radius 8'],
      control: { type: 'radio' },
    },
    skeleton: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof MultiButton>;

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
const handleMainButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
  console.log('Main button clicked');
};

const itemsDemo: Array<MultiButtonItem> = [
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

const Template1: ComponentStory<typeof MultiButton> = (args) => {
  const [selected, setSelected] = React.useState<string | undefined>(undefined);
  const [selected2, setSelected2] = React.useState<string | undefined>(undefined);

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  const model = React.useMemo(() => {
    return itemsDemo.slice(1, itemsDemo.length).map((item) => ({
      id: item.id,
      render: (items: RenderOptionProps) => (
        <MenuItem dimension={args.dimension === 'xl' ? 'l' : args.dimension} {...items} key={item.id}>
          {item.display}
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
  }, [args.dimension, itemsDemo]);

  return (
    <ThemeProvider theme={swapBorder}>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <MultiButton
          {...args}
          appearance="primary"
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          items={model}
          onVisibilityChange={handleVisibilityChange}
          data-dropdown-container-id="first-multi-button-with-dropdown"
          className="multi-button-class"
          onMainButtonClick={handleMainButtonClick}
        >
          {itemsDemo[0].display}
        </MultiButton>
        <Separator />
        <MultiButton
          {...args}
          appearance="secondary"
          selected={selected2}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected2(id);
          }}
          items={model}
          onVisibilityChange={handleVisibilityChange}
          data-dropdown-container-id="second-multi-button-with-dropdown"
          onMainButtonClick={handleMainButtonClick}
        >
          {itemsDemo[0].display}
        </MultiButton>
      </div>
    </ThemeProvider>
  );
};

const itemsDisabled: Array<MultiButtonItem> = [
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
    disabled: true,
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

const Template2: ComponentStory<typeof MultiButton> = (args) => {
  const [selected, setSelected] = React.useState<string | undefined>(undefined);
  const [selected2, setSelected2] = React.useState<string | undefined>(undefined);

  const model = React.useMemo(() => {
    return itemsDisabled.slice(1, itemsDisabled.length).map((item) => ({
      id: item.id,
      render: (items: RenderOptionProps) => (
        <MenuItem dimension={args.dimension === 'xl' ? 'l' : args.dimension} {...items} key={item.id}>
          {item.display}
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
  }, [args.dimension, itemsDisabled]);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <MultiButton
          {...args}
          appearance="primary"
          disabled
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          items={model}
          onVisibilityChange={handleVisibilityChange}
          onMainButtonClick={handleMainButtonClick}
        >
          {itemsDemo[0].display}
        </MultiButton>
        <Separator />
        <MultiButton
          {...args}
          appearance="secondary"
          disabled
          selected={selected2}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected2(id);
          }}
          items={model}
          onVisibilityChange={handleVisibilityChange}
          onMainButtonClick={handleMainButtonClick}
        >
          {itemsDemo[0].display}
        </MultiButton>
      </div>
    </>
  );
};

const Template3: ComponentStory<typeof MultiButton> = (args) => {
  const [selected, setSelected] = React.useState<string | undefined>(undefined);
  const [selected2, setSelected2] = React.useState<string | undefined>(undefined);

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  const model = React.useMemo(() => {
    return itemsDemo.map((item) => ({
      id: item.id,
      render: (items: RenderOptionProps) => (
        <MenuItem dimension={args.dimension === 'xl' ? 'l' : args.dimension} {...items} key={item.id}>
          {item.display}
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
  }, [args.dimension, itemsDemo]);

  return (
    <ThemeProvider theme={swapBorder}>
      <div style={{ display: 'flex' }}>
        <MultiButton
          {...args}
          appearance="primary"
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          items={model}
          onVisibilityChange={handleVisibilityChange}
          data-dropdown-container-id="first-multi-button-with-dropdown"
          className="multi-button-class"
          onMainButtonClick={handleMainButtonClick}
        >
          <BonusSolid />
          MultiButton
        </MultiButton>
        <Separator />
        <MultiButton
          {...args}
          appearance="secondary"
          selected={selected2}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected2(id);
          }}
          items={model}
          onVisibilityChange={handleVisibilityChange}
          data-dropdown-container-id="second-multi-button-with-dropdown"
          onMainButtonClick={handleMainButtonClick}
        >
          <BonusSolid />
          MultiButton
        </MultiButton>
      </div>
      <Separator />
      <div style={{ display: 'flex' }}>
        <MultiButton
          {...args}
          disabled
          appearance="primary"
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          items={model}
          onVisibilityChange={handleVisibilityChange}
          data-dropdown-container-id="first-multi-button-with-dropdown"
          className="multi-button-class"
          onMainButtonClick={handleMainButtonClick}
        >
          <BonusSolid />
          MultiButton
        </MultiButton>
        <Separator />
        <MultiButton
          {...args}
          disabled
          appearance="secondary"
          selected={selected2}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected2(id);
          }}
          items={model}
          onVisibilityChange={handleVisibilityChange}
          data-dropdown-container-id="second-multi-button-with-dropdown"
          onMainButtonClick={handleMainButtonClick}
        >
          <BonusSolid />
          MultiButton
        </MultiButton>
      </div>
    </ThemeProvider>
  );
};

export const MultiButtonAppearance = Template1.bind({});
MultiButtonAppearance.args = {};
MultiButtonAppearance.storyName = 'MultiButton. Внешний вид.';

export const MultiButtonDisabled = Template2.bind({});
MultiButtonDisabled.args = {};
MultiButtonDisabled.storyName = 'MultiButton. Задизейбленность.';

export const MultiButtonIcon = Template3.bind({});
MultiButtonIcon.args = {};
MultiButtonIcon.storyName = 'MultiButton с иконкой.';
