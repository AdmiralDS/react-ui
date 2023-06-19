import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
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
  decorators: [withDesign],
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
} as ComponentMeta<typeof TimeInput>;

//<editor-fold desc="Базовый компонент">
const TimeInputSimpleStory: ComponentStory<typeof TimeInput> = (props) => (
  <TimeInputSimpleTemplate {...cleanUpProps(props)} />
);

export const TimeInputSimple = TimeInputSimpleStory.bind({});
TimeInputSimple.parameters = {
  docs: {
    source: {
      code: TimeInputSimpleRaw,
    },
  },
};
TimeInputSimple.storyName = 'Базовый компонент';
//</editor-fold>

//<editor-fold desc="Компонент с дополнительной иконкой и альтернативной иконкой компонента">
const TimeInputIconAlternativeStory: ComponentStory<typeof TimeInput> = (props) => (
  <TimeInputIconAlternativeTemplate {...cleanUpProps(props)} />
);

export const TimeInputIconAlternative = TimeInputIconAlternativeStory.bind({});
TimeInputIconAlternative.parameters = {
  docs: {
    source: {
      code: TimeInputIconAlternativeRaw,
    },
  },
};
TimeInputIconAlternative.storyName = 'Компонент с дополнительной иконкой и альтернативной иконкой компонента';
//</editor-fold>

//<editor-fold desc="C диапазоном времени">
const TimeInputRangeStory: ComponentStory<typeof TimeInput> = (props) => (
  <TimeInputRangeTemplate {...cleanUpProps(props)} />
);

export const TimeInputRange = TimeInputRangeStory.bind({});
TimeInputRange.parameters = {
  docs: {
    source: {
      code: TimeInputRangeRaw,
    },
  },
};
TimeInputRange.storyName = 'C диапазоном времени';
//</editor-fold>

//<editor-fold desc="C диапазоном времени и задизейбленными значениями">
const TimeInputRangeDisabledStory: ComponentStory<typeof TimeInput> = (props) => (
  <TimeInputRangeDisabledTemplate {...cleanUpProps(props)} />
);

export const TimeInputRangeDisabled = TimeInputRangeDisabledStory.bind({});
TimeInputRangeDisabled.parameters = {
  docs: {
    source: {
      code: TimeInputRangeDisabledRaw,
    },
  },
};
TimeInputRangeDisabled.storyName = 'C диапазоном времени и задизейбленными значениями';
//</editor-fold>

//<editor-fold desc="Базовый с задизейбленными значениями">
const TimeInputSimpleDisabledStory: ComponentStory<typeof TimeInput> = (props) => (
  <TimeInputSimpleDisabledTemplate {...cleanUpProps(props)} />
);

export const TimeInputSimpleDisabled = TimeInputSimpleDisabledStory.bind({});
TimeInputSimpleDisabled.parameters = {
  docs: {
    source: {
      code: TimeInputSimpleDisabledRaw,
    },
  },
};
TimeInputSimpleDisabled.storyName = 'Базовый с задизейбленными значениями';
//</editor-fold>
