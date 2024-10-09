import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { DateField, InputField, InputIconButton, PhoneInputField } from '@admiral-ds/react-ui';
import type { ComponentDimension, FieldProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as EyeCloseOutlineSvg } from '@admiral-ds/icons/build/service/EyeCloseOutline.svg';
import { ReactComponent as EyeOutlineSvg } from '@admiral-ds/icons/build/service/EyeOutline.svg';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

interface FieldPropsWithDimension extends FieldProps {
  dimension?: ComponentDimension;
}

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

export const ReadOnlyMaskedFieldTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: FieldPropsWithDimension & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
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
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <FormContainer>
        <InputField
          dimension={props.dimension}
          data-container-id="cardNumberField"
          value={cardNumber}
          readOnly
          label="Номер карты"
          iconsAfter={
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
          iconsAfter={
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
          iconsAfter={
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
          iconsAfter={
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
          iconsAfter={
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
