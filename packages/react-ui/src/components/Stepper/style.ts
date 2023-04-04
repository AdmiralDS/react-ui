import styled, { css } from 'styled-components';
import { typography } from '#src/components/Typography';

import { ReactComponent as StepSvg } from '#src/components/Stepper/svg/Step.svg';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';
import type { Orientation } from './type';

export const StepTrack = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  align-self: stretch;
  flex-direction: row;
  width: 100%;
  margin: 0 0 8px 0;
  [data-orientation='vertical'] & {
    flex-direction: column;
    width: 20px;
    margin: 0 8px 0 0;
  }
`;

export const StepIcon = styled(StepSvg)`
  margin: 0 4px 0 0;
  [data-orientation='vertical'] & {
    margin: 0 0 4px 0;
  }
  [data-active='true'] & {
    path {
      fill: ${({ theme }) => theme.color['Primary/Primary 60 Main']};
    }
  }
  [data-error='true'] & {
    path {
      fill: ${({ theme }) => theme.color['Error/Error 60 Main']};
    }
  }
  [data-warning='true'] & {
    path {
      fill: ${({ theme }) => theme.color['Warning/Warning 50 Main']};
    }
  }
  [data-disabled='true'] & {
    path {
      fill: ${({ theme }) => theme.color['Primary/Primary 30']};
    }
  }
  flex-shrink: 0;
`;

export const StepRail = styled.div`
  height: 2px;
  width: 100%;
  [data-orientation='vertical'] & {
    height: 100%;
    width: 2px;
  }
  background-color: ${({ theme }) => theme.color['Neutral/Neutral 20']};
  [data-completed='true'] & {
    background-color: ${({ theme }) => theme.color['Primary/Primary 60 Main']};
  }
  [data-error='true'] & {
    background-color: ${({ theme }) => theme.color['Error/Error 60 Main']};
  }
  [data-warning='true'] & {
    background-color: ${({ theme }) => theme.color['Warning/Warning 50 Main']};
  }
  [data-disabled='true'] & {
    background-color: ${({ theme }) => theme.color['Primary/Primary 30']};
  }
  border-radius: 1px;
`;

export const StepContentWrapper = styled.span`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  flex-direction: column;
  [data-orientation='vertical'] & {
    flex-direction: row;
  }
`;

const clickableCss = css<{ error?: boolean; warning?: boolean }>`
  &:hover svg {
    path {
      fill: ${({ error, warning, theme }) => {
        if (error) return theme.color['Error/Error 70'];
        if (warning) return theme.color['Warning/Warning 70'];
        return theme.color['Primary/Primary 70'];
      }};
    }
  }
`;

const clickableNotActiveCss = css<{ error?: boolean; warning?: boolean }>`
  &:hover ${StepRail} {
    background-color: ${({ error, warning, theme }) => {
      if (error) return theme.color['Error/Error 70'];
      if (warning) return theme.color['Warning/Warning 70'];
      return theme.color['Primary/Primary 70'];
    }};
  }
`;

export const StepWrapper = styled.li<{
  orientation: Orientation;
  clickable: boolean;
  error?: boolean;
  warning?: boolean;
  active?: boolean;
  stepWidth?: number | string;
  stepsAmount: number;
  mobile?: boolean;
}>`
  display: flex;
  position: relative;
  box-sizing: border-box;
  width: ${({ orientation, stepWidth, stepsAmount, mobile }) => {
    if (stepWidth) return `${typeof stepWidth === 'number' ? `${stepWidth}px` : stepWidth}`;
    if (mobile) return orientation === 'horizontal' ? '188px' : '224px';
    return orientation === 'horizontal' ? `${100 / stepsAmount}%` : '100%';
  }};
  ${({ mobile }) => mobile && 'flex-shrink: 0;'}
  background: none;
  padding: 0;
  margin: 0;
  text-align: left;
  border: none;
  text-decoration: none;
  ${({ clickable }) => clickable && 'cursor: pointer;'}
  ${({ clickable }) => clickable && clickableCss}
  ${({ clickable, active }) => clickable && !active && clickableNotActiveCss}

    &:focus {
    outline: none;
    &:before {
      position: absolute;
      content: '';
      border: 2px solid ${({ theme }) => theme.color['Primary/Primary 60 Main']};
      border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};
      top: 0px;
      left: 0px;
      bottom: 0px;
      right: 0px;
    }
  }
  &:focus,
  & > ${StepContentWrapper} {
    outline: none;
  }
`;

export const ContentWrapper = styled.div<{ withTooltip: boolean }>`
  display: flex;
  width: 100%;
  ${({ withTooltip }) => withTooltip && 'cursor: pointer;'}
  [data-orientation='vertical'] & {
    margin: 0 0 20px 0;
  }
`;

export const Content = styled.div<{ lineClamp: 1 | 2 | 3 }>`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${({ lineClamp }) => {
    if (lineClamp === 1) return 1;
    if (lineClamp === 2) return 2;
    return 3;
  }};
  overflow: hidden;
  color: ${({ theme }) => theme.color['Neutral/Neutral 90']};
  [data-disabled='true'] & {
    color: ${({ theme }) => theme.color['Neutral/Neutral 30']};
  }
  ${typography['Body/Body 2 Long']}
  margin: 0 12px 0 0;
`;

export const List = styled.ul<{ orientation?: Orientation }>`
  position: relative;
  display: flex;
  box-sizing: border-box;
  scroll-behavior: smooth;
  padding: 0;
  ${({ orientation }) =>
    orientation === 'horizontal'
      ? `
flex-direction: row;
overflow-x: scroll;
`
      : `
flex-direction: column;
`}

  & > * {
    padding: 2px;
  }

  &::-webkit-scrollbar {
    width: 0 !important;
    height: 0 !important;
  }

  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  scrollbar-width: none;
  scrollbar-height: none;
`;
