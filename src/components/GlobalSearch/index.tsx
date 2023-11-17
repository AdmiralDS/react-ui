import styled, { css } from 'styled-components';
import type { FC, ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import type { MenuItemProps } from '#src/components/Menu/MenuItem';
import type { ComponentDimension, ExtraProps } from '#src/components/input/types';
import { typography } from '#src/components/Typography';
import { InputBorderedDiv } from '#src/components/input/TextInput';
import { DropdownContainer } from '../DropdownContainer';

import { ReactComponent as SearchOutline } from '@admiral-ds/icons/build/system/SearchOutline.svg';

export const containerHeights = css<{ $dimension?: ComponentDimension }>`
  height: ${({ $dimension }) => {
    switch ($dimension) {
      case 'xl':
        return '56px';
      case 's':
        return '32px';
      default:
        return '40px';
    }
  }};
`;

const Container = styled.div`
  min-width: 280px;

  display: inline-flex;

  align-items: center;
  gap: 8px;
  flex: 1 0 0;
  border-radius: var(--Medium, 4px);
  border: 2px solid var(--primary-primary-60-main, #0062ff);
  background: var(--neutral-neutral-white, #fff);

  height: 40px;
  padding-left: 16px;
  ${typography['Button/Button 1']}

  &[data-dimension='xl'] {
    height: 56px;
  }

  &[data-dimension='s'] {
    height: 32px;
    padding-left: 12px;
    ${typography['Button/Button 2']}
  }
`;

const ieFixes = css`
  ::-ms-clear,
  ::-ms-reveal {
    display: none;
  }
`;

const Input = styled.input<ExtraProps>`
  outline: none;
  appearance: none;
  border-radius: inherit;

  box-sizing: border-box;
  flex: 1 1 auto;
  min-width: 10px;
  border: none;
  background: transparent;
  text-overflow: ellipsis;
  padding: 0;

  color: ${(props) => props.theme.color['Neutral/Neutral 90']};

  &&&:disabled {
    color: ${(props) => props.theme.color['Neutral/Neutral 30']};
  }

  ${(props) => (props.$dimension === 's' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])}
  &::placeholder {
    color: ${(props) => props.theme.color['Neutral/Neutral 50']};
  }

  &:disabled::placeholder {
    color: ${(props) => props.theme.color['Neutral/Neutral 30']};
  }

  [data-disable-copying] & {
    user-select: none;
    pointer-events: none;
  }

  &&&:invalid + ${InputBorderedDiv} {
    border: 1px solid ${(props) => props.theme.color['Error/Error 60 Main']};
  }

  &&&:invalid:hover:not(:disabled) + ${InputBorderedDiv} {
    border: 1px solid ${(props) => props.theme.color['Error/Error 70']};
  }

  &&&:invalid:focus:not(:disabled) + ${InputBorderedDiv} {
    border: 2px solid ${(props) => props.theme.color['Error/Error 60 Main']};
  }

  ${ieFixes}
`;

const PrefixContainer = styled.div<{ disabled?: boolean; $dimension?: ComponentDimension }>`
  align-self: center;
  border-right: solid 1px ${(props) => props.theme.color['Neutral/Neutral 20']};
  padding-right: 8px;
  margin-right: 8px;
  ${(props) => (props.$dimension === 's' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])};
  color: ${(props) =>
    props.disabled ? props.theme.color['Neutral/Neutral 30'] : props.theme.color['Neutral/Neutral 50']};
  white-space: nowrap;
`;

const SubmitButton = styled.div`
  display: flex;
  user-select: none;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;

  background: ${(props) => props.theme.color['Primary/Primary 60 Main']};

  color: ${(props) => props.theme.color['Special/Static White']};
  &&& *[fill^='#'] {
    fill: ${({ theme }) => theme.color['Special/Static White']};
  }

  &:hover {
    cursor: pointer;
  }

  padding: 8px 16px;

  & > svg {
    width: 24px;
    height: 24px;
  }

  [data-dimension='xl'] & {
    padding: 16px 24px;
    & > svg {
      width: 24px;
      height: 24px;
    }
  }

  [data-dimension='s'] & {
    padding: 6px 12px;
    & > svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export interface RenderProps {
  value?: ReactNode;
  disabled?: boolean;
  readOnly?: boolean;
}
export type RenderPropsType<T> = {
  value: T;
};

export interface GlobalSearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Пропсы для части кнопки */
  submitButtonProps?: React.HTMLAttributes<HTMLDivElement>;

  /** Делает высоту компонента больше или меньше обычной */
  dimension?: ComponentDimension;

  /** Значение префикса */
  prefixValue?: ReactNode;

  /** Список значений префикса */
  prefixValueList?: ReactNode[];

  /** Срабатывает при выборе нового значения префикса*/
  onPrefixValueChange?: (value: ReactNode) => void;

  /** Специальный метод для рендера компонента по значению префикса */
  renderPrefixValue?: (props: RenderProps) => React.ReactNode;

  /** Специальный метод для рендера опции списка префикса по значению */
  renderPrefixOption?: (props: RenderPropsType<ReactNode> & MenuItemProps) => React.ReactNode;
}

export const GlobalSearch: FC<GlobalSearchProps> = ({
  dimension,
  placeholder,
  id,
  value,
  defaultValue,
  onChange,
  children,
  submitButtonProps = {},
  ...props
}) => {
  const [inFocus, setInFocus] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const submitButtonRef = useRef<HTMLDivElement>(null);
  const inputProps = { placeholder, id, value, defaultValue, onChange };
  useEffect(() => {
    if (inFocus) {
      const listener = (event: KeyboardEvent) => {
        if (event.code === 'Enter' || event.code === 'NumpadEnter') {
          event.preventDefault();
          event.stopPropagation();
          if (submitButtonRef.current) {
            submitButtonRef.current.click();
          }
        }
      };
      document.addEventListener('keydown', listener);
      return () => {
        document.removeEventListener('keydown', listener);
      };
    }
  }, [inFocus]);
  return (
    <Container
      data-dimension={dimension}
      {...props}
      ref={containerRef}
      onFocus={() => setInFocus(true)}
      onBlur={() => setInFocus(false)}
    >
      <Input {...inputProps} />
      <SubmitButton
        {...submitButtonProps}
        children={submitButtonProps.children ?? <SearchOutline />}
        ref={submitButtonRef}
      />
      <DropdownContainer alignSelf="stretch" targetRef={containerRef} children={children} />
    </Container>
  );
};
