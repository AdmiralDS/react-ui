import styled, { css, useTheme } from 'styled-components';
import type { InputHTMLAttributes } from 'react';
import { useEffect, useRef, useState } from 'react';
import * as React from 'react';
import { typography } from '#src/components/Typography';
import { refSetter } from '#src/components/common/utils/refSetter';
import { LIGHT_THEME } from '#src/components/themes';

type InputDimension = 's' | 'l';

export interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Делает высоту компонента больше или меньше обычной */
  dimension?: InputDimension;
  collapsed?: boolean;
  opened?: boolean;
  locale?: {
    inputPlaceholder?: string;
  };
}

const collapsedMixin = css<{ $dimension?: InputDimension }>`
  max-width: ${({ $dimension }) => ($dimension === 's' ? '240px' : '276px')};
  overflow: hidden;
  white-space: nowrap;
  z-index: 1;
  &::after {
    background-color: var(--admiral-color-Neutral_Neutral20, ${(p) => p.theme.color['Neutral/Neutral 20']});
  }
`;

const InputWrapper = styled.div<{ $dimension?: InputDimension; $collapsed?: boolean; $visibleInput?: boolean }>`
  display: flex;
  flex: 1 0 auto;
  flex: ${({ $visibleInput }) => ($visibleInput ? '1 0 auto' : '0 0 auto')};
  height: 100%;
  position: relative;
  background-color: transparent;
  align-items: center;
  padding-right: 4px;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: calc(100% - 4px);
    height: 2px;
    background-color: ${({ theme, $visibleInput }) =>
      $visibleInput ? `var(--admiral-color-Primary_Primary60Main, ${theme.color['Primary/Primary 60 Main']})` : 'none'};
  }

  ${({ $collapsed }) => $collapsed && collapsedMixin}
`;

const StyledInput = styled.input<{ $dimension?: InputDimension; $visible?: boolean }>`
  flex-grow: 1;
  display: ${({ $visible }) => ($visible ? 'block' : 'none')};
  outline: none;
  appearance: none;
  border: none;
  background-color: transparent;
  padding: ${({ $dimension }) => ($dimension === 's' ? '0 12px' : '0 16px')};
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  box-sizing: border-box;
  width: 100%;
  text-overflow: ellipsis;
  ${(props) => (props.$dimension === 's' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])};

  &::placeholder {
    color: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  }
`;

export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ dimension = 'l', opened, children, value, locale, collapsed, ...props }, ref) => {
    const theme = useTheme() || LIGHT_THEME;
    const placeholder =
      locale?.inputPlaceholder || theme.locales[theme.currentLocale].groupActionsPane.inputPlaceholder;

    const inputRef = useRef<HTMLInputElement>(null);
    const [collapsedState, setCollapsedState] = useState<boolean>(false);

    useEffect(() => {
      setCollapsedState(!opened && !!value);
    }, [opened, value]);

    useEffect(() => {
      if (opened) inputRef?.current?.focus();
    }, [opened]);

    const visible = opened || !!value;

    return (
      <InputWrapper $collapsed={collapsedState} $visibleInput={visible} $dimension={dimension}>
        <StyledInput
          ref={refSetter(ref, inputRef)}
          {...props}
          $visible={visible}
          value={value}
          $dimension={dimension}
          placeholder={placeholder}
        />
        {children}
      </InputWrapper>
    );
  },
);
