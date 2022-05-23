import { withDesign } from 'storybook-addon-designs';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextButtonMenu } from '#src/components/TextButtonMenu/index';
import React from 'react';
import { MenuButtonItem } from '#src/components/MenuButton';
import { MenuButtonBase } from '#src/components/MenuButton/MenuButton.stories';

export default {
  title: 'Admiral-2.1/TextButtonMenu',
  decorators: [withDesign],
  component: TextButtonMenu,
  parameters: {
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A17830',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A18134',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A18216',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A18175',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A18257',
      },
    ],
  },
} as ComponentMeta<typeof TextButtonMenu>;

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
] as MenuButtonItem[];

const TextButtonMenuStory: ComponentStory<typeof TextButtonMenu> = () => {
  const [selected, setSelected] = React.useState<string | null>(null);
  return (
    <>
      <TextButtonMenu
        text="Text Button"
        selected={selected}
        onChange={(id) => {
          console.log(`selected: ${id}`);
          setSelected(id);
        }}
        options={items}
        onOpen={() => console.log('open menu')}
        onClose={() => console.log('close menu')}
      >
        test
      </TextButtonMenu>
    </>
  );
};

export const TextButtonStoryDemo = TextButtonMenuStory.bind({});
TextButtonStoryDemo.args = {};
TextButtonStoryDemo.storyName = 'TextButtonMenu';
MenuButtonBase.parameters = {
  docs: {
    source: {
      type: 'code',
    },
  },
};
