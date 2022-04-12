import { css } from 'styled-components';

export const shadowClickableActiveMixin = css`
  box-shadow: 0 2px 4px rgba(138, 150, 168, 0.4), 0px -2px 2px rgba(138, 150, 168, 0.08);
`;

export const shadowClickableDefaultMixin = css`
  box-shadow: 0 4px 8px rgba(138, 150, 168, 0.4), 0px -2px 4px rgba(138, 150, 168, 0.08);
`;

export const shadowNonClickableMixin = css`
  box-shadow: 0 4px 16px rgba(138, 150, 168, 0.4), 0 0 6px rgba(138, 150, 168, 0.08);
`;

export const shadowClickableHoverMixin = css`
  box-shadow: 0 8px 16px rgba(138, 150, 168, 0.4), 0px -2px 8px rgba(138, 150, 168, 0.08);
`;
