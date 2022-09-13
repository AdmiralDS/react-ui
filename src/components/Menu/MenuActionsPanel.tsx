import styled from 'styled-components';
import { MenuDimensions } from '#src/components/Menu/index';

export const MenuActionsPanel = styled.div<{ dimension: MenuDimensions }>`
  padding: ${(p) => (p.dimension === 's' ? '10px 12px' : '12px 16px')};
`;
