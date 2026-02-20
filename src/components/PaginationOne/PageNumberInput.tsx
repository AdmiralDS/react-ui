import { useState, useRef, useEffect, useCallback, forwardRef, memo } from 'react';

import { MenuActionsPanel } from '#src/components/Menu/MenuActionsPanel';
import { TextInput } from '#src/components/input';
import { keyboardKey } from '#src/components/common/keyboardKey.js';
import type { PaginationOneProps } from '#src/components/PaginationOne';
import type { MenuDimensions } from '#src/components/Menu';
import { refSetter } from '#src/components/common/utils/refSetter';

type PageNumberInputProps = {
  page: PaginationOneProps['page'];
  pageSize: PaginationOneProps['pageSize'];
  totalPages: number;
  dimension: MenuDimensions;
  activePageNumber: string | undefined;
  setActivePageNumber: (value: string) => void;
  setMenuVisible: (isVisible: boolean) => void;
  onChange: PaginationOneProps['onChange'];
};

export const PageNumberInput = memo(
  forwardRef<HTMLInputElement, PageNumberInputProps>(
    (
      { dimension, page, pageSize, totalPages, activePageNumber, setActivePageNumber, setMenuVisible, onChange },
      ref,
    ) => {
      /**
       * При монтировании инпута важно, чтобы его значение было равно выбранной странице (page).
       * Дальнейшая синхронизация значений не нужна, так как при выборе новой страницы
       * дропдаун с инпутом будут закрыты.
       **/
      const [inputPageNumber, setInputPageNumber] = useState(page.toString());
      const pageNumberInputRef = useRef<HTMLInputElement>(null);

      useEffect(() => {
        pageNumberInputRef.current?.select();
        pageNumberInputRef.current?.focus();
      }, []);

      useEffect(() => {
        /** Если activePageNumber обновилось независимо от инпута,
         * например, при срабатывании onActivateItem,
         * нужно синхронизировать inputPageNumber с новым значением активной опции */
        if (activePageNumber && inputPageNumber !== activePageNumber) {
          setInputPageNumber(activePageNumber);
        }
      }, [activePageNumber]);

      const parsePageNumber = useCallback(
        (pageSelected: string): number => {
          if (pageSelected === '') {
            return page;
          }
          const pageSelectedNumber = Number.parseInt(pageSelected, 10);
          if (Number.isNaN(pageSelectedNumber) || pageSelectedNumber < 1) {
            return 1;
          }
          if (pageSelectedNumber > totalPages) {
            return totalPages;
          }
          return pageSelectedNumber;
        },
        [page, totalPages],
      );

      const handleInputChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
          let inputValue = e.target.value;
          inputValue = inputValue.replace(/\D/g, '');
          setInputPageNumber(inputValue);
          setActivePageNumber(parsePageNumber(inputValue).toString());
        },
        [parsePageNumber],
      );

      const handleInputKeyDown = useCallback(
        (e: React.KeyboardEvent) => {
          const code = keyboardKey.getCode(e);

          if (code === keyboardKey.Enter) {
            setMenuVisible(false);
            const page = parsePageNumber(inputPageNumber);
            onChange({ page, pageSize });
            setActivePageNumber(page.toString());
          } else if (code === keyboardKey.ArrowDown || code === keyboardKey.ArrowUp) {
            pageNumberInputRef.current?.blur();
          } else if (code === keyboardKey.Escape) {
            setMenuVisible(false);
            setActivePageNumber(page.toString());
          }
        },
        [inputPageNumber, onChange, page, pageSize],
      );

      return (
        <MenuActionsPanel dimension={dimension}>
          <TextInput
            ref={refSetter(ref, pageNumberInputRef)}
            dimension="s"
            value={inputPageNumber}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
          />
        </MenuActionsPanel>
      );
    },
  ),
);
