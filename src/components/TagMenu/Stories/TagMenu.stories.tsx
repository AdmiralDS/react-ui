import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';
import { TagMenu, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { TagMenuPlaygroundTemplate, TagMenuSizesTemplate } from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import PlaygroundRaw from './Templates/TagMenuPlayground?raw';
import SizesRaw from './Templates/TagMenuSizes?raw';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
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
  decorators: undefined,
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
    selected: {
      control: { type: 'text' },
    },
    active: {
      control: { type: 'text' },
    },
    menuWidth: {
      control: { type: 'text' },
    },
    menuMaxHeight: {
      control: { type: 'text' },
    },
    disableSelectedOptionHighlight: {
      control: { type: 'boolean' },
    },
    isVisible: {
      control: { type: 'boolean' },
    },
    as: {
      options: ['div', 'span', 'button'],
      control: { type: 'radio' },
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
    items: {
      control: false,
    },
    options: {
      control: false,
    },
  },
} as Meta<typeof TagMenu>;

//<editor-fold desc="Playground">
const PlaygroundStory: StoryFn<typeof TagMenu> = (props) => <TagMenuPlaygroundTemplate {...cleanUpProps(props)} />;

export const Playground = {
  render: PlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: PlaygroundRaw,
      },
    },
  },

  name: 'TagMenu. Playground.',
};

//</editor-fold>

//<editor-fold desc="TagMenu. Размеры.">
const SizesStory: StoryFn<typeof TagMenu> = (props) => <TagMenuSizesTemplate {...cleanUpProps(props)} />;

export const SizesExample = {
  render: SizesStory,

  parameters: {
    docs: {
      source: {
        code: SizesRaw,
      },
    },
  },

  name: 'TagMenu. Размеры.',
};
