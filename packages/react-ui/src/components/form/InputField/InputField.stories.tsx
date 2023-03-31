import { INPUT_DIMENSIONS_VALUES } from '#src/components/input';
import { Spinner } from '#src/components/Spinner';
import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { InputField } from '#src/components/form/InputField';
import { withDesign } from 'storybook-addon-designs';
import styled, { ThemeProvider } from 'styled-components';
import type { Theme } from '#src/components/themes';
import { DataAttributesDescription } from '#src/components/form/common';
import { ALL_BORDER_RADIUS_VALUES } from '#src/components/themes/borderRadius';

export default {
  title: 'Admiral-2.1/Form Field/InputField',
  component: InputField,
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
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A60376',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A60982',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61046',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: INPUT_DIMENSIONS_VALUES,
      control: { type: 'radio' },
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
    showTooltip: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    readOnly: {
      control: { type: 'boolean' },
    },
    isLoading: {
      control: { type: 'boolean' },
    },
    icons: {
      control: false,
    },
    containerRef: {
      control: false,
    },
    handleInput: {
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
} as ComponentMeta<typeof InputField>;

const DisplayContainer = styled.div`
  > * {
    margin-bottom: 24px;
  }
`;

const Template: ComponentStory<typeof InputField> = (props) => {
  const [localValue, setValue] = React.useState<string>(String(props.value) ?? '');
  const [invalidInputValue, setInvalidInputValue] = React.useState<string>('Hello');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    props.onChange?.(e);
  };

  const handleInvalidInputValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const invalidInputValue = e.target.value;
    setInvalidInputValue(invalidInputValue);
    props.onChange?.(e);
  };

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <DisplayContainer>
        <InputField data-container-id="inputFieldIdOne" {...props} value={localValue} onChange={handleChange} />
        <InputField data-container-id="inputFieldIdTwo" required label="Поле необходимо заполнить" />
        <InputField
          data-container-id="inputFieldIdThree"
          readOnly
          aria-readonly
          label="Поле с атрибутом readOnly"
          defaultValue="Этот текст не редактируемый"
        />
        <InputField
          data-container-id="inputFieldIdFour"
          disabled
          aria-disabled
          label="Поле с атрибутом disabled"
          placeholder="Placeholder"
        />
        <InputField
          data-container-id="inputFieldIdFiveInvalid"
          label="Поле с ошибкой (invalid)"
          pattern="[a-z]+"
          value={invalidInputValue}
          onChange={handleInvalidInputValueChange}
        />
        <InputField
          data-container-id="inputFieldIdFive"
          status="error"
          label="Поле с ошибкой (status = error)"
          extraText="Поле не прошло валидацию, необходимо ввести корректное значение"
        />
        <InputField
          data-container-id="inputFieldIdSix"
          status="success"
          label="Поле с индикацией успеха (status = success)"
          extraText="Поле успешно прошло валидацию"
        />
        <InputField
          data-container-id="inputFieldIdSeven"
          displayClearIcon
          placeholder="идет поиск ..."
          label="Поле с иконкой загрузки"
          isLoading
        />
        <InputField
          data-container-id="inputFieldIdEight"
          label="Поле для ввода пароля (type='password')"
          type="password"
        />
      </DisplayContainer>
    </ThemeProvider>
  );
};

export const InputFieldInput = Template.bind({});

InputFieldInput.args = {
  value: 'Привет',
  label: 'Label',
};

InputFieldInput.storyName = 'Input field example';
