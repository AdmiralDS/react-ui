import { useCallback } from 'react';
import { keyboardKey } from '#src/components/common/keyboardKey';

interface KeyboardLikeEvent {
  key?: string;
  code?: string;
  keyCode?: number;
  which?: number;
  defaultPrevented?: boolean;
  preventDefault: () => void;
  stopPropagation: () => void;
}

export interface UseDropdownTriggerKeyboardOptions {
  isOpen: boolean;
  disabled?: boolean;
  onOpen: () => void;
  onClose: () => void;
  /** Не открывать dropdown по пробелу, если он уже открыт */
  preventSpaceWhenOpen?: boolean;
}

/** Общая клавиатурная логика триггера dropdown: открытие и закрытие панели. */
export const useDropdownTriggerKeyboard = ({
  isOpen,
  disabled,
  onOpen,
  onClose,
  preventSpaceWhenOpen = true,
}: UseDropdownTriggerKeyboardOptions) => {
  return useCallback(
    (e: KeyboardLikeEvent) => {
      if (disabled) return;

      const code = keyboardKey.getCode(e);

      if (code === keyboardKey[' ']) {
        if (preventSpaceWhenOpen && isOpen) return;

        if (!isOpen) {
          e.preventDefault();
          onOpen();
          e.stopPropagation();
        }
        return;
      }

      if (code === keyboardKey.Enter && !isOpen) {
        e.preventDefault();
        onOpen();
        e.stopPropagation();
        return;
      }

      if ((code === keyboardKey.ArrowDown || code === keyboardKey.ArrowUp) && !isOpen) {
        onOpen();
        e.stopPropagation();
        return;
      }

      if (code === keyboardKey.Escape && isOpen) {
        onClose();
        e.preventDefault();
        e.stopPropagation();
      }
    },
    [disabled, isOpen, onClose, onOpen, preventSpaceWhenOpen],
  );
};
