import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import styled, { ThemeProvider } from 'styled-components';
import {
  Field,
  DateField,
  InputField,
  PhoneInputField,
  InputIconButton,
  INPUT_DIMENSIONS_VALUES,
  ALL_BORDER_RADIUS_VALUES,
} from '@admiral-ds/react-ui';
import type { FieldProps, ComponentDimension, Theme } from '@admiral-ds/react-ui';
import { ReactComponent as EyeCloseOutlineSvg } from '@admiral-ds/icons/build/service/EyeCloseOutline.svg';
import { ReactComponent as EyeOutlineSvg } from '@admiral-ds/icons/build/service/EyeOutline.svg';
import { DataAttributesDescription } from '#src/components/form/common';

interface FieldPropsWithDimension extends FieldProps {
  dimension?: ComponentDimension;
}

export default {
  title: 'Admiral-2.1/Form Field/ReadOnlyMaskedField',
  component: Field,
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
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=149351%3A119027&t=0hLwy6SkOu2Lc4PO-1',
      },
    ],
  },
  args: {
    dimension: 'm',
  },
  argTypes: {
    dimension: {
      options: INPUT_DIMENSIONS_VALUES,
      control: { type: 'radio' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    skeleton: {
      control: false,
    },
    theme: {
      control: false,
    },
    as: {
      control: false,
    },
    forwardedAs: {
      control: false,
    },
  },
} as ComponentMeta<typeof Field>;

const FormContainer = styled.form`
  > * {
    margin-bottom: 24px;
  }
`;

const initialCardNumber = '5543 9764 3143 2548';
const maskedCardNumber = '•••• •••• •••• •548';

const initialBirthDate = '08.05.1992';
const maskedBirthDate = '08.05.••••';

const initialEmail = 'apolon13@mail.ru';
const maskedEmail = 'a•••••@mail.ru';

const initialSurname = 'Смирнова';
const maskedSurname = 'С••••••а';

const initialPhoneNumber = '+7 095 364 83 75';
const maskedPhoneNumber = '+7 095 ••• •• 75';

const Template = (props: FieldPropsWithDimension) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  const Icon = (isMasked: boolean) => (isMasked ? EyeOutlineSvg : EyeCloseOutlineSvg);

  const [cardNumber, setCardNumber] = React.useState(maskedCardNumber);
  const [isCardNumberVisible, setCardNumberVisible] = React.useState(false);

  const [birthDate, setBirthDate] = React.useState(maskedBirthDate);
  const [isBirthDateVisible, setBirthDateVisible] = React.useState(false);

  const [email, setEmail] = React.useState(maskedEmail);
  const [isEmailVisible, setEmailVisible] = React.useState(false);

  const [surname, setSurname] = React.useState(maskedSurname);
  const [isSurnameVisible, setSurnameVisible] = React.useState(false);

  const [phoneNumber, setPhoneNumber] = React.useState(maskedPhoneNumber);
  const [isPhoneNumberVisible, setPhoneNumberVisible] = React.useState(false);

  return (
    <ThemeProvider theme={swapBorder}>
      <FormContainer>
        <InputField
          dimension={props.dimension}
          data-container-id="cardNumberField"
          value={cardNumber}
          readOnly
          label="Номер карты"
          icons={
            <InputIconButton
              icon={Icon(isCardNumberVisible)}
              key="eye-icon"
              onClick={() => {
                setCardNumberVisible(!isCardNumberVisible);
                setCardNumber(isCardNumberVisible ? maskedCardNumber : initialCardNumber);
              }}
              aria-hidden
            />
          }
        />
        <DateField
          dimension={props.dimension}
          data-container-id="birthDateField"
          value={birthDate}
          readOnly
          label="Дата рождения"
          id={'birth date'}
          icons={
            <InputIconButton
              icon={Icon(isBirthDateVisible)}
              key="eye-icon"
              onClick={() => {
                setBirthDateVisible(!isBirthDateVisible);
                setBirthDate(isBirthDateVisible ? maskedBirthDate : initialBirthDate);
              }}
              aria-hidden
            />
          }
        />
        <InputField
          dimension={props.dimension}
          data-container-id="emailField"
          value={email}
          readOnly
          label="Электронная почта"
          icons={
            <InputIconButton
              icon={Icon(isEmailVisible)}
              key="eye-icon"
              onClick={() => {
                setEmailVisible(!isEmailVisible);
                setEmail(isEmailVisible ? maskedEmail : initialEmail);
              }}
              aria-hidden
            />
          }
        />
        <InputField
          dimension={props.dimension}
          data-container-id="surnameField"
          value={surname}
          readOnly
          label="Фамилия"
          icons={
            <InputIconButton
              icon={Icon(isSurnameVisible)}
              key="eye-icon"
              onClick={() => {
                setSurnameVisible(!isSurnameVisible);
                setSurname(isSurnameVisible ? maskedSurname : initialSurname);
              }}
              aria-hidden
            />
          }
        />
        <PhoneInputField
          dimension={props.dimension}
          defaultCountry="RUS"
          data-container-id="phoneNumberField"
          value={phoneNumber}
          readOnly
          label="Телефон"
          icons={
            <InputIconButton
              icon={Icon(isPhoneNumberVisible)}
              key="eye-icon"
              onClick={() => {
                setPhoneNumberVisible(!isPhoneNumberVisible);
                setPhoneNumber(isPhoneNumberVisible ? maskedPhoneNumber : initialPhoneNumber);
              }}
              aria-hidden
            />
          }
        />
      </FormContainer>
    </ThemeProvider>
  );
};

const TemplateDemo: ComponentStory<typeof Field> = (args: FieldPropsWithDimension) => {
  return <Template {...args} />;
};

export const Demo = TemplateDemo.bind({});
Demo.storyName = 'ReadOnly masked field';
