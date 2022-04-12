import * as React from 'react';
import styled, { FlattenInterpolation, DefaultTheme, ThemeProps } from 'styled-components';
import { typography } from '#/components/Typography';
import { ReactComponent as ChevronLeft } from '@admiral-ds/icons/build/system/ChevronLeftOutline.svg';
import { ReactComponent as ChevronRight } from '@admiral-ds/icons/build/system/ChevronRightOutline.svg';

import { PaginationButton } from './PaginationButton';
import { MenuButton } from './Menu';

const ComplexWrapper = styled.div`
  display: flex;
  align-items: center;
  ${typography['Additional/S']}
  white-space: nowrap;
  user-select: none;
  min-width: 696px;
  justify-content: space-between;
`;

const SimpleWrapper = styled(ComplexWrapper)`
  min-width: auto;
`;

const Part = styled.div`
  display: flex;
  align-items: center;
`;

const Devider = styled.div`
  width: 1px;
  height: 24px;
  background-color: ${({ theme }) => theme.color.background.tertiary};
`;

const PageAdditional = styled.span`
  margin: 0 4px;
  width: 112px;
  min-width: 112px;
`;
const PageSizeAdditional = styled.div`
  width: 172px;
  min-width: 172px;
  margin: 0 12px;
  [data-simple='true'] & {
    margin: 0;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  & > button {
    margin-left: 8px;
  }
  [data-simple='true'] & {
    margin-left: 20px;
  }
`;

export interface PaginationOneProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
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
  /** Функция, возвращающая текст, описывающий селект с выбором номера страницы */
  pageSelectLabel?: (props: any) => string;
  /** Функция, возвращающая текст, описывающий селект с выбором размера страницы */
  pageSizeSelectLabel?: (props: any) => string;
  /** Текст, описывающий сколько записей размещено на одной странице */
  itemsPerPageText?: string;
  /** Функция, возвращающая текст, поясняющий, какой диапазон записей сейчас отображается */
  itemRangeText?: (props: any) => string;
  /** Функция, возвращающая текст, поясняющий, из какого количества страниц выбрана текущая */
  pageRangeText?: (props: any) => string;
  /** Текст, описывающий кнопку переключения назад */
  backwardText?: string;
  /** Текст, описывающий кнопку переключения вперед */
  forwardText?: string;
  /** Отображение компонента в упрощенном варианте, применяется в мобильных версиях */
  simple?: boolean;
  /** Задает максимальную высоту выпадающих меню */
  dropMaxHeight?: string | number;
  /** Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css  */
  dropContainerCssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}

export const PaginationOne: React.FC<PaginationOneProps> = ({
  page,
  pageSize,
  pageSizes,
  totalItems,
  pageSelectDisabled = false,
  pageSizeSelectDisabled = false,
  itemsPerPageText = 'Записей на странице:',
  onChange,
  itemRangeText = (min: number, max: number, total: number) => `${min}–${max} записей из ${total}`,
  pageRangeText = (total: number) => `из ${total} ${total === 1 ? 'страницы' : 'страниц'}`,
  pageSelectLabel = (page: number, totalPages: number) => `Страница ${page} из ${totalPages}`,
  pageSizeSelectLabel = (pageSize: number, total: number) => `Записей ${pageSize} из ${total}`,
  backwardText = 'Предыдущая страница, выбрать',
  forwardText = 'Следующая страница, выбрать',
  simple = false,
  dropMaxHeight = '300px',
  dropContainerCssMixin,
  ...props
}) => {
  const totalPages = Math.max(Math.ceil(totalItems / pageSize), 1);
  const pages = Array.from({ length: totalPages }, (v, k) => k + 1);
  const backButtonDisabled = page === 1;
  const forwardButtonDisabled = page === totalPages;

  const handleSizeChange = (pageSize: number) => {
    onChange({ page: 1, pageSize });
  };

  const handlePageInputChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      onChange({
        page,
        pageSize,
      });
    }
  };

  const pageIncrement = () => onChange({ page: page + 1, pageSize });
  const pageDecrement = () => onChange({ page: page - 1, pageSize });

  const renderComplex = () => {
    return (
      <ComplexWrapper data-simple={simple} {...props}>
        <Part>
          {itemsPerPageText}
          <MenuButton
            options={pageSizes}
            selected={pageSize}
            onChange={handleSizeChange}
            disabled={pageSizeSelectDisabled}
            aria-label={pageSizeSelectLabel(pageSize, totalItems)}
            dropMaxHeight={dropMaxHeight}
            dropContainerCssMixin={dropContainerCssMixin}
          >
            {pageSize}
          </MenuButton>
          <Devider />
          <PageSizeAdditional>
            {itemRangeText(
              Math.min(pageSize * (page - 1) + 1, totalItems),
              Math.min(page * pageSize, totalItems),
              totalItems,
            )}
          </PageSizeAdditional>
        </Part>
        <Part>
          <Devider />
          <MenuButton
            options={pages}
            selected={page}
            onChange={handlePageInputChange}
            disabled={pageSelectDisabled}
            aria-label={pageSelectLabel(page, totalPages)}
            dropMaxHeight={dropMaxHeight}
            dropContainerCssMixin={dropContainerCssMixin}
          >
            {page}
          </MenuButton>
          <PageAdditional>{pageRangeText(totalPages)}</PageAdditional>
          <ButtonsWrapper>
            <PaginationButton aria-label={backwardText} disabled={backButtonDisabled} onClick={pageDecrement}>
              <ChevronLeft width={24} height={24} />
            </PaginationButton>
            <PaginationButton aria-label={forwardText} disabled={forwardButtonDisabled} onClick={pageIncrement}>
              <ChevronRight width={24} height={24} />
            </PaginationButton>
          </ButtonsWrapper>
        </Part>
      </ComplexWrapper>
    );
  };

  const renderSimple = () => {
    return (
      <SimpleWrapper data-simple={simple} {...props}>
        <PageSizeAdditional>
          {itemRangeText(
            Math.min(pageSize * (page - 1) + 1, totalItems),
            Math.min(page * pageSize, totalItems),
            totalItems,
          )}
        </PageSizeAdditional>
        <ButtonsWrapper>
          <PaginationButton aria-label={backwardText} disabled={backButtonDisabled} onClick={pageDecrement}>
            <ChevronLeft width={24} height={24} />
          </PaginationButton>
          <PaginationButton aria-label={forwardText} disabled={forwardButtonDisabled} onClick={pageIncrement}>
            <ChevronRight width={24} height={24} />
          </PaginationButton>
        </ButtonsWrapper>
      </SimpleWrapper>
    );
  };

  return simple ? renderSimple() : renderComplex();
};
