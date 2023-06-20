import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';

import {
  TimeInput,
  INPUT_DIMENSIONS_VALUES,
  INPUT_STATUS_VALUES,
  ALL_BORDER_RADIUS_VALUES,
} from '@admiral-ds/react-ui';

import {
  TimeInputIconAlternativeTemplate,
  TimeInputRangeDisabledTemplate,
  TimeInputRangeTemplate,
  TimeInputSimpleDisabledTemplate,
  TimeInputSimpleTemplate,
} from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import TimeInputIconAlternativeRaw from '!!raw-loader!./Templates/TimeInputIconAlternative';
import TimeInputRangeRaw from '!!raw-loader!./Templates/TimeInputRange';
import TimeInputRangeDisabledRaw from '!!raw-loader!./Templates/TimeInputRangeDisabled';
import TimeInputSimpleRaw from '!!raw-loader!./Templates/TimeInputSimple';
import TimeInputSimpleDisabledRaw from '!!raw-loader!./Templates/TimeInputSimpleDisabled';

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
const TimeInputSimpleStory: StoryFn<typeof TimeInput> = (props) => <TimeInputSimpleTemplate {...cleanUpProps(props)} />;

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
  <TimeInputIconAlternativeTemplate {...cleanUpProps(props)} />
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
const TimeInputRangeStory: StoryFn<typeof TimeInput> = (props) => <TimeInputRangeTemplate {...cleanUpProps(props)} />;

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
const TimeInputRangeDisabledStory: StoryFn<typeof TimeInput> = (props) => (
  <TimeInputRangeDisabledTemplate {...cleanUpProps(props)} />
);

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
  <TimeInputSimpleDisabledTemplate {...cleanUpProps(props)} />
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
