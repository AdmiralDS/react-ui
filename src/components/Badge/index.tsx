import * as React from 'react';
import styled, { css, useTheme } from 'styled-components';
import { LIGHT_THEME } from '#src/components/themes';
import { typography } from '#src/components/Typography';

type Dimension = 'm' | 's';
export type BadgeAppearance =
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

const background = css<{ appearance: BadgeAppearance }>`
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

const color = css<{ appearance: BadgeAppearance }>`
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

export const BadgeComponent = styled.div<{ dimension: Dimension; appearance: BadgeAppearance }>`
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
  appearance?: BadgeAppearance;
  /** Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
   * по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме
   **/
  locale?: {
    /** Атрибут aria-label, описывающий количественное значение, отображаемое компонентом Badge */
    amountAriaLabel?: string;
  };
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ children, dimension = 'm', appearance = 'light', locale, ...props }, ref) => {
    const theme = useTheme() || LIGHT_THEME;
    const amountText = locale?.amountAriaLabel || theme.locales[theme.currentLocale].badge.amountAriaLabel;
    return (
      <BadgeComponent
        ref={ref}
        dimension={dimension}
        appearance={appearance}
        aria-label={`${amountText} ${children}`}
        {...props}
      >
        {children}
      </BadgeComponent>
    );
  },
);

Badge.displayName = 'Badge';
