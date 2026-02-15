import styled, { useTheme } from 'styled-components';
import { ReactComponent as ChevronLeft } from '@admiral-ds/icons/build/system/ChevronLeftOutline.svg';
import { ReactComponent as ChevronRight } from '@admiral-ds/icons/build/system/ChevronRightOutline.svg';
import { memo } from 'react';

import { Button } from '#src/components/Button';
import { LIGHT_THEME } from '#src/components/themes';
import type { PaginationOneProps } from '#src/components/PaginationOne';

const ButtonsWrapper = styled.div`
  display: flex;
  & > button {
    margin-left: 8px;
  }
  [data-simple='true'] & {
    margin-left: 20px;
  }
`;

const nothing = () => ({});

type ButtonsProps = {
  dimension: PaginationOneProps['dimension'];
  localeBackwardText: string | undefined;
  localeForwardText: string | undefined;
  leftButtonPropsConfig: PaginationOneProps['leftButtonPropsConfig'] | undefined;
  rightButtonPropsConfig: PaginationOneProps['rightButtonPropsConfig'] | undefined;
  pageDecrement: () => void;
  pageIncrement: () => void;
  backButtonDisabled: boolean;
  forwardButtonDisabled: boolean;
};

export const SideButtons = memo(
  ({
    dimension,
    localeBackwardText,
    localeForwardText,
    leftButtonPropsConfig = nothing,
    rightButtonPropsConfig = nothing,
    pageDecrement,
    pageIncrement,
    backButtonDisabled,
    forwardButtonDisabled,
  }: ButtonsProps) => {
    const theme = useTheme() || LIGHT_THEME;

    const { backwardText: theme_backwardText, forwardText: theme_forwardText } =
      theme.locales[theme.currentLocale].paginationOne;

    const backwardText = localeBackwardText || theme_backwardText;
    const forwardText = localeForwardText || theme_forwardText;

    const leftButtonProps = {
      appearance: 'tertiary',
      dimension,
      iconStart: <ChevronLeft />,
      displayAsSquare: true,
      'aria-label': backwardText,
      disabled: backButtonDisabled,
      onClick: pageDecrement,
    } satisfies React.ComponentProps<typeof Button>;

    const rightButtonProps = {
      appearance: 'tertiary',
      dimension,
      iconStart: <ChevronRight />,
      displayAsSquare: true,
      'aria-label': forwardText,
      disabled: forwardButtonDisabled,
      onClick: pageIncrement,
    } satisfies React.ComponentProps<typeof Button>;

    return (
      <ButtonsWrapper>
        <Button {...leftButtonProps} {...leftButtonPropsConfig(leftButtonProps)} />
        <Button {...rightButtonProps} {...rightButtonPropsConfig(rightButtonProps)} />
      </ButtonsWrapper>
    );
  },
);
