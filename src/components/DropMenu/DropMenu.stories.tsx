import React, { useMemo } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { withDesign } from 'storybook-addon-designs';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DropMenu } from '#src/components/DropMenu';
import { Menu } from '#src/components/Menu';
import { MenuItem, RenderOptionProps } from '#src/components/MenuItem';
import { Theme } from '#src/components/themes';
import { Button } from '#src/components/Button';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Компонент Dropdown Menu имеет три размера и может быть с иконкой или без. Высота строки : l - 48px, m - 40px, s -
    32px
  </Desc>
);

export default {
  title: 'Admiral-2.1/DropMenu',
  decorators: [withDesign],
  component: DropMenu,
  parameters: {
    componentSubtitle: <Description />,
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A68931',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A68967',
      },
    ],
  },
  docs: {
    source: {
      type: 'code',
    },
  },
  argTypes: {
    dimension: {
      options: ['l', 'm', 's'],
      control: { type: 'radio' },
      defaultValue: 'l',
    },
    themeBorderKind: {
      control: {
        type: 'radio',
        options: ['Border radius 0', 'Border radius 2', 'Border radius 4', 'Border radius 8'],
      },
    },
  },
} as ComponentMeta<typeof DropMenu>;

const items = [
  {
    id: '1',
    label: 'Option one',
    value: 1,
  },
  {
    id: '2',
    label: 'Option two',
    value: 2,
  },
  {
    id: '3',
    label: 'Option three',
    value: 3,
  },
  {
    id: '4',
    label: 'Option four',
    value: 4,
  },
  {
    id: '5',
    label: 'Option five',
    value: 5,
  },
  { id: '6', label: 'Option six', value: 7 },
  {
    id: '7',
    label: 'Option seven',
    value: 6,
  },
];

const SimpleTemplate: ComponentStory<typeof DropMenu> = (args) => {
  const [selected, setSelected] = React.useState<string | undefined>(undefined);
  const model = useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={args.dimension || 's'} {...options} key={item.id}>
          {item.label}
        </MenuItem>
      ),
    }));
  }, [args.dimension]);
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <DropMenu
          {...args}
          items={model}
          onChange={(id) => {
            console.log(`selected: ${id}`);
            setSelected(id);
          }}
          onOpen={() => console.log('menu opened')}
          onClose={() => console.log('menu closed')}
          dimension={args.dimension}
          disabled={args.disabled}
          selected={selected}
          renderContentProp={({ buttonRef, handleKeyDown, handleClick }) => {
            return (
              <Button ref={buttonRef} onKeyDown={handleKeyDown} onClick={handleClick}>
                Нажми
              </Button>
            );
          }}
        />
      </div>
    </ThemeProvider>
  );
};

export const Simple = SimpleTemplate.bind({});
