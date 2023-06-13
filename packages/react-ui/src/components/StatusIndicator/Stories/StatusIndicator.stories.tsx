import * as React from 'react';
import styled from 'styled-components';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import { StatusIndicator, T } from '@admiral-ds/react-ui';

import {
  StatusIndicatorDimensionTemplate,
  StatusIndicatorPlaygroundTemplate,
  StatusIndicatorPositionTemplate,
} from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import StatusIndicatorPlaygroundRaw from '!!raw-loader!./Templates/StatusIndicatorPlayground';
import StatusIndicatorDimensionRaw from '!!raw-loader!./Templates/StatusIndicatorDimension';
import StatusIndicatorPositionRaw from '!!raw-loader!./Templates/StatusIndicatorPosition';

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
  decorators: [withDesign],
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
} as ComponentMeta<typeof StatusIndicator>;

//<editor-fold desc="Status Indicator. Playground">
const StatusIndicatorPlaygroundStory: ComponentStory<typeof StatusIndicator> = (props) => (
  <StatusIndicatorPlaygroundTemplate text={''} {...cleanUpProps(props)} />
);
export const StatusIndicatorPlayground = StatusIndicatorPlaygroundStory.bind({});
StatusIndicatorPlayground.parameters = {
  docs: {
    source: {
      code: StatusIndicatorPlaygroundRaw,
    },
  },
};
//</editor-fold>

//<editor-fold desc="Status Indicator. Размеры компонента">
const StatusIndicatorDimensionStory: ComponentStory<typeof StatusIndicator> = () => (
  <StatusIndicatorDimensionTemplate />
);

export const StatusIndicatorDimension = StatusIndicatorDimensionStory.bind({});
StatusIndicatorDimension.storyName = 'Status Indicator. Размеры компонента';
StatusIndicatorDimension.parameters = {
  docs: {
    source: {
      code: StatusIndicatorDimensionRaw,
    },
    description: {
      story: `Компонент регулируется только по высоте и представлен в размерах M (24px) и S (20px), ширина подстраивается под контент.`,
    },
  },
};
//</editor-fold>

//<editor-fold desc="Status Indicator. Альтернативные варианты отображения">
const StatusIndicatorPositionStory: ComponentStory<typeof StatusIndicator> = () => <StatusIndicatorPositionTemplate />;

export const StatusIndicatorPosition = StatusIndicatorPositionStory.bind({});
StatusIndicatorPosition.storyName = 'Status Indicator. Альтернативные варианты отображения';
StatusIndicatorPosition.parameters = {
  docs: {
    source: {
      code: StatusIndicatorPositionRaw,
    },
    description: {
      story: `Через параметр cssMixin можно изменять цветовое отображение статуса. Также с помощью 
      параметра displayRight можно управлять позиционированием иконки.`,
    },
  },
};
//</editor-fold>
