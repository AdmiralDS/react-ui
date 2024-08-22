import type { ChangeEvent } from 'react';
import { useState, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { InputIconButton, TextInput, typography } from '@admiral-ds/react-ui';
import type { TextInputProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';
import { ReactComponent as HelpOutline } from '@admiral-ds/icons/build/service/HelpOutline.svg';

const DisplayContainer = styled.div`
  > * {
    margin-bottom: 24px;
  }
`;
const Desc = styled.div`
  ${typography['Body/Body 1 Long']}
`;
interface InputIcon {
  text: string;
}
const InputIcon = ({ text }: InputIcon) => {
  const handleClick = () => {
    console.log(`${text} clicked`);
  };
  return <InputIconButton icon={HelpOutline} onClick={handleClick} />;
};

export const TextInputWithIconTemplate = ({
  value = 'Привет!',
  placeholder = 'Placeholder',
  themeBorderKind,
  CSSCustomProps,
  ...props
}: TextInputProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [localValue1, setValue1] = useState<string>(String(value) ?? '');
  const [localValue2, setValue2] = useState<string>(String(value) ?? '');
  const [localValue3, setValue3] = useState<string>(String(value) ?? '');

  const handleChange1 = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue1(inputValue);
    props.onChange?.(e);
  };
  const handleChange2 = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue2(inputValue);
    props.onChange?.(e);
  };
  const handleChange3 = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue3(inputValue);
    props.onChange?.(e);
  };

  const informerInput1Ref = useRef<HTMLDivElement>(null);
  const informerInput2Ref = useRef<HTMLDivElement>(null);
  const informerInput3Ref = useRef<HTMLDivElement>(null);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <DisplayContainer>
        <Desc>Поле ввода с одной иконкой:</Desc>
        <TextInput
          {...props}
          containerRef={informerInput1Ref}
          value={localValue1}
          placeholder={placeholder}
          onChange={handleChange1}
          iconsAfter={<InputIcon text="Icon after" />}
        />
        <Desc>Поле ввода с двумя иконками:</Desc>
        <TextInput
          {...props}
          containerRef={informerInput2Ref}
          value={localValue2}
          placeholder={placeholder}
          onChange={handleChange2}
          iconsAfter={
            <>
              <InputIcon text="First icon after" />
              <InputIcon text="Second icon after" />
            </>
          }
        />
        <Desc>Поле ввода с иконкой слева:</Desc>
        <TextInput
          {...props}
          containerRef={informerInput3Ref}
          value={localValue3}
          placeholder={placeholder}
          onChange={handleChange3}
          iconsBefore={<InputIcon text="Icon before" />}
        />
      </DisplayContainer>
    </ThemeProvider>
  );
};