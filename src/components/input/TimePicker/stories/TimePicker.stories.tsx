import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import styled from 'styled-components';

import {
  TimePicker,
  INPUT_DIMENSIONS_VALUES,
  INPUT_STATUS_VALUES,
  ALL_BORDER_RADIUS_VALUES,
} from '@admiral-ds/react-ui';

import { TimePickerSimpleTemplate } from './TimePickerSimple.template';
import { TimePickerDisabledTemplate } from './TimePickerDisabled.template';
import { TimePickerDisableCopyingTemplate } from './TimePickerDisableCopying.template';
import { TimePickerSkeletonTemplate } from './TimePickerSkeleton.template';
import { TimePickerIconCustomTemplate } from './TimePickerIconCustom.template';
import { TimePickerClearIconTemplate } from './TimePickerClearIcon.template';
import { TimePickerDoubleIconTemplate } from './TimePickerDoubleIcon.template';
import { TimePickerRangeTemplate } from './TimePickerRange.template';
import { TimePickerRangeDisabledTemplate } from './TimePickerRangeDisabled.template';
import { TimePickerSimpleDisabledTemplate } from './TimePickerSimpleDisabled.template';
import { TimePickerSimpleCustomSlotsTemplate } from './TimePickerSimpleCustomSlots.template';
import { TimePickerAlignDropdownContainerTemplate } from './TimePickerAlignDropdownContainer.template';

// Imports of text sources
import TimePickerSimpleRaw from './TimePickerSimple.template?raw';
import TimePickerDisabledRaw from './TimePickerDisabled.template?raw';
import TimePickerDisableCopyingRaw from './TimePickerDisableCopying.template?raw';
import TimePickerSkeletonRaw from './TimePickerSkeleton.template?raw';
import TimePickerIconCustomRaw from './TimePickerIconCustom.template?raw';
import TimePickerClearIconRaw from './TimePickerClearIcon.template?raw';
import TimePickerDoubleIconRaw from './TimePickerDoubleIcon.template?raw';
import TimePickerRangeRaw from './TimePickerRange.template?raw';
import TimePickerRangeDisabledRaw from './TimePickerRangeDisabled.template?raw';
import TimePickerSimpleDisabledRaw from './TimePickerSimpleDisabled.template?raw';
import TimePickerSimpleCustomSlotsRaw from './TimePickerSimpleCustomSlots.template?raw';
import TimePickerAlignDropdownContainerRaw from './TimePickerAlignDropdownContainer.template?raw';

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
    Компонент для ввода-выбора времени, реализованный через динамическую маску ввода. Поддерживается как ручной ввод,
    так и выбор через выпадающий список с фиксированным шагом в полчаса.
    <Separator />
    Компонент нельзя изменять по ширине.
    <Separator />
    По дефолту в выпадающем меню стоит шаг в 30 минут, но вы можете устанавливать свои произвольные интервалы.
  </Desc>
);

export default {
  title: 'Admiral-2.1/Input/TimePicker',
  component: TimePicker,
  decorators: undefined,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: <Description />,
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
} as Meta<typeof TimePicker>;

//<editor-fold desc="Базовый компонент">
const TimePickerSimpleStory: StoryFn<typeof TimePicker> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <TimePickerSimpleTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const TimePickerSimple = {
  render: TimePickerSimpleStory,

  parameters: {
    docs: {
      source: {
        code: TimePickerSimpleRaw,
      },
    },
  },

  args: {
    themeBorderKind: 'Border radius 4',
    dimension: 'm',
  },

  name: 'Базовый компонент',
};

//</editor-fold>

//<editor-fold desc="Задизейбленный компонент">
const TimePickerDisabledStory: StoryFn<typeof TimePicker> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <TimePickerDisabledTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const TimePickerDisabled = {
  render: TimePickerDisabledStory,

  parameters: {
    docs: {
      source: {
        code: TimePickerDisabledRaw,
      },
    },
  },

  args: {
    themeBorderKind: 'Border radius 4',
    dimension: 'm',
  },

  name: 'Задизейбленный компонент',
};

//</editor-fold>

//<editor-fold desc="Компонент с блокировкой копирования">
const TimePickerDisableCopyingStory: StoryFn<typeof TimePicker> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <TimePickerDisableCopyingTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const TimePickerDisableCopying = {
  render: TimePickerDisableCopyingStory,

  parameters: {
    docs: {
      source: {
        code: TimePickerDisableCopyingRaw,
      },
    },
  },

  args: {
    themeBorderKind: 'Border radius 4',
    dimension: 'm',
  },

  name: 'Компонент с блокировкой копирования',
};

