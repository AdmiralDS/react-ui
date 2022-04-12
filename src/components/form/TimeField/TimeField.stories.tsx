import { INPUT_DIMENSIONS_VALUES } from '#/components/input';
import { ChangeEvent, useEffect, useState } from 'react';
import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TimeField } from '#/components/form';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';

export default {
  title: 'Form Field Components/TimeField',
  component: TimeField,
  decorators: [withDesign],
  parameters: {
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/HCiO63zg2hPSXTHuEdpRtG/Admiral-2.0-UI-Kit?node-id=39%3A60618',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/HCiO63zg2hPSXTHuEdpRtG/Admiral-2.0-UI-Kit?node-id=39%3A60644',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/HCiO63zg2hPSXTHuEdpRtG/Admiral-2.0-UI-Kit?node-id=39%3A60669',
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
    displayStatusIcon: {
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
  },
} as ComponentMeta<typeof TimeField>;

const DisplayContainer = styled.div`
  > * {
    margin-bottom: 24px;
  }
`;

const OPTIONS = [
  'text 1',
  'text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text ',
  'text 3',
  'text 4',
  'text 5',
  'text 6',
];

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

  return (
    <DisplayContainer>
      <TimeField
        {...cleanProps}
        style={{ maxWidth: '320px' }}
        startTime="09:00"
        endTime="18:00"
        value={localValue}
        onChange={handleChange}
      />
    </DisplayContainer>
  );
};

export const TimeFieldInput = Template.bind({});

TimeFieldInput.args = {
  placeholder: 'Наберите несколько символов...',
  label: 'Поле ввода времени',
};

TimeFieldInput.storyName = 'TimeField example';
