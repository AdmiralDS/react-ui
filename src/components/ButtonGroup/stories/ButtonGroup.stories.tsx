import * as React from 'react';
import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import { ButtonGroup, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { ButtonGroupPlaygroundTemplate } from './ButtonGroupPlayground.template';
import { ButtonGroupAppearanceTemplate } from './ButtonGroupAppearance.template';
import { ButtonGroupDimensionTemplate } from './ButtonGroupDimension.template';
import { ButtonGroupStateTemplate } from './ButtonGroupState.template';
import { ButtonGroupVariantsTemplate } from './ButtonGroupVariants.template';

// Imports of text sources
import ButtonGroupPlaygroundRaw from './ButtonGroupPlayground.template?raw';
import ButtonGroupAppearanceRaw from './ButtonGroupAppearance.template?raw';
import ButtonGroupDimensionRaw from './ButtonGroupDimension.template?raw';
import ButtonGroupStateRaw from './ButtonGroupState.template?raw';
import ButtonGroupVariantsRaw from './ButtonGroupVariants.template?raw';

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
    Компонент ButtonGroup состоит из компонентов Button, связаных друг с другом, используется для организации схожих
    функций. <Separator /> Компонент представлен в вариантах Primary, Secondary и Tertiary и размерах: XL - высота 56
    px, L - высота 48 px, M - высота 40 px и S - высота 32 px.
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

//<editor-fold desc="ButtonGroup. Variants">
const ButtonGroupVariantsStory: StoryFn<typeof ButtonGroup> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <ButtonGroupVariantsTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const ButtonGroupVariants = {
  render: ButtonGroupVariantsStory,

  parameters: {
    docs: {
      source: {
        code: ButtonGroupVariantsRaw,
      },
    },
  },

  name: 'ButtonGroup. Варианты',
};

//</editor-fold>
