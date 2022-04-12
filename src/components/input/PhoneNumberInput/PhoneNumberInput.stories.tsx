import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { PhoneNumberInput } from '#/components/input';

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
  title: 'Input/PhoneNumberInput',
  component: PhoneNumberInput,
  decorators: [withDesign],
  parameters: {
    componentSubtitle: <Description />,
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/HCiO63zg2hPSXTHuEdpRtG/Admiral-2.0-UI-Kit?node-id=39%3A61244',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/HCiO63zg2hPSXTHuEdpRtG/Admiral-2.0-UI-Kit?node-id=39%3A61271',
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

  return (
    <PhoneNumberInput
      {...cleanProps}
      dimension="xl"
      value={localValue}
      style={{ maxWidth: '320px' }}
      onChange={handleChange}
    />
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
    <PhoneNumberInput
      {...cleanProps}
      dimension="m"
      value={localValue}
      onlyCountries={['RUS', 'BLR', 'TJK', 'UZB']}
      style={{ maxWidth: '320px' }}
      onChange={handleChange}
    />
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
    <PhoneNumberInput
      {...cleanProps}
      dimension="s"
      value={localValue}
      defaultCountry="AUT"
      style={{ maxWidth: '320px' }}
      onChange={handleChange}
    />
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
