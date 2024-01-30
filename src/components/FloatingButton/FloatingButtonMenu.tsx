import { useState, useMemo, useEffect, useRef } from 'react';
import type { CSSProperties } from 'react';
import type { RuleSet } from 'styled-components';
import { FloatingButton } from '#src/components/FloatingButton';
import type { FloatingButtonProps } from '#src/components/FloatingButton';
import { ReactComponent as CloseOutline } from '@admiral-ds/icons/build/service/CloseOutline.svg';

import { GroupWrapper, MenuWrapper, TRANSITION_DURATION } from './style';
import { FloatingButtonMenuContext } from './FloatingButtonMenuContext';
import { useMountTransition } from './useMountTransition';

type Dimension = 'm' | 'xl';

export interface FloatingButtonMenuProps extends FloatingButtonProps {
  /** Иконка для размещения в основной кнопке */
  icon?: React.ReactNode;
  /** Состояние видимости меню */
  isOpen?: boolean;
  /** Обработчик события на изменение видимости меню */
  onOpenChange?: (isOpen: boolean) => void;
  /** Размер компонента */
  dimension?: Dimension;
  /** Мобильная версия компонента */
  mobile?: boolean;
  /** Отключение компонента */
  disabled?: boolean;
  /** Позволяет добавлять миксин для контейнера компонента, созданный с помощью styled css  */
  containerCssMixin?: RuleSet<object>;
  /** Позволяет добавлять класс на контейнер компонента  */
  containerClassName?: string;
  /** Позволяет добавлять стили на контейнер компонента  */
  containerStyle?: CSSProperties;
}

export const FloatingButtonMenu = ({
  icon,
  isOpen: propIsOpen,
  onOpenChange,
  appearance = 'primary',
  dimension = 'm',
  mobile = false,
  disabled = false,
  type = 'button',
  containerClassName,
  containerStyle,
  containerCssMixin,
  children,
  ...props
}: FloatingButtonMenuProps) => {
  const [open, setOpen] = useState(false);
  const isOpen = propIsOpen ?? open;

  const hasTransitionedIn = useMountTransition(isOpen, TRANSITION_DURATION);

  const floatButtonGroupRef = useRef<HTMLDivElement>(null);
  const floatButtonRef = useRef<HTMLButtonElement>(null);

  const contextValue = useMemo(
    () => ({ dimension, disabled, appearance: 'secondary' as FloatingButtonProps['appearance'] }),
    [dimension, disabled],
  );

  const handleOpenChange = () => {
    setOpen((prevState) => {
      onOpenChange?.(!prevState);
      return !prevState;
    });
  };

  const onClick = (e: MouseEvent) => {
    // клик по основной кнопке приводит к изменению open на противоположное
    // клик вне компонента приводит к закрытию меню
    if (floatButtonGroupRef.current?.contains(e.target as Node)) {
      if (floatButtonRef.current?.contains(e.target as Node)) {
        handleOpenChange();
      }
      return;
    }
    setOpen(false);
    onOpenChange?.(false);
  };

  useEffect(() => {
    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <GroupWrapper
      ref={floatButtonGroupRef}
      $dimension={dimension}
      $mobile={mobile}
      $dropContainerCssMixin={containerCssMixin}
      className={containerClassName}
      style={containerStyle}
    >
      {(isOpen || hasTransitionedIn) && (
        <FloatingButtonMenuContext.Provider value={contextValue}>
          <MenuWrapper $dimension={dimension} data-visible={isOpen && hasTransitionedIn}>
            {children}
          </MenuWrapper>
        </FloatingButtonMenuContext.Provider>
      )}
      <FloatingButton ref={floatButtonRef} appearance={appearance} dimension={dimension} {...props}>
        {isOpen ? <CloseOutline /> : icon}
      </FloatingButton>
    </GroupWrapper>
  );
};

FloatingButtonMenu.displayName = 'FloatingButtonMenu';
