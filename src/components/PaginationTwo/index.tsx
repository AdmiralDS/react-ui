import { useState } from 'react';
import styled, { useTheme } from 'styled-components';

import { LIGHT_THEME } from '#src/components/themes';
import { typography } from '#src/components/Typography';
import { uid } from '#src/components/common/uid';
import { TextInput } from '#src/components/input/TextInput';
import { Button as SecondaryButton } from '#src/components/Button';

import { Ellipsis, PaginationItem } from '#src/components/PaginationTwo/Items';
import { getListOfPages, range } from '#src/components/PaginationTwo/utils';

export type PaginationTwoDimension = 'm' | 's';

const Wrapper = styled.div<{ $mobile?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: ${({ $mobile }) => ($mobile ? 'column' : 'row')};
  flex: 1 1 auto;
  list-style: none;
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
`;
const PagesWrapper = styled.ul`
  position: relative;
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Input = styled(TextInput)`
  margin-left: 8px;
  & > input {
    max-width: 130px;
  }
`;

const Button = styled(SecondaryButton)`
  width: 100%;
  margin-bottom: 20px;
`;

const PageSize = styled.div<{ $dimension: PaginationTwoDimension }>`
  color: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  ${(p) => (p.$dimension === 'm' ? typography['Body/Body 1 Long'] : typography['Body/Body 2 Long'])}
  margin-left: 16px;
`;

export interface PaginationTwoProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Размер компонента */
  dimension?: PaginationTwoDimension;
  /** Текущая страница */
  page: number;
  /** Колбек на изменение текущей страницы */
  onChange: (event: any, page: number) => void;
  /** Количество страниц */
  count?: number;
  /** Количество страниц, отображаемых по бокам от текущей страницы */
  siblingCount?: number;
  /** Количество страниц, отображаемых в начале и в конце компонента */
  boundaryCount?: number;
  /** Массив с номерами задизейбленных страниц */
  disabledPages?: Array<number>;
  /** Включение мобильной версии компонента */
  mobile?: boolean;
  /** Отображение кнопки "Дальше" в мобильной версии */
  showNextBtnMobile?: boolean;
  /** Отображение инпута, если страниц больше 21й  */
  showInput?: boolean;
  /** Размер страницы (сколько максимально умещается записей в одной странице) */
  pageSize?: number;
  /** Общее количество записей */
  totalItems?: number;
  /** Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
   * по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме
   **/
  locale?: {
    /** Placeholder инпута */
    inputPlaceholder?: string;
    /** Функция, возвращающая текст, поясняющий, какой диапазон записей сейчас отображается */
    itemRangeText?: (min: number, max: number, total: number) => string;
  };
}

export const PaginationTwo: React.FC<PaginationTwoProps> = ({
  dimension = 'm',
  page,
  count = 1,
  siblingCount = 1,
  boundaryCount = 1,
  mobile = false,
  disabledPages = [],
  showNextBtnMobile = true,
  showInput = true,
  onChange,
  pageSize,
  totalItems,
  locale,
  ...props
}) => {
  const theme = useTheme() || LIGHT_THEME;
  const itemRangeText = locale?.itemRangeText || theme.locales[theme.currentLocale].paginationTwo.itemRangeText;
  const placeholder = locale?.inputPlaceholder || theme.locales[theme.currentLocale].paginationTwo.inputPlaceholder;

  const hideNextButton = mobile || false;
  const hidePrevButton = mobile || false;
  const isInputVisible = showInput && count > 21 && !mobile;

  const [inputValue, setInputValue] = useState('');
  const itemList = getListOfPages(page, count, hidePrevButton, hideNextButton, siblingCount, boundaryCount);

  // возвращаем предыдущую страницу из числа не задизейбленных;
  const getPreviousPage = () =>
    range(1, page - 1)
      .filter((item) => disabledPages.indexOf(item) === -1)
      .reverse()[0] || 1;
  // возвращаем следующую страницу из числа не задизейбленных;
  const getNextPage = () => range(page + 1, count).filter((item) => disabledPages.indexOf(item) === -1)[0] || count;

  // дизейблим кнопку Next, если текущая страница последняя или впереди неё все страницы задизейблены
  const disableNextBtn = page >= count || range(page + 1, count).every((item) => disabledPages.indexOf(item) > -1);
  // дизейблим кнопку Previous, если текущая страница первая или позади неё все страницы задизейблены
  const disablePreviousBtn = page <= 1 || range(1, page - 1).every((item) => disabledPages.indexOf(item) > -1);

  const buttonPage = (type: string) => {
    switch (type) {
      case 'previous':
        return getPreviousPage();
      case 'next':
        return getNextPage();
      default:
        return null;
    }
  };

  const handlePageClick = (event: any, value: number | null) => {
    if (value && value !== page) {
      onChange?.(event, value);
    }
    // reset active state
    event.currentTarget.blur();
  };

  const items = itemList.map((item) => {
    return typeof item === 'number'
      ? {
          onClick: (event: any) => {
            handlePageClick(event, item);
          },
          type: 'page',
          page: item,
          selected: item === page,
          disabled: disabledPages.indexOf(item) > -1,
        }
      : {
          onClick: (event: any) => {
            handlePageClick(event, buttonPage(item));
          },
          type: item,
          page: buttonPage(item),
          selected: false,
          disabled: item.indexOf('ellipsis') === -1 && (item === 'next' ? disableNextBtn : disablePreviousBtn),
        };
  });

  const onInputSubmit = (event: any, value: string) => {
    const parsed = parseInt(value, 10);
    setInputValue('');

    if (isNaN(parsed) || disabledPages.indexOf(parsed) > -1) {
      return;
    } else {
      if (parsed !== page) {
        const newValue = parsed > count ? count : parsed < 1 ? 1 : parsed;
        onChange?.(event, newValue);
      }
    }
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.currentTarget.value);
  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onInputSubmit(event, event.currentTarget.value);
      event.preventDefault();
    }
  };
  const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) =>
    onInputSubmit(event, event.currentTarget.value);

  const handleBtnClick = (event: React.MouseEvent<HTMLButtonElement>) => onChange?.(event, getNextPage());

  return (
    <Wrapper $mobile={mobile} {...props}>
      {mobile && showNextBtnMobile && (
        <Button dimension={dimension} appearance="secondary" disabled={disableNextBtn} onClick={handleBtnClick}>
          Дальше
        </Button>
      )}
      <PagesWrapper>
        {items.map(({ type, selected, disabled, page, onClick }) => {
          const id = uid();
          return type === 'ellipsis' ? (
            <li key={id}>
              <Ellipsis dimension={dimension} />
            </li>
          ) : (
            <li key={id}>
              <PaginationItem
                dimension={dimension}
                type={type}
                selected={selected}
                disabled={disabled}
                page={page}
                onClick={onClick}
              />
            </li>
          );
        })}
      </PagesWrapper>
      {isInputVisible && (
        <Input
          dimension={dimension}
          pattern="[0-9]+"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          onBlur={handleInputBlur}
        />
      )}
      {pageSize !== undefined && totalItems !== undefined && (
        <PageSize $dimension={dimension}>
          {itemRangeText(
            Math.min(pageSize * (page - 1) + 1, totalItems),
            Math.min(page * pageSize, totalItems),
            totalItems,
          )}
        </PageSize>
      )}
    </Wrapper>
  );
};

PaginationTwo.displayName = 'PaginationTwo';
