import React, { useMemo } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import styled, { ThemeProvider } from 'styled-components';
import { OverflowMenu, MenuItem, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';
import type { RenderOptionProps, Theme } from '@admiral-ds/react-ui';
import { ReactComponent as MinusCircleOutline } from '@admiral-ds/icons/build/service/MinusCircleOutline.svg';

const Separator = styled.div`
  height: 20px;
  width: 8px;
`;

const DisplayBlock = styled.div`
  display: flex;
  align-items: flex-start;
`;

export default {
  title: 'Admiral-2.1/OverflowMenu',
  decorators: [withDesign],
  component: OverflowMenu,
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
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A25623',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A25674',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: ['l', 'm', 's'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    isVertical: {
      control: { type: 'boolean' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    dropContainerCssMixin: {
      control: false,
    },
    dropContainerClassName: {
      control: false,
    },
    dropContainerStyle: {
      control: false,
    },
    selected: {
      control: { type: 'text' },
    },
    active: {
      control: { type: 'text' },
    },
    menuWidth: {
      control: { type: 'text' },
    },
    isVisible: {
      control: { type: 'boolean' },
    },
    disableSelectedOptionHighlight: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof OverflowMenu>;

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

const Template1: ComponentStory<typeof OverflowMenu> = (args) => {
  const items: Array<any> = [
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

  const [selected, setSelected] = React.useState<string | undefined>(undefined);
  const model = useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={args.dimension} {...options} key={item.id}>
          {item.display}
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
  }, [args.dimension]);

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <OverflowMenu
        {...args}
        items={model}
        selected={selected}
        onSelectItem={(id) => {
          logSelectedId(id);
          setSelected(id);
        }}
        onVisibilityChange={handleVisibilityChange}
        aria-label="Overflow Menu component"
        data-dropdown-container-id="overflow-menu-with-dropdown"
        className="overflow-menu-class"
        dropContainerClassName="dropContainerClass"
      />
    </ThemeProvider>
  );
};

const Template2: ComponentStory<typeof OverflowMenu> = (args) => {
  const items: Array<any> = [
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
  ];

  const model = useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={args.dimension} {...options} key={item.id}>
          {item.display}
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
  }, [args.dimension]);

  const [selected, setSelected] = React.useState<string | undefined>(undefined);

  return (
    <DisplayBlock>
      <OverflowMenu
        {...args}
        items={model}
        selected={selected}
        onSelectItem={(id) => {
          logSelectedId(id);
          setSelected(id);
        }}
        onVisibilityChange={handleVisibilityChange}
        aria-label="Overflow Menu component"
      />
      <Separator />
      <OverflowMenu
        {...args}
        items={model}
        selected={selected}
        onSelectItem={(id) => {
          logSelectedId(id);
          setSelected(id);
        }}
        onVisibilityChange={handleVisibilityChange}
        aria-label="Overflow Menu component"
        disabled
      />
    </DisplayBlock>
  );
};

const Template3: ComponentStory<typeof OverflowMenu> = (args) => {
  const items: Array<any> = [
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
  ];

  const dimensionL = 'l';
  const dimensionM = 'm';
  const dimensionS = 's';
  const modelL = useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={dimensionL} {...options} key={item.id}>
          {item.display}
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
  }, []);
  const modelM = useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={dimensionM} {...options} key={item.id}>
          {item.display}
        </MenuItem>
      ),
      disabled: item.id === '1',
    }));
  }, []);
  const modelS = useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={dimensionS} {...options} key={item.id}>
          {item.display}
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
  }, []);
  const [selected, setSelected] = React.useState<string | undefined>(undefined);

  return (
    <>
      <DisplayBlock>
        <OverflowMenu
          {...args}
          items={modelL}
          selected={selected}
          dimension={dimensionL}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          onVisibilityChange={handleVisibilityChange}
          aria-label="Overflow Menu component L"
        />
        <Separator />
        <OverflowMenu
          {...args}
          items={modelM}
          dimension={dimensionM}
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          onVisibilityChange={handleVisibilityChange}
          aria-label="Overflow Menu component M"
        />
        <Separator />
        <OverflowMenu
          {...args}
          items={modelS}
          dimension={dimensionS}
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          onVisibilityChange={handleVisibilityChange}
          aria-label="Overflow Menu component S"
        />
      </DisplayBlock>
      <Separator />
      <DisplayBlock>
        <OverflowMenu
          {...args}
          alignSelf="flex-start"
          items={modelL}
          dimension={dimensionL}
          isVertical
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          onVisibilityChange={handleVisibilityChange}
          aria-label="Overflow Menu component vertical L"
        />
        <Separator />
        <OverflowMenu
          {...args}
          items={modelM}
          dimension={dimensionM}
          isVertical
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          onVisibilityChange={handleVisibilityChange}
          aria-label="Overflow Menu component vertical M"
        />
        <Separator />
        <OverflowMenu
          {...args}
          items={modelS}
          dimension={dimensionS}
          isVertical
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          onVisibilityChange={handleVisibilityChange}
          aria-label="Overflow Menu component vertical S"
        />
      </DisplayBlock>
    </>
  );
};

export const OverflowMenuBase = Template1.bind({});
OverflowMenuBase.args = {};
OverflowMenuBase.storyName = 'OverflowMenu. Базовый пример.';

export const OverflowMenuOptions = Template2.bind({});
OverflowMenuOptions.args = {};
OverflowMenuOptions.storyName = 'OverflowMenu. Задизейбленные и кастомизированные опции.';

export const OverflowMenuSizesOrientation = Template3.bind({});
OverflowMenuSizesOrientation.args = {};
OverflowMenuSizesOrientation.storyName = 'OverflowMenu. Размеры и ориентация.';
