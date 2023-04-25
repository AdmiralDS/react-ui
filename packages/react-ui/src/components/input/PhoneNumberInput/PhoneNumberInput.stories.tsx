import type { ChangeEvent } from 'react';
import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { PhoneNumberInput } from '#src/components/input';
import styled, { ThemeProvider } from 'styled-components';
import type { Theme } from '#src/components/themes';
import { ALL_BORDER_RADIUS_VALUES } from '#src/components/themes/borderRadius';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Separator = styled.div`
  height: 20px;
`;

const Description = () => (
  <Desc>
    Компонент для ввода номера телефона с выбором кода-страны.
    <Separator />
    По дефолту стоят флаг России и маска для российского телефона, но задать можно любой другой.
  </Desc>
);

export default {
  title: 'Admiral-2.1/Input/PhoneNumberInput',
  component: PhoneNumberInput,
  decorators: [withDesign],
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: <Description />,
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61244',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61271',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61297',
      },
    ],
  },
  argTypes: {
    value: {
      control: { type: 'text' },
    },
    defaultCountry: {
      control: { type: 'text' },
    },
    onChange: {
      action: 'onChange',
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
    icons: {
      control: false,
    },
    containerRef: {
      control: false,
    },
    handleInput: {
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
    onlyCountries: {
      control: false,
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    skeleton: {
      control: { type: 'boolean' },
    },
    showTooltip: {
      control: { type: 'boolean' },
    },
    isLoading: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof PhoneNumberInput>;

const PhoneNumberInputXL: ComponentStory<typeof PhoneNumberInput> = (props) => {
  const cleanProps = (Object.keys(props) as Array<keyof typeof props>).reduce((acc, key) => {
    if (props[key] !== undefined) acc[key] = props[key];

    return acc;
  }, {} as Record<any, any>);

  const [localValue, setValue] = React.useState<string>(props.value ?? '');

  React.useEffect(() => {
    if (props.value !== undefined) {
      setValue(String(props.value));
    }
  }, [props.value]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
    props.onChange?.(e);
  };

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <PhoneNumberInput
        {...cleanProps}
        dimension="xl"
        value={localValue}
        defaultCountry={props.defaultCountry}
        style={{ maxWidth: '320px' }}
        onChange={handleChange}
        dropContainerClassName="dropContainerClass"
      />
    </ThemeProvider>
  );
};

const PhoneNumberInputM: ComponentStory<typeof PhoneNumberInput> = (props) => {
  const cleanProps = (Object.keys(props) as Array<keyof typeof props>).reduce((acc, key) => {
    if (props[key] !== undefined) acc[key] = props[key];

    return acc;
  }, {} as Record<any, any>);

  const [localValue, setValue] = React.useState<string>(props.value ?? '');

  React.useEffect(() => {
    if (props.value !== undefined) {
      setValue(String(props.value));
    }
  }, [props.value]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
    props.onChange?.(e);
  };

  return (
    <>
      <PhoneNumberInput
        {...cleanProps}
        dimension="m"
        value={localValue}
        onlyCountries={['RUS', 'BLR', 'TJK', 'UZB']}
        style={{ maxWidth: '320px' }}
        onChange={handleChange}
      />
    </>
  );
};

const PhoneNumberInputS: ComponentStory<typeof PhoneNumberInput> = (props) => {
  const cleanProps = (Object.keys(props) as Array<keyof typeof props>).reduce((acc, key) => {
    if (props[key] !== undefined) acc[key] = props[key];

    return acc;
  }, {} as Record<any, any>);

  const [localValue, setValue] = React.useState<string>(props.value ?? '');

  React.useEffect(() => {
    if (props.value !== undefined) {
      setValue(String(props.value));
    }
  }, [props.value]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
    props.onChange?.(e);
  };

  return (
    <>
      <PhoneNumberInput
        {...cleanProps}
        dimension="s"
        value={localValue}
        defaultCountry="AUT"
        style={{ maxWidth: '320px' }}
        onChange={handleChange}
      />
    </>
  );
};

export const PhoneNumberInputXLStory = PhoneNumberInputXL.bind({});
PhoneNumberInputXLStory.args = {
  defaultCountry: 'RUS',
  value: '+7 123 456 78 90',
};
PhoneNumberInputXLStory.storyName = 'Phone Number Input. Размер XL';

export const PhoneNumberInputMStory = PhoneNumberInputM.bind({});
PhoneNumberInputMStory.args = {};
PhoneNumberInputMStory.storyName = 'Phone Number Input. Размер M c фильтрацией списка';

export const PhoneNumberInputSStory = PhoneNumberInputS.bind({});
PhoneNumberInputSStory.args = {};
PhoneNumberInputSStory.storyName = 'Phone Number Input. Размер S с заданной страной по умолчанию';
