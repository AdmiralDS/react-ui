import React, { ChangeEvent } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { PhoneNumberInput } from '#src/components/input';
import styled, { ThemeProvider } from 'styled-components';
import { Theme } from '#src/components/themes';

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
    value: { control: { type: 'text', disabled: true }, description: 'Значение PhoneNumberInput' },
    onChange: {
      action: 'onChange',
    },
    disabled: {
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
    themeBorderKind: {
      control: {
        type: 'radio',
        options: ['Border radius 0', 'Border radius 2', 'Border radius 4', 'Border radius 8'],
      },
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
        style={{ maxWidth: '320px' }}
        onChange={handleChange}
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
PhoneNumberInputXLStory.args = {};
PhoneNumberInputXLStory.storyName = 'Phone Number Input. Размер XL';

export const PhoneNumberInputMStory = PhoneNumberInputM.bind({});
PhoneNumberInputMStory.args = {};
PhoneNumberInputMStory.storyName = 'Phone Number Input. Размер M c фильтрацией списка';

export const PhoneNumberInputSStory = PhoneNumberInputS.bind({});
PhoneNumberInputSStory.args = {};
PhoneNumberInputSStory.storyName = 'Phone Number Input. Размер S с заданной страной по умолчанию';
