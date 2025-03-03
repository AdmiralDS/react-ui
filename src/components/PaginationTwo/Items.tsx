import styled, { css } from 'styled-components';
import { typography } from '#src/components/Typography';
import { ReactComponent as ChevronLeftOutline } from '@admiral-ds/icons/build/system/ChevronLeftOutline.svg';
import { ReactComponent as ChevronRightOutline } from '@admiral-ds/icons/build/system/ChevronRightOutline.svg';
import type { PaginationTwoDimension } from './index';

const ITEM_SIZE_M = 40;
const ITEM_SIZE_S = 32;
const CHEVRON_SIZE_M = 24;
const CHEVRON_SIZE_S = 20;

const selectedMixin = css`
  background: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
  color: var(--admiral-color-Special_StaticWhite, ${(p) => p.theme.color['Special/Static White']});
`;

const hoverMixin = css`
  background: var(--admiral-color-Opacity_Hover, ${(p) => p.theme.color['Opacity/Hover']});
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  }
`;

const pressMixin = css`
  background: var(--admiral-color-Opacity_Press, ${(p) => p.theme.color['Opacity/Press']});
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  }
`;

const ButtonContent = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const SideButtonsMixin = css<{ $isPreviousButton?: boolean; $isNextButton?: boolean }>`
  ${(p) => p.$isPreviousButton && 'margin-right: 8px;'}
  ${(p) => p.$isNextButton && 'margin-left: 8px;'}
`;

const Button = styled.button<{
  selected: boolean;
  $current: boolean;
  $dimension: PaginationTwoDimension;
  $isPreviousButton?: boolean;
  $isNextButton?: boolean;
}>`
  box-sizing: border-box;
  appearance: none;
  outline: none;
  margin: 0;
  ${SideButtonsMixin};
  user-select: none;
  display: flex;
  flex: 1 1 auto;
  position: relative;
  min-width: ${(p) => (p.$dimension === 'm' ? ITEM_SIZE_M : ITEM_SIZE_S)}px;
  height: ${(p) => (p.$dimension === 'm' ? ITEM_SIZE_M : ITEM_SIZE_S)}px;
  padding: 0 6px;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 20px;
  ${(p) => (p.$dimension === 'm' ? typography['Body/Body 1 Short'] : typography['Body/Body 2 Short'])}
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  background: transparent;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;

  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  }

  &:disabled {
    cursor: not-allowed;
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
    }
    ${({ selected, theme }) =>
      !selected && `color: var(--admiral-color-Neutral_Neutral30, ${theme.color['Neutral/Neutral 30']});`}
  }

  ${({ selected }) => selected && selectedMixin}
  &:hover:not(:disabled) {
    ${({ selected }) => !selected && hoverMixin}
  }
  &:active:not(:disabled) {
    ${({ selected }) => !selected && pressMixin}
  }

  &:focus:not(:active) {
    &:before {
      position: absolute;
      content: '';
      border: 2px solid
        ${({ theme, $current }) =>
          $current
            ? `var(--admiral-color-Neutral_Neutral00, ${theme.color['Neutral/Neutral 00']})`
            : `var(--admiral-color-Primary_Primary60Main, ${theme.color['Primary/Primary 60 Main']})`};
      top: ${({ $current }) => ($current ? '2px' : '0px')};
      bottom: ${({ $current }) => ($current ? '2px' : '0px')};
      left: ${({ $current }) => ($current ? '2px' : '0px')};
      right: ${({ $current }) => ($current ? '2px' : '0px')};
      border-radius: 20px;
    }
  }
`;

type PaginationItemProps = {
  onClick: (event: any) => void;
  page: number | null;
  selected: boolean;
  disabled: boolean;
  type: string;
  dimension?: PaginationTwoDimension;
};

export const PaginationItem = ({ onClick, page, selected, disabled, type, dimension = 'm' }: PaginationItemProps) => {
  let label = '';
  if (type === 'page') label = `Страница ${page}, выбрать`;
  if (type === 'next') label = 'Следующая страница, выбрать';
  if (type === 'previous') label = 'Предыдущая страница, выбрать';

  return (
    <Button
      type="button"
      aria-current={selected}
      aria-label={label}
      tabIndex={disabled ? -1 : 0}
      $current={selected}
      $dimension={dimension}
      $isPreviousButton={type === 'previous'}
      $isNextButton={type === 'next'}
      disabled={disabled}
      selected={selected}
      onClick={onClick}
    >
      <ButtonContent tabIndex={-1}>
        {type === 'page' && page}
        {type === 'next' && (
          <ChevronRightOutline
            width={dimension === 's' ? CHEVRON_SIZE_S : CHEVRON_SIZE_M}
            height={dimension === 's' ? CHEVRON_SIZE_S : CHEVRON_SIZE_M}
          />
        )}
        {type === 'previous' && (
          <ChevronLeftOutline
            width={dimension === 's' ? CHEVRON_SIZE_S : CHEVRON_SIZE_M}
            height={dimension === 's' ? CHEVRON_SIZE_S : CHEVRON_SIZE_M}
          />
        )}
      </ButtonContent>
    </Button>
  );
};

const EllipsisWrapper = styled.div<{ $dimension: PaginationTwoDimension }>`
  display: flex;
  min-width: ${(p) => (p.$dimension === 'm' ? ITEM_SIZE_M : ITEM_SIZE_S)}px;
  height: ${(p) => (p.$dimension === 'm' ? ITEM_SIZE_M : ITEM_SIZE_S)}px;
  align-items: center;
  justify-content: center;
  ${(p) => (p.$dimension === 'm' ? typography['Body/Body 1 Short'] : typography['Body/Body 2 Short'])}
  background: transparent;
`;

type EllipsisProps = {
  dimension: PaginationTwoDimension;
};

export const Ellipsis = ({ dimension }: EllipsisProps) => {
  return <EllipsisWrapper $dimension={dimension}>...</EllipsisWrapper>;
};
