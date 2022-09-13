import styled, { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import { MenuDimensions } from '#src/components/Menu/index';

export const MenuActionsPanel = styled.div<{
  dimension: MenuDimensions;
  menuActionsPanelCssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}>`
  padding: ${(p) => (p.dimension === 's' ? '10px 12px' : '12px 16px')};

  ${(p) => p.menuActionsPanelCssMixin}
`;
