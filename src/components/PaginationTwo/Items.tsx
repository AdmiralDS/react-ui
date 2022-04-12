import * as React from 'react';
import styled, { css } from 'styled-components';
import { typography } from '#/components/Typography';
import { ReactComponent as ChevronLeftOutline } from '@admiral-ds/icons/build/system/ChevronLeftOutline.svg';
import { ReactComponent as ChevronRightOutline } from '@admiral-ds/icons/build/system/ChevronRightOutline.svg';

const selectedMixin = css`
  background: ${({ theme }) => theme.color.basic.primary};
  color: ${({ theme }) => theme.color.text.staticWhite};
`;

const hoverMixin = css`
  background: ${({ theme }) => theme.color.background.tertiary};
  color: ${({ theme }) => theme.color.basic.hover};
  & *[fill^='#'] {
    fill: ${({ theme }) => theme.color.basic.hover};
  }
`;

const pressMixin = css`
  background: ${({ theme }) => theme.color.background.tertiary};
  color: ${({ theme }) => theme.color.basic.press};
  & *[fill^='#'] {
    fill: ${({ theme }) => theme.color.basic.press};
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

const Button = styled.button<{ selected: boolean }>`
  display: flex;
  flex: 1 1 auto;
  position: relative;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border: 2px solid transparent;
  border-radius: 20px;
  ${typography['Additional/M']}
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
    fill: ${({ theme }) => theme.color.text.secondary};
  }

  &:disabled {
    cursor: default;
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color.text.tertiary};
    }
    ${({ selected, theme }) => !selected && `color: ${theme.color.text.tertiary};`}
  }

  ${({ selected }) => selected && selectedMixin}
  &:hover:not(:disabled) {
    ${({ selected }) => !selected && hoverMixin}
  }
  &:active:not(:disabled) {
    ${({ selected }) => !selected && pressMixin}
  }

  &:focus:not(:active) {
    border: 2px solid ${({ theme }) => theme.color.basic.hover};
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
  ${typography['Additional/M']}
  background: transparent;
`;

export const Ellipsis = () => {
  return <EllipsisWrapper>...</EllipsisWrapper>;
};
