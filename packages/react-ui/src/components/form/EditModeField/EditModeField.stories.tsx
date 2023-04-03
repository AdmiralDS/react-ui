import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { EditModeField } from './index';
import { withDesign } from 'storybook-addon-designs';
import type { Theme } from '#src/components/themes';
import { ThemeProvider } from 'styled-components';
import { DataAttributesDescription } from '#src/components/form/common';
import { ALL_BORDER_RADIUS_VALUES } from '#src/components/themes/borderRadius';

export default {
  title: 'Admiral-2.1/Form Field/EditModeField',
  component: EditModeField,
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
      options: ['xxl', 'xl', 'm', 's'],
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
    displayClearIcon: {
      control: { type: 'boolean' },
    },
    displayInline: {
      control: { type: 'boolean' },
    },
    displayCharacterCounter: {
      control: { type: 'boolean' },
    },
    showTooltip: {
      control: { type: 'boolean' },
    },
    skeleton: {
      control: { type: 'boolean' },
    },
    isLoading: {
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
    containerCssMixin: {
      control: false,
    },
    extraText: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
    icons: {
      control: false,
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
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

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <EditModeField
        data-container-id="editModeFieldIdOne"
        {...props}
        value={localValue}
        onChange={handleChange}
        label="Label"
      />
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
    <>
      <EditModeField
        value={localValue}
        onChange={handleChange}
        onEdit={() => setExtraText('Additional text')}
        onConfirm={() => setExtraText(undefined)}
        label="Поле для ввода логина (не более 6 символов)"
        extraText={extraText}
      />
    </>
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
    <>
      <EditModeField
        value={localValue}
        onChange={handleChange}
        onSubmit={() => setExtraText(undefined)}
        status={status}
        label="Поле для ввода логина (не более 6 символов)"
        extraText={extraText}
      />
    </>
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
