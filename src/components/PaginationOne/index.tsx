import type { ChangeEvent, FC, HTMLAttributes, KeyboardEvent } from 'react';
import { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import type { DataAttributes } from 'styled-components';
import styled, { css, useTheme } from 'styled-components';

import { LIGHT_THEME } from '#src/components/themes';
import { typography } from '#src/components/Typography';
import { passDropdownDataAttributes } from '#src/components/common/utils/splitDataAttributes';
import { MenuActionsPanel } from '#src/components/Menu/MenuActionsPanel';
import { TextInput } from '#src/components/input';
import { keyboardKey } from '#src/components/common/keyboardKey.js';
import type { Button } from '#src/components/Button';
import type { DropMenuStyleProps } from '#src/components/DropMenu';

import { MenuButton } from './Menu';
import { SideButtons } from './SideButtons';

export type PaginationOneDimension = 'm' | 's';

const ComplexWrapper = styled.div`
  display: flex;
  align-items: center;
  ${typography['Body/Body 2 Long']}
  white-space: nowrap;
  user-select: none;
  min-width: 696px;
  justify-content: space-between;
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
`;

const SimpleWrapper = styled(ComplexWrapper)`
  min-width: auto;
`;

const Part = styled.div`
  display: flex;
  align-items: center;
`;

const Divider = styled.div`
  width: 1px;
  height: 24px;
  background-color: var(--admiral-color-Neutral_Neutral20, ${(p) => p.theme.color['Neutral/Neutral 20']});
`;

const PageAdditional = styled.span`
  margin: 0 4px;
  min-width: 112px;
`;
const PageSizeAdditional = styled.div`
  min-width: 172px;
  margin: 0 12px;
  [data-simple='true'] & {
    margin: 0;
  }
`;

const extendMixin = (mixin?: ReturnType<typeof css>, showPageNumberInput?: boolean) => css`
  width: auto;
  min-width: ${showPageNumberInput ? 80 : 68}px;

  ${mixin};
`;

export interface PaginationOneProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Размер компонента */
  dimension?: PaginationOneDimension;
  /** Колбек, который срабатывает при изменении номера  страницы или размера страницы */
  onChange: (result: { page: number; pageSize: number }) => void;
  /** Номер текущей страницы */
  page: number;
  /** Размер текущей страницы (сколько записей умещается в одной странице) */
  pageSize: number;
  /** Общее количество записей */
  totalItems: number;
  /** Массив с вариантами размеров страницы */
  pageSizes: Array<number>;
  /** Блокировка выбора страницы */
  pageSelectDisabled?: boolean;
  /** Блокировка выбора количества записей на странице */
  pageSizeSelectDisabled?: boolean;
  /** Отображение компонента в упрощенном варианте, применяется в мобильных версиях */
  simple?: boolean;

  /**
   * @deprecated Помечено как deprecated в версии 8.10.0, будет удалено в версии 10.х.х.
   * Взамен используйте параметры pageSizeDropContainerStyle.menuMaxHeight и
   * pageNumberDropContainerStyle.menuMaxHeight.
   *
   * Задает максимальную высоту выпадающих меню */
  dropMaxHeight?: string | number;
  /**
   * @deprecated Помечено как deprecated в версии 8.10.0, будет удалено в версии 10.х.х.
   * Взамен используйте параметры pageSizeDropContainerStyle.menuWidth и
   * pageNumberDropContainerStyle.menuWidth.
   *
   * Позволяет задать ширину выпадающего списка */
  menuWidth?: string;
  /**
   * @deprecated Помечено как deprecated в версии 4.8.0, будет удалено в версии 9.х.х.
   * Взамен используйте параметры pageSizeDropContainerStyle.dropContainerCssMixin и
   * pageNumberDropContainerStyle.dropContainerCssMixin.
   *
   * Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css  */
  dropContainerCssMixin?: ReturnType<typeof css>;

  /** Позволяет добавлять стили и className для выпадающего меню кнопки настройки видимости колонок  */
  pageSizeDropContainerStyle?: Omit<DropMenuStyleProps, 'alignSelf'>;
  /** Позволяет добавлять стили и className для выпадающего меню кнопки настроек  */
  pageNumberDropContainerStyle?: Omit<DropMenuStyleProps, 'alignSelf'>;

  /** Включает окно ввода номера страницы в выпадающем списке */
  showPageNumberInput?: boolean;
  /** Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
   * по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме
   **/
  locale?: {
    /** Текст, описывающий сколько записей размещено на одной странице */
    itemsPerPageText?: string;
    /** Функция, возвращающая текст, описывающий селект с выбором номера страницы */
    pageSelectLabel?: (...props: any) => string;
    /** Функция, возвращающая текст, описывающий селект с выбором размера страницы */
    pageSizeSelectLabel?: (...props: any) => string;
    /** Функция, возвращающая текст, поясняющий, какой диапазон записей сейчас отображается */
    itemRangeText?: (...props: any) => string;
    /** Функция, возвращающая текст, поясняющий, из какого количества страниц выбрана текущая */
    pageRangeText?: (...props: any) => string;
    /** Текст, описывающий кнопку переключения назад (атрибут aria-label) */
    backwardText?: string;
    /** Текст, описывающий кнопку переключения вперед (атрибут aria-label) */
    forwardText?: string;
  };

  /** Конфиг функция пропсов для левой кнопки. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  leftButtonPropsConfig?: (
    props: React.ComponentProps<typeof Button>,
  ) => Partial<React.ComponentProps<typeof Button> & DataAttributes>;
  /** Конфиг функция пропсов для правой кнопки. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  rightButtonPropsConfig?: (
    props: React.ComponentProps<typeof Button>,
  ) => Partial<React.ComponentProps<typeof Button> & DataAttributes>;
}

export const PaginationOne: FC<PaginationOneProps> = ({
  dimension = 'm',
  page,
  pageSize,
  pageSizes,
  totalItems,
  pageSelectDisabled = false,
  pageSizeSelectDisabled = false,
  onChange,
  simple = false,
  menuWidth,
  dropMaxHeight = '',
  dropContainerCssMixin,
  pageSizeDropContainerStyle,
  pageNumberDropContainerStyle,
  locale,
  showPageNumberInput = false,
  leftButtonPropsConfig,
  rightButtonPropsConfig,
  ...props
}) => {
  const theme = useTheme() || LIGHT_THEME;
  const {
    itemsPerPageText: theme_itemsPerPageText,
    itemRangeText: theme_itemRangeText,
    pageRangeText: theme_pageRangeText,
    pageSelectLabel: theme_pageSelectLabel,
    pageSizeSelectLabel: theme_pageSizeSelectLabel,
  } = theme.locales[theme.currentLocale].paginationOne;

  const itemsPerPageText = locale?.itemsPerPageText || theme_itemsPerPageText;
  const itemRangeText = locale?.itemRangeText || theme_itemRangeText;
  const pageRangeText = locale?.pageRangeText || theme_pageRangeText;
  const pageSelectLabel = locale?.pageSelectLabel || theme_pageSelectLabel;
  const pageSizeSelectLabel = locale?.pageSizeSelectLabel || theme_pageSizeSelectLabel;

  const safePageSize = pageSize > 0 ? pageSize : 1;
  const totalPages = useMemo(() => Math.max(Math.ceil(totalItems / safePageSize), 1), [totalItems, safePageSize]);
  const pages = useMemo(() => Array.from({ length: totalPages }, (_, k) => k + 1), [totalPages]);

  const [rangeStart, rangeEnd] = useMemo(() => {
    const start = Math.min(pageSize * (page - 1) + 1, totalItems);
    const end = Math.min(page * pageSize, totalItems);
    return [start, end];
  }, [page, pageSize, totalItems]);

  const backButtonDisabled = page === 1;
  const forwardButtonDisabled = page === totalPages;

  const [isVisible, setIsVisible] = useState(false);
  const [selectedPageNumber, setSelectedPageNumber] = useState(page.toString());
  const [activePageNumber, setActivePageNumber] = useState<string | undefined>(page.toString());
  const [inputPageNumber, setInputPageNumber] = useState(page.toString());

  const pageNumberInputRef = useRef<HTMLInputElement>(null);

  const parsePageNumber = (pageSelected: string) => {
    if (pageSelected === '') {
      return Number.parseInt(selectedPageNumber, 10);
    }
    const page = Number.parseInt(pageSelected, 10);
    if (Number.isNaN(page) || page < 1) {
      return 1;
    }
    if (page > totalPages) {
      return totalPages;
    }
    return page;
  };

  const handlePageInputHover = (activePage?: string) => {
    if (activePage) {
      setActivePageNumber(activePage);
      setInputPageNumber(activePage);
    }
  };

  const handleClosePageNumberDropMenu = (pageNumber: string) => {
    handlePageInputHover(pageNumber);
    setIsVisible(false);
  };

  const handleSizeChange = (pageSizeSelected: string) => {
    const pageSize = Number.parseInt(pageSizeSelected, 10);
    onChange({ page: 1, pageSize: pageSize });
  };

  const handlePageInputChange = (pageSelected: string) => {
    const page = parsePageNumber(pageSelected);
    setSelectedPageNumber(page.toString());
    onChange({
      page,
      pageSize,
    });
    handleClosePageNumberDropMenu(page.toString());
  };

  const pageIncrement = useCallback(() => {
    const newPage = page + 1;
    setSelectedPageNumber(newPage.toString());
    setActivePageNumber(newPage.toString());
    onChange({ page: newPage, pageSize });
  }, [page, pageSize]);

  const pageDecrement = useCallback(() => {
    const newPage = page - 1;
    setSelectedPageNumber(newPage.toString());
    setActivePageNumber(newPage.toString());
    onChange({ page: newPage, pageSize });
  }, [page, pageSize]);

  const dropMenuProps = passDropdownDataAttributes(props);

  const handleClickOutside = () => {
    handleClosePageNumberDropMenu(selectedPageNumber);
  };

  const handleMenuButtonClick = () => {
    if (isVisible) {
      handleClosePageNumberDropMenu(selectedPageNumber);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    if (isVisible && pageNumberInputRef) {
      pageNumberInputRef.current?.select();
      pageNumberInputRef.current?.focus();
    }
  }, [isVisible]);

  const handleInputPageNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    inputValue = inputValue.replace(/\D/g, '');
    setInputPageNumber(inputValue);
    setActivePageNumber(parsePageNumber(inputValue).toString());
  };

  const handleInputPageNumberKeyDown = (e: KeyboardEvent) => {
    const code = keyboardKey.getCode(e);

    if (code === keyboardKey.Enter) {
      handlePageInputChange(inputPageNumber);
      setIsVisible(false);
    } else if (code === keyboardKey.ArrowDown || code === keyboardKey.ArrowUp) {
      pageNumberInputRef.current?.blur();
    } else if (code === keyboardKey.Escape) {
      handleClosePageNumberDropMenu(selectedPageNumber);
    }
  };

  const handleMenuCycle = () => {
    pageNumberInputRef.current?.focus();
    return false;
  };

  const renderSideButtons = () => {
    return (
      <SideButtons
        dimension={dimension}
        localeBackwardText={locale?.backwardText}
        localeForwardText={locale?.forwardText}
        leftButtonPropsConfig={leftButtonPropsConfig}
        rightButtonPropsConfig={rightButtonPropsConfig}
        pageDecrement={pageDecrement}
        pageIncrement={pageIncrement}
        backButtonDisabled={backButtonDisabled}
        forwardButtonDisabled={forwardButtonDisabled}
      />
    );
  };

  const renderComplex = () => {
    return (
      <ComplexWrapper data-simple={simple} {...props}>
        <Part>
          {itemsPerPageText}
          <MenuButton
            dimension={dimension}
            options={pageSizes}
            selected={pageSize.toString()}
            onSelectItem={handleSizeChange}
            disabled={pageSizeSelectDisabled}
            aria-label={pageSizeSelectLabel(pageSize, totalItems)}
            menuMaxHeight={pageSizeDropContainerStyle?.menuMaxHeight || dropMaxHeight}
            dropContainerCssMixin={
              pageSizeDropContainerStyle?.dropContainerCssMixin || extendMixin(dropContainerCssMixin)
            }
            dropContainerClassName={pageSizeDropContainerStyle?.dropContainerClassName}
            dropContainerStyle={pageSizeDropContainerStyle?.dropContainerStyle}
            menuWidth={pageSizeDropContainerStyle?.menuWidth || menuWidth}
            dropMenuDataAttributes={dropMenuProps}
            className="records-per-page-with-dropdown"
          >
            {pageSize}
          </MenuButton>
          <Divider />
          <PageSizeAdditional>{itemRangeText(rangeStart, rangeEnd, totalItems)}</PageSizeAdditional>
        </Part>
        <Part>
          <Divider />
          <MenuButton
            dimension={dimension}
            options={pages}
            selected={selectedPageNumber}
            onSelectItem={handlePageInputChange}
            active={activePageNumber}
            onActivateItem={handlePageInputHover}
            disabled={pageSelectDisabled}
            aria-label={pageSelectLabel(page, totalPages)}
            menuMaxHeight={pageNumberDropContainerStyle?.menuMaxHeight || dropMaxHeight}
            dropContainerCssMixin={
              pageNumberDropContainerStyle?.dropContainerCssMixin ||
              extendMixin(dropContainerCssMixin, showPageNumberInput)
            }
            dropContainerClassName={pageNumberDropContainerStyle?.dropContainerClassName}
            dropContainerStyle={pageNumberDropContainerStyle?.dropContainerStyle}
            menuWidth={pageNumberDropContainerStyle?.menuWidth || menuWidth}
            dropMenuDataAttributes={dropMenuProps}
            className="current-page-number-with-dropdown"
            isVisible={isVisible}
            onVisibilityChange={setIsVisible}
            onClickOutside={handleClickOutside}
            onClick={handleMenuButtonClick}
            onForwardCycleApprove={handleMenuCycle}
            onBackwardCycleApprove={handleMenuCycle}
            renderTopPanel={
              showPageNumberInput
                ? ({ dimension = 's' }) => {
                    return (
                      <MenuActionsPanel dimension={dimension}>
                        <TextInput
                          dimension="s"
                          value={inputPageNumber}
                          onChange={handleInputPageNumberChange}
                          onKeyDown={handleInputPageNumberKeyDown}
                          ref={pageNumberInputRef}
                        />
                      </MenuActionsPanel>
                    );
                  }
                : undefined
            }
          >
            {page}
          </MenuButton>
          <PageAdditional>{pageRangeText(totalPages)}</PageAdditional>
          {renderSideButtons()}
        </Part>
      </ComplexWrapper>
    );
  };

  const renderSimple = () => {
    return (
      <SimpleWrapper data-simple={simple} {...props}>
        <PageSizeAdditional>{itemRangeText(rangeStart, rangeEnd, totalItems)}</PageSizeAdditional>
        {renderSideButtons()}
      </SimpleWrapper>
    );
  };

  return simple ? renderSimple() : renderComplex();
};

PaginationOne.displayName = 'PaginationOne';
