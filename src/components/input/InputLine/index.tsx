import styled from 'styled-components';
import type { DataAttributes } from 'styled-components';
import { forwardRef, useEffect, useRef } from 'react';
import { refSetter } from '#src/components/common/utils/refSetter';

export const StyledInputLine = styled.input<{ $isTmpValue?: boolean }>`
  border: none;
  outline: none;
  appearance: none;
  background-image: none;
  background-color: transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  color: ${(p) =>
    p.$isTmpValue
      ? `var(--admiral-color-Neutral_Neutral30, ${p.theme.color['Neutral/Neutral 30']})`
      : `var(--admiral-color-Neutral_Neutral90, ${p.theme.color['Neutral/Neutral 90']})`};

  ::placeholder {
    color: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  }
`;

const PlaceholderValue = styled.span`
  color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
  transition: color 0.3s ease-in-out;
`;

const AdditionalText = styled(PlaceholderValue)`
  user-select: none;
  -webkit-user-select: none;
  pointer-events: none;
`;

const InvisibleInputValue = styled.span`
  visibility: hidden;
`;

const InputLineContainer = styled.div`
  text-align: start;
  width: 100%;
  display: flex;
  overflow: hidden;
  position: relative;

  &:focus-within ${PlaceholderValue} {
    color: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  }
`;

const MaskBox = styled.div`
  cursor: pointer;
  position: absolute;
  pointer-events: none;
  display: flex;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

const AdditionalTextWrapper = styled.div`
  white-space: pre;
`;

export interface InputLineProps extends React.InputHTMLAttributes<HTMLInputElement> {
  dataPlaceholder?: string;
  tmpValue?: string;
  value?: string;
  prefix?: string;
  suffix?: string;
  /** Конфиг функция пропсов для контейнера. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  containerPropsConfig?: (
    props: React.ComponentProps<typeof InputLineContainer>,
  ) => Partial<React.ComponentProps<typeof InputLineContainer> & DataAttributes>;
}

export const InputLine = forwardRef<HTMLInputElement, InputLineProps>(
  ({ dataPlaceholder, tmpValue, prefix, suffix, containerPropsConfig = () => {}, ...inputProps }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const placeholderRef = useRef<HTMLSpanElement>(null);

    const placeholder = inputProps.placeholder;
    const isTmpValue = typeof tmpValue === 'string';

    const handleContainerFocus: React.FocusEventHandler<HTMLDivElement> = (e) => {
      e.preventDefault();
      if (e.target.tagName.toLowerCase() !== 'input') {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }
    };

    useEffect(() => {
      const inputNode = inputRef.current;
      const placeholderNode = placeholderRef.current;

      function oninput(this: HTMLInputElement) {
        const { value } = this;
        const len = value.length;

        if (placeholderNode) {
          if (typeof placeholder === 'string' && placeholder.length > 0 && len == 0) {
            placeholderNode.innerHTML = '';
          } else {
            placeholderNode.innerHTML = dataPlaceholder?.substring(len) || '';
          }
        }
      }

      if (typeof dataPlaceholder === 'string' && inputNode && placeholderNode) {
        inputNode.addEventListener('input', oninput);

        return () => inputNode.removeEventListener('input', oninput);
      }
      // inputProps.value inputProps.defaultValue важно, изменение не приводит к триггеру события input
    }, [dataPlaceholder, placeholder, inputProps.value, inputProps.defaultValue, tmpValue]);

    const containerProps = { onFocus: handleContainerFocus, tabIndex: -1 };

    return (
      <InputLineContainer {...containerProps} {...containerPropsConfig(containerProps)}>
        {prefix && (inputProps.value !== '' || tmpValue) && (
          <AdditionalTextWrapper>
            <AdditionalText>{prefix}</AdditionalText>
            <AdditionalText> </AdditionalText>
          </AdditionalTextWrapper>
        )}
        <InputContainer>
          <MaskBox>
            <InvisibleInputValue>{isTmpValue ? tmpValue : inputProps.value}</InvisibleInputValue>
            <PlaceholderValue ref={placeholderRef}></PlaceholderValue>
            {suffix && (inputProps.value !== '' || tmpValue) && (
              <AdditionalTextWrapper>
                <AdditionalText> </AdditionalText>
                <AdditionalText>{suffix}</AdditionalText>
              </AdditionalTextWrapper>
            )}
          </MaskBox>
          <StyledInputLine
            ref={refSetter(ref, inputRef)}
            {...inputProps}
            $isTmpValue={isTmpValue}
            value={isTmpValue ? tmpValue : inputProps.value}
          />
        </InputContainer>
      </InputLineContainer>
    );
  },
);
