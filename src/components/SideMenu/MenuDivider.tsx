import { memo, useRef } from 'react';
import styled from 'styled-components';
import { Divider } from '#src/components/Divider';

import { Label } from './components/Label';
import { useSideMenuContext } from './contexts';
import type { SideMenuDimension, SideMenuDividerNode } from './types';
import { ItemWrapper } from './style';

const DividerWrapper = styled.div<{
  $dimension: SideMenuDimension;
  $hasLabel: boolean;
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
`;

export const MenuDivider = memo(({ label }: SideMenuDividerNode) => {
  const { dimension, visibleTooltip, tooltipCssMixin } = useSideMenuContext();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const hasLabel = Boolean(label);

  return (
    <ItemWrapper role="separator">
      <DividerWrapper ref={containerRef} role="separator" $dimension={dimension} $hasLabel={hasLabel}>
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
    </ItemWrapper>
  );
});
