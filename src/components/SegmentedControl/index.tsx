import type { FC, FieldsetHTMLAttributes } from 'react';
import styled from 'styled-components';

export * from './SegmentedControlItem';

const FieldSetContainer = styled.fieldset`
  display: inline-flex;
  flex-wrap: nowrap;
  border: none;
  padding: 0;

  &[data-appearance='outlined'] {
    & > label:not(:first-child) {
      margin-left: -1px;
    }
    label:has(input:checked) + label:has(input:checked) {
      box-shadow: -1px 0 var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
    }
  }
  &[data-appearance='filled'] {
    gap: 1px;
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

type Dimension = 'xl' | 'l' | 'm' | 's';
type Appearance = 'outlined' | 'filled';

// Согласно дизайну в компоненте SegmentedControl (также как в TabMenu и ContentSwitcher)
// нет состояния disabled для всего компонента

export interface SegmentedControlProps extends Omit<FieldsetHTMLAttributes<HTMLFieldSetElement>, 'disabled'> {
  /** Размер компонента */
  dimension?: Dimension;
  /** Внешний вид компонента */
  appearance?: Appearance;
}

export const SegmentedControl: FC<SegmentedControlProps> = ({
  children,
  dimension = 'xl',
  appearance = 'outlined',
  ...props
}) => {
  return (
    <FieldSetContainer role="group" data-appearance={appearance} data-dimension={dimension} {...props}>
      {children}
    </FieldSetContainer>
  );
};

SegmentedControl.displayName = 'SegmentedControl';
