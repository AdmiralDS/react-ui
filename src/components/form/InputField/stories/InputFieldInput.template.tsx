import * as React from 'react';
import type { MouseEvent, ChangeEvent } from 'react';
import { useState, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Hint, InputField, InputIconButton } from '@admiral-ds/react-ui';
import type { InputFieldProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as HelpOutline } from '@admiral-ds/icons/build/service/HelpOutline.svg';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

const DisplayContainer = styled.div`
  > * {
    margin-bottom: 24px;
  }
`;

const text = `At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples
of mini units map to fluid grid column widths and row heights.`;

export const InputFieldInputTemplate = ({
  value = 'Привет',
  label = 'Label',
  themeBorderKind,
  CSSCustomProps,
  ...props
}: InputFieldProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [localValue, setValue] = useState<string>(String(value) ?? '');
  const [invalidInputValue, setInvalidInputValue] = useState<string>('Hello');
  const [visible, setVisible] = useState(false);
  const handleVisibilityChange = (isVisible: boolean) => {
    if (!isVisible) {
      setVisible(isVisible);
    }
  };
  const handleIconMouseDown = (e: MouseEvent<SVGSVGElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setVisible((prevState) => !prevState);
  };

  const informerInputRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    props.onChange?.(e);
  };

  const handleInvalidInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const invalidInputValue = e.target.value;
    setInvalidInputValue(invalidInputValue);
    props.onChange?.(e);
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <DisplayContainer>
        <InputField
          data-container-id="inputFieldIdOne"
          {...props}
          value={localValue}
          onChange={handleChange}
          label={label}
        />
        <InputField data-container-id="inputFieldIdTwo" required label="Поле необходимо заполнить" />
        <InputField
          data-container-id="inputFieldIdThree"
          readOnly
          aria-readonly
          label="Поле с атрибутом readOnly"
          defaultValue="Этот текст не редактируемый"
        />
        <InputField
          data-container-id="inputFieldIdFour"
          disabled
          aria-disabled
          label="Поле с атрибутом disabled"
          placeholder="Placeholder"
        />
        <InputField
          data-container-id="inputFieldIdFiveInvalid"
          label="Поле с ошибкой (invalid)"
          pattern="[a-z]+"
          value={invalidInputValue}
          onChange={handleInvalidInputValueChange}
        />
        <InputField
          data-container-id="inputFieldIdFive"
          status="error"
          label="Поле с ошибкой (status = error)"
          extraText="Поле не прошло валидацию, необходимо ввести корректное значение"
        />
        <InputField
          data-container-id="inputFieldIdSix"
          status="success"
          label="Поле с индикацией успеха (status = success)"
          extraText="Поле успешно прошло валидацию"
        />
        <InputField
          data-container-id="inputFieldIdSeven"
          displayClearIcon
          placeholder="идет поиск ..."
          label="Поле с иконкой загрузки"
          isLoading
        />
        <InputField
          data-container-id="inputFieldIdEight"
          label="Поле для ввода пароля (type='password')"
          type="password"
        />
        <InputField
          containerRef={informerInputRef}
          data-container-id="inputFieldIdNine"
          label="Поле с информером"
          icons={
            <Hint
              visible={visible}
              onVisibilityChange={handleVisibilityChange}
              visibilityTrigger="click"
              preventFocusSteal
              renderContent={() => text}
              targetElement={informerInputRef.current}
              anchorId="hint_target"
            >
              <InputIconButton icon={HelpOutline} onMouseDown={handleIconMouseDown} />
            </Hint>
          }
        />
      </DisplayContainer>
    </ThemeProvider>
  );
};
