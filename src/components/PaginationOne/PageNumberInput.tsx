import { useState, useRef, useEffect, useCallback, memo } from 'react';

import { MenuActionsPanel } from '#src/components/Menu/MenuActionsPanel';
import { TextInput } from '#src/components/input';
import { keyboardKey } from '#src/components/common/keyboardKey.js';
import type { PaginationOneProps } from '#src/components/PaginationOne';
import type { MenuDimensions } from '#src/components/Menu';
import { nextItem } from '../Accordion/utils';

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
  ({
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
  }: PageNumberInputProps) => {
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

    const handleInputChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value.replace(/\D/g, '');
        setInputPageNumber(inputValue);
        const parsedPage = parsePageNumber(inputValue).toString();

        if (preselectedModeActive) {
          setPreselectedPageNumber(parsedPage);
        } else {
          setActivePageNumber(parsedPage);
        }
      },
      [parsePageNumber, preselectedModeActive],
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
        } else if (code === keyboardKey.Escape) {
          setMenuVisible(false);
          const pageString = page.toString();
          setActivePageNumber(pageString);
          setPreselectedPageNumber(pageString);
        }
      },
      [inputPageNumber, onChange, page, pageSize, parsePageNumber],
    );

    return (
      <MenuActionsPanel dimension={dimension}>
        <TextInput
          ref={pageNumberInputRef}
          dimension="s"
          value={inputPageNumber}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
        />
      </MenuActionsPanel>
    );
  },
);
