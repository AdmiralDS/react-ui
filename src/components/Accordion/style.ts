import styled, { css } from 'styled-components';
import { ReactComponent as ChevronDownOutline } from '@admiral-ds/icons/build/system/ChevronDownOutline.svg';
import { typography } from '#src/components/Typography';
import { DefaultFontColorName } from '#src/components/themes/common';
import type { AccordionProps } from '#src/components/Accordion';

export const Chevron = styled(ChevronDownOutline)`
  transition: all 0.3s;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  margin: 0 0 0 8px;
  .accordion[data-icon='left'] & {
    margin: 0 8px 0 0;
  }
  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  }
  .accordion-item[data-disabled] & {
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
    }
  }
  .accordion[data-dimension='m'] & {
    width: 20px;
    height: 20px;
  }
`;

export const ItemTitleContent = styled.span`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  padding: 16px;
  .accordion[data-dimension='m'] && {
    padding: 10px 16px;
  }

  .accordion[data-icon='left'] & {
    flex-direction: row-reverse;
  }
`;

export const TitleContent = styled.span`
  display: inline-flex;
  flex: 1 1 auto;
`;

const eventsMixin = css`
  &:hover {
    cursor: pointer;
    background: var(--admiral-color-Opacity_Hover, ${(p) => p.theme.color['Opacity/Hover']});
  }
  &:active {
    background: var(--admiral-color-Opacity_Press, ${(p) => p.theme.color['Opacity/Press']});
  }
  &:focus-visible {
    outline: none;
    &:before {
      position: absolute;
      content: '';
      border: 2px solid var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
      top: -1px;
      left: 0;
      bottom: -1px;
      right: 0;
    }
  }
`;

export const ItemTitle = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: transparent;
  -webkit-tap-highlight-color: transparent;
  text-align: left;
  border: none;
  background: none;
  margin: 0;
  padding: 0;
  overflow: visible;
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color[DefaultFontColorName]});
  ${typography['Subtitle/Subtitle 2']}
  ${eventsMixin}

  .accordion-item[data-disabled] & {
    cursor: not-allowed;
    user-select: none;
  }

  .accordion[data-dimension='m'] & {
    ${typography['Subtitle/Subtitle 3']}
  }
`;

export const ItemWrapper = styled.div<{ $opened?: boolean }>`
  position: relative;
  &:after {
    position: absolute;
    content: '';
    bottom: 0;
    width: 100%;
    height: 1px;
    background: var(--admiral-color-Neutral_Neutral20, ${(p) => p.theme.color['Neutral/Neutral 20']});
  }
  & > ${ItemTitle} ${Chevron} {
    transform: ${(p) => (p.$opened ? 'rotate(180deg)' : 'rotate(0deg)')};
  }
`;

export const ItemContent = styled.div<{ $contentMaxHeight: number | string }>`
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color[DefaultFontColorName]});
  overflow-y: auto;
  max-height: ${(p) => p.$contentMaxHeight};
  padding: 0 16px 16px 16px;
  ${typography['Body/Body 1 Long']}
  .accordion[data-dimension='m'] & {
    padding: 0 16px 10px 16px;
    ${typography['Body/Body 2 Long']}
  }
`;

export const AccordionWrapper = styled.div<{
  $hideTopDivider: boolean;
  $hideBottomDivider: boolean;
  $dimension?: AccordionProps['dimension'];
}>`
  position: relative;

  & > ${ItemWrapper}:first-child {
    &:before {
      position: absolute;
      content: '';
      top: 0;
      width: 100%;
      height: 1px;
      background: ${({ theme, $hideTopDivider }) =>
        $hideTopDivider
          ? 'transparent'
          : `var(--admiral-color-Neutral_Neutral20, ${theme.color['Neutral/Neutral 20']})`};
    }
  }
  & > ${ItemWrapper}:last-child {
    &:after {
      background: ${({ theme, $hideBottomDivider }) =>
        $hideBottomDivider
          ? 'transparent'
          : `var(--admiral-color-Neutral_Neutral20, ${theme.color['Neutral/Neutral 20']})`};
    }
  }
`;
