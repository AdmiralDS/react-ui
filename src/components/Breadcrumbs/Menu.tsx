import type { KeyboardEvent, MouseEvent } from 'react';
import React, { HTMLAttributes, useRef, useState } from 'react';
import { ReactComponent as ButtonS } from '#/components/OverflowMenu/svgs/ButtonS.svg';
import styled, { css } from 'styled-components';
import { refSetter } from '#/components/common/utils/refSetter';
import { DropDownItem } from '#/components/DropDownItem';

import type { BreadcrumbProps } from './BreadCrumb';
import { InverseTooltip } from './InverseTooltip';
import { Dropdown } from '#/components/Dropdown';

const focusStyle = css`
  & *[fill^='#'] {
    fill: ${({ theme }) => theme.color.basic.hover};
  }

  &:before {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    bottom: -4px;
    right: -4px;
    border: 2px solid ${({ theme }) => theme.color.basic.hover};
    border-radius: 4px;
  }
`;

const Button = styled.button<{ $menuOpened: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  border: 0;
  outline: none;
  padding: 0;
  margin-left: 4px;
  background: transparent;
  -webkit-tap-highlight-color: transparent;
  overflow: visible;

  & svg {
    flex-shrink: 0;
  }

  & *[fill^='#'] {
    fill: ${({ theme }) => theme.color.basic.tertiary};
  }

  &:hover *[fill^='#'] {
    fill: ${({ theme }) => theme.color.basic.hover};
  }

  ${({ $menuOpened }) => $menuOpened && focusStyle}
  &:focus {
    ${focusStyle}
  }

  &:active *[fill^='#'] {
    fill: ${({ theme }) => theme.color.basic.press};
  }

  &:disabled {
    cursor: default;

    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color.text.tertiary};
    }
  }
`;

export const ButtonContent = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Option = styled.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 100%;
  height: 100%;
  text-decoration: none;

  &,
  &:visited,
  &:hover,
  &:active,
  &:focus {
    color: inherit;
  }
`;

export interface MenuButtonProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'onChange'> {
  /** Массив опций */
  options: Array<BreadcrumbProps>;
}

export const MenuButton = React.forwardRef<HTMLButtonElement, MenuButtonProps>(({ options, ...props }, ref) => {
  const [menuOpened, setMenuOpened] = useState<boolean>(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  const reverseMenu = () => {
    setMenuOpened((prevOpened) => !prevOpened);
  };
  const closeMenu = () => {
    setMenuOpened(false);
    btnRef.current?.focus();
  };

  const clickOutside = (e: Event) => {
    if (e.target && btnRef.current?.contains(e.target as Node)) {
      return;
    }
    setMenuOpened(false);
  };

  const handleBtnKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      setMenuOpened(true);
      e.preventDefault();
    }
  };

  const handleClick = (e: MouseEvent<HTMLLIElement>) => {
    closeMenu();
  };
  const handleKeyDown = (e: KeyboardEvent<HTMLLIElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      closeMenu();
      e.preventDefault();
    }
  };

  return (
    <>
      <Button
        {...props}
        ref={refSetter(ref, btnRef)}
        $menuOpened={menuOpened}
        onKeyDown={handleBtnKeyDown}
        onClick={reverseMenu}
        aria-expanded={menuOpened}
      >
        <ButtonContent>
          <ButtonS width={16} height={16} aria-hidden />
        </ButtonContent>
      </Button>
      {menuOpened && (
        <Dropdown targetRef={btnRef} onClickOutside={clickOutside} style={{ width: 'fit-content' }}>
          {options.map(({ text, url, ...props }) => {
            const tooltip = text.length > 40;
            const renderText = () =>
              tooltip ? (
                <InverseTooltip style={{ marginTop: '8px' }} renderContent={() => text}>
                  {text.slice(0, 37) + '...'}
                </InverseTooltip>
              ) : (
                text
              );
            return (
              <DropDownItem
                {...props}
                key={text}
                value={text}
                dimension="s"
                role="option"
                onClick={handleClick}
                onKeyDown={handleKeyDown}
              >
                <Option href={url}>{renderText()}</Option>
              </DropDownItem>
            );
          })}
        </Dropdown>
      )}
    </>
  );
});
