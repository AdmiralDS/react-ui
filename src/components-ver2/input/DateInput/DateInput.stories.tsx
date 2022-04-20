import React, { ChangeEvent, useState, useEffect } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DateInput } from '#src/components-ver2/input/DateInput';
import { withDesign } from 'storybook-addon-designs';
import { INPUT_DIMENSIONS_VALUES } from '#src/components-ver2/input/types';
import { useDarkMode } from 'storybook-dark-mode';
import { DARK_THEME, LIGHT_THEME } from '#src/components-ver2/themes';
import { ThemeProvider } from 'styled-components';

export default {
  title: 'Admiral-2.1/Input/DateInput',
  component: DateInput,
  decorators: [withDesign],
  parameters: {
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53407',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53678',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53659',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: INPUT_DIMENSIONS_VALUES,
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    defaultIsCalendarOpen: { type: 'boolean' },
    value: { control: { type: 'text', disabled: true }, description: 'Значение DateInput' },
    onChange: {
      action: 'onChange',
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
    range: {
      control: { type: 'boolean' },
    },
    placeholder: {
      type: 'string',
    },
    minDate: {
      control: false,
    },
    maxDate: {
      control: false,
    },
  },
} as ComponentMeta<typeof DateInput>;

const Template: ComponentStory<typeof DateInput> = (props) => {
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
    <ThemeProvider theme={useDarkMode() ? DARK_THEME : LIGHT_THEME}>
      <DateInput
        {...cleanProps}
        value={localValue}
        onChange={handleChange}
        style={{ maxWidth: '30%' }}
        placeholder={'Some placeholder'}
      />
    </ThemeProvider>
  );
};

export const DateInputStory = Template.bind({});

DateInputStory.args = {};
DateInputStory.argTypes = { defaultIsCalendarOpen: { type: 'boolean' } };
DateInputStory.storyName = 'DateInput (input type="date")';