//</editor-fold>

//<editor-fold desc="Компонент в загрузке скелетона">

const TimePickerSkeletonStory: StoryFn<typeof TimePicker> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <TimePickerSkeletonTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const TimePickerSkeleton = {
  render: TimePickerSkeletonStory,

  parameters: {
    docs: {
      source: {
        code: TimePickerSkeletonRaw,
      },
    },
  },

  name: 'Скелетон',
};

// </editor-fold>

// //<editor-fold desc="ReadOnly компонент с альтернативной иконкой">
const TimePickerIconCustomStory: StoryFn<typeof TimePicker> = (props) => <TimePickerIconCustomTemplate {...props} />;

export const TimePickerIconCustom = {
  render: TimePickerIconCustomStory,

  parameters: {
    docs: {
      source: {
        code: TimePickerIconCustomRaw,
      },
    },
  },

  name: 'ReadOnly компонент с альтернативной иконкой',
};

//</editor-fold>

//<editor-fold desc="Компонент с иконкой очистки">
const TimePickerClearIconStory: StoryFn<typeof TimePicker> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <TimePickerClearIconTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const TimePickerClearIcon = {
  render: TimePickerClearIconStory,

  parameters: {
    docs: {
      source: {
        code: TimePickerClearIconRaw,
      },
    },
  },

  args: {
    themeBorderKind: 'Border radius 4',
    dimension: 'm',
  },

  name: 'Компонент с иконкой очистки',
};

//</editor-fold>

//<editor-fold desc="Компонент с дополнительной иконкой и кастомной иконкой очистки">
const TimePickerDoubleIconStory: StoryFn<typeof TimePicker> = (props) => <TimePickerDoubleIconTemplate {...props} />;

export const TimePickerDoubleIcon = {
  render: TimePickerDoubleIconStory,

  parameters: {
    docs: {
      source: {
        code: TimePickerDoubleIconRaw,
      },
    },
  },

  name: 'Компонент с дополнительной иконкой и кастомной иконкой очистки',
};

//</editor-fold>

//<editor-fold desc="C диапазоном времени">
const TimePickerRangeStory: StoryFn<typeof TimePicker> = (props) => <TimePickerRangeTemplate {...props} />;

export const TimePickerRange = {
  render: TimePickerRangeStory,

  parameters: {
    docs: {
      source: {
        code: TimePickerRangeRaw,
      },
    },
  },

  name: 'C диапазоном времени',
};

//</editor-fold>

//<editor-fold desc="C диапазоном времени и задизейбленными значениями">
const TimePickerRangeDisabledStory: StoryFn<typeof TimePicker> = (props) => (
  <TimePickerRangeDisabledTemplate {...props} />
);

export const TimePickerRangeDisabled = {
  render: TimePickerRangeDisabledStory,

  parameters: {
    docs: {
      source: {
        code: TimePickerRangeDisabledRaw,
      },
    },
  },

  name: 'C диапазоном времени и задизейбленными значениями',
};

//</editor-fold>

//<editor-fold desc="Базовый с задизейбленными значениями">
const TimePickerSimpleDisabledStory: StoryFn<typeof TimePicker> = (props) => (
  <TimePickerSimpleDisabledTemplate {...props} />
);

export const TimePickerSimpleDisabled = {
  render: TimePickerSimpleDisabledStory,

  parameters: {
    docs: {
      source: {
        code: TimePickerSimpleDisabledRaw,
      },
    },
  },

  name: 'Базовый с задизейбленными значениями',
};

//</editor-fold>

//<editor-fold desc="Базовый с кастомными значениями">
const TimePickerSimpleCustomSlotsStory: StoryFn<typeof TimePicker> = (props) => (
  <TimePickerSimpleCustomSlotsTemplate {...props} />
);

export const TimePickerSimpleCustomSlots = {
  render: TimePickerSimpleCustomSlotsStory,

  parameters: {
    docs: {
      source: {
        code: TimePickerSimpleCustomSlotsRaw,
      },
    },
  },

  name: 'Базовый с кастомными значениями времени',
};

//</editor-fold>

//<editor-fold desc='Компонент с выравненным дропдауном'>

const TimePickerAlignDropdownContainerStory: StoryFn<typeof TimePicker> = (props) => (
  <TimePickerAlignDropdownContainerTemplate {...props} />
);

export const TimePickerAlignDropdownContainer = {
  render: TimePickerAlignDropdownContainerStory,

  parameters: {
    docs: {
      source: {
        code: TimePickerAlignDropdownContainerRaw,
      },
    },
  },

  name: 'Компонент с выравненным дропдауном',
};

// </editor-fold>
