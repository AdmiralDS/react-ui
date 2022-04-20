import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { EditModeField } from './index';
import { withDesign } from 'storybook-addon-designs';
import { INPUT_DIMENSIONS_VALUES } from '#src/components-ver2/input/types';
import { useDarkMode } from 'storybook-dark-mode';
import { DARK_THEME, LIGHT_THEME } from '#src/components-ver2/themes';
import { ThemeProvider } from 'styled-components';

export default {
  title: 'Admiral-2.1/Form Field/EditModeField',
  component: EditModeField,
  decorators: [withDesign],
  parameters: {
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=38%3A10602',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=38%3A10901',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: INPUT_DIMENSIONS_VALUES,
      control: { type: 'radio' },
    },
    bold: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
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
    displayInline: {
      control: { type: 'boolean' },
    },
    displayCharacterCounter: {
      control: { type: 'boolean' },
    },
    placeholder: {
      type: 'string',
    },
    onChange: {
      action: 'onChange',
    },
    containerRef: {
      control: false,
    },
    handleInput: {
      control: false,
    },
    extraText: {
      control: { type: 'text' },
    },
    icons: {
      control: false,
    },
  },
} as ComponentMeta<typeof EditModeField>;

const Template1: ComponentStory<typeof EditModeField> = (props) => {
  const [localValue, setValue] = React.useState<string>(String(props.value) ?? '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    props.onChange?.(e);
  };

  return (
    <ThemeProvider theme={useDarkMode() ? DARK_THEME : LIGHT_THEME}>
      <EditModeField {...props} value={localValue} onChange={handleChange} label="Label" />
    </ThemeProvider>
  );
};

const Template2: ComponentStory<typeof EditModeField> = (props) => {
  const [localValue, setValue] = React.useState<string>(String(props.value) ?? '');
  const [extraText, setExtraText] = React.useState<any>(undefined);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    props.onChange?.(e);
  };

  return (
    <ThemeProvider theme={useDarkMode() ? DARK_THEME : LIGHT_THEME}>
      <EditModeField
        value={localValue}
        onChange={handleChange}
        onEdit={() => setExtraText('Additional text')}
        onConfirm={() => setExtraText(undefined)}
        label="Поле для ввода логина (не более 6 символов)"
        extraText={extraText}
      />
    </ThemeProvider>
  );
};

const Template3: ComponentStory<typeof EditModeField> = (props) => {
  const [localValue, setValue] = React.useState<string>(String(props.value) ?? '');
  const [status, setStatus] = React.useState<any>(undefined);
  const [extraText, setExtraText] = React.useState<any>(undefined);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue.length > 6) {
      setStatus('error');
      setExtraText('Поле не прошло валидацию, необходимо ввести корректное значение');
    } else {
      setStatus(undefined);
      setExtraText(undefined);
    }
    setValue(inputValue);
    props.onChange?.(e);
  };

  return (
    <ThemeProvider theme={useDarkMode() ? DARK_THEME : LIGHT_THEME}>
      <EditModeField
        value={localValue}
        onChange={handleChange}
        onSubmit={() => setExtraText(undefined)}
        status={status}
        label="Поле для ввода логина (не более 6 символов)"
        extraText={extraText}
      />
    </ThemeProvider>
  );
};

export const Playground = Template1.bind({});
Playground.args = {
  value: 'Admin',
};

export const ExtraText = Template2.bind({});
ExtraText.args = {
  value: 'Admin',
};
ExtraText.storyName = 'Пример с поясняющим текстом';
ExtraText.parameters = {
  docs: {
    description: {
      story: `В режиме редактирования допускается использование поясняющего текста для инпута.`,
    },
  },
};

export const ErrorState = Template3.bind({});
ErrorState.args = {
  value: 'Admin',
};
ErrorState.storyName = 'Пример с состоянием ошибки';
