import { useRef } from 'react';
import styled, { type css } from 'styled-components';
import { Divider } from '#src/components/Divider';
import type { PolymorphicComponentPropsWithRef } from '#src/components/common/polymorphicProps';
import { fixedForwardRef } from '#src/components/common/fixedForwardRef';
import { refSetter } from '#src/components/common/utils/refSetter';

import type { SideMenuDimension, SideMenuDividerRenderProps } from '../types';
import { Label } from './Label';

const DividerWrapper = styled.div<{
  $dimension: SideMenuDimension;
  $hasLabel: boolean;
  $dividerCssMixin?: ReturnType<typeof css>;
}>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: ${({ $dimension, $hasLabel }) =>
    $dimension === 'l'
      ? $hasLabel
        ? '8px 16px 5px 16px'
        : '8px 16px 7px 16px'
      : $hasLabel
        ? '6px 12px 3px 12px'
        : '6px 12px 5px 12px'};
  color: var(--admiral-color-Neutral_Neutral50, ${({ theme }) => theme.color['Neutral/Neutral 50']});
  ${(p) => p.$dividerCssMixin}
`;

export interface SideMenuDividerProps extends Omit<SideMenuDividerRenderProps, 'type'> {
  /** CSS миксин, созданный с помощью styled css, для переопределения стилей компонента */
  dividerCssMixin?: ReturnType<typeof css>;
}

export type SideMenuDividerPolymorphicProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<
  C,
  SideMenuDividerProps
>;
export type SideMenuDividerComponentType = (<C extends React.ElementType = 'div'>(
  props: SideMenuDividerPolymorphicProps<C>,
) => ReturnType<typeof DividerWrapper>) & {
  displayName?: string | undefined;
};

export const SideMenuDivider: SideMenuDividerComponentType = fixedForwardRef(
  ({ label, dimension, visibleTooltip, tooltipCssMixin, dividerCssMixin, ...props }, ref) => {
    const containerRef = useRef<any>(null);
    const hasLabel = Boolean(label);

    return (
      <DividerWrapper
        ref={refSetter(containerRef, ref)}
        role="separator"
        $dimension={dimension}
        $hasLabel={hasLabel}
        $dividerCssMixin={dividerCssMixin}
        {...props}
      >
        <Divider dimension="s" orientation="horizontal" />
        {label && (
          <Label
            dimension={dimension}
            label={label}
            container={containerRef.current}
            multilineView={false}
            visibleTooltip={visibleTooltip}
            tooltipCssMixin={tooltipCssMixin}
          />
        )}
      </DividerWrapper>
    );
  },
);
SideMenuDivider.displayName = 'SideMenuDivider';
