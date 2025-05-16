import styled from 'styled-components';
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

const Visible = styled.span`
  color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
  transition: color 0.3s ease-in-out;
`;

const AdditionalText = styled(Visible)`
  user-select: none;
  -webkit-user-select: none;
  pointer-events: none;
`;
const InputValue = styled.span<{ $isTmpValue?: boolean }>`
  visibility: hidden;
  transition: color 0.3s ease-in-out;
`;

const InputLineContainer = styled.div`
  text-align: start;
  width: 100%;
  display: flex;
  overflow: hidden;
  position: relative;

  &:focus-within ${Visible} {
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

export type InputLineProps = JSX.IntrinsicElements['input'] & {
  dataPlaceholder?: string;
  tmpValue?: string;
  prefix?: string;
  suffix?: string;
};

export const InputLine = forwardRef<HTMLInputElement, InputLineProps>(
  ({ className, dataPlaceholder, tmpValue, prefix, suffix, ...inputProps }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const visibleRef = useRef<HTMLSpanElement>(null);

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
      const visNode = visibleRef.current;

      function oninput(this: HTMLInputElement) {
        const { value } = this;
        const len = value.length;

        if (visNode) {
          if (typeof placeholder === 'string' && placeholder.length > 0 && len == 0) {
            visNode.innerHTML = '';
          } else {
            visNode.innerHTML = dataPlaceholder?.substring(len) || '';
          }
        }
      }

      if (typeof dataPlaceholder === 'string' && inputNode && visNode) {
        inputNode.addEventListener('input', oninput);

        return () => inputNode.removeEventListener('input', oninput);
      }
      // inputProps.value inputProps.defaultValue важно, изменение не приводит к триггеру события input
    }, [dataPlaceholder, placeholder, inputProps.value, inputProps.defaultValue, tmpValue]);

    const containerProps = { className, onFocus: handleContainerFocus, tabIndex: -1 };

    return (
      <InputLineContainer {...containerProps}>
        {prefix && (inputProps.value !== '' || tmpValue) && (
          <AdditionalTextWrapper>
            <AdditionalText>{prefix}</AdditionalText>
            <AdditionalText> </AdditionalText>
          </AdditionalTextWrapper>
        )}
        <InputContainer>
          <MaskBox>
            <InputValue>{isTmpValue ? tmpValue : inputProps.value}</InputValue>
            <Visible ref={visibleRef}></Visible>
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
