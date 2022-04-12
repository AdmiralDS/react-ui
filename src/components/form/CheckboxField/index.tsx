import * as React from 'react';
import styled, { css } from 'styled-components';
import { typography } from '#/components/Typography';
import type { CheckBoxProps } from '#/components/Checkbox';
import { Checkbox } from '#/components/Checkbox';
import type { CheckboxDimension } from '#/components/Checkbox/CheckboxDimension';

export interface CheckboxFieldProps extends Omit<CheckBoxProps, 'children'> {
  /** Текст будет виден ниже компонента */
  extraText?: React.ReactNode;

  /** Текст или компонент для рендеринга лейбла */
  children?: React.ReactNode;
}

export const width = css<{ dimension: CheckboxDimension }>`
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

export const height = css<{ dimension: CheckboxDimension }>`
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

const PositionedCheckbox = styled(Checkbox)`
  position: absolute;
  top: 2px;
  left: 2px;
`;

const Label = styled.label<{
  dimension: CheckboxDimension;
  disabled?: boolean;
}>`
  display: inline-block;
  position: relative;
  padding-top: 2px;
  padding-bottom: 2px;

  padding-left: ${(props) => (props.dimension === 's' ? 28 : 32)}px;

  ${(props) => (props.dimension === 's' ? typography['Additional/XS'] : typography['Additional/M'])}
  fieldset[data-dimension='s'] & {
    padding-left: 28px;
    ${typography['Additional/XS']}
  }

  color: ${(props) => (props.disabled ? props.theme.color.text.tertiary : props.theme.color.text.primary)};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};

  fieldset:disabled & {
    color: ${(props) => props.theme.color.text.tertiary};
    cursor: default;
  }
`;

const ExtrasContainer = styled.div<{
  dimension: CheckboxDimension;
}>`
  padding-top: 4px;

  ${(props) => (props.dimension === 's' ? typography['Caption/XS'] : typography['Additional/XS'])}
  fieldset[data-dimension='s'] & {
    ${typography['Caption/XS']}
  }

  color: ${(props) => props.theme.color.text.secondary};
`;

export const CheckboxField = React.forwardRef<HTMLInputElement, CheckboxFieldProps>(
  ({ extraText, className, children, dimension = 'm', ...props }, ref) => {
    return (
      <Label className={className} dimension={dimension} disabled={props.disabled}>
        <PositionedCheckbox dimension={dimension} ref={ref} {...props} />
        {children}
        {extraText && <ExtrasContainer dimension={dimension} children={extraText} />}
      </Label>
    );
  },
);
