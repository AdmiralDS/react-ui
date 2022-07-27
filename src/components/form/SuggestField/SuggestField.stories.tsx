import { INPUT_DIMENSIONS_VALUES } from '#src/components/input';
import * as React from 'react';
import { ChangeEvent } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SuggestField } from '#src/components/form/SuggestField';
import { withDesign } from 'storybook-addon-designs';
import styled, { ThemeProvider } from 'styled-components';
import { Theme } from '#src/components/themes';

export default {
  title: 'Admiral-2.1/Form Field/SuggestField',
  component: SuggestField,
  decorators: [withDesign],
  parameters: {
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=39%3A60520',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=39%3A60826',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=39%3A60855',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: INPUT_DIMENSIONS_VALUES,
      control: { type: 'radio' },
    },
    isLoading: {
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
    extraText: {
      control: { type: 'text' },
    },
    handleInput: {
      control: false,
    },
    containerRef: {
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
} as ComponentMeta<typeof SuggestField>;

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

const Template: ComponentStory<typeof SuggestField> = (props) => {
  const cleanProps = (Object.keys(props) as Array<keyof typeof props>).reduce((acc, key) => {
    if (props[key] !== undefined) acc[key] = props[key];

    return acc;
  }, {} as Record<any, any>);

  const [localValue, setValue] = React.useState<string>(props.value ? String(props.value) : '');
  const [isLoading, setIsLoading] = React.useState(false);
  const [options, setOptions] = React.useState<string[] | undefined>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    // Если в инпуте больше 3х символов производим запрос на поиск совпадений
    if (localValue?.length < 3 && inputValue?.length > 2) {
      setIsLoading(true);
      setOptions([]);
    }

    console.log(`>>> onChange: ${inputValue}`);
    setValue(inputValue);
  };

  const handleOptionSelect = (value: string) => {
    console.log(`>>> onOptionSelect: ${value}`);
  };

  // Имитация запросов на бакэнд
  React.useEffect(() => {
    if (isLoading) {
      const timeout = window.setTimeout(() => {
        setIsLoading(false);
        setOptions([...OPTIONS]);
      }, 3000);
      return () => {
        window.clearTimeout(timeout);
      };
    }
  }, [isLoading]);

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <DisplayContainer>
        <SuggestField
          {...cleanProps}
          defaultValue="text"
          onChange={handleChange}
          onOptionSelect={handleOptionSelect}
          options={options}
          isLoading={isLoading}
        />
      </DisplayContainer>
    </ThemeProvider>
  );
};

export const SuggestFieldInput = Template.bind({});

SuggestFieldInput.args = {
  placeholder: 'Наберите несколько символов...',
  label: 'Поле ввода с вариантами подстановки значений',
};

SuggestFieldInput.storyName = 'SuggestField example';
