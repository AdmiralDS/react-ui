import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import styled from 'styled-components';

import {
  TimeInput,
  INPUT_DIMENSIONS_VALUES,
  INPUT_STATUS_VALUES,
  ALL_BORDER_RADIUS_VALUES,
} from '@admiral-ds/react-ui';

import { TimeInputIconAlternativeTemplate } from './TimeInputIconAlternative.template';
import { TimeInputRangeTemplate } from './TimeInputRange.template';
import { TimeInputRangeDisabledTemplate } from './TimeInputRangeDisabled.template';
import { TimeInputSimpleTemplate } from './TimeInputSimple.template';
import { TimeInputSimpleDisabledTemplate } from './TimeInputSimpleDisabled.template';
import { TimeInputSimpleCustomSlotsTemplate } from './TimeInputSimpleCustomSlots.template';

// Imports of text sources
import TimeInputIconAlternativeRaw from './TimeInputIconAlternative.template?raw';
import TimeInputRangeRaw from './TimeInputRange.template?raw';
import TimeInputRangeDisabledRaw from './TimeInputRangeDisabled.template?raw';
import TimeInputSimpleRaw from './TimeInputSimple.template?raw';
import TimeInputSimpleDisabledRaw from './TimeInputSimpleDisabled.template?raw';
import TimeInputSimpleCustomSlotsRaw from './TimeInputSimpleCustomSlots.template?raw';

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
    Компонент для ввода-выбора времени. Поддерживается как ручной ввод, так и выбор через выпадающий список с
    фиксированным шагом в полчаса.
    <Separator />
    Компонент нельзя изменять по ширине.
  </Desc>
);

export default {
  title: 'Admiral-2.1/Input/TimeInput',
  component: TimeInput,
  decorators: undefined,
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
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A60618',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A60644',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A60669',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: INPUT_DIMENSIONS_VALUES,
      control: { type: 'radio' },
    },
    status: {
      control: { type: 'radio' },
      options: INPUT_STATUS_VALUES,
    },
    value: { control: { type: 'text', disabled: true }, description: 'Значение TimePicker' },
    onChange: {
      action: 'onChange',
    },
    disabled: {
      control: { type: 'boolean' },
    },
    readOnly: {
      control: { type: 'boolean' },
    },
    displayClearIcon: {
      control: { type: 'boolean' },
    },
    disableCopying: {
      control: { type: 'boolean' },
    },
    isLoading: {
      control: { type: 'boolean' },
    },
    showTooltip: {
      control: { type: 'boolean' },
    },
    icons: {
      control: false,
    },
    icon: {
      control: false,
    },
    handleInput: {
      control: false,
    },
    startTime: {
      control: { type: 'text' },
    },
    endTime: {
      control: { type: 'text' },
    },
    slots: {
      control: false,
    },
    disabledSlots: {
      control: false,
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
    containerRef: {
      control: false,
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    skeleton: {
      control: { type: 'boolean' },
    },
  },
} as Meta<typeof TimeInput>;

//<editor-fold desc="Базовый компонент">
const TimeInputSimpleStory: StoryFn<typeof TimeInput> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <TimeInputSimpleTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const TimeInputSimple = {
  render: TimeInputSimpleStory,

  parameters: {
    docs: {
      source: {
        code: TimeInputSimpleRaw,
      },
    },
  },

  name: 'Базовый компонент',
};

//</editor-fold>

//<editor-fold desc="Компонент с дополнительной иконкой и альтернативной иконкой компонента">
const TimeInputIconAlternativeStory: StoryFn<typeof TimeInput> = (props) => (
  <TimeInputIconAlternativeTemplate {...props} />
);

export const TimeInputIconAlternative = {
  render: TimeInputIconAlternativeStory,

  parameters: {
    docs: {
      source: {
        code: TimeInputIconAlternativeRaw,
      },
    },
  },

  name: 'Компонент с дополнительной иконкой и альтернативной иконкой компонента',
};

//</editor-fold>

//<editor-fold desc="C диапазоном времени">
const TimeInputRangeStory: StoryFn<typeof TimeInput> = (props) => <TimeInputRangeTemplate {...props} />;

export const TimeInputRange = {
  render: TimeInputRangeStory,

  parameters: {
    docs: {
      source: {
        code: TimeInputRangeRaw,
      },
    },
  },

  name: 'C диапазоном времени',
};

//</editor-fold>

//<editor-fold desc="C диапазоном времени и задизейбленными значениями">
const TimeInputRangeDisabledStory: StoryFn<typeof TimeInput> = (props) => <TimeInputRangeDisabledTemplate {...props} />;

export const TimeInputRangeDisabled = {
  render: TimeInputRangeDisabledStory,

  parameters: {
    docs: {
      source: {
        code: TimeInputRangeDisabledRaw,
      },
    },
  },

  name: 'C диапазоном времени и задизейбленными значениями',
};

//</editor-fold>

//<editor-fold desc="Базовый с задизейбленными значениями">
const TimeInputSimpleDisabledStory: StoryFn<typeof TimeInput> = (props) => (
  <TimeInputSimpleDisabledTemplate {...props} />
);

export const TimeInputSimpleDisabled = {
  render: TimeInputSimpleDisabledStory,

  parameters: {
    docs: {
      source: {
        code: TimeInputSimpleDisabledRaw,
      },
    },
  },

  name: 'Базовый с задизейбленными значениями',
};

//</editor-fold>

//<editor-fold desc="Базовый с кастомными значениями">
const TimeInputSimpleCustomSlotsStory: StoryFn<typeof TimeInput> = (props) => (
  <TimeInputSimpleCustomSlotsTemplate {...props} />
);

export const TimeInputSimpleCustomSlots = {
  render: TimeInputSimpleCustomSlotsStory,

  parameters: {
    docs: {
      source: {
        code: TimeInputSimpleCustomSlotsRaw,
      },
    },
  },

  name: 'Базовый с кастомными значениями времени',
};

//</editor-fold>
