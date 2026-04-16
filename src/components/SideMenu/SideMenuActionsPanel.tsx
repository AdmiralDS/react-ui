import styled, { type css } from 'styled-components';
import type { SideMenuDimension } from './types';

const ActionsPanelDiv = styled.div<{
  $dimension: SideMenuDimension;
  $menuActionsPanelCssMixin?: ReturnType<typeof css>;
}>`
  padding: ${(p) => (p.$dimension === 'm' ? '10px 12px' : '12px 16px')};
  ${(p) => p.$menuActionsPanelCssMixin}
`;

export interface SideMenuActionsPanelProps {
  dimension: SideMenuDimension;
  menuActionsPanelCssMixin?: ReturnType<typeof css>;
  children: React.ReactNode;
}

export const SideMenuActionsPanel = ({ dimension, menuActionsPanelCssMixin, ...props }: SideMenuActionsPanelProps) => {
  return <ActionsPanelDiv {...props} $dimension={dimension} $menuActionsPanelCssMixin={menuActionsPanelCssMixin} />;
};
