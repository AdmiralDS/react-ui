import { INPUT_DIMENSIONS_VALUES } from '#src/components-ver2/input';
import { Spinner } from '#src/components-ver2/Spinner';
import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { InputField } from '#src/components-ver2/form/InputField';
import { withDesign } from 'storybook-addon-designs';
import styled, { ThemeProvider } from 'styled-components';
import { useDarkMode } from 'storybook-dark-mode';
import { DARK_THEME, LIGHT_THEME } from '#src/components-ver2/themes';

export default {
  title: 'Admiral-2.1/Form Field/InputField',
  component: InputField,
  decorators: [withDesign],
  parameters: {
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
    icons: {
      control: false,
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    props.onChange?.(e);
  };

  return (
    <ThemeProvider theme={useDarkMode() ? DARK_THEME : LIGHT_THEME}>
      <DisplayContainer>
        <InputField {...props} value={localValue} onChange={handleChange} />
        <InputField required label="Поле необходимо заполнить" />
        <InputField
          readOnly
          aria-readonly
          label="Поле с атрибутом readOnly"
          defaultValue="Этот текст не редактируемый"
        />
        <InputField disabled aria-disabled label="Поле с атрибутом disabled" placeholder="Placeholder" />
        <InputField
          status="error"
          label="Поле с ошибкой"
          extraText="Поле не прошло валидацию, необходимо ввести корректное значение"
        />
        <InputField
          status="success"
          displayStatusIcon
          label="Поле с индикацией успеха"
          extraText="Поле успешно прошло валидацию"
        />
        <InputField
          displayClearIcon
          placeholder="идет поиск ..."
          label="Поле с иконкой загрузки"
          icons={<Spinner dimension="s" />}
        />
        <InputField label="Поле для ввода пароля (type='password')" type="password" />
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
