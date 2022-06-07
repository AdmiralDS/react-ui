import styled, { css } from 'styled-components';
import { typography } from '#src/components/Typography';
import { Dropdown as DropComponent } from '#src/components/Dropdown';
import type { ComponentDimension } from '#src/components/input/types';
import { ReactComponent as CloseOutlineSvg } from '@admiral-ds/icons/build/service/CloseOutline.svg';
import { CHIP_OFFSET, COUNTER_WIDTH } from './constants';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';

const getSelectValueHeight = (dimension?: ComponentDimension, multiple?: boolean) =>
  dimension === 's' && !multiple ? 20 : 24;

export const ClearIcon = styled(CloseOutlineSvg)`
  & *[fill^='#'] {
    fill: ${(props) => props.theme.color['Neutral/Neutral 50']};
  }

  &:hover {
    cursor: pointer;
  }

  &:hover *[fill^='#'] {
    fill: ${(props) => props.theme.color['Primary/Primary 70']};
  }
`;

export const Dropdown = styled(DropComponent)`
  padding: 8px 0;

  max-height: 256px;
  overflow: auto;

  option {
    display: none;
  }
`;

export const BorderedDiv = styled.div`
  position: absolute;
  inset: 0;
  margin: 0;
  pointer-events: none;
  overflow: hidden;
  min-width: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background: none;
  border: 1px solid ${(props) => props.theme.color['Neutral/Neutral 40']};
  border-radius: inherit;

  [data-status='error'] & {
    border: 1px solid ${(props) => props.theme.color['Error/Error 60 Main']};
  }

  [data-status='success'] & {
    border: 1px solid ${(props) => props.theme.color['Success/Success 50 Main']};
  }

  [data-read-only],
  [data-disabled='true'] & {
    border-color: transparent;
  }
`;

export const NativeSelect = styled.select`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  border: none;
  pointer-events: none;
`;

const fixHeightStyle = css<{ multiple?: boolean; dimension?: ComponentDimension }>`
  height: ${({ multiple, dimension }) => getSelectValueHeight(dimension, multiple)}px;
`;

const chipsShiftStyle = css`
  > * {
    margin-left: ${`-${COUNTER_WIDTH + CHIP_OFFSET}px`};
  }
  padding-left: ${`${COUNTER_WIDTH + CHIP_OFFSET}px`};
`;

export const ValueWrapper = styled.div<{
  dimension?: ComponentDimension;
  multiple?: boolean;
  fixHeight?: boolean;
  isEmpty?: boolean;
}>`
  flex: 1 1 auto;
  display: flex;
  overflow: hidden;

  ${({ multiple, isEmpty }) => multiple && !isEmpty && chipsShiftStyle}

  gap: 4px;
  flex-wrap: ${({ multiple }) => (multiple ? 'wrap' : 'unset')};
  align-items: center;

  ${(props) => (props.dimension === 's' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])}
  color: ${(props) => props.theme.color['Neutral/Neutral 90']};
  ${({ fixHeight }) => fixHeight && fixHeightStyle}

  [data-disabled='true'] & {
    color: ${(props) => props.theme.color['Neutral/Neutral 30']};
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

export const Input = styled.input<{ dimension?: ComponentDimension; isMultiple?: boolean }>`
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

  ${({ dimension }) => (dimension === 's' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])}

  &::placeholder {
    color: ${(props) => props.theme.color['Neutral/Neutral 50']};
  }

  &:disabled,
  &:disabled::placeholder {
    cursor: inherit;
    color: ${(props) => props.theme.color['Neutral/Neutral 30']};
  }

  [data-read-only] & {
    user-select: none;
    pointer-events: none;
  }

  height: ${({ dimension, isMultiple }) => `${getSelectValueHeight(dimension, isMultiple)}px`};

  ${ieFixes};
`;

const disabledStyle = css`
  pointer-events: none;
  cursor: default;
`;

const focusedStyle = css`
  ${BorderedDiv} {
    border: 2px solid ${(props) => props.theme.color['Primary/Primary 60 Main']};
  }
`;

export const SelectWrapper = styled.div<{
  disabled?: boolean;
  readonly?: boolean;
  focused: boolean;
  multiple: boolean;
  dimension?: ComponentDimension;
}>`
  box-sizing: border-box;

  display: flex;
  align-items: flex-start;

  cursor: pointer;

  ${({ disabled, readonly }) => (readonly || disabled ? disabledStyle : '')};
  ${({ focused }) => (focused ? focusedStyle : '')};

  background: ${({ theme, disabled }) =>
    disabled ? theme.color['Neutral/Neutral 10'] : theme.color['Neutral/Neutral 00']};
  position: relative;

  padding: ${({ dimension, multiple }) => {
    switch (dimension) {
      case 'xl':
        return '15px 16px';
      case 's':
        return multiple ? '3px 12px' : '5px 12px';
      default:
        return '7px 16px';
    }
  }};

  border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};

  &:hover {
    border-color: ${({ theme, disabled }) => (disabled ? 'transparent' : theme.color['Primary/Primary 60 Main'])};
  }
`;

export const IconPanel = styled.div<{ multiple?: boolean; dimension?: ComponentDimension }>`
  flex: 0 0 auto;

  display: flex;
  align-items: center;

  padding: ${({ dimension, multiple }) => (dimension === 's' && multiple ? '2px 0' : '0')};

  & > * {
    margin-left: 8px;
    display: block;
    width: ${({ dimension }) => (dimension === 's' ? 20 : 24)}px;
    height: ${({ dimension }) => (dimension === 's' ? 20 : 24)}px;
  }

  [data-disabled='true'] & {
    & *[fill^='#'] {
      fill: ${(props) => props.theme.color['Neutral/Neutral 30']};
    }
  }
`;

export const Hidden = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
`;

export const OptionWrapper = styled.div<{ dimension?: ComponentDimension }>`
  flex: 0 0 auto;

  word-break: break-word;
  display: flex;
  align-items: center;
  padding: ${({ dimension }) => {
    switch (dimension) {
      case 'xl':
        return '12px 16px';
      case 's':
        return '6px 12px';
      default:
        return '8px 16px';
    }
  }};

  background-color: transparent;

  ${({ dimension }) => {
    switch (dimension) {
      case 'xl':
        return typography['Additional/L'];
      case 's':
        return typography['Additional/S'];
      default:
        return typography['Additional/M'];
    }
  }}
`;

export const DropDownText = styled(OptionWrapper)`
  color: ${({ theme }) => theme.color['Neutral/Neutral 50']};
`;
