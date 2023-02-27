import type { ButtonHTMLAttributes } from 'react';
import * as React from 'react';
import styled from 'styled-components';
import { Spinner } from '#src/components/Spinner';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';
import { forwardRef } from 'react';
import { skeletonAnimationMixin } from '#src/components/skeleton/animation';

type Dimension = 'xl' | 'l' | 'm' | 's';
type IconButtonAppearance = 'primary' | 'secondary';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Внешний вид кнопки */
  appearance?: IconButtonAppearance;
  /** Размер кнопки */
  dimension?: Dimension;
  /** Отключение кнопки */
  disabled?: boolean;
  /** Состояние loading */
  loading?: boolean;
  /** Состояние skeleton */
  skeleton?: boolean;
}

const StyledButton = styled.button.attrs<
  IconButtonProps,
  { 'data-dimension'?: Dimension; appearance?: IconButtonAppearance }
>((props) => ({
  'data-dimension': props.dimension,
}))<IconButtonProps>`
  box-sizing: border-box;
  display: inline-block;
  border: none;
  border-radius: ${(p) => (p.skeleton ? 0 : mediumGroupBorderRadius(p.theme.shape))};
  background: ${({ skeleton }) => (skeleton ? 'red' : 'transparent')};
  -webkit-tap-highlight-color: transparent;
  appearance: none;
  vertical-align: middle;

  pointer-events: ${(p) => (p.disabled || p.skeleton ? 'none' : 'all')};
  
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
      fill: ${(p) =>
        p.appearance === 'primary' ? p.theme.color['Primary/Primary 60 Main'] : p.theme.color['Neutral/Neutral 50']};
    }
  }
  &:active {
    background: ${({ theme }) => theme.color['Opacity/Press']};
    & *[fill^='#'] {
      fill: ${(p) =>
        p.appearance === 'primary' ? p.theme.color['Primary/Primary 60 Main'] : p.theme.color['Neutral/Neutral 50']};
    }
  }

  &:disabled {
    cursor: not-allowed;
    background-color: transparent;
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color['Neutral/Neutral 30']};
    }
  }

  &:focus-visible {
    outline-offset: 2px;
    outline: ${(p) => p.theme.color['Primary/Primary 60 Main']} solid 2px;
  }

  ${({ skeleton }) => skeleton && skeletonAnimationMixin}};
`;

const IconButtonContent = styled.span<{ dimension?: Dimension; appearance?: IconButtonAppearance }>`
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
    fill: ${(p) =>
      p.appearance === 'primary' ? p.theme.color['Primary/Primary 60 Main'] : p.theme.color['Neutral/Neutral 50']};
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

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      appearance = 'secondary',
      dimension = 'xl',
      type = 'button',
      loading = false,
      skeleton = false,
      disabled = false,
      children,
      ...props
    }: IconButtonProps,
    ref,
  ) => {
    const disabledOptions = loading || disabled;
    const renderContent = () => {
      if (loading) {
        return (
          <IconButtonContent>
            <Spinner />
          </IconButtonContent>
        );
      }
      if (skeleton) {
        return <IconButtonContent />;
      }
      return (
        <IconButtonContent dimension={dimension} appearance={appearance}>
          {children}
        </IconButtonContent>
      );
    };

    return (
      <StyledButton
        ref={ref}
        dimension={dimension}
        disabled={disabledOptions}
        type={type}
        skeleton={skeleton}
        appearance={appearance}
        {...props}
      >
        {renderContent()}
      </StyledButton>
    );
  },
);

IconButton.displayName = 'IconButton';
