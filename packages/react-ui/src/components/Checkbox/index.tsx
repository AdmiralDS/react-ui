import type { InputHTMLAttributes } from 'react';
import * as React from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as CheckSVG } from './Success.svg';
import { ReactComponent as IndeterminateSVG } from './Minus.svg';
import type { CheckboxDimension } from './CheckboxDimension';
import { smallGroupBorderRadius } from '#src/components/themes/borderRadius';
import { keyboardKey } from '#src/components/common/keyboardKey';

export interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  dimension?: CheckboxDimension;
  indeterminate?: boolean;
  error?: boolean;
  hovered?: boolean;
  children?: never;
}

const width = css<{ dimension: CheckboxDimension }>`
  width: ${({ dimension }) => {
    switch (dimension) {
      case 'm':
        return '20px';
      case 's':
        return '16px';
      default:
        return '20px';
    }
  }};

  fieldset[data-dimension='s'] & {
    width: 16px;
  }
`;

const height = css<{ dimension: CheckboxDimension }>`
  height: ${({ dimension }) => {
    switch (dimension) {
      case 'm':
        return '20px';
      case 's':
        return '16px';
      default:
        return '20px';
    }
  }};
  fieldset[data-dimension='s'] & {
    height: 16px;
  }
`;

const Check = styled(CheckSVG)`
  pointer-events: none;
`;

const Indeterminate = styled(IndeterminateSVG)`
  pointer-events: none;
  & *[fill^='#'] {
    fill: ${({ theme }) => theme.color['Special/Static White']};
  }
`;

const Container = styled.div<{
  dimension: CheckboxDimension;
}>`
  position: relative;
  box-sizing: border-box;

  overflow: visible;
  ${width};
  ${height};
`;

export const Background = styled.div<{ error?: boolean }>`
  pointer-events: none;
  display: inline-block;
  position: absolute;
  margin: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: ${(p) => smallGroupBorderRadius(p.theme.shape)};
  outline: 0;
  transition: background 0.1s ease-in;

  /* disable inheritance from parent elements */
  line-height: initial;
  background-color: ${({ theme }) => theme.color['Neutral/Neutral 00']};
  border: 1px solid
    ${({ error, theme }) => (error ? theme.color['Error/Error 60 Main'] : theme.color['Neutral/Neutral 50'])};
  & *[fill^='#'] {
    fill: ${({ theme }) => theme.color['Special/Static White']};
  }
`;

const indeterminate = css<{ indeterminate?: boolean }>`
  &:not(:checked) + ${Background} {
    background-color: ${({ theme, indeterminate }) => indeterminate && theme.color['Primary/Primary 60 Main']};
    border: ${({ indeterminate }) => indeterminate && 'none'};
    > * {
      display: ${(p) => (p.indeterminate ? 'block' : 'none')};
    }
  }
`;

const hoveredCss = css`
  &:not(:disabled) {
    &::after {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      width: calc(100% + 16px);
      height: calc(100% + 16px);
      background-color: ${({ theme }) => theme.color['Opacity/Hover']};
    }
  }
`;

const disabledCss = css`
  pointer-events: none;
  & + ${Background} {
    border: 1px solid ${({ theme }) => theme.color['Neutral/Neutral 30']};
    background-color: ${({ theme }) => theme.color['Neutral/Neutral 10']};
  }
`;

const disabledCheckedBackgroundCss = css`
  background-color: ${({ theme }) => theme.color['Primary/Primary 30']};
  border: none;
  & *[fill^='#'] {
    fill: ${({ theme }) => theme.color['Neutral/Neutral 00']};
  }
`;

const checkedBackgroundCss = css`
  background-color: ${({ theme }) => theme.color['Primary/Primary 60 Main']};
  border: none;
`;

const Input = styled.input<{ indeterminate?: boolean; hovered?: boolean }>`
  appearance: none;
  ::-ms-check {
    display: none;
  }
  width: 100%;
  height: 100%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  box-sizing: border-box;
  cursor: pointer;
  border-radius: ${(p) => smallGroupBorderRadius(p.theme.shape)};
  margin: 0;
  padding: 0;

  ${(props) => props.readOnly && disabledCss}

  &:checked + ${Background} {
    ${(props) => (props.readOnly ? disabledCheckedBackgroundCss : checkedBackgroundCss)}
  }

  &:disabled {
    ${disabledCss};
  }

  ${(props) => !props.readOnly && props.hovered && hoveredCss}

  ${indeterminate}

  &:hover:not(:disabled),
  &:focus:not(:disabled) + ${hoveredCss}

  &:checked:disabled + ${Background} {
    ${disabledCheckedBackgroundCss}
  }

  &:focus-visible {
    outline-offset: 2px;
    outline: ${(p) => p.theme.color['Primary/Primary 60 Main']} solid 2px;
  }
`;

export const Checkbox = React.forwardRef<HTMLInputElement, CheckBoxProps>(
  ({ className, dimension = 'm', disabled, readOnly, ...props }, ref) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (readOnly) {
        const code = keyboardKey.getCode(e);
        if (code === keyboardKey[' ']) {
          e.preventDefault();
        }
      }

      props.onKeyDown?.(e);
    };

    return (
      <Container dimension={dimension} className={className}>
        <Input
          ref={ref}
          disabled={disabled}
          readOnly={readOnly}
          {...props}
          type="checkbox"
          indeterminate={props.indeterminate}
          onKeyDown={handleKeyDown}
          data-hovered={props.hovered}
        />
        <Background error={props.error}>
          {props.indeterminate ? (
            <Indeterminate aria-hidden="true" focusable="false" />
          ) : (
            <Check aria-hidden="true" focusable="false" />
          )}
        </Background>
      </Container>
    );
  },
);

Checkbox.displayName = 'Checkbox';
