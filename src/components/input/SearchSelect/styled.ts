import styled, { css } from 'styled-components';
import { typography } from '#src/components/Typography';
import { Dropdown as DropComponent } from '#src/components/Dropdown';
import type { DropdownProps } from '#src/components/Dropdown';
import type { ComponentDimension } from '#src/components/input/types';
import { ReactComponent as CloseOutlineSvg } from '@admiral-ds/icons/build/service/CloseOutline.svg';
import { CHIP_OFFSET, COUNTER_WIDTH } from './constants';

const getSelectValueHeight = (dimension?: ComponentDimension, multiple?: boolean) =>
  dimension === 's' && !multiple ? 20 : 24;

export const ClearIcon = styled(CloseOutlineSvg)`
  & *[fill^='#'] {
    fill: ${(props) => props.theme.color.basic.tertiary};
  }

  &:hover {
    cursor: pointer;
  }

  &:hover *[fill^='#'] {
    fill: ${(props) => props.theme.color.basic.hover};
  }
`;

export const Dropdown = styled(DropComponent)<DropdownProps>`
  padding: 8px 0;

  max-height: 256px;
  overflow: auto;

  option {
    display: none;
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
  ${({ fixHeight }) => fixHeight && fixHeightStyle}
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

const disabledColors = css`
  background-color: ${(props) => props.theme.color.background.tertiary};
`;

export const Input = styled.input<{ dimension?: ComponentDimension; isMultiple?: boolean }>`
  outline: none;
  appearance: none;

  box-sizing: border-box;
  flex: 1 1 auto;
  width: 100px;
  border: none;
  background: transparent;
  text-overflow: ellipsis;
  padding: 0;

  color: ${(props) => props.theme.color.text.primary};

  ${({ dimension }) => (dimension === 's' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])}

  &::placeholder {
    color: ${(props) => props.theme.color.text.secondary};
  }

  &:disabled,
  &:disabled::placeholder {
    cursor: inherit;
  }

  [data-read-only] & {
    user-select: none;
    pointer-events: none;
    ${disabledColors}
  }

  height: ${({ dimension, isMultiple }) => `${getSelectValueHeight(dimension, isMultiple)}px`};

  ${ieFixes};

  [data-status='error'] &,
  &:invalid {
    border-color: ${(props) => props.theme.color.status.danger};
  }

  [data-status='success'] & {
    border-color: ${(props) => props.theme.color.status.success};
  }
`;

const disabledStyle = css`
  pointer-events: none;
  cursor: default;
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

  background: ${({ theme, disabled }) => (disabled ? theme.color.background.tertiary : theme.color.background.primary)};
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

  border-radius: 4px;
  border-color: ${({ theme, disabled, focused }) => {
    if (focused) return theme.color.basic.press;
    if (disabled) return 'transparent';
    return theme.color.basic.tertiary;
  }};

  border-width: 1px;
  border-style: solid;

  &:hover {
    border-color: ${({ theme, disabled }) => (disabled ? 'transparent' : theme.color.basic.hover)};
  }

  &[data-status='error'] {
    border-color: ${(p) => p.theme.color.status.danger};
  }

  &[data-status='success'] {
    border-color: ${(props) => props.theme.color.status.success};
  }
`;

export const IconPanel = styled.div<{ disabled?: boolean; multiple?: boolean; dimension?: ComponentDimension }>`
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
        return typography['Body/Body 1 Long'];
      case 's':
        return typography['Body/Body 2 Long'];
      default:
        return typography['Body/Body 1 Short'];
    }
  }}
`;

export const DropDownText = styled(OptionWrapper)`
  color: ${({ theme }) => theme.color.text.tertiary};
`;
