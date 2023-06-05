import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import styled, { ThemeProvider } from 'styled-components';
import { withDesign } from 'storybook-addon-designs';
import {
  DateField,
  INPUT_DIMENSIONS_VALUES,
  INPUT_STATUS_VALUES,
  ALL_BORDER_RADIUS_VALUES,
} from '@admiral-ds/react-ui';
import type { Theme } from '@admiral-ds/react-ui';
import { DataAttributesDescription } from '#src/components/form/common';

export default {
  title: 'Admiral-2.1/Form Field/DateField',
  component: DateField,
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
    status: {
      control: { type: 'radio' },
      options: INPUT_STATUS_VALUES,
    },
    currentActiveView: {
      options: [undefined, 'DAY', 'MONTH', 'YEAR'],
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
    range: {
      control: { type: 'boolean' },
    },
    displayCharacterCounter: {
      control: { type: 'boolean' },
    },
    displayInline: {
      control: { type: 'boolean' },
    },
    defaultIsCalendarOpen: {
      control: { type: 'boolean' },
    },
    isLoading: {
      control: { type: 'boolean' },
    },
    showTooltip: {
      control: { type: 'boolean' },
    },
    currentActiveViewImportant: {
      control: { type: 'boolean' },
    },
    extraText: {
      control: { type: 'text' },
    },
    handleInput: {
      control: false,
    },
    placeholder: {
      control: { type: 'text' },
    },
    minDate: {
      control: false,
    },
    maxDate: {
      control: false,
    },
    calendarRef: {
      control: false,
    },
    containerRef: {
      control: false,
    },
    dropContainerCssMixin: {
      control: false,
    },
    dropContainerClassName: {
      control: false,
    },
    dropContainerStyle: {
      control: false,
    },
    icon: {
      control: false,
    },
    icons: {
      control: false,
    },
    locale: {
      control: false,
    },
    startDate: {
      control: false,
    },
    endDate: {
      control: false,
    },
    validator: {
      control: false,
    },
    selected: {
      control: false,
    },
    tooltipContainer: {
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
} as ComponentMeta<typeof DateField>;

const FormContainer = styled.form`
  > * {
    margin-bottom: 24px;
  }
`;

const Template: ComponentStory<typeof DateField> = (props) => {
  const [localValue, setValue] = React.useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    console.log(`handleChange ${inputValue}`);
    setValue(inputValue);
  };

  const handleFormBlur = (e: React.FocusEvent<HTMLFormElement>) => {
    console.log(`form blur:
    current target: ${e.currentTarget.id}
    target: ${e.target.id}
    related target: ${e.relatedTarget?.id}
    `);
  };

  const handleFormFocus = (e: React.FocusEvent<HTMLFormElement>) => {
    console.log(`form focus:
    current target: ${e.currentTarget.id}
    target: ${e.target.id}
    related target: ${e.relatedTarget?.id}
    `);
  };

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <FormContainer id="form 1" onBlur={handleFormBlur} onFocus={handleFormFocus}>
        <DateField
          data-container-id="dateFieldIdOne"
          {...props}
          value={localValue}
          onChange={handleChange}
          id={'date 1'}
          placeholder="Это placeholder"
          dropContainerClassName="dropContainerClass"
        />
        <DateField
          data-container-id="dateFieldIdTwo"
          required
          label="uncontrolled input"
          id={'date 2'}
          dropContainerClassName="dropContainerClass"
        />
        <DateField
          data-container-id="dateFieldIdThree"
          type="date-range"
          id="date range 1"
          label="uncontrolled date range"
          placeholder={'Введите отрезок времени'}
          dropContainerClassName="dropContainerClass"
        />
      </FormContainer>
    </ThemeProvider>
  );
};

export const InputFieldInput = Template.bind({});

InputFieldInput.args = {
  label: 'Label',
};

InputFieldInput.storyName = 'DateField example';
