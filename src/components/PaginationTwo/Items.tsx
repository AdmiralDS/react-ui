import * as React from 'react';
import styled, { css } from 'styled-components';
import { typography } from '#src/components/Typography';
import { ReactComponent as ChevronLeftOutline } from '@admiral-ds/icons/build/system/ChevronLeftOutline.svg';
import { ReactComponent as ChevronRightOutline } from '@admiral-ds/icons/build/system/ChevronRightOutline.svg';

const selectedMixin = css`
  background: ${({ theme }) => theme.color['Primary/Primary 60 Main']};
  color: var(--admiral-color-Special_StaticWhite, ${(p) => p.theme.color['Special/Static White']});
`;

const hoverMixin = css`
  background: ${({ theme }) => theme.color['Opacity/Hover']};
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  }
`;

const pressMixin = css`
  background: ${({ theme }) => theme.color['Opacity/Press']};
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

const Button = styled.button<{ selected: boolean; $current: boolean }>`
  display: flex;
  flex: 1 1 auto;
  position: relative;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border: 2px solid transparent;
  border-radius: 20px;
  ${typography['Body/Body 1 Short']}
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  background: transparent;
  border: none;
  appearance: none;
  outline: none;
  padding: 0;
  margin: 0;
  user-select: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  & *[fill^='#'] {
    fill: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  }

  &:disabled {
    cursor: default;
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
          $current ? theme.color['Neutral/Neutral 00'] : theme.color['Primary/Primary 60 Main']};
      top: ${({ $current }) => ($current ? '2px' : '0px')};
      bottom: ${({ $current }) => ($current ? '2px' : '0px')};
      left: ${({ $current }) => ($current ? '2px' : '0px')};
      right: ${({ $current }) => ($current ? '2px' : '0px')};
      border-radius: 40px;
    }
  }
`;

const PreviousButton = styled(Button)`
  margin-right: 8px;
`;

const NextButton = styled(Button)`
  margin-left: 8px;
`;

type PageProps = {
  onClick: (event: any) => void;
  page: number | null;
  selected: boolean;
  disabled: boolean;
  type: string;
};

export const PaginationItem: React.FC<PageProps> = ({ onClick, page, selected, disabled, type }) => {
  let label = '';
  if (type === 'page') label = `Страница ${page}, выбрать`;
  if (type === 'next') label = 'Следующая страница, выбрать';
  if (type === 'previous') label = 'Предыдущая страница, выбрать';
  const component = type === 'page' ? Button : type === 'previous' ? PreviousButton : NextButton;

  return (
    <Button
      type="button"
      as={component}
      aria-current={selected}
      aria-label={label}
      tabIndex={disabled ? -1 : 0}
      $current={selected}
      disabled={disabled}
      selected={selected}
      onClick={onClick}
    >
      <ButtonContent tabIndex={-1}>
        {type === 'page' && page}
        {type === 'next' && <ChevronRightOutline width={24} height={24} />}
        {type === 'previous' && <ChevronLeftOutline width={24} height={24} />}
      </ButtonContent>
    </Button>
  );
};

const EllipsisWrapper = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  ${typography['Body/Body 1 Short']}
  background: transparent;
`;

export const Ellipsis = () => {
  return <EllipsisWrapper>...</EllipsisWrapper>;
};
