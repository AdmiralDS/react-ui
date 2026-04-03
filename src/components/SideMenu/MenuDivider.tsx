import { memo } from 'react';

import { Divider } from '../Divider';
import { LabelDivider, WrapperDivider } from './styles';

import { useSideMenuContext } from './contexts';

import type { SideMenuDividerNode } from './types';

export const SideMenuDivider = memo(({ label }: SideMenuDividerNode) => {
  const ctx = useSideMenuContext();

  const simple = !label;

  return (
    <WrapperDivider $dimension={ctx.dimension} $simple={simple}>
      <Divider dimension="s" orientation="horizontal" />
      {label && <LabelDivider>{label}</LabelDivider>}
    </WrapperDivider>
  );
});
