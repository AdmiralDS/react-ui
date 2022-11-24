import { withDesign } from 'storybook-addon-designs';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import type { TagOptionProps } from '#src/components/TagMenu/index';
import { TagMenu } from '#src/components/TagMenu/index';
import styled, { ThemeProvider } from 'styled-components';
import type { Tag, TagKind, TagProps } from '#src/components/Tag';
import { TagCircle } from '#src/components/Tag';
import type { Theme } from '#src/components/themes';
import { ReactComponent as CheckOutline } from '@admiral-ds/icons/build/service/CheckOutline.svg';
import type { RenderOptionProps } from '#src/components/Menu/MenuItem';
import { MenuItem } from '#src/components/Menu/MenuItem';
import { ALL_BORDER_RADIUS_VALUES } from '#src/components/themes/borderRadius';

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
    docs: {
      source: {
        code: null,
      },
    },
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
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof TagMenu>;

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

const itemsDemo: Array<TagOptionProps> = [
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
  const [selected, setSelected] = React.useState<TagOptionProps | undefined>(itemsDemo[0]);
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  const model = React.useMemo(() => {
    return itemsDemo.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension="m" {...options} key={item.id}>
          {item.tagText}
        </MenuItem>
      ),
    }));
  }, [itemsDemo]);

  return (
    <>
      <ThemeProvider theme={swapBorder}>
        <TagMenu
          items={model}
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(itemsDemo.find((item) => item.id === id));
          }}
          onVisibilityChange={handleVisibilityChange}
          {...args}
          data-dropdown-container-id="tag-menu-with-dropdown"
          className="tag-menu-class"
        />
      </ThemeProvider>
    </>
  );
};

const itemsDemoSizes: Array<TagOptionProps> = [
  {
    id: '1',
    tagText: 'Option one',
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
    kind: 'green',
  },
  {
    id: '4',
    tagText: 'Option four',
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

const StyledMenuItem = styled(MenuItem)`
  flex-wrap: nowrap;
  justify-content: flex-start;
`;

const Template1: ComponentStory<typeof Tag> = (args: TagProps) => {
  const [selectedM, setSelectedM] = React.useState<TagOptionProps | undefined>(itemsDemoSizes[0]);
  const [selectedS, setSelectedS] = React.useState<TagOptionProps | undefined>(itemsDemoSizes[0]);

  const modelM = React.useMemo(() => {
    return itemsDemoSizes.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <StyledMenuItem dimension="m" {...options} key={item.id}>
          {item.kind && !item.statusViaBackground && <TagCircle background={item.kind as TagKind} />}
          {item.tagText}
        </StyledMenuItem>
      ),
    }));
  }, [itemsDemoSizes]);

  const modelS = React.useMemo(() => {
    return itemsDemoSizes.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <StyledMenuItem dimension="s" {...options} key={item.id}>
          {item.kind && !item.statusViaBackground && <TagCircle background={item.kind as TagKind} />}
          {item.tagText}
        </StyledMenuItem>
      ),
    }));
  }, [itemsDemoSizes]);

  return (
    <>
      <TagMenu
        dimension="m"
        items={modelM}
        selected={selectedM}
        as="div"
        onSelectItem={(id) => {
          logSelectedId(id);
          setSelectedM(itemsDemoSizes.find((item) => item.id === id));
        }}
        onVisibilityChange={handleVisibilityChange}
        {...args}
      />
      <Separator />
      <TagMenu
        dimension="s"
        items={modelS}
        selected={selectedS}
        as="span"
        onSelectItem={(id) => {
          logSelectedId(id);
          setSelectedS(itemsDemoSizes.find((item) => item.id === id));
        }}
        onVisibilityChange={handleVisibilityChange}
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
