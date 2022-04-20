import type { HTMLAttributes, KeyboardEvent, MouseEvent, ReactNode } from 'react';
import * as React from 'react';
// import styled from 'styled-components';
import { keyboardKey } from '#src/components/common/keyboardKey';
import { uid } from '#src/components/common/uid';
import { refSetter } from '#src/components/common/utils/refSetter';
import { OpenStatusButton } from '#src/components/OpenStatusButton';
import { Dropdown } from '#src/components/Dropdown';
import { Button } from '#src/components/Button';

// import { PseudoText } from '#src/components/skeleton/PseudoText';
// import { PseudoIcon } from '#src/components/skeleton/PseudoIcon';
import { DropDownItem } from '#src/components/DropDownItem';
import { Spinner } from '#src/components/Spinner';

// const SkeletonText = styled(PseudoText)`
//   margin-right: 8px;
// `;

type Dimension = 'xl' | 'l' | 'm' | 's';
type Appearance = 'primary' | 'secondary' | 'ghost';

export interface MenuButtonItem extends HTMLAttributes<HTMLLIElement> {
  /** Содержимое опции, предназначенное для отображения */
  display: ReactNode;
  /** Отключение опции */
  disabled?: boolean;
  /** Значение опции */
  value?: string | number | undefined;
}

export interface MenuButtonProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'onChange'> {
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
  /** Размер компонента */
  dimension?: Dimension;
  /** Внешний вид компонента */
  appearance?: Appearance;
  /** Отключение компонента */
  disabled?: boolean;
  /** Состояние loading */
  loading?: boolean;
  /** Состояние skeleton */
  skeleton?: boolean;
  /** Выравнивание выпадающего меню относительно компонента https://developer.mozilla.org/en-US/docs/Web/CSS/align-self */
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
}

export const MenuButton = React.forwardRef<HTMLButtonElement, MenuButtonProps>(
  (
    {
      children,
      dimension = 'l',
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
    const menuDimension = dimension === 'xl' ? 'l' : dimension;
    const menuWidth = dimension === 's' ? '240px' : '280px';
    const spinnerDimension = dimension === 's' ? 's' : 'm';

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
    const renderContent = () => {
      if (loading) return <Spinner dimension={spinnerDimension} />;
      // if (skeleton)
      //   return (
      //     <>
      //       <SkeletonText dimension={dimension} appearance={appearance} />
      //       <PseudoIcon dimension={dimension} appearance={appearance} />
      //     </>
      //   );
      return (
        <>
          {React.Children.toArray(children).map((child) =>
            typeof child === 'string' ? <span key={uid()}>{child}</span> : child,
          )}
          <OpenStatusButton $isOpen={menuOpened} aria-hidden appearance={'white'} />
        </>
      );
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
        <Button
          {...props}
          ref={refSetter(ref, btnRef)}
          dimension={dimension}
          appearance={appearance}
          disabled={loading || skeleton ? true : disabled}
          onKeyDown={handleBtnKeyDown}
          onClick={reverseMenu}
          aria-expanded={menuOpened}
        >
          {renderContent()}
        </Button>
        {menuOpened && !loading && !skeleton && (
          <Dropdown
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
                dimension={menuDimension}
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
          </Dropdown>
        )}
      </>
    );
  },
);
