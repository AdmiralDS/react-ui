import * as React from 'react';
import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import { ButtonGroup, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { ButtonGroupPlaygroundTemplate } from './ButtonGroupPlayground.template';
import { ButtonGroupAppearanceTemplate } from './ButtonGroupAppearance.template';
import { ButtonGroupDimensionTemplate } from './ButtonGroupDimension.template';
import { ButtonGroupStateTemplate } from './ButtonGroupState.template';

// Imports of text sources
import ButtonGroupPlaygroundRaw from './ButtonGroupPlayground.template?raw';
import ButtonGroupAppearanceRaw from './ButtonGroupAppearance.template?raw';
import ButtonGroupDimensionRaw from './ButtonGroupDimension.template?raw';
import ButtonGroupStateRaw from './ButtonGroupState.template?raw';

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
    Компонент ButtonGroup — это группа кнопок-иконок со связанными по смыслу действиями или действиями, лежащими в одном
    контексте.
    <Separator />
    Компонент используется только в сочетании с IconButton c appearance = 'secondary' (серые иконки и обводка). Если
    нужна вариация синего цвета, то используйте компонент ButtonGroup (находится в разработке).
    <Separator />
    Есть 4 размера по аналогии с обычными кнопками: XL (56), L (48), M (40), S (32).
  </Desc>
);

export default {
  title: 'Admiral-2.1/ButtonGroup',
  component: ButtonGroup,
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
    appearance: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'select' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
  },
} as Meta<typeof ButtonGroup>;

//<editor-fold desc="ButtonGroup. Playground">
const ButtonGroupPlaygroundStory: StoryFn<typeof ButtonGroup> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <ButtonGroupPlaygroundTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const ButtonGroupPlayground = {
  render: ButtonGroupPlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: ButtonGroupPlaygroundRaw,
      },
    },
  },

  name: 'ButtonGroup. Playground',
};

//</editor-fold>

//<editor-fold desc="ButtonGroup. Appearance">
const ButtonGroupAppearanceStory: StoryFn<typeof ButtonGroup> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <ButtonGroupAppearanceTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const ButtonGroupAppearance = {
  render: ButtonGroupAppearanceStory,

  parameters: {
    docs: {
      source: {
        code: ButtonGroupAppearanceRaw,
      },
    },
  },

  name: 'ButtonGroup. Стили',
};

//</editor-fold>

//<editor-fold desc="ButtonGroup. Dimension">
const ButtonGroupDimensionStory: StoryFn<typeof ButtonGroup> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <ButtonGroupDimensionTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const ButtonGroupDimension = {
  render: ButtonGroupDimensionStory,

  parameters: {
    docs: {
      source: {
        code: ButtonGroupDimensionRaw,
      },
    },
  },

  name: 'ButtonGroup. Размеры',
};

//</editor-fold>

//<editor-fold desc="ButtonGroup. State">
const ButtonGroupStateStory: StoryFn<typeof ButtonGroup> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <ButtonGroupStateTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const ButtonGroupState = {
  render: ButtonGroupStateStory,

  parameters: {
    docs: {
      source: {
        code: ButtonGroupStateRaw,
      },
    },
  },

  name: 'ButtonGroup. Состояния',
};

//</editor-fold>
