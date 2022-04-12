import { INPUT_DIMENSIONS_VALUES } from '#/components/input';
import { Spinner } from '#/components/Spinner';
import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { InputField } from '#/components/form/InputField';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';

export default {
  title: 'Form Field Components/InputField',
  component: InputField,
  decorators: [withDesign],
  parameters: {
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/HCiO63zg2hPSXTHuEdpRtG/Admiral-2.0-UI-Kit?node-id=39%3A60376',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/HCiO63zg2hPSXTHuEdpRtG/Admiral-2.0-UI-Kit?node-id=39%3A60982',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/HCiO63zg2hPSXTHuEdpRtG/Admiral-2.0-UI-Kit?node-id=39%3A61046',
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
    <DisplayContainer>
      <InputField {...props} value={localValue} onChange={handleChange} />
      <InputField required label="Поле необходимо заполнить" />
      <InputField readOnly aria-readonly label="Поле с атрибутом readOnly" defaultValue="Этот текст не редактируемый" />
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
        extraText="Поле не прошло валидацию, необходимо ввести корректное значение"
      />
      <InputField
        displayClearIcon
        placeholder="идет поиск ..."
        label="Поле с иконкой загрузки"
        icons={<Spinner dimension="s" />}
      />
      <InputField label="Поле для ввода пароля (type='password')" type="password" />
    </DisplayContainer>
  );
};

export const InputFieldInput = Template.bind({});

InputFieldInput.args = {
  value: 'Привет',
  label: 'Label',
};

InputFieldInput.storyName = 'Input field example';
