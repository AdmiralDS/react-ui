import * as React from 'react';
import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import { SegmentedControl, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { SegmentedControlPlaygroundTemplate } from './SegmentedControlPlayground.template';
import { SegmentedControlAppearanceTemplate } from './SegmentedControlAppearance.template';
import { SegmentedControlDimensionTemplate } from './SegmentedControlDimension.template';
import { SegmentedControlCheckboxTemplate } from './SegmentedControlCheckbox.template';
import { SegmentedControlRadioTemplate } from './SegmentedControlRadio.template';
import { SegmentedControlVariantsTemplate } from './SegmentedControlVariants.template';
import { SegmentedControlStateTemplate } from './SegmentedControlState.template';

// Imports of text sources
import SegmentedControlPlaygroundRaw from './SegmentedControlPlayground.template?raw';
import SegmentedControlAppearanceRaw from './SegmentedControlAppearance.template?raw';
import SegmentedControlDimensionRaw from './SegmentedControlDimension.template?raw';
import SegmentedControlCheckboxRaw from './SegmentedControlCheckbox.template?raw';
import SegmentedControlRadioRaw from './SegmentedControlRadio.template?raw';
import SegmentedControlVariantsRaw from './SegmentedControlVariants.template?raw';
import SegmentedControlStateRaw from './SegmentedControlState.template?raw';

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
    SegmentedControl — компонент для переключения контента, параметров или выбора свойств. Является самым низкоуровневым
    по отношению к TabMenu, ContentSwitcher и CardTabMenu. Аналог Сhoice Chips. <Separator /> Компонент представлен в
    вариантах Outlined и Filled и размерах: XL - высота 56 px, L - высота 48 px, M - высота 40 px и S - высота 32 px.
    <Separator />
    Компонент может работать в двух режимах:<li>Одиночный выбор — режим Radio Button</li>
    <li>Множественный выбор — режим Checkbox</li>
  </Desc>
);

export default {
  title: 'Admiral-2.1/SegmentedControl',
  component: SegmentedControl,
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
      options: ['outlined', 'filled'],
      control: { type: 'select' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
  },
} as Meta<typeof SegmentedControl>;

//<editor-fold desc="ButtonGroup. Playground">
const ButtonGroupPlaygroundStory: StoryFn<typeof SegmentedControl> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <SegmentedControlPlaygroundTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const ButtonGroupPlayground = {
  render: ButtonGroupPlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: SegmentedControlPlaygroundRaw,
      },
    },
  },

  name: 'SegmentedControl. Playground',
};

//</editor-fold>

//<editor-fold desc="SegmentedControl. Appearance">
const SegmentedControlAppearanceStory: StoryFn<typeof SegmentedControl> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <SegmentedControlAppearanceTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const SegmentedControlAppearance = {
  render: SegmentedControlAppearanceStory,

  parameters: {
    docs: {
      source: {
        code: SegmentedControlAppearanceRaw,
      },
    },
  },

  name: 'SegmentedControl. Стили',
};

//</editor-fold>

//<editor-fold desc="SegmentedControl. Dimension">
const SegmentedControlDimensionStory: StoryFn<typeof SegmentedControl> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <SegmentedControlDimensionTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const SegmentedControlDimension = {
  render: SegmentedControlDimensionStory,

  parameters: {
    docs: {
      source: {
        code: SegmentedControlDimensionRaw,
      },
    },
  },

  name: 'SegmentedControl. Размеры',
};

//</editor-fold>

//<editor-fold desc="SegmentedControl. Radio">
const SegmentedControlRadioStory: StoryFn<typeof SegmentedControl> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <SegmentedControlRadioTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const SegmentedControlRadio = {
  render: SegmentedControlRadioStory,

  parameters: {
    docs: {
      source: {
        code: SegmentedControlRadioRaw,
      },
    },
  },

  name: 'SegmentedControl. Режим radio button',
};

//</editor-fold>

//<editor-fold desc="SegmentedControl. Checkbox">
const SegmentedControlCheckboxStory: StoryFn<typeof SegmentedControl> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <SegmentedControlCheckboxTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const SegmentedControlCheckbox = {
  render: SegmentedControlCheckboxStory,

  parameters: {
    docs: {
      source: {
        code: SegmentedControlCheckboxRaw,
      },
    },
  },

  name: 'SegmentedControl. Режим checkbox',
};

//</editor-fold>

//<editor-fold desc="SegmentedControl. Variants">
const SegmentedControlVariantsStory: StoryFn<typeof SegmentedControl> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <SegmentedControlVariantsTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const SegmentedControlVariants = {
  render: SegmentedControlVariantsStory,

  parameters: {
    docs: {
      source: {
        code: SegmentedControlVariantsRaw,
      },
    },
  },

  name: 'SegmentedControl. Варианты',
};

//</editor-fold>

//<editor-fold desc="SegmentedControl. State">
const SegmentedControlStateStory: StoryFn<typeof SegmentedControl> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <SegmentedControlStateTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const SegmentedControlState = {
  render: SegmentedControlStateStory,

  parameters: {
    docs: {
      source: {
        code: SegmentedControlStateRaw,
      },
    },
  },

  name: 'SegmentedControl. Состояния',
};

//</editor-fold>
