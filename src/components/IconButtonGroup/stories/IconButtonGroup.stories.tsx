import * as React from 'react';
import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import { IconButtonGroup, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { IconButtonGroupPlaygroundTemplate } from './IconButtonGroupPlayground.template';
import { IconButtonGroupTooltipTemplate } from './IconButtonGroupTooltip.template';
import { IconButtonGroupDimensionTemplate } from './IconButtonGroupDimension.template';
import { IconButtonGroupStateTemplate } from './IconButtonGroupState.template';

// Imports of text sources
import IconButtonGroupPlaygroundRaw from './IconButtonGroupPlayground.template?raw';
import IconButtonGroupTooltipRaw from './IconButtonGroupTooltip.template?raw';
import IconButtonGroupDimensionRaw from './IconButtonGroupDimension.template?raw';
import IconButtonGroupStateRaw from './IconButtonGroupState.template?raw';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;
const Separator = styled.div`
  height: 20px;
`;

const Description = () => (
  <Desc>
    Компонент IconButtonGroup — это группа кнопок-иконок со связанными по смыслу действиями или действиями, лежащими в
    одном контексте.
    <Separator />
    Компонент используется только в сочетании с IconButton c appearance = 'secondary' (серые иконки и обводка). Если
    нужна вариация синего цвета, то используйте компонент ButtonGroup.
    <Separator />
    Есть 4 размера по аналогии с обычными кнопками: XL (56), L (48), M (40), S (32).
  </Desc>
);

export default {
  title: 'Admiral-2.1/IconButtonGroup',
  component: IconButtonGroup,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    layout: 'centered',
    componentSubtitle: <Description />,
  },
  argTypes: {
    dimension: {
      options: ['xl', 'l', 'm', 's'],
      control: { type: 'radio' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
  },
} as Meta<typeof IconButtonGroup>;

//<editor-fold desc="IconButtonGroup. Playground">
const IconButtonGroupPlaygroundStory: StoryFn<typeof IconButtonGroup> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <IconButtonGroupPlaygroundTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const IconButtonGroupPlayground = {
  render: IconButtonGroupPlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: IconButtonGroupPlaygroundRaw,
      },
    },
  },

  name: 'IconButtonGroup. Playground',
};

//</editor-fold>

//<editor-fold desc="IconButtonGroup. Tooltip">
const IconButtonGroupTooltipStory: StoryFn<typeof IconButtonGroup> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <IconButtonGroupTooltipTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const IconButtonGroupTooltip = {
  render: IconButtonGroupTooltipStory,

  parameters: {
    docs: {
      source: {
        code: IconButtonGroupTooltipRaw,
      },
    },
  },

  name: 'IconButtonGroup. Tooltip',
};

//</editor-fold>

//<editor-fold desc="IconButtonGroup. Dimension">
const IconButtonGroupDimensionStory: StoryFn<typeof IconButtonGroup> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <IconButtonGroupDimensionTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const IconButtonGroupDimension = {
  render: IconButtonGroupDimensionStory,

  parameters: {
    docs: {
      source: {
        code: IconButtonGroupDimensionRaw,
      },
    },
  },

  name: 'IconButtonGroup. Размеры',
};

//</editor-fold>

//<editor-fold desc="IconButtonGroup. State">
const IconButtonGroupStateStory: StoryFn<typeof IconButtonGroup> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <IconButtonGroupStateTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const IconButtonGroupState = {
  render: IconButtonGroupStateStory,

  parameters: {
    docs: {
      source: {
        code: IconButtonGroupStateRaw,
      },
    },
  },

  name: 'IconButtonGroup. Состояния',
};

//</editor-fold>
