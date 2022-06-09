import * as React from 'react';
import type { HTMLAttributes } from 'react';
import { keyboardKey } from '#src/components/common/keyboardKey';
import { refSetter } from '#src/components/common/utils/refSetter';
import { OpenStatusButton } from '#src/components/OpenStatusButton';
import { TextButton, TextButtonProps } from '#src/components/TextButton';
import type { Appearance as TextButtonAppearance } from '#src/components/TextButton/types';
import type { MenuButtonAppearance } from '#src/components/MenuButton';
import type { ItemProps } from '#src/components/MenuItem';
import { DropdownContainer } from '#src/components/DropdownContainer';
import { ItemIdentifier, Menu } from '#src/components/Menu';
import { IconContainer } from '#src/components/TextButton/commonMixin';
import styled from 'styled-components';
import { Button, ButtonProps } from '#src/components/Button';
import { uid } from '#src/components/common/uid';

const StyledTextButton = styled(TextButton)<{ menuOpened?: boolean; appearance?: TextButtonAppearance }>`
  &:focus {
    color: ${({ theme, appearance, menuOpened }) =>
      menuOpened
        ? appearance === 'primary'
          ? theme.color['Primary/Primary 60 Main']
          : theme.color['Neutral/Neutral 90']
        : 'inherited'};
    ${IconContainer} {
      & *[fill^='#'] {
        fill: ${({ theme, appearance, menuOpened }) =>
          menuOpened
            ? appearance === 'primary'
              ? theme.color['Primary/Primary 60 Main']
              : theme.color['Neutral/Neutral 50']
            : 'inherited'};
      }
    }
  }
`;

interface MenuProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'onChange'> {
  /** Опции выпадающего списка */
  items: Array<ItemProps>;
  /** Выбранная опция */
  selected: string | null;
  /** Колбек на изменение выбранной опции */
  onChange: (id: string) => void;
  /** Колбек на открытие меню */
  onOpen?: () => void;
  /** Колбек на закрытие меню */
  onClose?: () => void;
  /** Отключение компонента */
  disabled?: boolean;
  /** Выравнивание выпадающего меню относительно компонента https://developer.mozilla.org/en-US/docs/Web/CSS/align-self */
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
}

interface TextButtonMenuProps extends Omit<TextButtonProps, 'onChange'>, MenuProps {
  useTextButton: true;
}

interface MenuButtonMenuProps extends Omit<ButtonProps, 'onChange'>, MenuProps {
  useTextButton: false;
}

export type ButtonMenuProps = { menuOpened?: boolean; appearance?: TextButtonAppearance | MenuButtonAppearance } & (
  | TextButtonMenuProps
  | MenuButtonMenuProps
);

export const ButtonMenu = React.forwardRef<HTMLButtonElement, ButtonMenuProps>(
  (
    {
      dimension = 'm',
      appearance = 'primary',
      disabled = false,
      loading = false,
      alignSelf = 'flex-end',
      onClose,
      onOpen,
      items,
      selected,
      onChange,
      useTextButton,
      children,
      ...props
    },
    ref,
  ) => {
    const [menuOpened, setMenuOpened] = React.useState<boolean>(false);
    const btnRef = React.useRef<HTMLButtonElement>(null);

    const reverseMenu = () => {
      setMenuOpened((prevOpened) => {
        prevOpened ? onClose?.() : onOpen?.();
        return !prevOpened;
      });
    };
    const closeMenu = () => {
      setMenuOpened(false);
      onClose?.();
      btnRef.current?.focus();
    };

    const clickOutside = (e: Event) => {
      if (e.target && btnRef.current?.contains(e.target as Node)) {
        return;
      }
      setMenuOpened(false);
    };

    const handleBtnKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      const code = keyboardKey.getCode(e);
      switch (code) {
        case keyboardKey.Escape:
          if (menuOpened) closeMenu();
          break;
        case keyboardKey.Enter:
        case keyboardKey[' ']:
          if (!menuOpened) {
            e.stopPropagation();
            setMenuOpened(true);
            onOpen?.();
            e.preventDefault();
          }
          break;
        default:
          break;
      }
    };

    const handleClick = (selected: ItemIdentifier) => {
      if (selected) {
        onChange?.(selected.toString());
      }
      closeMenu();
    };

    return (
      <>
        {useTextButton ? (
          <StyledTextButton
            {...props}
            ref={refSetter(ref, btnRef)}
            dimension={dimension === 's' ? 's' : 'm'}
            appearance={appearance === 'primary' ? 'primary' : 'secondary'}
            displayRight
            disabled={disabled}
            loading={loading}
            onKeyDown={handleBtnKeyDown}
            onClick={reverseMenu}
            aria-expanded={menuOpened}
            menuOpened={menuOpened}
            icon={<OpenStatusButton $isOpen={menuOpened} aria-hidden />}
          />
        ) : (
          <Button
            {...props}
            ref={refSetter(ref, btnRef)}
            dimension={dimension}
            appearance={appearance}
            disabled={disabled}
            loading={loading}
            onKeyDown={handleBtnKeyDown}
            onClick={reverseMenu}
            aria-expanded={menuOpened}
          >
            {React.Children.toArray(children).map((child) =>
              typeof child === 'string' ? <span key={uid()}>{child}</span> : child,
            )}
            <OpenStatusButton $isOpen={menuOpened} aria-hidden appearance={'white'} />
          </Button>
        )}
        {menuOpened && !loading && (
          <DropdownContainer role="listbox" alignSelf={alignSelf} targetRef={btnRef} onClickOutside={clickOutside}>
            <Menu
              model={items}
              selected={selected}
              onSelectItem={handleClick}
              dimension={dimension === 'xl' ? 'l' : dimension}
            />
          </DropdownContainer>
        )}
      </>
    );
  },
);

ButtonMenu.displayName = 'ButtonMenu';
