import styled, { css } from 'styled-components';
import { typography } from '#src/components/Typography';
import type { ComponentDimension } from '#src/components/input/types';
import { CHIP_OFFSET, COUNTER_WIDTH } from './constants';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';
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

const ROW_HEIGHT = 24;

const rowHeightStyle = css<{
  $multiple?: boolean;
  $opened?: boolean;
  $minRowCount?: number;
  $maxRowCount?: number;
}>`
  min-height: ${({ $multiple, $minRowCount }) => {
    if (!$multiple || !$minRowCount) return 'none';

    return `${ROW_HEIGHT * $minRowCount + ($minRowCount - 1) * 4}px`;
  }};

  max-height: ${({ $multiple, $maxRowCount, $opened }) => {
    if (!$multiple || !$maxRowCount || $opened) return 'none';

    return `${ROW_HEIGHT * $maxRowCount + ($maxRowCount - 1) * 4}px`;
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

  ${(props) => (props.$dimension === 's' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])}
  color: ${(props) => props.theme.color['Neutral/Neutral 90']};

  ${rowHeightStyle}
  [data-disabled='true'] &&& {
    color: ${(props) => props.theme.color['Neutral/Neutral 30']};
  }
  min-height: ${(p) => (p.$dimension === 's' ? 20 : 24)}px;
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

  color: ${(props) => props.theme.color['Neutral/Neutral 90']};

  ${({ $dimension }) => ($dimension === 's' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])}
  &::placeholder {
    color: ${(props) => props.theme.color['Neutral/Neutral 50']};
  }

  &:read-only {
    cursor: inherit;
  }

  &:disabled,
  &:disabled::placeholder {
    cursor: inherit;
    color: ${(props) => props.theme.color['Neutral/Neutral 30']};
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
  ${disableEventMixin}

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
      fill: ${(props) => props.theme.color['Neutral/Neutral 30']};
    }
  }
`;

export const SelectWrapper = styled.div<{
  disabled?: boolean;
  readonly?: boolean;
  $focused: boolean;
  $multiple: boolean;
  $dimension?: ComponentDimension;
  $skeleton?: boolean;
}>`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: ${(p) => (p.$multiple ? 'flex-start' : 'center')};
  cursor: pointer;

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

  background: ${({ theme, disabled, readonly }) =>
    disabled || readonly ? theme.color['Neutral/Neutral 10'] : theme.color['Neutral/Neutral 00']};

  ${({ disabled, readonly }) => (readonly || disabled ? disabledStyle : '')};
  ${({ $focused, readonly }) => ($focused && !readonly ? focusedStyle : '')};

  & ${BorderedDiv} {
    border-color: ${(props) =>
      props.disabled || props.readonly
        ? 'transparent'
        : props.$focused
        ? props.theme.color['Primary/Primary 60 Main']
        : props.theme.color['Neutral/Neutral 40']};
  }

  &:hover ${BorderedDiv} {
    ${(props) =>
      !props.disabled &&
      !props.$focused &&
      `
      border-color: ${props.theme.color['Neutral/Neutral 60']}
    `};
  }

  &[data-status='success'] {
    ${(props) =>
      !props.disabled &&
      !props.readonly &&
      `
      ${BorderedDiv} {
      border-color: ${props.theme.color['Success/Success 50 Main']};
      }
      &:hover ${BorderedDiv} {
        border-color: ${props.theme.color['Success/Success 60']};
      }
    `}
  }

  &[data-status='error'],
  &:invalid {
    ${(props) =>
      !props.disabled &&
      !props.readonly &&
      `
      ${BorderedDiv} {
        border-color: ${props.theme.color['Error/Error 60 Main']};
      }
  
      &:hover ${BorderedDiv} {
        border-color: ${props.theme.color['Error/Error 70']};
      }
    `}
  }

  border-radius: ${(p) => (p.$skeleton ? 0 : mediumGroupBorderRadius(p.theme.shape))};

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
  background-color: ${(p) => p.theme.color['Special/Elevated BG']};
  border-radius: var(--admiral-border-radius-Medium, ${(p) => mediumGroupBorderRadius(p.theme.shape)});
  ${(p) => p.theme.shadow['Shadow 08']}
  overflow: auto;
`;

export const StyledMenu = styled(Menu)`
  ${ShadowContainerMixin}
`;

export const EmptyMessageWrapper = styled.div`
  user-select: none;
`;

export const CustomOptionWrapper = styled(MenuItem)`
  justify-content: flex-start;
  flex-wrap: nowrap;
  white-space: pre-wrap;
`;
