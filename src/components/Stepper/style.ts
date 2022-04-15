import styled, { css } from 'styled-components';
import { typography } from '#src/components/Typography';

import { ReactComponent as StepSvg } from './svg/Step.svg';

type Orientation = 'horizontal' | 'vertical';

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
      fill: ${({ theme }) => theme.color.basic.primary};
    }
  }
  [data-error='true'] & {
    path {
      fill: ${({ theme }) => theme.color.status.danger};
    }
  }
  [data-warning='true'] & {
    path {
      fill: ${({ theme }) => theme.color.status.warn};
    }
  }
  [data-disabled='true'] & {
    path {
      fill: ${({ theme }) => theme.color.basic.primaryLight};
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
  background-color: ${({ theme }) => theme.color.basic.disable};
  [data-completed='true'] & {
    background-color: ${({ theme }) => theme.color.basic.primary};
  }
  [data-error='true'] & {
    background-color: ${({ theme }) => theme.color.status.danger};
  }
  [data-warning='true'] & {
    background-color: ${({ theme }) => theme.color.status.warn};
  }
  [data-disabled='true'] & {
    background-color: ${({ theme }) => theme.color.basic.primaryLight};
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
        if (error) return theme.color.status.hoverDanger;
        if (warning) return theme.color.status.hoverWarn;
        return theme.color.basic.hover;
      }};
    }
  }
`;

const clickableNotActiveCss = css<{ error?: boolean; warning?: boolean }>`
  &:hover ${StepRail} {
    background-color: ${({ error, warning, theme }) => {
      if (error) return theme.color.status.hoverDanger;
      if (warning) return theme.color.status.hoverWarn;
      return theme.color.basic.hover;
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
}>`
  display: flex;
  position: relative;
  box-sizing: border-box;
  width: ${({ orientation, stepWidth }) => {
    if (stepWidth) return `${typeof stepWidth === 'number' ? `${stepWidth}px` : stepWidth}`;
    return orientation === 'horizontal' ? '188px' : '224px';
  }};
  flex-shrink: 0;
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
      border: 2px solid ${({ theme }) => theme.color.basic.hover};
      border-radius: 4px;
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

export const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
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
  color: ${({ theme }) => theme.color.text.primary};
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
