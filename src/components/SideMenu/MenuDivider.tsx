import { memo } from 'react';
import styled from 'styled-components';
import { Divider } from '#src/components/Divider';

import { LabelText } from './Label';
import { useSideMenuContext } from './contexts';
import type { SideMenuDividerNode, SideMenuDimension } from './types';

const LabelDivider = styled(LabelText)`
  margin-top: 10px;
  color: var(--admiral-color-Neutral_Neutral50, ${({ theme }) => theme.color['Neutral/Neutral 50']});
`;

const Wrapper = styled.li<{ $dimension: SideMenuDimension; $hasLabel: boolean }>`
  display: flex;
  flex-direction: column;
  padding: ${({ $dimension, $hasLabel }) =>
    $dimension === 'l'
      ? $hasLabel
        ? '8px 16px 5px 16px'
        : '8px 16px 7px 16px'
      : $hasLabel
        ? '6px 12px 3px 12px'
        : '6px 12px 5px 12px'};
`;

export const SideMenuDivider = memo(({ label }: SideMenuDividerNode) => {
  const { dimension } = useSideMenuContext();
  const hasLabel = Boolean(label);

  return (
    <Wrapper role="separator" $dimension={dimension} $hasLabel={hasLabel}>
      <Divider dimension="s" orientation="horizontal" />
      {label && <LabelDivider $dimension={dimension}>{label}</LabelDivider>}
    </Wrapper>
  );
});
