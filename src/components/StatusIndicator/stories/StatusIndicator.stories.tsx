import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';
import { StatusIndicator } from '@admiral-ds/react-ui';

import { StatusIndicatorPlaygroundTemplate } from './StatusIndicatorPlayground.template';
import { StatusIndicatorDimensionTemplate } from './StatusIndicatorDimension.template';
import { StatusIndicatorPositionTemplate } from './StatusIndicatorPosition.template';

// Imports of text sources
import StatusIndicatorPlaygroundRaw from './StatusIndicatorPlayground.template?raw';
import StatusIndicatorDimensionRaw from './StatusIndicatorDimension.template?raw';
import StatusIndicatorPositionRaw from './StatusIndicatorPosition.template?raw';

const Desc = styled.div`
  font-family: 'VTB Group UI', serif;
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>Компонент Status Indicator используется для отображения состояния объекта или действия.</Desc>
);

export default {
  title: 'Admiral-2.1/StatusIndicator',
  decorators: undefined,
  component: StatusIndicator,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: <Description />,
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=37%3A18744',
    },
  },
  argTypes: {
    dimension: {
      options: ['m', 's'],
      control: { type: 'radio' },
    },
    text: {
      control: { type: 'text' },
    },
    displayRight: {
      control: { type: 'boolean' },
    },
    cssMixin: {
      control: false,
    },
    icon: {
      control: false,
    },
  },
} as Meta<typeof StatusIndicator>;

//<editor-fold desc="Status Indicator. Playground">
const StatusIndicatorPlaygroundStory: StoryFn<typeof StatusIndicator> = (props) => (
  <StatusIndicatorPlaygroundTemplate {...props} />
);

export const StatusIndicatorPlayground = {
  render: StatusIndicatorPlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: StatusIndicatorPlaygroundRaw,
      },
    },
  },
};

//</editor-fold>

//<editor-fold desc="Status Indicator. Размеры компонента">
const StatusIndicatorDimensionStory: StoryFn<typeof StatusIndicator> = () => <StatusIndicatorDimensionTemplate />;

export const StatusIndicatorDimension = {
  render: StatusIndicatorDimensionStory,
  name: 'Status Indicator. Размеры компонента',

  parameters: {
    docs: {
      source: {
        code: StatusIndicatorDimensionRaw,
      },
    },
  },
};

//</editor-fold>

//<editor-fold desc="Status Indicator. Альтернативные варианты отображения">
const StatusIndicatorPositionStory: StoryFn<typeof StatusIndicator> = () => <StatusIndicatorPositionTemplate />;

export const StatusIndicatorPosition = {
  render: StatusIndicatorPositionStory,
  name: 'Status Indicator. Альтернативные варианты отображения',

  parameters: {
    docs: {
      source: {
        code: StatusIndicatorPositionRaw,
      },
    },
  },
};
