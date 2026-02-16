import type { FC, HTMLAttributes } from 'react';
import { useMemo } from 'react';
import type { DataAttributes, css } from 'styled-components';
import styled, { useTheme } from 'styled-components';

import { LIGHT_THEME } from '#src/components/themes';
import { typography } from '#src/components/Typography';
import type { Button } from '#src/components/Button';
import type { DropMenuStyleProps } from '#src/components/DropMenu';

import { SideButtons } from './SideButtons';
import { PageSizeSelect } from './PageSizeSelect';
import { PageSelect } from './PageSelect';

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

export type PaginationOneDimension = 'm' | 's';
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
  } = theme.locales[theme.currentLocale].paginationOne;

  const itemsPerPageText = locale?.itemsPerPageText || theme_itemsPerPageText;
  const itemRangeText = locale?.itemRangeText || theme_itemRangeText;
  const pageRangeText = locale?.pageRangeText || theme_pageRangeText;

  const safePageSize = pageSize > 0 ? pageSize : 1;
  const totalPages = useMemo(() => Math.max(Math.ceil(totalItems / safePageSize), 1), [totalItems, safePageSize]);

  const [rangeStart, rangeEnd] = useMemo(() => {
    const start = Math.min(pageSize * (page - 1) + 1, totalItems);
    const end = Math.min(page * pageSize, totalItems);
    return [start, end];
  }, [page, pageSize, totalItems]);

  const renderSideButtons = () => {
    return (
      <SideButtons
        dimension={dimension}
        localeBackwardText={locale?.backwardText}
        localeForwardText={locale?.forwardText}
        leftButtonPropsConfig={leftButtonPropsConfig}
        rightButtonPropsConfig={rightButtonPropsConfig}
        page={page}
        pageSize={pageSize}
        totalPages={totalPages}
        onChange={onChange}
      />
    );
  };

  const renderComplex = () => {
    return (
      <ComplexWrapper data-simple={simple} {...props}>
        <Part>
          {itemsPerPageText}
          <PageSizeSelect
            dimension={dimension}
            pageSize={pageSize}
            pageSizes={pageSizes}
            pageSizeSelectDisabled={pageSizeSelectDisabled}
            pageSizeDropContainerStyle={pageSizeDropContainerStyle}
            dropContainerCssMixin={dropContainerCssMixin}
            totalItems={totalItems}
            dropMaxHeight={dropMaxHeight}
            menuWidth={menuWidth}
            localeLabel={locale?.pageSizeSelectLabel}
            onChange={onChange}
            {...props}
          />
          <Divider />
          <PageSizeAdditional>{itemRangeText(rangeStart, rangeEnd, totalItems)}</PageSizeAdditional>
        </Part>
        <Part>
          <Divider />
          <PageSelect
            dimension={dimension}
            page={page}
            pageSize={pageSize}
            pageSelectDisabled={pageSelectDisabled}
            totalPages={totalPages}
            pageNumberDropContainerStyle={pageNumberDropContainerStyle}
            dropContainerCssMixin={dropContainerCssMixin}
            dropMaxHeight={dropMaxHeight}
            menuWidth={menuWidth}
            showPageNumberInput={showPageNumberInput}
            localeLabel={locale?.pageSelectLabel}
            onChange={onChange}
            {...props}
          />
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
