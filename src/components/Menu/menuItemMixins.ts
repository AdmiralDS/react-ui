import { css } from 'styled-components';
import { typography } from '../Typography';

export type ItemDimension = 'l' | 'm' | 's';

export const styleTextMixin = css<{ $dimension: ItemDimension }>`
  ${({ $dimension }) => ($dimension === 's' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])}
  ul[data-dimension='s'] & {
    ${typography['Body/Body 2 Long']}
  }
`;

export const colorTextMixin = css<{ $disabled?: boolean }>`
  color: ${({ theme, $disabled }) =>
    $disabled
      ? `var(--admiral-color-Neutral_Neutral30, ${theme.color['Neutral/Neutral 30']})`
      : `var(--admiral-color-Neutral_Neutral90, ${theme.color['Neutral/Neutral 90']})`};
`;

export const backgroundColor = css<{ $preselected: boolean; $selected?: boolean; $hovered?: boolean }>`
  background: ${({ theme, $selected, $preselected, $hovered }) =>
    $hovered
      ? `var(--admiral-color-Opacity_Hover, ${theme.color['Opacity/Hover']})`
      : $preselected
        ? `var(--admiral-color-Opacity_Press, ${theme.color['Opacity/Press']})`
        : $selected
          ? `var(--admiral-color-Opacity_Focus, ${theme.color['Opacity/Focus']})`
          : `var(--admiral-color-Special_ElevatedBG, ${theme.color['Special/Elevated BG']})`};
`;

export const paddings = css<{ $dimension?: ItemDimension }>`
  padding: ${({ $dimension }) => {
    switch ($dimension) {
      case 'l':
        return '12px 16px';
      case 'm':
        return '8px 16px';
      case 's':
        return '6px 12px';
      default:
        return '12px 16px';
    }
  }};
  ul[data-dimension='m'] && {
    padding: 8px 16px;
  }
  ul[data-dimension='s'] && {
    padding: 6px 12px;
  }
`;
