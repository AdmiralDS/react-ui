import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { ReactComponent as MinusCircleOutline } from '@admiral-ds/icons/build/service/MinusCircleOutline.svg';

import { OverflowMenu } from '#src/components/OverflowMenu';
import { DropDownItem } from '#src/components/DropDownItem';

export default {
  title: 'Admiral-2.1/OverflowMenu',
  decorators: [withDesign],
  component: OverflowMenu,
  parameters: {
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
  },
} as ComponentMeta<typeof OverflowMenu>;

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

  const [selected, setSelected] = React.useState<string | null>(null);
  return (
    <>
      <OverflowMenu
        {...args}
        selected={selected}
        onChange={(id) => {
          console.log(`onChange('${id}')`);
          setSelected(id);
        }}
        onOpen={() => console.log('open menu')}
        onClose={() => console.log('close menu')}
        aria-label="Overflow Menu component"
      >
        {items.map((item) => {
          return (
            <DropDownItem role="option" key={item.id} id={item.id}>
              {item.display}
            </DropDownItem>
          );
        })}
      </OverflowMenu>
    </>
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

  const [selected, setSelected] = React.useState<string | null>(null);
  return (
    <>
      <OverflowMenu
        {...args}
        selected={selected}
        onChange={(id) => setSelected(id)}
        onOpen={() => console.log('open menu')}
        onClose={() => console.log('close menu')}
        aria-label="Overflow Menu component"
      >
        {items.map((item) => {
          return (
            <DropDownItem role="option" key={item.id} id={item.id} disabled={item.disabled}>
              {item.display}
            </DropDownItem>
          );
        })}
      </OverflowMenu>
    </>
  );
};

export const OverflowMenuBase = Template1.bind({});
OverflowMenuBase.args = {};
OverflowMenuBase.storyName = 'OverflowMenu. Базовый пример.';
OverflowMenuBase.parameters = {
  docs: {
    source: {
      type: 'code',
    },
  },
};

export const OverflowMenuOptions = Template2.bind({});
OverflowMenuOptions.args = {};
OverflowMenuOptions.storyName = 'OverflowMenu. Задизейбленные и кастомизированные опции.';
OverflowMenuOptions.parameters = {
  docs: {
    source: {
      type: 'code',
    },
  },
};
