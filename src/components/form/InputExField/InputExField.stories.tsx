import { INPUT_DIMENSIONS_VALUES } from '#src/components/input';
import { Spinner } from '#src/components/Spinner';
import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { InputExField } from '#src/components/form/InputExField';
import { withDesign } from 'storybook-addon-designs';
import styled, { ThemeProvider } from 'styled-components';
import { Theme } from '#src/components/themes';
import { DataAttributesDescription } from '#src/components/form/common';
import { ValueType } from '#src/components/input/InputEx/ValueType';

export default {
  title: 'Admiral-2.1/Form Field/InputExField',
  component: InputExField,
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
    prefixValue: {
      type: 'string',
    },
    suffixValue: {
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
} as ComponentMeta<typeof InputExField>;

const DisplayContainer = styled.div`
  > * {
    margin-bottom: 24px;
  }
`;
const PREFIX_OPTIONS = ['prefix One', 'prefix Two', 'prefix Three'];
const Template: ComponentStory<typeof InputExField> = (props) => {
  const [localValue, setValue] = React.useState<string>(String(props.value) ?? '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    props.onChange?.(e);
  };

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  const [prefixValue, setPrefixValue] = React.useState<ValueType>('prefix One');
  return (
    <ThemeProvider theme={swapBorder}>
      <DisplayContainer>
        <InputExField data-container-id="InputExFieldIdOne" {...props} value={localValue} onChange={handleChange} />
        <InputExField
          data-container-id="InputExFieldIdTwo"
          required
          label="Поле необходимо заполнить"
          prefixValue={prefixValue}
          prefixValueList={PREFIX_OPTIONS}
          onPrefixValueChange={setPrefixValue}
        />
        <InputExField
          data-container-id="InputExFieldIdThree"
          readOnly
          aria-readonly
          label="Поле с атрибутом readOnly"
          defaultValue="Этот текст не редактируемый"
        />
        <InputExField
          data-container-id="InputExFieldIdFour"
          disabled
          aria-disabled
          label="Поле с атрибутом disabled"
          placeholder="Placeholder"
        />
        <InputExField
          data-container-id="InputExFieldIdFive"
          status="error"
          label="Поле с ошибкой"
          extraText="Поле не прошло валидацию, необходимо ввести корректное значение"
        />
        <InputExField
          data-container-id="InputExFieldIdWSix"
          status="success"
          label="Поле с индикацией успеха"
          extraText="Поле успешно прошло валидацию"
        />
        <InputExField
          data-container-id="InputExFieldIdSeven"
          displayClearIcon
          placeholder="идет поиск ..."
          label="Поле с иконкой загрузки"
          suffixValue={'suffix'}
          icons={<Spinner dimension="s" />}
        />
        <InputExField
          data-container-id="InputExFieldIdEight"
          label="Поле для ввода пароля (type='password')"
          type="password"
        />
      </DisplayContainer>
    </ThemeProvider>
  );
};

export const InputExFieldInput = Template.bind({});

InputExFieldInput.args = {
  value: 'Привет',
  label: 'Label',
};

InputExFieldInput.storyName = 'InputEx field example';
