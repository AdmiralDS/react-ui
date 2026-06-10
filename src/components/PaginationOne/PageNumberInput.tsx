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
  preselectedPageNumber: string | undefined;
  setPreselectedPageNumber: (value: string) => void;
  preselectedModeActive: boolean;
  setMenuVisible: (isVisible: boolean) => void;
  onChange: PaginationOneProps['onChange'];
};

export const PageNumberInput = memo(
  forwardRef<HTMLInputElement, PageNumberInputProps>(
    (
      {
        dimension,
        page,
        pageSize,
        totalPages,
        activePageNumber,
        setActivePageNumber,
        preselectedPageNumber,
        setPreselectedPageNumber,
        preselectedModeActive,
        setMenuVisible,
        onChange,
      },
      ref,
    ) => {
      /**
       * При монтировании инпута важно, чтобы его значение было равно выбранной странице (page).
       * Дальнейшая синхронизация значений не нужна, так как при выборе новой страницы
       * дропдаун с инпутом будут закрыты.
       **/
      const [inputPageNumber, setInputPageNumber] = useState(page.toString());
      const pageNumberInputRef = useRef<HTMLInputElement>(null);
      const navigatedPageNumber = preselectedModeActive ? preselectedPageNumber : activePageNumber;

      useEffect(() => {
        pageNumberInputRef.current?.select();
        pageNumberInputRef.current?.focus();
      }, []);

      useEffect(() => {
        /** Синхронизируем input с текущей клавиатурной позицией в меню */
        if (navigatedPageNumber && inputPageNumber !== navigatedPageNumber) {
          setInputPageNumber(navigatedPageNumber);
        }
      }, [navigatedPageNumber]);

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

      const setNavigatedPageNumber = useCallback(
        (value: string) => {
          if (preselectedModeActive) {
            setPreselectedPageNumber(value);
          } else {
            setActivePageNumber(value);
          }
        },
        [preselectedModeActive, setActivePageNumber, setPreselectedPageNumber],
      );

      const handleInputChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
          let inputValue = e.target.value;
          inputValue = inputValue.replace(/\D/g, '');
          setInputPageNumber(inputValue);
          const parsedPage = parsePageNumber(inputValue).toString();
          setNavigatedPageNumber(parsedPage);
        },
        [parsePageNumber, setNavigatedPageNumber],
      );

      const handleInputKeyDown = useCallback(
        (e: React.KeyboardEvent) => {
          const code = keyboardKey.getCode(e);

          if (code === keyboardKey.Enter) {
            setMenuVisible(false);
            const page = parsePageNumber(inputPageNumber);
            onChange({ page, pageSize });
            const pageString = page.toString();
            setActivePageNumber(pageString);
            setPreselectedPageNumber(pageString);
          } else if (code === keyboardKey.ArrowDown || code === keyboardKey.ArrowUp) {
            e.preventDefault();
            e.stopPropagation();

            const currentPage = parsePageNumber(inputPageNumber);
            const nextPage =
              code === keyboardKey.ArrowDown
                ? currentPage === totalPages
                  ? 1
                  : currentPage + 1
                : currentPage === 1
                  ? totalPages
                  : currentPage - 1;

            const nextPageString = nextPage.toString();
            setInputPageNumber(nextPageString);
            setNavigatedPageNumber(nextPageString);
          } else if (code === keyboardKey.Escape) {
            setMenuVisible(false);
            const pageString = page.toString();
            setActivePageNumber(pageString);
            setPreselectedPageNumber(pageString);
          }
        },
        [
          inputPageNumber,
          onChange,
          page,
          pageSize,
          parsePageNumber,
          setActivePageNumber,
          setPreselectedPageNumber,
          setNavigatedPageNumber,
          totalPages,
        ],
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
