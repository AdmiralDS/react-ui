import styled from 'styled-components';
import { smallGroupBorderRadius } from '#src/components/themes/borderRadius';
import { typography } from '#src/components/Typography';

export const Pill = styled.div`
  display: flex;
  border-radius: var(--admiral-border-radius-Small, ${(p) => smallGroupBorderRadius(p.theme.shape)});
  ${typography['Caption/Caption 1']}
  padding: 0 4px;
  height: 16px;
  gap: 4px;
  cursor: pointer;
`;

Pill.displayName = 'Pill';

export const Pills = styled.div`
  display: flex;
  overflow: hidden;
  flex-wrap: wrap;
  gap: 4px;
`;

Pills.displayName = 'Pills';
