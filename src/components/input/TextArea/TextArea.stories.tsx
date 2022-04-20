import React, { ChangeEvent, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextArea } from './index';
import { withDesign } from 'storybook-addon-designs';
import { INPUT_DIMENSIONS_VALUES } from '#src/components/input/types';

export default {
  title: 'Admiral-2.1/Input/TextArea',
  component: TextArea,
  decorators: [withDesign],
  parameters: {
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61323',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=23873%3A69875',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=23873%3A70116',
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

    rows: {
      type: 'number',
    },

    maxLength: {
      type: 'number',
    },

    readOnly: {
      control: { type: 'boolean' },
    },
    disableCopying: {
      control: { type: 'boolean' },
    },
    displayStatusIcon: {
      control: { type: 'boolean' },
    },
    displayClearIcon: {
      control: { type: 'boolean' },
    },
    placeholder: {
      type: 'string',
    },
    onChange: {
      action: 'onChange',
    },
    icons: {
      control: false,
    },
    handleInput: {
      control: false,
    },
    containerRef: {
      control: false,
    },
    autoHeight: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (props) => {
  const cleanProps = (Object.keys(props) as Array<keyof typeof props>).reduce((acc, key) => {
    if (props[key] !== undefined) acc[key] = props[key];

    return acc;
  }, {} as Record<any, any>);

  const [localValue, setValue] = useState<string>(String(props.value) ?? '');

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
    props.onChange?.(e);
  };
  return (
    <>
      <TextArea {...cleanProps} value={localValue} onChange={handleChange} />
    </>
  );
};

export const TextAreaStory = Template.bind({});
TextAreaStory.args = {
  value: 'Привет!',
  placeholder: 'Placeholder',
};
TextAreaStory.storyName = 'Базовый textarea компонент';
