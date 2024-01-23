import { useState } from 'react';
import { FloatingButton } from '#src/components/FloatingButton';
import type { FloatingButtonProps } from '#src/components/FloatingButton';

import { GroupWrapper, MenuWrapper } from './style';

type Dimension = 'm' | 'xl';

export interface FloatingButtonMenuProps extends FloatingButtonProps {
  /** Иконка для размещения в основной кнопке */
  icon?: React.ReactNode;
  /** Состояние видимости меню */
  isOpen?: boolean;
  /** Обработчик события на изменение видимости меню */
  onOpenChange?: (isOpen: boolean) => void;
  /** Размер кнопки */
  dimension?: Dimension;
  /** Мобильная версия компонента */
  mobile?: boolean;
  /** Отключение кнопки */
  disabled?: boolean;
}

export const FloatingButtonMenu = ({
  icon,
  isOpen,
  onOpenChange,
  dimension = 'm',
  mobile = false,
  disabled = false,
  children,
  ...props
}: FloatingButtonMenuProps) => {
  const [open, setOpened] = useState(false);
  return (
    <GroupWrapper $dimension={dimension} $mobile={mobile} data-open={open}>
      <MenuWrapper $dimension={dimension}>{children}</MenuWrapper>
      <FloatingButton onClick={() => setOpened(!open)}>Toggle menu</FloatingButton>
    </GroupWrapper>
  );
};
