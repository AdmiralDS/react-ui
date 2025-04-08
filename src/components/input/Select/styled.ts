import styled, { css } from 'styled-components';
import { typography } from '#src/components/Typography';
import type { ComponentDimension } from '#src/components/input/types';
import { CHIP_OFFSET, COUNTER_WIDTH } from './constants';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';
import { parseShadow } from '#src/components/common/utils/parseShadowFromTheme';
import { skeletonMixin } from '../Container';
import { Menu } from '#src/components/Menu';
import { MenuItem } from '#src/components/Menu/MenuItem';

const getSelectValueHeight = (dimension?: ComponentDimension, multiple?: boolean) =>
  dimension === 's' && !multiple ? 20 : 24;

export const BorderedDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  pointer-events: none;
  overflow: hidden;
  min-width: 0;

  background: none;
  border-width: 1px;
  border-style: solid;
  border-radius: inherit;
`;

const ROW_HEIGHT_S = 20;
const ROW_HEIGHT_M = 24;

const getRowHeight = (dimension?: ComponentDimension) => (dimension === 's' ? ROW_HEIGHT_S : ROW_HEIGHT_M);

const rowHeightStyle = css<{
  $dimension?: ComponentDimension;
  $multiple?: boolean;
  $opened?: boolean;
  $minRowCount?: number;
  $maxRowCount?: number;
  $idleHeight: 'full' | 'fixed';
}>`
  min-height: ${({ $multiple, $minRowCount, $dimension }) => {
    if (!$multiple || !$minRowCount) return 'auto';

    return `${getRowHeight($dimension) * $minRowCount + ($minRowCount - 1) * 4}px`;
  }};

  max-height: ${({ $multiple, $maxRowCount, $opened, $idleHeight, $dimension }) => {
    if (!$multiple) return 'none';

    if (!$maxRowCount) {
      return !$opened && $idleHeight === 'fixed' ? `${getRowHeight($dimension)}px` : 'none';
    }

    return `${getRowHeight($dimension) * $maxRowCount + ($maxRowCount - 1) * 4}px`;
  }};
`;

const chipsShiftStyle = css`
  > * {
    margin-left: ${`-${COUNTER_WIDTH + CHIP_OFFSET}px`};
  }

  padding-left: ${`${COUNTER_WIDTH + CHIP_OFFSET}px`};
`;

export const ValueWrapper = styled.div<{
  $dimension?: ComponentDimension;
  $multiple?: boolean;
  $minRowCount?: number;
  $maxRowCount?: number;
  $idleHeight: 'full' | 'fixed';
  $isEmpty?: boolean;
  $opened?: boolean;
}>`
  flex: 1 1 auto;
  display: flex;
  overflow: hidden;

  ${({ $multiple, $isEmpty }) => $multiple && !$isEmpty && chipsShiftStyle}

  gap: 4px;
  flex-wrap: ${({ $multiple }) => ($multiple ? 'wrap' : 'unset')};
  align-items: center;
  align-content: flex-start;

  ${(props) => (props.$dimension === 's' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])}
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});

  ${rowHeightStyle}
  [data-disabled='true'] &&& {
    color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
  }
`;

export const StringValueWrapper = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ieFixes = css`
  ::-ms-clear,
  ::-ms-reveal {
    display: none;
  }
`;

export const Input = styled.input<{ $dimension?: ComponentDimension; $isMultiple?: boolean }>`
  outline: none;
  appearance: none;

  box-sizing: border-box;
  flex: 1 1 auto;
  width: 1px;
  border: none;
  background: transparent;
  text-overflow: ellipsis;
  padding: 0;

  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});

  ${({ $dimension }) => ($dimension === 's' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])}
  &::placeholder {
    color: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  }

  &:read-only {
    cursor: inherit;
  }

  &:disabled,
  &:disabled::placeholder {
    cursor: inherit;
    color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
  }

  [data-disable-copying] & {
    user-select: none;
    pointer-events: none;
  }

  height: ${({ $dimension, $isMultiple }) => `${getSelectValueHeight($dimension, $isMultiple)}px`};

  ${ieFixes};
`;

const disableEventMixin = css`
  pointer-events: none;
  cursor: default;
`;

const disabledStyle = css`
  && > *:not(${ValueWrapper}) {
    pointer-events: none;
  }

  & ${BorderedDiv} {
    border-color: transparent;
  }
`;

const focusedStyle = css`
  ${BorderedDiv} {
    border-width: 2px;
  }
`;

export const IconPanel = styled.div<{ $multiple?: boolean; $dimension?: ComponentDimension }>`
  flex: 0 0 auto;

  display: flex;
  align-items: center;

  padding: ${({ $dimension, $multiple }) => ($dimension === 's' && $multiple ? '2px 0' : '0')};

  & > * {
    margin-left: 8px;
    display: block;
    width: ${({ $dimension }) => ($dimension === 's' ? 20 : 24)}px;
    height: ${({ $dimension }) => ($dimension === 's' ? 20 : 24)}px;
  }

  [data-disabled='true'] &&& {
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
    }
  }
