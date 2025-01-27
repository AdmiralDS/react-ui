import * as React from 'react';
import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';
import { FloatingButton } from '@admiral-ds/react-ui';

import { FloatingButtonPlaygroundTemplate } from './FloatingButtonPlayground.template';
import { FloatingButtonStyleTemplate } from './FloatingButtonStyle.template';
import { FloatingButtonTooltipTemplate } from './FloatingButtonTooltip.template';
import { FloatingButtonPositionTemplate } from './FloatingButtonPosition.template';
import { FloatingButtonMobileTemplate } from './FloatingButtonMobile.template';

// Imports of text sources
import FloatingButtonPlaygroundRaw from './FloatingButtonPlayground.template?raw';
import FloatingButtonStyleRaw from './FloatingButtonStyle.template?raw';
import FloatingButtonTooltipRaw from './FloatingButtonTooltip.template?raw';
import FloatingButtonPositionRaw from './FloatingButtonPosition.template?raw';
import FloatingButtonMobileRaw from './FloatingButtonMobile.template?raw';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Компонент FloatingButton используется для отображения наиболее частых или важных действий на экране. Не
    рекомендуется использовать более одной FloatingButton на экране.
  </Desc>
);

export default {
  title: 'Admiral-2.1/FloatingButton/FloatingButton',
  decorators: undefined,
  component: FloatingButton,
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
} as Meta<typeof FloatingButton>;

//<editor-fold desc="Playground">
const FloatingButtonPlaygroundStory: StoryFn<typeof FloatingButton> = (props) => (
  <FloatingButtonPlaygroundTemplate {...props} />
);

export const FloatingButtonPlaygroundExample = {
  render: FloatingButtonPlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: FloatingButtonPlaygroundRaw,
      },
    },
  },

  name: 'Playground',
};

//</editor-fold>

//<editor-fold desc="Style">
const FloatingButtonStyleStory: StoryFn<typeof FloatingButton> = (props) => <FloatingButtonStyleTemplate {...props} />;

export const FloatingButtonStyleExample = {
  render: FloatingButtonStyleStory,

  parameters: {
    docs: {
      source: {
        code: FloatingButtonStyleRaw,
      },
    },
  },

  name: 'FloatingButton. Функции и размеры',
};

//</editor-fold>

//<editor-fold desc="Tooltip">
const FloatingButtonTooltipStory: StoryFn<typeof FloatingButton> = (props) => (
  <FloatingButtonTooltipTemplate {...props} />
);

export const FloatingButtonTooltipExample = {
  render: FloatingButtonTooltipStory,

  parameters: {
    docs: {
      source: {
        code: FloatingButtonTooltipRaw,
      },
    },
  },

  name: 'FloatingButton. Пример с Tooltip',
};

//</editor-fold>

//<editor-fold desc="Position">
const FloatingButtonPositionStory: StoryFn<typeof FloatingButton> = (props) => (
  <FloatingButtonPositionTemplate {...props} />
);

export const FloatingButtonPositionExample = {
  render: FloatingButtonPositionStory,

  parameters: {
    docs: {
      source: {
        code: FloatingButtonPositionRaw,
      },
    },
  },

  name: 'FloatingButton. Расположение',
};

//</editor-fold>

//<editor-fold desc="Mobile">
const FloatingButtonMobileStory: StoryFn<typeof FloatingButton> = (props) => (
  <FloatingButtonMobileTemplate {...props} />
);

export const FloatingButtonMobileExample = {
  render: FloatingButtonMobileStory,

  parameters: {
    docs: {
      source: {
        code: FloatingButtonMobileRaw,
      },
    },
  },

  name: 'FloatingButton. Mobile',
};

//</editor-fold>
