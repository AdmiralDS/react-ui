import styled, { css } from 'styled-components';

const getDotColor = css<{ $appearance: Appearance }>`
  ${({ theme, $appearance }) => {
    switch ($appearance) {
      case 'info':
        return theme.color['Primary/Primary 60 Main'];
      case 'error':
        return theme.color['Error/Error 60 Main'];
      case 'success':
        return theme.color['Success/Success 50 Main'];
      case 'warning':
        return theme.color['Warning/Warning 50 Main'];
      case 'attention':
        return theme.color['Attention/Attention 50 Main'];
      case 'neutral':
      default:
        return theme.color['Neutral/Neutral 50'];
    }
  }}
`;

const getDotSize = css<{ $dimension: Dimension }>`
  ${({ $dimension }) => {
    switch ($dimension) {
      case 'l':
        return 12;
      case 's':
        return 8;
      case 'xs':
        return 6;
      case 'm':
      default:
        return 10;
    }
  }}
`;

type Dimension = 'l' | 'm' | 's' | 'xs';
type Appearance = 'neutral' | 'info' | 'error' | 'success' | 'warning' | 'attention';

export const BadgeDot = styled.div<{ $dimension: Dimension; $appearance: Appearance }>`
  position: relative;
  box-sizing: border-box;
  width: ${getDotSize}px;
  height: ${getDotSize}px;
  background-color: ${getDotColor};
  border: 1px solid ${getDotColor};
  border-radius: 50%;
`;
