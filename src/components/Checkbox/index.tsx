import type { InputHTMLAttributes } from 'react';
import * as React from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as CheckSVG } from './Success.svg';
import { ReactComponent as IndeterminateSVG } from './Minus.svg';
import type { CheckboxDimension } from './CheckboxDimension';

export interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  dimension?: CheckboxDimension;
  indeterminate?: boolean;
  error?: boolean;
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
  & *[fill^='#'] {
    fill: ${({ theme }) => theme.color.text.staticWhite};
  }
`;

const Indeterminate = styled(IndeterminateSVG)`
  pointer-events: none;
  & *[fill^='#'] {
    fill: ${({ theme }) => theme.color.text.staticWhite};
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
  border-radius: 4px;
  outline: 0;
  transition: background 0.1s ease-in;

  /* disable inheritance from parent elements */
  line-height: initial;
  background-color: ${({ theme }) => theme.color.background.primary};
  border: 1px solid ${({ error, theme }) => (error ? theme.color.status.danger : theme.color.text.secondary)};
`;

const Input = styled.input<{ indeterminate?: boolean }>`
  appearance: none;
  ::-ms-check {
    display: none;
  }
  width: calc(100% + 2px);
  height: calc(100% + 2px);

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  box-sizing: border-box;
  cursor: pointer;
  border-radius: 5px;
  margin: 0;
  padding: 0;

  :disabled {
    pointer-events: none;
  }

  &:checked + ${Background} {
    background-color: ${({ theme }) => theme.color.basic.primary};
    border: none;
  }

  &:not(:checked) + ${Background} {
    background-color: ${({ theme, indeterminate }) => indeterminate && theme.color.basic.primary};
    border: ${({ indeterminate }) => indeterminate && 'none'};
    > * {
      display: ${(p) => (p.indeterminate ? 'block' : 'none')};
    }
  }

  &:not(:checked):focus + ${Background}, &:not(:disabled):not(:checked):hover + ${Background} {
    background-color: ${({ theme, indeterminate }) =>
      indeterminate ? theme.color.basic.hover : theme.color.background.secondary};
    border: ${(p) => (p.indeterminate ? 'none' : `1px solid ${p.theme.color.basic.hover}`)};
  }

  &:checked:focus + ${Background}, &:not(:disabled):checked:hover + ${Background} {
    background-color: ${({ theme }) => theme.color.basic.hover};
    border: none;
  }

  &:not(:checked):disabled + ${Background} {
    background-color: ${({ theme }) => theme.color.background.primary};
    border: 1px solid ${({ theme }) => theme.color.basic.disable};
  }

  &:disabled + ${Background} {
    background-color: ${({ theme }) => theme.color.basic.disable};
    border: none;
  }

  &:focus-visible {
    outline-offset: 2px;
    outline: ${(p) => p.theme.color.basic.hover} solid 2px;
  }
`;

export const Checkbox = React.forwardRef<HTMLInputElement, CheckBoxProps>(
  ({ className, dimension = 'm', ...props }, ref) => {
    return (
      <Container dimension={dimension} className={className}>
        <Input ref={ref} {...props} type="checkbox" indeterminate={props.indeterminate} />
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
