import type { FC, FieldsetHTMLAttributes } from 'react';
import styled from 'styled-components';

export * from './SegmentedControlItem';

const FieldSetContainer = styled.fieldset`
  border: none;
  padding: 0;

  display: inline-flex;
  flex-wrap: wrap;

  &[data-appearance='filled'] {
    gap: 1px;
  }
  &[data-appearance='outlined'] {
    & > label:not(:first-child) {
      margin-left: -1px;
    }
    label:has(input:checked) + label:has(input:checked) {
      box-shadow: -1px 0 var(--admiral-color-Special_StaticWhite, ${(p) => p.theme.color['Special/Static White']});
    }
  }
  & > label:first-child > div {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  & > label:last-child > div {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  & > label:not(:first-child):not(:last-child) > div {
    border-radius: 0;
  }
`;

export interface SegmentedControlv2Props extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  dimension?: 'xl' | 'l' | 'm' | 's';
  /** Внешний вид кнопки */
  appearance?: 'outlined' | 'filles';
  disabled?: boolean;
}

export const SegmentedControlv2: FC<SegmentedControlv2Props> = ({
  children,
  dimension = 'xl',
  appearance = 'outlined',
  ...props
}) => {
  return (
    <FieldSetContainer
      {...props}
      data-appearance={appearance}
      data-dimension={dimension}
      data-disabled={props.disabled ? '' : undefined}
    >
      {children}
    </FieldSetContainer>
  );
};

SegmentedControlv2.displayName = 'SegmentedControlv2';
