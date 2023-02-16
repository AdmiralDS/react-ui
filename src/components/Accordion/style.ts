import styled from 'styled-components';
import { ReactComponent as ChevronDownOutline } from '@admiral-ds/icons/build/system/ChevronDownOutline.svg';
import { typography } from '#src/components/Typography';
import { DefaultFontColorName } from '#src/components/themes/common';

export const Chevron = styled(ChevronDownOutline)`
  transition: all 0.3s;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  margin: 0 0 0 8px;
  [data-icon='left'] & {
    margin: 0 8px 0 0;
  }
  & *[fill^='#'] {
    fill: ${({ theme }) => theme.color['Neutral/Neutral 50']};
  }
  [data-disabled='true'] & {
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color['Neutral/Neutral 30']};
    }
  }
  [data-dimension='m'] & {
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

  padding: 16px 16px 15px 16px;
  [data-dimension='m'] && {
    padding: 10px 16px 9px 16px;
  }

  [data-icon='left'] & {
    flex-direction: row-reverse;
  }
`;

export const TitleContent = styled.span`
  display: inline-flex;
  flex: 1 1 auto;
`;

export const ItemTitle = styled.button`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 54px;
  width: 100%;
  background: transparent;
  -webkit-tap-highlight-color: transparent;
  text-align: left;
  border: none;
  background: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  overflow: visible;
  color: ${(p) => p.theme.color[DefaultFontColorName]};
  ${typography['Subtitle/Subtitle 2']}
  &:hover {
    background: ${(p) => p.theme.color['Opacity/Hover']};
  }
  &:focus {
    &:before {
      position: absolute;
      content: '';
      border: 2px solid ${({ theme }) => theme.color['Primary/Primary 60 Main']};
      top: -1px;
      left: 0;
      bottom: -1px;
      right: 0;
    }
  }
  &:focus,
  & > ${ItemTitleContent} {
    outline: none;
  }

  [data-dimension='m'] & {
    min-height: 38px;
    ${typography['Subtitle/Subtitle 3']}
  }
`;

export const ItemWrapper = styled.div<{ opened?: boolean; disabled?: boolean }>`
  border-bottom: 1px solid ${(p) => p.theme.color['Neutral/Neutral 20']};
  & > ${ItemTitle} ${Chevron} {
    transform: ${(p) => (p.opened ? 'rotate(180deg)' : 'rotate(0deg)')};
  }
  ${({ disabled }) => disabled && 'pointer-events: none;'}
`;

export const ItemContent = styled.div<{ contentMaxHeight: number | string }>`
  color: ${(p) => p.theme.color[DefaultFontColorName]};
  overflow-y: auto;
  max-height: ${(p) => p.contentMaxHeight};
  padding: 4px 16px 16px 16px;
  ${typography['Body/Body 1 Long']}
  [data-dimension='m'] & {
    padding: 4px 16px 10px 16px;
    ${typography['Body/Body 2 Long']}
  }
`;

type Dimension = 'l' | 'm';

export const AccordionWrapper = styled.div<{
  hideTopDivider: boolean;
  hideBottomDivider: boolean;
  dimension?: Dimension;
}>`
  position: relative;

  & > ${ItemWrapper}:first-child {
    & ${ItemTitleContent} {
      padding: ${({ dimension }) => (dimension === 'l' ? '15px 16px' : '9px 16px')};
    }
    border-top: 1px solid
      ${({ theme, hideTopDivider }) => (hideTopDivider ? 'transparent' : theme.color['Neutral/Neutral 20'])};
  }
  & > ${ItemWrapper}:last-child {
    border-bottom: 1px solid
      ${({ theme, hideBottomDivider }) => (hideBottomDivider ? 'transparent' : theme.color['Neutral/Neutral 20'])};
  }
`;
