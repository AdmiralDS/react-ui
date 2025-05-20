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

// Imports of text sources
import TimePickerSimpleRaw from './TimePickerSimple.template?raw';

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
    <Separator />
    По дефолту в выпадающем меню стоит шаг в 30 минут, но вы можете устанавливать свои произвольные интервалы.
  </Desc>
);

export default {
  title: 'Admiral-2.1/DatePicker/TimePicker',
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

  name: 'Базовый компонент',
};

//</editor-fold>
