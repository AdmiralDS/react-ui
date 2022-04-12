import * as React from 'react';
import styled from 'styled-components';
import { uid } from '#/components/common/uid';
import { TextInput } from '#/components/input/TextInput';
import { Button as SecondaryButton } from '#/components/Button';

import { Ellipsis, PaginationItem } from './Items';
import { getListOfPages, range } from './utils';

const Wrapper = styled.div<{ mobile?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: ${({ mobile }) => (mobile ? 'column' : 'row')};
  flex: 1 1 auto;
  list-style: none;

  ${({ mobile }) =>
    mobile &&
    `
  & > ul {
    margin: 0 4px 0 4px;
  }
  `}
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
  margin-bottom: 20px;
`;

export interface PaginationTwoProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Текущая страница*/
  page: number;
  /** Колбек на изменение текущей страницы*/
  onChange: (event: any, page: number) => void;
  /** Количество страниц*/
  count?: number;
  /** Массив с номерами задизейбленных страниц */
  disabledPages?: Array<number>;
  /** Включение мобильной версии компонента */
  mobile?: boolean;
  /** Отображение кнопки "Дальше" в мобильной версии */
  showNextBtnMobile?: boolean;
}

export const PaginationTwo: React.FC<PaginationTwoProps> = ({
  page,
  count = 1,
  mobile = false,
  disabledPages = [],
  showNextBtnMobile = true,
  onChange,
  ...props
}) => {
  const hideNextButton = mobile || false;
  const hidePrevButton = mobile || false;
  const showInput = count > 21 && !mobile;

  const [inputValue, setInputValue] = React.useState('');
  const itemList = getListOfPages(page, count, hidePrevButton, hideNextButton);

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

  const handlePageClick = (event: any, value: any) => {
    if (value !== page) {
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
    if (isNaN(parsed)) {
      setInputValue('');
    } else if (disabledPages.indexOf(parsed) > -1) {
      setInputValue('');
    } else {
      if (parsed !== page) {
        const newValue = parsed > count ? count : parsed < 1 ? 1 : parsed;
        setInputValue(newValue.toString());
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
    <Wrapper mobile={mobile} {...props}>
      {mobile && showNextBtnMobile && (
        <Button dimension="m" appearance="secondary" disabled={disableNextBtn} onClick={handleBtnClick}>
          Дальше
        </Button>
      )}
      <PagesWrapper>
        {items.map(({ type, selected, disabled, page, onClick }) => {
          const id = uid();
          return type === 'ellipsis' ? (
            <li key={id}>
              <Ellipsis />
            </li>
          ) : (
            <li key={id}>
              <PaginationItem type={type} selected={selected} disabled={disabled} page={page} onClick={onClick} />
            </li>
          );
        })}
      </PagesWrapper>
      {showInput && (
        <Input
          pattern="[0-9]+"
          placeholder="№ страницы"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          onBlur={handleInputBlur}
        />
      )}
    </Wrapper>
  );
};
