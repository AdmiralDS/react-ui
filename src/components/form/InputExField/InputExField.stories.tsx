import { INPUT_DIMENSIONS_VALUES } from '#src/components/input';
import { Spinner } from '#src/components/Spinner';
import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { InputExField } from '#src/components/form/InputExField';
import { withDesign } from 'storybook-addon-designs';
import styled, { ThemeProvider } from 'styled-components';
import type { Theme } from '#src/components/themes';
import { DataAttributesDescription } from '#src/components/form/common';
import type { ValueType } from '#src/components/input/InputEx/ValueType';
import { ALL_BORDER_RADIUS_VALUES } from '#src/components/themes/borderRadius';

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
    showTooltip: {
      control: { type: 'boolean' },
    },
    icons: {
      control: false,
    },
    alignDropRef: {
      control: false,
    },
    containerRef: {
      control: false,
    },
    prefixValueList: {
      control: false,
    },
    suffixValueList: {
      control: false,
    },
    dropContainerCssMixin: {
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
} as ComponentMeta<typeof InputExField>;

const DisplayContainer = styled.div`
  > * {
    margin-bottom: 24px;
  }
`;

const PREFIX_OPTIONS = ['prefix One', 'prefix Two', 'prefix Three'];
const SUFFIX_OPTIONS = ['suffix One', 'suffix Two', 'suffix Three'];
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
  const [suffixValue, setSuffixValue] = React.useState<ValueType>('suffix One');
  return (
    <ThemeProvider theme={swapBorder}>
      <DisplayContainer>
        <InputExField
          data-container-id="InputExFieldIdOne"
          {...props}
          value={localValue}
          onChange={handleChange}
          suffixValue={suffixValue}
          suffixValueList={SUFFIX_OPTIONS}
          onSuffixValueChange={setSuffixValue}
        />
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
          suffixValue={'suffix'}
          prefixValue={'prefix'}
          readOnly
          aria-readonly
          label="Поле с атрибутом readOnly"
          defaultValue="Этот текст не редактируемый"
        />
        <InputExField
          data-container-id="InputExFieldIdFour"
          suffixValue={'suffix'}
          prefixValue={'prefix'}
          disabled
          aria-disabled
          label="Поле с атрибутом disabled"
          placeholder="Placeholder"
        />
        <InputExField
          data-container-id="InputExFieldIdFive"
          prefixValue={'prefix'}
          status="error"
          label="Поле с ошибкой"
          extraText="Поле не прошло валидацию, необходимо ввести корректное значение"
        />
        <InputExField
          data-container-id="InputExFieldIdWSix"
          suffixValue={'suffix'}
          status="success"
          label="Поле с индикацией успеха"
          extraText="Поле успешно прошло валидацию"
        />
        <InputExField
          data-container-id="InputExFieldIdSeven"
          prefixValue={'prefix'}
          placeholder="идет поиск ..."
          label="Поле с иконкой загрузки"
          suffixValue={'suffix'}
          icons={<Spinner dimension="m" />}
        />
        <InputExField
          displayClearIcon
          data-container-id="InputExFieldIdEight"
          prefixValue={'prefix'}
          label="Поле иконкой очистки"
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
