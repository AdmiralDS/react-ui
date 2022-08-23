import { INPUT_DIMENSIONS_VALUES } from '#src/components/input';
import * as React from 'react';
import { ChangeEvent, useEffect, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TimeField } from '#src/components/form';
import { withDesign } from 'storybook-addon-designs';
import styled, { ThemeProvider } from 'styled-components';
import { Theme } from '#src/components/themes';
import { DataAttributesDescription } from '#src/components/form/common';

export default {
  title: 'Admiral-2.1/Form Field/TimeField',
  component: TimeField,
  decorators: [withDesign],
  parameters: {
    componentSubtitle: <DataAttributesDescription />,
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
    disabled: {
      control: { type: 'boolean' },
    },
    displayClearIcon: {
      control: { type: 'boolean' },
    },
    disableCopying: {
      control: { type: 'boolean' },
    },
    displayCharacterCounter: {
      control: { type: 'boolean' },
    },
    displayInline: {
      control: { type: 'boolean' },
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
    value: {
      control: { type: 'text' },
    },
    icons: {
      control: false,
    },
    extraText: {
      control: { type: 'text' },
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
} as ComponentMeta<typeof TimeField>;

const DisplayContainer = styled.div`
  max-width: 320px;
  > * {
    margin-bottom: 24px;
  }
`;

const Template: ComponentStory<typeof TimeField> = (props) => {
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
      <DisplayContainer>
        <TimeField
          data-container-id="timeFieldIdOne"
          {...cleanProps}
          // style={{ maxWidth: '320px' }}
          startTime="09:00"
          endTime="18:00"
          value={localValue}
          onChange={handleChange}
        />
      </DisplayContainer>
    </ThemeProvider>
  );
};

export const TimeFieldInput = Template.bind({});

TimeFieldInput.args = {
  placeholder: 'Наберите несколько символов...',
  label: 'Поле ввода времени',
};

TimeFieldInput.storyName = 'TimeField example';
