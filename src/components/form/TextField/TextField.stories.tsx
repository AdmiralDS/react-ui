import { INPUT_DIMENSIONS_VALUES } from '#src/components/input';
import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextField } from '#src/components/form/TextField';
import { withDesign } from 'storybook-addon-designs';
import styled, { ThemeProvider } from 'styled-components';
import { Theme } from '#src/components/themes';
import { DataAttributesDescription } from '#src/components/form/common';
import { ALL_BORDER_RADIUS_VALUES } from '#src/components/themes/borderRadius';

export default {
  title: 'Admiral-2.1/Form Field/TextField',
  component: TextField,
  decorators: [withDesign],
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: <DataAttributesDescription />,
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

    rows: {
      type: { name: 'number', required: false },
    },

    maxLength: {
      type: { name: 'number', required: false },
    },

    extraText: {
      type: 'string',
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
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    skeleton: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof TextField>;

const DisplayContainer = styled.div`
  > * {
    margin-bottom: 24px;
  }
`;

const Template: ComponentStory<typeof TextField> = (props) => {
  const [localValue, setValue] = React.useState<string>(String(props.value) ?? '');
  const fieldRef = React.useRef(null);
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
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
        <TextField data-container-id="textFieldIdOne" {...props} value={localValue} onChange={handleChange} />
        <TextField data-container-id="textFieldIdTwo" required label="Поле необходимо заполнить" />
        <TextField data-container-id="textFieldIdThree" ref={fieldRef} label="Напишите сочинение на заданную тему" />
      </DisplayContainer>
    </ThemeProvider>
  );
};

export const TextFieldInput = Template.bind({});

TextFieldInput.args = {
  value: 'Привет',
  label: 'Label',
};

TextFieldInput.storyName = 'Text field example';
