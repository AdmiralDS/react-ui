import * as React from 'react';
import styled, { css } from 'styled-components';
import { typography } from '#src/components-ver2/Typography';

type Dimension = 'm' | 's';
type Appearance =
  | 'light'
  | 'info'
  | 'warning'
  | 'success'
  | 'error'
  | 'grey'
  | 'dark'
  | 'lightInactive'
  | 'lightDisable'
  | 'white'
  | 'whiteInactive'
  | 'whiteDisable'
  | 'whiteBlue';

const background = css<{ appearance: Appearance }>`
  background: ${({ appearance, theme }) => {
    switch (appearance) {
      case 'info':
        return theme.color['Primary/Primary 60 Main'];
      case 'warning':
        return theme.color['Warning/Warning 50 Main'];
      case 'success':
        return theme.color['Success/Success 50 Main'];
      case 'error':
        return theme.color['Error/Error 60 Main'];
      case 'grey':
        return theme.color['Neutral/Neutral 50'];
      case 'dark':
        return theme.color['Neutral/Neutral 80'];
      case 'whiteBlue':
        return theme.color['Special/Static White'];
      case 'white':
      case 'whiteInactive':
      case 'whiteDisable':
        return theme.color['Neutral/Neutral 00'];
      case 'light':
      case 'lightInactive':
      case 'lightDisable':
      default:
        return theme.color['Neutral/Neutral 10'];
    }
  }};
`;

const color = css<{ appearance: Appearance }>`
  color: ${({ appearance, theme }) => {
    switch (appearance) {
      case 'info':
      case 'warning':
      case 'success':
      case 'error':
      case 'grey':
        return theme.color['Special/Static White'];
      case 'dark':
        return theme.color['Neutral/Neutral 00'];
      case 'whiteBlue':
        return theme.color['Primary/Primary 60 Main'];
      case 'lightInactive':
      case 'whiteInactive':
        return theme.color['Neutral/Neutral 50'];
      case 'whiteDisable':
      case 'lightDisable':
        return theme.color['Neutral/Neutral 30'];
      case 'white':
      case 'light':
      default:
        return theme.color['Neutral/Neutral 90'];
    }
  }};
`;

export const BadgeComponent = styled.div<{ dimension: Dimension; appearance: Appearance }>`
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ dimension }) => (dimension === 's' ? '0 5px' : '0 7px')};
  height: ${({ dimension }) => (dimension === 's' ? '16px' : '20px')};
  border-radius: ${({ dimension }) => (dimension === 's' ? '8px' : '10px')};
  ${({ dimension }) => (dimension === 's' ? typography['Caption/Caption 1'] : typography['Body/Body 2 Long'])}
  ${background}
  ${color}
  user-select: none;
`;

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Размер компонента */
  dimension?: Dimension;
  /** Внешний вид компонента */
  appearance?: Appearance;
}

export const Badge: React.FC<BadgeProps> = ({ children, dimension = 'm', appearance = 'light', ...props }) => {
  const ariaLabel = `Количество ${children}`;
  return (
    <BadgeComponent dimension={dimension} appearance={appearance} aria-label={ariaLabel} {...props}>
      {children}
    </BadgeComponent>
  );
};

Badge.displayName = 'Badge';
