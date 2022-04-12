import styled, { css } from 'styled-components';
import { typography } from '#/components/Typography';
import { Dropdown as DropComponent } from '#/components/Dropdown';
import type { ExtraProps, ComponentDimension } from '#/components/input/types';
import { ReactComponent as CloseOutlineSvg } from '@admiral-ds/icons/build/service/CloseOutline.svg';
import { CHIP_OFFSET, COUNTER_WIDTH } from './constants';

const getInputHeight = (dimension?: ComponentDimension) => (dimension === 's' ? 20 : 24);

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

export const Dropdown = styled(DropComponent)`
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

const hideChipsStyle = css`
  height: 28px;
  overflow: hidden;
`;

const hideStyle = css`
  width: 0;
  opacity: 0;
  pointer-events: none;
`;

export const ValueWrapper = styled.div<{
  dimension?: ComponentDimension;
  multiple?: boolean;
  hideChips?: boolean;
  valueIsString?: boolean;
}>`
  flex: 1 1 auto;

  display: ${({ valueIsString, multiple }) => (!multiple && valueIsString ? 'block' : 'flex')};

  > * {
    margin-left: ${({ multiple }) => (multiple ? `-${COUNTER_WIDTH + CHIP_OFFSET}px` : '0')};
  }
  padding-left: ${({ multiple }) => (multiple ? `${COUNTER_WIDTH + CHIP_OFFSET}px` : '0')};

  flex-wrap: ${({ multiple }) => (multiple ? 'wrap' : 'unset')};
  align-items: center;

  ${(props) => (props.dimension === 's' ? typography['Additional/S'] : typography['Additional/L'])}
  ${({ hideChips }) => (hideChips ? hideChipsStyle : '')}
`;

export const Placeholder = styled.div`
  color: ${({ theme }) => theme.color.text.secondary};
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

export const Input = styled.input<ExtraProps & { isMultiple?: boolean; isHidden?: boolean }>`
  outline: none;
  appearance: none;

  box-sizing: border-box;
  flex: 1 1 auto;
  width: 100px;
  border: none;
  background: transparent;
  text-overflow: ellipsis;
  padding: 0;

  ${({ isMultiple }) => (isMultiple ? 'margin-bottom: 4px' : '')};
  ${({ isHidden }) => (isHidden ? hideStyle : '')};

  color: ${(props) => props.theme.color.text.primary};

  ${(props) => (props.dimension === 's' ? typography['Additional/S'] : typography['Additional/L'])}

  &::placeholder {
    color: ${(props) => props.theme.color.text.secondary};
  }

  &:disabled,
  &:disabled::placeholder {
    color: ${(props) => props.theme.color.text.tertiary};
    ${disabledColors}
  }

  [data-read-only] & {
    user-select: none;
    pointer-events: none;
    ${disabledColors}
  }

  height: ${({ dimension }) => `${getInputHeight(dimension)}px`};
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
        return multiple ? '16px 16px 12px' : '16px 16px';
      case 's':
        return multiple ? '6px 12px 2px' : '6px 12px';
      default:
        return multiple ? '8px 16px 4px' : '8px 16px';
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

export const IconPanel = styled.div<{ disabled?: boolean; dimension?: ComponentDimension }>`
  flex: 0 0 auto;

  display: flex;
  align-items: center;

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
  color: ${({ theme }) => theme.color.text.tertiary};
`;
