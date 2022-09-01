import { withDesign } from 'storybook-addon-designs';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { TagMenu, TagOptionProps } from '#src/components/TagMenu/index';
import styled, { ThemeProvider } from 'styled-components';
import { Tag, TagProps } from '#src/components/Tag';
import { Theme } from '#src/components/themes';
import { ReactComponent as CheckOutline } from '@admiral-ds/icons/build/service/CheckOutline.svg';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Separator = styled.div`
  width: 4px;
`;

const Description = () => (
  <Desc>
    Тег — это метка, размечающая и каталогизирующая информацию для облегчения процесса поиска. При нажатии на тэг
    загружаются все элементы имеющие эту метку. Selectable - вариант тэгов, который нужен для принудительного выбора
    статуса из выпадающего меню.
  </Desc>
);

export default {
  title: 'Admiral-2.1/TagMenu',
  decorators: [withDesign],
  component: TagMenu,
  parameters: {
    componentSubtitle: <Description />,
    layout: 'centered',
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A18375',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A18530',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: ['m', 's'],
      control: { type: 'radio' },
    },
    width: {
      control: { type: 'text' },
    },
    as: {
      options: ['div', 'span', 'button'],
      control: { type: 'radio' },
    },
    themeBorderKind: {
      control: {
        type: 'radio',
        options: ['Border radius 0', 'Border radius 2', 'Border radius 4', 'Border radius 8'],
      },
    },
  },
} as ComponentMeta<typeof TagMenu>;

const items: Array<TagOptionProps> = [
  {
    id: '1',
    tagText: 'Option one',
    statusViaBackground: true,
    icon: <CheckOutline />,
    kind: 'red',
  },
  {
    id: '2',
    tagText: 'Option two',
    kind: 'blue',
  },
  {
    id: '3',
    tagText: 'Option three',
    statusViaBackground: true,
    kind: 'green',
  },
  {
    id: '4',
    tagText: 'Option four',
    statusViaBackground: true,
    icon: <CheckOutline />,
  },
  {
    id: '5',
    tagText: 'Option five',
  },
  {
    id: '6',
    tagText: 'Option six',
  },
  {
    id: '7',
    tagText: 'Option seven',
  },
];

const Template0: ComponentStory<typeof Tag> = (args: TagProps) => {
  const [selected, setSelected] = React.useState<TagOptionProps | undefined>(items[0]);
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <>
      <ThemeProvider theme={swapBorder}>
        <TagMenu
          options={items}
          selected={selected}
          onSelectOption={(id) => {
            console.log(`selected: ${id}`);
            setSelected(items.find((item) => item.id === id));
          }}
          {...args}
          data-dropdown-container-id="tag-menu-with-dropdown"
        />
      </ThemeProvider>
    </>
  );
};

const Template1: ComponentStory<typeof Tag> = (args: TagProps) => {
  const [selectedM, setSelectedM] = React.useState<TagOptionProps | undefined>(items[0]);
  const [selectedS, setSelectedS] = React.useState<TagOptionProps | undefined>(items[0]);

  return (
    <>
      <TagMenu
        dimension="m"
        options={items}
        selected={selectedM}
        as="div"
        onSelectOption={(id) => {
          console.log(`selected: ${id}`);
          setSelectedM(items.find((item) => item.id === id));
        }}
        {...args}
      />
      <Separator />
      <TagMenu
        dimension="s"
        options={items}
        selected={selectedS}
        as="span"
        onSelectOption={(id) => {
          console.log(`selected: ${id}`);
          setSelectedS(items.find((item) => item.id === id));
        }}
        {...args}
      />
    </>
  );
};

export const Playground = Template0.bind({});
Playground.args = {};
Playground.storyName = 'TagMenu. Playground.';

export const Sizes = Template1.bind({});
Sizes.args = {};
Sizes.storyName = 'TagMenu. Размеры.';
