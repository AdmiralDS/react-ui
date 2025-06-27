import * as React from 'react';
import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';
import { FloatingButtonMenu } from '@admiral-ds/react-ui';

import { FloatingButtonMenuTemplate } from './FloatingButtonMenu.template';
import { FloatingButtonMenuModesTemplate } from './FloatingButtonMenuModes.template';

// Imports of text sources
import FloatingButtonMenuRaw from './FloatingButtonMenu.template?raw';
import FloatingButtonMenuModesRaw from './FloatingButtonMenuModes.template?raw';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Компонент FloatingButtonMenu позволяет вызывать меню с дополнительными действиями (кнопками) путём нажатия на
    основную кнопку. Тип дополнительных кнопок всегда Secondary. Основная кнопка может быть как Primary, так и
    Secondary. Рекомендуется не более 5 дополнительных кнопок.
  </Desc>
);

export default {
  title: 'Admiral-2.1/FloatingButton/FloatingButtonMenu',
  decorators: undefined,
  component: FloatingButtonMenu,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: <Description />,
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?type=design&node-id=191233-164632&mode=design&t=aOVIJbOXBwclj7Gu-4',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?type=design&node-id=209967-6837&mode=design&t=aOVIJbOXBwclj7Gu-4',
      },
    ],
  },
  argTypes: {
    isOpen: {
      control: { type: 'boolean' },
    },
    dimension: {
      options: ['xl', 'm'],
      control: { type: 'radio' },
    },
    appearance: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    mobile: {
      control: { type: 'boolean' },
    },
    tooltip: {
      control: { type: 'text' },
    },
    tooltipPosition: {
      options: ['bottom', 'top', 'left', 'right'],
      control: { type: 'radio' },
    },
  },
} as Meta<typeof FloatingButtonMenu>;

//<editor-fold desc="Playground">
const FloatingButtonMenuStory: StoryFn<typeof FloatingButtonMenu> = (props) => (
  <FloatingButtonMenuTemplate {...props} />
);

export const FloatingButtonMenuExample = {
  render: FloatingButtonMenuStory,

  parameters: {
    docs: {
      source: {
        code: FloatingButtonMenuRaw,
      },
    },
  },

  name: 'Playground',
};

//</editor-fold>

//<editor-fold desc="Controlled/uncontrolled modes">
const FloatingButtonMenuModesStory: StoryFn<typeof FloatingButtonMenu> = (props) => (
  <FloatingButtonMenuModesTemplate {...props} />
);

export const FloatingButtonMenuModesExample = {
  render: FloatingButtonMenuModesStory,

  parameters: {
    docs: {
      source: {
        code: FloatingButtonMenuModesRaw,
      },
    },
  },

  name: 'FloatingButtonMenu. Режимы использования',
};

//</editor-fold>
