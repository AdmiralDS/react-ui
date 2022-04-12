import styled, { FlattenInterpolation, ThemeProps, DefaultTheme } from 'styled-components';

export const AnchorWrapper = styled.div<{ anchorCssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>> }>`
  display: inline-block;
  position: relative;
  cursor: pointer;
  ${(p) => (p.anchorCssMixin ? p.anchorCssMixin : '')}
`;
