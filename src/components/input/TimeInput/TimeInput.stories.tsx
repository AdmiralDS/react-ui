import React, { ChangeEvent, useEffect, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TimeInput } from '../TimeInput';
import { withDesign } from 'storybook-addon-designs';
import { INPUT_DIMENSIONS_VALUES } from '#src/components/input/types';
import { ReactComponent as GPSOutline } from '@admiral-ds/icons/build/location/GPSOutline.svg';
import { ReactComponent as TimeSVG } from '@admiral-ds/icons/build/system/TimeOutline.svg';
import styled, { ThemeProvider } from 'styled-components';
import { Theme } from '#src/components/themes';

const Icon = styled(TimeSVG)`
  & *[fill^='#'] {
    fill: ${(p) => p.theme.color['Neutral/Neutral 50']};
  }

  [disabled] & {
    pointer-events: none;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover *[fill^='#'] {
    fill: ${(p) => p.theme.color['Primary/Primary 70']};
  }
`;

const GPSIcon = styled(GPSOutline)`
  & *[fill^='#'] {
    fill: ${(p) => p.theme.color['Neutral/Neutral 50']};
  }

  [disabled] & {
    pointer-events: none;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover *[fill^='#'] {
    fill: ${(p) => p.theme.color['Primary/Primary 70']};
  }
`;

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
    displayStatusIcon: {
      control: { type: 'boolean' },
    },
    displayClearIcon: {
      control: { type: 'boolean' },
    },
    disableCopying: {
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
    themeBorderKind: {
      control: {
        type: 'radio',
        options: ['Border radius 0', 'Border radius 2', 'Border radius 4', 'Border radius 8'],
      },
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
        icons={<GPSIcon onClick={() => setValue('12:00')} />}
        icon={Icon}
        value={localValue}
        onChange={handleChange}
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
      <TimeInput {...cleanProps} style={{ maxWidth: '320px' }} value={localValue} onChange={handleChange} />
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
