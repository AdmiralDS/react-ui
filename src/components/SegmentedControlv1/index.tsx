import type { HTMLAttributes } from 'react';
import styled from 'styled-components';

export * from './SegmentedControlItem';

const Wrapper = styled.div`
  display: inline-flex;
  white-space: nowrap;
  &[data-appearance='secondary'] {
    & > button:not(:first-child) {
      margin-left: -1px;
    }
    button.selected + button.selected {
      box-shadow: -1px 0 var(--admiral-color-Special_StaticWhite, ${(p) => p.theme.color['Special/Static White']});
    }
  }
  &[data-appearance='tertiary'] {
    gap: 1px;
  }
  & > button:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  & > button:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  & > button:not(:first-child):not(:last-child) {
    border-radius: 0;
  }
`;

type Appearance = 'outlined' | 'filled';
type Dimension = 'xl' | 'l' | 'm' | 's';

export interface SegmentedControlv1Props extends HTMLAttributes<HTMLDivElement> {
  /** Размер компонента */
  dimension?: Dimension;
  /** Внешний вид компонента */
  appearance?: Appearance;
}

export const SegmentedControlv1 = ({
  appearance: propAppearance = 'outlined',
  dimension = 'xl',
  className = '',
  children,
  ...props
}: SegmentedControlv1Props) => {
  const appearance = propAppearance == 'outlined' ? 'secondary' : 'tertiary';
  // can use ButtonGroup
  return (
    <Wrapper
      role="group"
      data-dimension={dimension}
      data-appearance={appearance}
      className={`button-group` + className}
      {...props}
    >
      {children}
    </Wrapper>
  );
};
SegmentedControlv1.displayName = 'SegmentedControlv1';
