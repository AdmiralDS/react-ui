import type { ButtonHTMLAttributes, FC } from 'react';
import * as React from 'react';
import styled from 'styled-components';
import { Spinner } from '#src/components/Spinner';

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
    background: ${({ theme }) => theme.color['Opacity/Hover']};
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color['Neutral/Neutral 50']};
    }
  }
  &:active {
    background: ${({ theme }) => theme.color['Opacity/Press']};
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color['Neutral/Neutral 50']};
    }
  }

  &:disabled {
    cursor: not-allowed;
    background-color: transparent;
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color['Neutral/Neutral 30']};
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
  height: ${({ dimension }) => (dimension === 's' ? 20 : 24)}px;

  > * {
    display: inline-block;
    flex: 0 1 auto;
    white-space: nowrap;
  }

  > *:not(:first-child) {
    margin-left: 8px;
  }

  & *[fill^='#'] {
    fill: ${(p) => p.theme.color['Neutral/Neutral 50']};
  }

  & > svg {
    width: ${({ dimension }) => (dimension === 's' ? 20 : 24)}px;
    height: ${({ dimension }) => (dimension === 's' ? 20 : 24)}px;
  }
`;

const PseudoIcon = styled.div<{ dimension?: Dimension }>`
  border-radius: 50%;
  width: ${({ dimension }) => (dimension === 's' ? 20 : 24)}px;
  height: ${({ dimension }) => (dimension === 's' ? 20 : 24)}px;
  background: ${({ theme }) => theme.color['Neutral/Neutral 50']};
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

IconButton.displayName = 'IconButton';