`;

export const SelectWrapper = styled.div<{
  disabled?: boolean;
  $readonly?: boolean;
  $isLoading?: boolean;
  $focused: boolean;
  $multiple: boolean;
  $dimension?: ComponentDimension;
  $skeleton?: boolean;
}>`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: ${(p) => (p.$multiple ? 'flex-start' : 'center')};
  cursor: ${({ disabled, $readonly, $isLoading }) =>
    disabled ? 'not-allowed' : $readonly || $isLoading ? 'default' : 'pointer'};

  padding: ${({ $dimension, $multiple }) => {
    switch ($dimension) {
      case 'xl':
        return '16px 16px';
      case 's':
        return $multiple ? '4px 12px' : '6px 12px';
      default:
        return '8px 16px';
    }
  }};

  background: ${({ theme, disabled, $readonly }) =>
    disabled || $readonly
      ? `var(--admiral-color-Neutral_Neutral10, ${theme.color['Neutral/Neutral 10']})`
      : `var(--admiral-color-Neutral_Neutral00, ${theme.color['Neutral/Neutral 00']})`};

  ${({ disabled, $readonly }) => ($readonly || disabled ? disabledStyle : '')};
  ${({ $focused, $readonly, $isLoading }) => ($focused && !$readonly && !$isLoading ? focusedStyle : '')};

  & ${BorderedDiv} {
    border-color: ${(p) =>
      p.disabled || p.$readonly
        ? 'transparent'
        : p.$focused && !p.$isLoading
          ? `var(--admiral-color-Primary_Primary60Main, ${p.theme.color['Primary/Primary 60 Main']})`
          : `var(--admiral-color-Neutral_Neutral40, ${p.theme.color['Neutral/Neutral 40']})`};
  }

  &:hover ${BorderedDiv} {
    ${(p) =>
      !p.disabled &&
      !p.$readonly &&
      !p.$focused &&
      !p.$isLoading &&
      `
      border-color: var(--admiral-color-Neutral_Neutral60, ${p.theme.color['Neutral/Neutral 60']});
    `};
  }

  &[data-status='success'] {
    ${(p) =>
      !p.disabled &&
      !p.$readonly &&
      !p.$isLoading &&
      `
      ${BorderedDiv} {
      border-color: var(--admiral-color-Success_Success50Main, ${p.theme.color['Success/Success 50 Main']});
      }
      &:hover ${BorderedDiv} {
        border-color: var(--admiral-color-Success_Success60, ${p.theme.color['Success/Success 60']});
      }
    `}
  }

  &[data-status='error'],
  &:user-invalid {
    ${(p) =>
      !p.disabled &&
      !p.$readonly &&
      !p.$isLoading &&
      `
      ${BorderedDiv} {
        border-color: var(--admiral-color-Error_Error60Main, ${p.theme.color['Error/Error 60 Main']});
      }
  
      &:hover ${BorderedDiv} {
        border-color: var(--admiral-color-Error_Error70, ${p.theme.color['Error/Error 70']});
      }
    `}
  }

  border-radius: ${(p) =>
    p.$skeleton ? 0 : `var(--admiral-border-radius-Medium, ${mediumGroupBorderRadius(p.theme.shape)})`};

  ${({ $skeleton }) => $skeleton && skeletonMixin};
  ${({ $skeleton }) => $skeleton && disableEventMixin};
`;

export const OptionWrapper = styled.div<{ $dimension?: ComponentDimension }>`
  flex: 0 0 auto;

  word-break: break-word;
  display: flex;
  align-items: center;
  padding: ${({ $dimension }) => {
    switch ($dimension) {
      case 'xl':
        return '12px 16px';
      case 's':
        return '6px 12px';
      default:
        return '8px 16px';
    }
  }};

  background-color: transparent;

  ${({ $dimension }) => {
    switch ($dimension) {
      case 'xl':
        return typography['Body/Body 1 Long'];
      case 's':
        return typography['Body/Body 2 Long'];
      default:
        return typography['Body/Body 1 Short'];
    }
  }}
`;

const ShadowContainerMixin = css`
  ${typography['Body/Body 1 Short']}
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  background-color: var(--admiral-color-Special_ElevatedBG, ${(p) => p.theme.color['Special/Elevated BG']});
  border-radius: var(--admiral-border-radius-Medium, ${(p) => mediumGroupBorderRadius(p.theme.shape)});
  box-shadow: var(--admiral-box-shadow-Shadow08, ${(p) => parseShadow(p.theme.shadow['Shadow 08'])});
  overflow: auto;
`;

export const StyledMenu = styled(Menu)`
  ${ShadowContainerMixin}
`;

export const EmptyMessageWrapper = styled.div`
  user-select: none;
`;

export const CustomOptionWrapper = styled(MenuItem)<{
  $selected?: boolean;
  $hovered?: boolean;
  $preselected?: boolean;
  $multiple?: boolean;
}>`
  justify-content: flex-start;
  flex-wrap: nowrap;
  white-space: pre-wrap;
  ${(props) =>
    props.$selected && !props.$hovered && !props.$preselected && props.$multiple && 'background-color: transparent;'}
`;
