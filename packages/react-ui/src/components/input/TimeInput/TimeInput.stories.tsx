import type { ChangeEvent } from 'react';
import React, { useEffect, useState } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { TimeInput } from '../TimeInput';
import { withDesign } from 'storybook-addon-designs';
import { INPUT_DIMENSIONS_VALUES } from '#src/components/input/types';
import { ReactComponent as GPSOutline } from '@admiral-ds/icons/build/location/GPSOutline.svg';
import { ReactComponent as TimeSolid } from '@admiral-ds/icons/build/system/TimeSolid.svg';
import styled, { ThemeProvider } from 'styled-components';
import type { Theme } from '#src/components/themes';
import { InputIconButton } from '#src/components/InputIconButton';
import { ALL_BORDER_RADIUS_VALUES } from '#src/components/themes/borderRadius';

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
      type: 'string',
    },
    endTime: {
      type: 'string',
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

const TimeInputIconAlternative: ComponentStory<typeof TimeInput> = (props) => {
  const cleanProps = (Object.keys(props) as Array<keyof typeof props>).reduce((acc, key) => {
    if (props[key] !== undefined) acc[key] = props[key];

    return acc;
  }, {} as Record<any, any>);

  const [localValue, setValue] = useState<string>(String(props.value) ?? '');

  useEffect(() => {
    if (props.value !== undefined) {
      setValue(String(props.value));
    }
  }, [props.value]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
    props.onChange?.(e);
  };

  return (
    <>
      <TimeInput
        {...cleanProps}
        style={{ maxWidth: '320px' }}
        icons={<InputIconButton icon={GPSOutline} onClick={() => setValue('12:00')} />}
        icon={TimeSolid}
        value={localValue}
        onChange={handleChange}
        readOnly
        dropContainerClassName="dropContainerClass"
      />
    </>
  );
};

const TimeInputSimple: ComponentStory<typeof TimeInput> = (props) => {
  const cleanProps = (Object.keys(props) as Array<keyof typeof props>).reduce((acc, key) => {
    if (props[key] !== undefined) acc[key] = props[key];

    return acc;
  }, {} as Record<any, any>);

  const [localValue, setValue] = useState<string>(String(props.value) ?? '');

  useEffect(() => {
    if (props.value !== undefined) {
      setValue(String(props.value));
    }
  }, [props.value]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
    props.onChange?.(e);
  };

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <TimeInput
        {...cleanProps}
        style={{ maxWidth: '320px' }}
        value={localValue}
        onChange={handleChange}
        dropContainerClassName="dropContainerClass"
      />
    </ThemeProvider>
  );
};

const TimeInputRange: ComponentStory<typeof TimeInput> = (props) => {
  const cleanProps = (Object.keys(props) as Array<keyof typeof props>).reduce((acc, key) => {
    if (props[key] !== undefined) acc[key] = props[key];

    return acc;
  }, {} as Record<any, any>);

  const [localValue, setValue] = useState<string>(String(props.value) ?? '');

  useEffect(() => {
    if (props.value !== undefined) {
      setValue(String(props.value));
    }
  }, [props.value]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
    props.onChange?.(e);
  };
  return (
    <>
      <TimeInput
        {...cleanProps}
        style={{ maxWidth: '320px' }}
        startTime="09:00"
        endTime="18:00"
        value={localValue}
        onChange={handleChange}
        dropContainerClassName="dropContainerClass"
      />
    </>
  );
};

const TimeInputRangeDisabled: ComponentStory<typeof TimeInput> = (props) => {
  const cleanProps = (Object.keys(props) as Array<keyof typeof props>).reduce((acc, key) => {
    if (props[key] !== undefined) acc[key] = props[key];

    return acc;
  }, {} as Record<any, any>);

  const [localValue, setValue] = useState<string>(String(props.value) ?? '');

  useEffect(() => {
    if (props.value !== undefined) {
      setValue(String(props.value));
    }
  }, [props.value]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
    props.onChange?.(e);
  };
  return (
    <>
      <TimeInput
        {...cleanProps}
        style={{ maxWidth: '320px' }}
        disabledSlots={['12:30', '15:30', '17:00', '19:30']}
        startTime="11:00"
        endTime="20:00"
        value={localValue}
        onChange={handleChange}
        dropContainerClassName="dropContainerClass"
      />
    </>
  );
};

const TimeInputSimpleDisabled: ComponentStory<typeof TimeInput> = (props) => {
  const cleanProps = (Object.keys(props) as Array<keyof typeof props>).reduce((acc, key) => {
    if (props[key] !== undefined) acc[key] = props[key];

    return acc;
  }, {} as Record<any, any>);

  const [localValue, setValue] = useState<string>(String(props.value) ?? '');

  useEffect(() => {
    if (props.value !== undefined) {
      setValue(String(props.value));
    }
  }, [props.value]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
    props.onChange?.(e);
  };
  return (
    <>
      <TimeInput
        {...cleanProps}
        style={{ maxWidth: '320px' }}
        disabledSlots={['01:00', '03:30', '05:00', '07:30', '10:00', '12:30', '15:30', '17:00', '19:30']}
        value={localValue}
        onChange={handleChange}
        dropContainerClassName="dropContainerClass"
      />
    </>
  );
};

export const TimeInputSimpleStory = TimeInputSimple.bind({});
TimeInputSimpleStory.args = {};
TimeInputSimpleStory.storyName = 'Базовый компонент';

export const TimeInputIconAlternativeStory = TimeInputIconAlternative.bind({});
TimeInputIconAlternativeStory.args = {};
TimeInputIconAlternativeStory.storyName = 'Компонент с дополнительной иконкой и альтернативной иконкой компонента';

export const TimeInputRangeStory = TimeInputRange.bind({});
TimeInputRangeStory.args = {};
TimeInputRangeStory.storyName = 'C диапазоном времени';

export const TimeInputRangeDisabledStory = TimeInputRangeDisabled.bind({});
TimeInputRangeDisabledStory.args = {};
TimeInputRangeDisabledStory.storyName = 'C диапазоном времени и задизейбленными значениями';

export const TimeInputSimpleDisabledStory = TimeInputSimpleDisabled.bind({});
TimeInputSimpleDisabledStory.args = {};
TimeInputSimpleDisabledStory.storyName = 'Базовый с задизейбленными значениями';
