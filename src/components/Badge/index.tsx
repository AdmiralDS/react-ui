import * as React from 'react';
import styled, { css, useTheme } from 'styled-components';
import { LIGHT_THEME } from '#src/components/themes';
import { typography } from '#src/components/Typography';
import type { ButtonAppearance, ButtonProps } from '#src/components/Button';
import type { SegmentedControlProps } from '#src/components/SegmentedControl';

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

const background = css<{ $appearance: BadgeAppearance }>`
  background: ${({ $appearance, theme }) => {
    switch ($appearance) {
      case 'info':
        return `var(--admiral-color-Primary_Primary60Main, ${theme.color['Primary/Primary 60 Main']})`;
      case 'warning':
        return `var(--admiral-color-Warning_Warning50Main, ${theme.color['Warning/Warning 50 Main']})`;
      case 'success':
        return `var(--admiral-color-Success_Success50Main, ${theme.color['Success/Success 50 Main']})`;
      case 'error':
        return `var(--admiral-color-Error_Error60Main, ${theme.color['Error/Error 60 Main']})`;
      case 'grey':
        return `var(--admiral-color-Neutral_Neutral50, ${theme.color['Neutral/Neutral 50']})`;
      case 'dark':
        return `var(--admiral-color-Neutral_Neutral80, ${theme.color['Neutral/Neutral 80']})`;
      case 'whiteBlue':
        return `var(--admiral-color-Special_StaticWhite, ${theme.color['Special/Static White']})`;
      case 'white':
      case 'whiteInactive':
      case 'whiteDisable':
        return `var(--admiral-color-Neutral_Neutral00, ${theme.color['Neutral/Neutral 00']})`;
      case 'light':
      case 'lightInactive':
      case 'lightDisable':
      default:
        return `var(--admiral-color-Opacity_Neutral8, ${theme.color['Opacity/Neutral 8']})`;
    }
  }};
`;

const color = css<{ $appearance: BadgeAppearance }>`
  color: ${({ $appearance, theme }) => {
    switch ($appearance) {
      case 'info':
      case 'warning':
      case 'success':
      case 'error':
      case 'grey':
        return `var(--admiral-color-Special_StaticWhite, ${theme.color['Special/Static White']})`;
      case 'dark':
        return `var(--admiral-color-Neutral_Neutral00, ${theme.color['Neutral/Neutral 00']})`;
      case 'whiteBlue':
        return `var(--admiral-color-Primary_Primary60Main, ${theme.color['Primary/Primary 60 Main']})`;
      case 'lightInactive':
      case 'whiteInactive':
        return `var(--admiral-color-Neutral_Neutral50, ${theme.color['Neutral/Neutral 50']})`;
      case 'whiteDisable':
      case 'lightDisable':
        return `var(--admiral-color-Neutral_Neutral30, ${theme.color['Neutral/Neutral 30']})`;
      case 'white':
      case 'light':
      default:
        return `var(--admiral-color-Neutral_Neutral90, ${theme.color['Neutral/Neutral 90']})`;
    }
  }};
`;

export const BadgeComponent = styled.div<{ $dimension: Dimension; $appearance: BadgeAppearance }>`
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ $dimension }) => ($dimension === 's' ? '0 5px' : '0 6px')};
  height: ${({ $dimension }) => ($dimension === 's' ? '16px' : '20px')};
  border-radius: ${({ $dimension }) => ($dimension === 's' ? '8px' : '10px')};
  ${({ $dimension }) => ($dimension === 's' ? typography['Caption/Caption 1'] : typography['Body/Body 2 Long'])}
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
        $dimension={dimension}
        $appearance={appearance}
        aria-label={`${amountText} ${children}`}
        {...props}
      >
        {children}
      </BadgeComponent>
    );
  },
);

Badge.displayName = 'Badge';

interface ButtonBadgeProps extends Omit<BadgeProps, 'appearance' | 'dimension'>, Pick<ButtonProps, 'appearance'> {
  disabled?: boolean;
}

function getBadgeAppearance(appearance: ButtonAppearance, disabled: boolean) {
  switch (appearance) {
    case 'secondary':
    case 'ghost':
      if (disabled) return 'lightDisable';
      return 'info';
    case 'tertiary':
      if (disabled) return 'whiteDisable';
      return 'white';
    case 'primary':
    default:
      if (disabled) return 'whiteDisable';
      return 'whiteBlue';
  }
}

export const ButtonBadge = ({ appearance = 'primary', disabled = false, ...props }: ButtonBadgeProps) => {
  const isVisible =
    appearance === 'primary' || appearance === 'secondary' || appearance === 'tertiary' || appearance === 'ghost';
  const badgeAppearance = getBadgeAppearance(appearance, disabled);
  return isVisible ? <Badge {...props} dimension="s" appearance={badgeAppearance} /> : null;
};

interface SegmentedControlBadgeProps
  extends Omit<BadgeProps, 'appearance' | 'dimension'>,
    Pick<SegmentedControlProps, 'appearance'> {
  disabled?: boolean;
}

const SegmentedBadge = styled(Badge)<{ $disabled?: boolean }>`
  &:is(input:checked + div *) {
    background: ${(p) =>
      p.$disabled
        ? `var(--admiral-color-Neutral_Neutral00, ${p.theme.color['Neutral/Neutral 00']})`
        : `var(--admiral-color-Special_StaticWhite, ${p.theme.color['Special/Static White']})`};
    color: ${(p) =>
      p.$disabled
        ? `var(--admiral-color-Neutral_Neutral30, ${p.theme.color['Neutral/Neutral 30']})`
        : `var(--admiral-color-Primary_Primary60Main, ${p.theme.color['Primary/Primary 60 Main']})`};
  }
`;

export const SegmentedControlBadge = ({
  appearance = 'outlined',
  disabled = false,
  ...props
}: SegmentedControlBadgeProps) => {
  const badgeAppearance = disabled
    ? appearance == 'outlined'
      ? 'lightDisable'
      : 'whiteDisable'
    : appearance == 'outlined'
      ? 'info'
      : 'white';
  return <SegmentedBadge {...props} dimension="s" appearance={badgeAppearance} />;
};
