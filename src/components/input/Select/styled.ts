import styled, { css } from 'styled-components';
import { typography } from '#src/components/Typography';
import { Dropdown as DropComponent } from '#src/components/Dropdown';
import type { ComponentDimension } from '#src/components/input/types';
import { CHIP_OFFSET, COUNTER_WIDTH } from './constants';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';
import { skeletonMixin } from '../Container';

const getSelectValueHeight = (dimension?: ComponentDimension, multiple?: boolean) =>
  dimension === 's' && !multiple ? 20 : 24;

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
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  pointer-events: none;
  overflow: hidden;
  min-width: 0;

  background: none;
  border: 1px solid ${(props) => props.theme.color['Neutral/Neutral 40']};
  border-radius: inherit;

  [data-status='error'] &&& {
    border: 1px solid ${(props) => props.theme.color['Error/Error 60 Main']};
  }

  [data-status='success'] &&& {
    border: 1px solid ${(props) => props.theme.color['Success/Success 50 Main']};
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

  &:read-only {
    cursor: inherit;
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
    border: 2px solid ${(props) => props.theme.color['Primary/Primary 60 Main']};

    [data-status='error'] &&& {
      border: 2px solid ${(props) => props.theme.color['Error/Error 60 Main']};
    }

    [data-status='success'] &&& {
      border: 2px solid ${(props) => props.theme.color['Success/Success 50 Main']};
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

export const SelectWrapper = styled.div<{
  disabled?: boolean;
  readonly?: boolean;
  focused: boolean;
  multiple: boolean;
  dimension?: ComponentDimension;
  skeleton?: boolean;
}>`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: ${(p) => (p.multiple ? 'flex-start' : 'center')};
  cursor: pointer;

  background: ${({ theme, disabled, readonly }) =>
    disabled || readonly ? theme.color['Neutral/Neutral 10'] : theme.color['Neutral/Neutral 00']};
  ${({ disabled, readonly }) => (readonly || disabled ? disabledStyle : '')};
  ${({ focused, readonly }) => (focused && !readonly ? focusedStyle : '')};

  &:hover ${BorderedDiv} {
    border-color: ${(props) => (props.disabled ? 'transparent' : props.theme.color['Neutral/Neutral 60'])};
  }

  [data-status='error'] &&&:hover:not(:disabled) ${BorderedDiv} {
    border: 1px solid ${(props) => props.theme.color['Error/Error 70']};
  }

  [data-status='success'] &&&:hover:not(:disabled) ${BorderedDiv} {
    border: 1px solid ${(props) => props.theme.color['Success/Success 60']};
  }
  }

  padding: ${({ dimension, multiple }) => {
    switch (dimension) {
      case 'xl':
        return '16px 16px';
      case 's':
        return multiple ? '4px 12px' : '6px 12px';
      default:
        return '8px 16px';
    }
  }};

  border-radius: ${(p) => (p.skeleton ? 0 : mediumGroupBorderRadius(p.theme.shape))};

  ${({ skeleton }) => skeleton && skeletonMixin};
  ${({ skeleton }) => skeleton && disableEventMixin};
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
