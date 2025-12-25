import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as CheckSVG } from './Success.svg';
import { ReactComponent as IndeterminateSVG } from './Minus.svg';
import type { CheckboxDimension } from './CheckboxDimension';
import { smallGroupBorderRadius } from '#src/components/themes/borderRadius';
import { keyboardKey } from '../common/keyboardKey';

export * from './CheckboxDimension';

export interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  dimension?: CheckboxDimension;
  indeterminate?: boolean;
  error?: boolean;
  hovered?: boolean;
  children?: never;
}

const width = css<{ $dimension: CheckboxDimension }>`
  width: ${({ $dimension }) => {
    switch ($dimension) {
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

const height = css<{ $dimension: CheckboxDimension }>`
  height: ${({ $dimension }) => {
    switch ($dimension) {
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
    fill: var(--admiral-color-Special_StaticWhite, ${(p) => p.theme.color['Special/Static White']});
  }
`;

const Container = styled.div<{
  $dimension: CheckboxDimension;
  $disabled?: boolean;
  $readOnly?: boolean;
}>`
  position: relative;
  box-sizing: border-box;
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : props.$readOnly ? 'default' : 'pointer')};

  fieldset:disabled && {
    cursor: not-allowed;
  }

  overflow: visible;
  ${width};
  ${height};
  flex: 0 0 auto; // при вставке во flex контейнер не должны изменяться размеры
`;

export const Background = styled.div<{ $error?: boolean }>`
  pointer-events: none;
  display: inline-block;
  position: absolute;
  margin: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: var(--admiral-border-radius-Small, ${(p) => smallGroupBorderRadius(p.theme.shape)});
  outline: 0;
  transition: background-color 0.1s ease-in;

  /* disable inheritance from parent elements */
  line-height: initial;
  background-color: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
  border: 1px solid
    ${({ $error, theme }) =>
      $error
        ? `var(--admiral-color-Error_Error60Main, ${theme.color['Error/Error 60 Main']})`
        : `var(--admiral-color-Neutral_Neutral50, ${theme.color['Neutral/Neutral 50']})`};
  & *[fill^='#'] {
    fill: var(--admiral-color-Special_StaticWhite, ${(p) => p.theme.color['Special/Static White']});
  }
`;

const actionCss = css`
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  width: calc(100% + 16px);
  height: calc(100% + 16px);
`;

const hoveredCss = css`
  &:not(:disabled) {
    &::after {
      ${actionCss};
      background-color: var(--admiral-color-Opacity_Hover, ${(p) => p.theme.color['Opacity/Hover']});
    }
  }
`;

const activeCss = css`
  &:not(:disabled) {
    &::after {
      ${actionCss};
      background-color: var(--admiral-color-Opacity_Press, ${(p) => p.theme.color['Opacity/Press']});
    }
  }
`;

const disabledCss = css`
  pointer-events: none;
  & + ${Background} {
    border: 1px solid var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
    background-color: var(--admiral-color-Neutral_Neutral10, ${(p) => p.theme.color['Neutral/Neutral 10']});
  }
`;

const disabledCheckedBackgroundCss = css`
  background-color: var(--admiral-color-Primary_Primary30, ${(p) => p.theme.color['Primary/Primary 30']});
  border: none;
  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
  }
`;

const checkedBackgroundCss = css`
  background-color: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
  border: none;
`;

const indeterminateBackgroundCss = css`
  & + ${Background} {
    ${checkedBackgroundCss}
  }
`;

const disabledIndeterminateBackgroundCss = css`
  & + ${Background} {
    ${disabledCheckedBackgroundCss}
  }
`;

const indeterminateCss = css<{ readOnly?: boolean }>`
  ${(p) => (p.readOnly ? disabledIndeterminateBackgroundCss : indeterminateBackgroundCss)}
`;

/**
 * - cостояние indeterminate должно отображаться независимо от состояния inputа (checked или unchecked)
 * - cостояние indeterminate имеет схожие стили с состоянием checked
 */

const Input = styled.input<{ $indeterminate?: boolean; $hovered?: boolean }>`
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
  border-radius: var(--admiral-border-radius-Small, ${(p) => smallGroupBorderRadius(p.theme.shape)});
  margin: 0;
  padding: 0;

  ${(props) => props.readOnly && disabledCss}

  &:checked + ${Background} {
    ${(props) => (props.readOnly ? disabledCheckedBackgroundCss : checkedBackgroundCss)}
  }
  &:checked:disabled + ${Background} {
    ${disabledCheckedBackgroundCss}
  }

  ${(p) => p.$indeterminate && indeterminateCss}

  &:not(:checked) + ${Background} {
    > * {
      display: ${(p) => (p.$indeterminate ? 'block' : 'none')};
    }
  }

  &:disabled {
    ${disabledCss}
    cursor: not-allowed;
    ${(p) => p.$indeterminate && disabledIndeterminateBackgroundCss}
  }

  ${(props) => !props.readOnly && props.$hovered && hoveredCss}

  &:hover:not(:disabled),
  &:focus:not(:disabled) + ${hoveredCss}

  &:active:not(:disabled) {
    ${activeCss}
  }

  &:focus-visible {
    outline-offset: 2px;
    outline: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']}) solid 2px;
  }
`;

export const Checkbox = forwardRef<HTMLInputElement, CheckBoxProps>(
  ({ className, dimension = 'm', disabled, readOnly, hovered, indeterminate, error, ...props }, ref) => {
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
      <Container $dimension={dimension} $disabled={disabled} $readOnly={readOnly} className={className}>
        <Input
          ref={ref}
          disabled={disabled}
          readOnly={readOnly}
          {...props}
          type="checkbox"
          $indeterminate={indeterminate}
          onKeyDown={handleKeyDown}
          data-hovered={hovered}
          $hovered={hovered}
        />
        <Background $error={error}>
          {indeterminate ? (
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
