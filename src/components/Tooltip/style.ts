import styled from 'styled-components';
import { PositionInPortal } from '#src/components/PositionInPortal';
import { typography } from '#src/components/Typography';
import { smallGroupBorderRadius } from '#src/components/themes/borderRadius';
import type { TooltipDimension } from '#src/components/Tooltip';

const TOOLTIP_PADDING_M = '4px 8px';
const TOOLTIP_PADDING_S = '2px 6px';

export const TooltipWrapper = styled.div`
  box-sizing: border-box;
  opacity: 0;
  transition-delay: 200ms;
  transition-property: opacity;
  align-self: center;
  width: max-content;
  min-width: max-content;
  pointer-events: initial;
`;

export const TooltipContainer = styled.div<{ $dimension?: TooltipDimension }>`
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.color['Neutral/Neutral 80']};
  ${(p) => (p.$dimension === 'm' ? typography['Body/Body 2 Short'] : typography['Caption/Caption 1'])}
  color: ${({ theme }) => theme.color['Neutral/Neutral 00']};
  border-radius: ${(p) => smallGroupBorderRadius(p.theme.shape)};
  ${(props) => props.theme.shadow['Shadow 04']}
  padding: ${(p) => (p.$dimension === 'm' ? TOOLTIP_PADDING_M : TOOLTIP_PADDING_S)};
  max-width: min(488px, calc(100vw - 16px));
  overflow-wrap: break-word;
`;

export const FakeTarget = styled.div`
  pointer-events: none;
  height: 100%;
  width: 100%;
  flex: 0 0 auto;
`;

export const Portal = styled(PositionInPortal)<{ $flexDirection?: any }>`
  display: flex;
  flex-wrap: nowrap;
  ${({ $flexDirection }) => ($flexDirection ? `flex-direction: ${$flexDirection};` : '')}
  z-index: ${({ theme }) => theme.zIndex.tooltip};
`;
