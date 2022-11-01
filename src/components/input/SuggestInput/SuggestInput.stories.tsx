import { INPUT_DIMENSIONS_VALUES, INPUT_STATUS_VALUES } from '#src/components/input';
import type { ChangeEvent } from 'react';
import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ReactComponent as SearchSolidSVG } from '@admiral-ds/icons/build/system/SearchSolid.svg';
import { SuggestInput } from './index';
import { withDesign } from 'storybook-addon-designs';
import { LIGHT_THEME, Theme } from '#src/components/themes';
import { ThemeProvider } from 'styled-components';
import { getTextHighlightMeta } from '#src/components/input/Select/utils';

export default {
  title: 'Admiral-2.1/Input/SuggestInput',
  component: SuggestInput,
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

    status: {
      control: { type: 'radio' },
      options: INPUT_STATUS_VALUES,
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

    disableCopying: {
      control: { type: 'boolean' },
    },

    displayClearIcon: {
      control: { type: 'boolean' },
    },

    alignDropdown: {
      options: ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
      control: { type: 'radio' },
    },

    placeholder: {
      type: 'string',
    },

    onChange: {
      action: 'onChange',
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
} as ComponentMeta<typeof SuggestInput>;

const OPTIONS = [
  'text 1',
  'text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text ',
  'text 3',
  'text 4',
  'text 5',
  'text 6',
  'text 7',
  'text 8 text text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text ',
  'text 9',
  'text 10',
  'text 11',
  'text 12',
];

async function wait(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const Template: ComponentStory<typeof SuggestInput> = (props) => {
  const cleanProps = (Object.keys(props) as Array<keyof typeof props>).reduce((acc, key) => {
    if (props[key] !== undefined) acc[key] = props[key];

    return acc;
  }, {} as Record<any, any>);

  const [localValue, setValue] = React.useState<string>(props.value ? String(props.value) : '');
  const [isLoading, setIsLoading] = React.useState(false);
  const [options, setOptions] = React.useState<string[] | undefined>();

  const handleSelectOption = (option: string) => {
    setValue(option);
    console.log(`Selected option - ${option}`);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;

    // Если в инпуте больше 3х символов производим запрос на поиск совпадений
    if (localValue?.length < 3 && inputValue?.length > 2) {
      setIsLoading(true);
      setOptions([]);
    }
    setValue(inputValue);
    props.onChange?.(e);
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
      <SuggestInput
        className="suggest"
        {...cleanProps}
        value={localValue}
        onInput={handleChange}
        onOptionSelect={handleSelectOption}
        options={options}
        isLoading={isLoading}
        onSearchButtonClick={() => {
          console.log('search button click');
        }}
        displayClearIcon
      />
    </ThemeProvider>
  );
};

const options = ['one', 'two', 'three'];
const TemplateUncontrolled: ComponentStory<typeof SuggestInput> = (props) => {
  return (
    <ThemeProvider theme={LIGHT_THEME}>
      <SuggestInput options={options} placeholder="numbers" dimension={props.dimension} />
    </ThemeProvider>
  );
};

const optionsNoMatch: string[] = [];
const TemplateNoMatch: ComponentStory<typeof SuggestInput> = (props) => {
  return (
    <ThemeProvider theme={LIGHT_THEME}>
      <SuggestInput options={optionsNoMatch} placeholder="numbers" dimension={props.dimension} />
    </ThemeProvider>
  );
};

const TemplateFilter: ComponentStory<typeof SuggestInput> = (props) => {
  const cleanProps = (Object.keys(props) as Array<keyof typeof props>).reduce((acc, key) => {
    if (props[key] !== undefined) acc[key] = props[key];

    return acc;
  }, {} as Record<any, any>);

  const [localValue, setValue] = React.useState<string>(props.value ? String(props.value) : '');
  const [options, setOptions] = React.useState<string[] | undefined>([...OPTIONS]);

  const handleSelectOption = (option: string) => {
    setValue(option);
    console.log(`Selected option - ${option}`);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;

    setValue(inputValue);
    props.onChange?.(e);
  };

  React.useEffect(() => {
    const filteredOptions: string[] = OPTIONS.filter(
      (option) => getTextHighlightMeta(option, localValue, 'wholly').shouldHighlight,
    );
    setOptions(filteredOptions);
  }, [localValue]);

  return (
    <ThemeProvider theme={LIGHT_THEME}>
      <SuggestInput
        className="suggest"
        {...cleanProps}
        value={localValue}
        onInput={handleChange}
        onOptionSelect={handleSelectOption}
        options={options}
        onSearchButtonClick={() => {
          console.log('search button click');
        }}
        displayClearIcon
      />
    </ThemeProvider>
  );
};

export const SuggestInputStory = Template.bind({});
SuggestInputStory.args = {
  placeholder: 'Начните набирать text',
};
SuggestInputStory.storyName = 'Suggest Input компонент';

export const SuggestInputStory2 = Template.bind({});
SuggestInputStory2.args = {
  placeholder: 'Начните набирать text',
  icon: SearchSolidSVG,
};
SuggestInputStory2.storyName = 'Suggest Input альтернативная иконка';

export const SuggestInputUncontrolled = TemplateUncontrolled.bind({});
SuggestInputUncontrolled.storyName = 'Suggest Input неконтроллируемый';

export const SuggestInputNoMatch = TemplateNoMatch.bind({});
SuggestInputNoMatch.storyName = 'Suggest Input "Нет совпадений"';

export const SuggestInputFilter = TemplateFilter.bind({});
SuggestInputFilter.storyName = 'Suggest Input с фильтрацией';
