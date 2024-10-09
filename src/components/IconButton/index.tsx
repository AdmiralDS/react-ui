import type { ButtonHTMLAttributes } from 'react';
import { forwardRef } from 'react';
import styled from 'styled-components';

import { SpinnerIcon } from '#src/components/Spinner/SpinnerIcon';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';
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

const StyledButton = styled.button<{
  $skeleton?: boolean;
  $loading?: boolean;
  $appearance?: IconButtonAppearance;
}>`
  box-sizing: border-box;
  display: inline-block;
  border: none;
  border-radius: ${(p) =>
    p.$skeleton ? 0 : `var(--admiral-border-radius-Medium, ${mediumGroupBorderRadius(p.theme.shape)})`};
  background: ${({ $skeleton }) => ($skeleton ? 'red' : 'transparent')};
  -webkit-tap-highlight-color: transparent;
  appearance: none;
  vertical-align: middle;

  .icon-button-group[data-dimension='xl'] &,
  &[data-dimension='xl'] {
    padding: 0;
    height: 56px;
    width: 56px;
  }

  .icon-button-group[data-dimension='l'] &,
  &[data-dimension='l'] {
    height: 48px;
    width: 48px;
  }

  .icon-button-group[data-dimension='m'] &,
  &[data-dimension='m'] {
    height: 40px;
    width: 40px;
  }

  .icon-button-group[data-dimension='s'] &,
  &[data-dimension='s'] {
    height: 32px;
    width: 32px;
  }

  &:hover {
    cursor: ${({ $skeleton }) => ($skeleton ? 'default' : 'pointer')};
    background: var(--admiral-color-Opacity_Hover, ${(p) => p.theme.color['Opacity/Hover']});
    & *[fill^='#'] {
      fill: ${(p) =>
        p.$appearance === 'primary'
          ? `var(--admiral-color-Primary_Primary60Main, ${p.theme.color['Primary/Primary 60 Main']})`
          : `var(--admiral-color-Neutral_Neutral50, ${p.theme.color['Neutral/Neutral 50']})`};
    }
  }
  &:active {
    background: var(--admiral-color-Opacity_Press, ${(p) => p.theme.color['Opacity/Press']});
    & *[fill^='#'] {
      fill: ${(p) =>
        p.$appearance === 'primary'
          ? `var(--admiral-color-Primary_Primary60Main, ${p.theme.color['Primary/Primary 60 Main']})`
          : `var(--admiral-color-Neutral_Neutral50, ${p.theme.color['Neutral/Neutral 50']})`};
    }
  }

  &:disabled {
    cursor: ${({ $loading }) => ($loading ? 'default' : 'not-allowed')};
    background-color: transparent;
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
    }
  }

  &:focus-visible {
    outline-offset: 2px;
    outline: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']}) solid 2px;
  }

  ${({ $skeleton }) => $skeleton && skeletonAnimationMixin};
`;

const IconButtonContent = styled.span<{ $dimension?: Dimension; $appearance?: IconButtonAppearance }>`
  vertical-align: top;
  display: inline-flex;
  flex-direction: row;
  overflow: hidden;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  width: ${({ $dimension }) => ($dimension === 's' ? 20 : 24)}px;
  height: ${({ $dimension }) => ($dimension === 's' ? 20 : 24)}px;

  .icon-button-group[data-dimension='m'] &&,
  .icon-button-group[data-dimension='l'] &&,
  .icon-button-group[data-dimension='xl'] && {
    width: 24px;
    height: 24px;
  }
  .icon-button-group[data-dimension='s'] && {
    width: 20px;
    height: 20px;
  }

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
      p.$appearance === 'primary'
        ? `var(--admiral-color-Primary_Primary60Main, ${p.theme.color['Primary/Primary 60 Main']})`
        : `var(--admiral-color-Neutral_Neutral50, ${p.theme.color['Neutral/Neutral 50']})`};
  }

  & > svg {
    width: 100%;
    height: 100%;
  }
`;

const SpinnerContainer = styled(IconButtonContent)`
  container-type: inline-size;
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
          <SpinnerContainer $dimension={dimension}>
            <SpinnerIcon />
          </SpinnerContainer>
        );
      }
      if (skeleton) {
        return <IconButtonContent $dimension={dimension} />;
      }
      return (
        <IconButtonContent $dimension={dimension} $appearance={appearance}>
          {children}
        </IconButtonContent>
      );
    };

    return (
      <StyledButton
        ref={ref}
        data-dimension={dimension}
        disabled={disabledOptions}
        type={type}
        $skeleton={skeleton}
        $loading={loading}
        $appearance={appearance}
        {...props}
      >
        {renderContent()}
      </StyledButton>
    );
  },
);

IconButton.displayName = 'IconButton';
