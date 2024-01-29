import { useState, useMemo } from 'react';
import type { CSSProperties } from 'react';
import type { RuleSet } from 'styled-components';
import { FloatingButton } from '#src/components/FloatingButton';
import type { FloatingButtonProps } from '#src/components/FloatingButton';
import { ReactComponent as CloseOutline } from '@admiral-ds/icons/build/service/CloseOutline.svg';

import { GroupWrapper, MenuWrapper } from './style';
import { FloatingButtonMenuContext } from '../FloatingButton/FloatingButtonMenuContext';

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
  isOpen,
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
  const [open, setOpened] = useState(false);
  const contextValue = useMemo(
    () => ({ dimension, disabled, appearance: 'secondary' as FloatingButtonProps['appearance'] }),
    [dimension, disabled],
  );
  return (
    <GroupWrapper
      data-open={open}
      $dimension={dimension}
      $mobile={mobile}
      $dropContainerCssMixin={containerCssMixin}
      className={containerClassName}
      style={containerStyle}
    >
      <FloatingButtonMenuContext.Provider value={contextValue}>
        <MenuWrapper $dimension={dimension}>{children}</MenuWrapper>
      </FloatingButtonMenuContext.Provider>
      <FloatingButton onClick={() => setOpened(!open)} appearance={appearance} dimension={dimension} {...props}>
        {open ? <CloseOutline /> : icon}
      </FloatingButton>
    </GroupWrapper>
  );
};

FloatingButtonMenu.displayName = 'FloatingButtonMenu';
