import * as React from 'react';
import { MenuButtonItem } from '#src/components/MenuButton';
import { HTMLAttributes, KeyboardEvent, MouseEvent } from 'react';
import { keyboardKey } from '#src/components/common/keyboardKey';
import { refSetter } from '#src/components/common/utils/refSetter';
import { OpenStatusButton } from '#src/components/OpenStatusButton';
import { DropDownItem } from '#src/components/DropDownItem';
import styled from 'styled-components';
import { Dropdown } from '#src/components/Dropdown';
import { TextButton } from '#src/components/TextButton';
import { Appearance, Dimension } from '#src/components/TextButton/types';

const StyledDropdown = styled(Dropdown)`
  padding: 8px 0;
`;

export interface TextButtonMenuProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'onChange'> {
  /** Внешний вид кнопки */
  appearance?: Appearance;
  /** Размер кнопки */
  dimension?: Dimension;
  /** Текст кнопки */
  text?: string;
  /** Состояние загрузки */
  loading?: boolean;
  /** Состояние skeleton */
  skeleton?: boolean;

  /** Массив опций */
  options: Array<MenuButtonItem>;
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

export const TextButtonMenu = React.forwardRef<HTMLButtonElement, TextButtonMenuProps>(
  (
    {
      dimension = 'm',
      appearance = 'primary',
      disabled = false,
      loading = false,
      skeleton = false,
      alignSelf = 'flex-end',
      onClose,
      onOpen,
      options,
      selected,
      onChange,
      ...props
    },
    ref,
  ) => {
    const [menuOpened, setMenuOpened] = React.useState<boolean>(false);
    const btnRef = React.useRef<HTMLButtonElement>(null);
    const menuWidth = dimension === 's' ? '240px' : '280px';

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

    const handleBtnKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
      const code = keyboardKey.getCode(e);
      if (code === keyboardKey.ArrowDown || code === keyboardKey.Enter || code === keyboardKey[' ']) {
        setMenuOpened(true);
        onOpen?.();
        e.preventDefault();
      }
    };

    const handleClick = (e: MouseEvent<HTMLLIElement>) => {
      onChange(e.currentTarget.id);
      closeMenu();
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLLIElement>) => {
      const code = keyboardKey.getCode(e);
      if (code === keyboardKey.Enter || code === keyboardKey[' ']) {
        onChange(e.currentTarget.id);
        closeMenu();
        e.preventDefault();
      }
    };

    const handleMenuKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
      const code = keyboardKey.getCode(e);
      if (code === keyboardKey.Escape || code === keyboardKey.Tab) {
        closeMenu();
      }
    };

    return (
      <>
        <TextButton
          {...props}
          ref={refSetter(ref, btnRef)}
          dimension={dimension}
          appearance={appearance}
          displayRight
          disabled={skeleton ? true : disabled}
          loading={loading}
          onKeyDown={handleBtnKeyDown}
          onClick={reverseMenu}
          aria-expanded={menuOpened}
          icon={<OpenStatusButton $isOpen={menuOpened} aria-hidden />}
        >
          {/*{React.Children.toArray(children).map((child) =>
            typeof child === 'string' ? <span key={uid()}>{child}</span> : child,
          )}*/}
        </TextButton>
        {menuOpened && !loading && !skeleton && (
          <StyledDropdown
            role="listbox"
            targetRef={btnRef}
            onClickOutside={clickOutside}
            style={{ width: menuWidth }}
            alignSelf={alignSelf}
            onKeyDown={handleMenuKeyDown}
          >
            {options.map(({ display, disabled: optionDisabled, id, ...props }) => (
              <DropDownItem
                {...props}
                key={id}
                id={id}
                dimension={dimension}
                disabled={disabled || optionDisabled}
                selected={selected === id}
                aria-selected={selected === id}
                role="option"
                onClick={
                  disabled || optionDisabled
                    ? (e) => {
                        e.stopPropagation();
                        e.preventDefault();
                      }
                    : handleClick
                }
                onKeyDown={handleKeyDown}
              >
                {display}
              </DropDownItem>
            ))}
          </StyledDropdown>
        )}
      </>
    );
  },
);

TextButtonMenu.displayName = 'TextButtonMenu';
