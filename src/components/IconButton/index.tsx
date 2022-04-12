import * as React from 'react';
import type { FC, ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { Spinner } from '#/components/Spinner';

type Dimension = 'xl' | 'l' | 'm' | 's';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Размер кнопки */
  dimension?: Dimension;
  /** Отключение кнопки */
  disabled?: boolean;
  /** Состояние loading */
  loading?: boolean;
  /** Состояние skeleton */
  skeleton?: boolean;
}

const StyledButton = styled.button.attrs<IconButtonProps, { 'data-dimension'?: Dimension }>((props) => ({
  'data-dimension': props.dimension,
}))<IconButtonProps>`
  box-sizing: border-box;
  display: inline-block;
  border: none;
  border-radius: 4px;
  background: transparent;
  -webkit-tap-highlight-color: transparent;
  appearance: none;
  vertical-align: center;

  &[data-dimension='xl'] {
    padding: 0;
    height: 56px;
    width: 56px;
  }

  &[data-dimension='l'] {
    height: 48px;
    width: 48px;
  }

  &[data-dimension='m'] {
    height: 40px;
    width: 40px;
  }

  &[data-dimension='s'] {
    height: 32px;
    width: 32px;
  }

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.color.background.secondary};
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color.basic.hover};
    }
  }
  &:active {
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color.basic.press};
    }
  }

  &:disabled {
    cursor: not-allowed;
    background-color: transparent;
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color.text.tertiary};
    }
  }
`;

const IconButtonContent = styled.span<{ dimension?: Dimension }>`
  vertical-align: top;
  display: inline-flex;
  flex-direction: row;
  overflow: hidden;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  height: ${({ dimension }) => (dimension === 's' ? 16 : 20)}px;

  > * {
    display: inline-block;
    flex: 0 1 auto;
    white-space: nowrap;
  }

  > *:not(:first-child) {
    margin-left: 8px;
  }

  & *[fill^='#'] {
    fill: ${(p) => p.theme.color.text.secondary};
  }

  & > svg {
    width: ${({ dimension }) => (dimension === 's' ? 16 : 20)}px;
    height: ${({ dimension }) => (dimension === 's' ? 16 : 20)}px;
  }
`;

const PseudoIcon = styled.div<{ dimension?: Dimension }>`
  border-radius: 50%;
  width: ${({ dimension }) => (dimension === 's' ? 20 : 24)}px;
  height: ${({ dimension }) => (dimension === 's' ? 20 : 24)}px;
  background: ${({ theme }) => theme.color.basic.tertiary};
`;

export const IconButton: FC<IconButtonProps> = ({
  dimension = 'xl',
  type = 'button',
  loading = false,
  skeleton = false,
  disabled = false,
  children,
  ...props
}) => {
  const contentSize = dimension === 's' ? '20px' : '24px';
  const disabledOptions = loading || skeleton || disabled;
  const renderContent = () => {
    if (loading) {
      return (
        <IconButtonContent style={{ height: contentSize }}>
          <Spinner style={{ height: contentSize, width: contentSize }} />
        </IconButtonContent>
      );
    }
    if (skeleton) {
      return (
        <IconButtonContent style={{ height: contentSize }}>
          <PseudoIcon dimension={dimension} />
        </IconButtonContent>
      );
    }
    return <IconButtonContent dimension={dimension}>{children}</IconButtonContent>;
  };

  return (
    <StyledButton dimension={dimension} disabled={disabledOptions} type={type} {...props}>
      {renderContent()}
    </StyledButton>
  );
};
