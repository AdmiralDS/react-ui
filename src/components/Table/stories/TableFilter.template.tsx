import * as React from 'react';
import { Table, FieldSet, RadioButton, Button, DateField, T, OrderedList, ListItem } from '@admiral-ds/react-ui';
import type { TableProps, Column, TableRow } from '@admiral-ds/react-ui';
import { ReactComponent as AcceptSolid } from '@admiral-ds/icons/build/category/AcceptSolid.svg';
import styled from 'styled-components';

const Separator = styled.div<{ $height?: number }>`
  height: ${(p) => p.$height || 8}px;
`;

const numberFormatter = new Intl.NumberFormat();

type RowData = TableRow & {
  transfer_type: string;
  transfer_date: string;
  transfer_amount: React.ReactNode;
  currency: string;
  rate: number;
};

const rowList: RowData[] = [
  {
    id: '0001',
    transfer_type: 'МНО',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: numberFormatter.format(500_000),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0002',
    transfer_type: 'МНО',
    transfer_date: new Date('2021-04-05').toLocaleDateString(),
    transfer_amount: numberFormatter.format(32_500_000_000),
    currency: 'RUB',
    rate: 5.5,
  },
  {
    id: '0003',
    transfer_type: 'МНО',
    transfer_date: new Date('2020-11-06').toLocaleDateString(),
    transfer_amount: numberFormatter.format(189_000_000),
    currency: 'RUB',
    rate: 6,
  },
  {
    id: '0004',
    transfer_type: 'МНО',
    transfer_date: new Date('2010-12-09').toLocaleDateString(),
    transfer_amount: numberFormatter.format(350_000_000),
    currency: 'RUB',
    rate: 1,
  },
  {
    id: '0005',
    transfer_type: 'МНО',
    transfer_date: new Date('2019-08-06').toLocaleDateString(),
    transfer_amount: numberFormatter.format(60_000),
    currency: 'RUB',
    rate: 4,
  },
  {
    id: '0006',
    transfer_type: 'МНО',
    transfer_date: new Date('2021-04-05').toLocaleDateString(),
    transfer_amount: numberFormatter.format(700_000),
    currency: 'RUB',
    rate: 1,
  },
  {
    id: '0007',
    transfer_type: 'МНО',
    transfer_date: new Date('2019-12-01').toLocaleDateString(),
    transfer_amount: numberFormatter.format(500_000),
    currency: 'RUB',
    rate: 4,
  },
];

const columnList: Column[] = [
  {
    name: 'transfer_type',
    title: 'Тип сделки',
  },
  {
    name: 'transfer_date',
    title: 'Дата сделки',
    width: 150,
  },
  {
    name: 'transfer_amount',
    title: 'Сумма',
    width: 170,
  },
  {
    name: 'currency',
    title: 'Валюта',
  },
  {
    name: 'rate',
    title: 'Ставка',
  },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 300px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 28px;
  & > button:first-child {
    margin-right: 8px;
  }
`;

export const TableFilterTemplate = (props: TableProps) => {
  const [selected, setSelected] = React.useState<string>('');
  const [selectedDate, setSelectedDate] = React.useState<string>('');
  const [rows, setRows] = React.useState([...rowList]);
  const [columns, setCols] = React.useState([...columnList]);
  const [numFilterActive, setNumFilterActive] = React.useState(false);
  const [dateFilterActive, setDateFilterActive] = React.useState(false);

  const renderNumFilter = ({ closeMenu }: any, column: any) => (
    <Wrapper>
      <FieldSet
        legend="Варианты фильтрации:"
        onChange={(e) => {
          setSelected((e.target as HTMLInputElement).value);
        }}
      >
        <RadioButton value="1" name="test" defaultChecked={'1' === selected}>
          Сумма превышает миллиард
        </RadioButton>
        <RadioButton value="2" name="test" defaultChecked={'2' === selected}>
          Сумма меньше миллиарда
        </RadioButton>
      </FieldSet>
      <ButtonWrapper>
        <Button
          dimension="m"
          onClick={() => {
            closeMenu();
            setNumFilterActive(true);
            if (selected === '1') {
              const newRows = rowList.filter(
                (row) => Number(((row as any)[column.name] as string).replace(/\D/g, '')) > 1000000000,
              );
              setRows(newRows);
            } else {
              const newRows = rowList.filter(
                (row) => Number(((row as any)[column.name] as string).replace(/\D/g, '')) < 1000000000,
              );
              setRows(newRows);
            }
          }}
        >
          Применить
        </Button>
        <Button
          dimension="m"
          onClick={() => {
            closeMenu();
            setNumFilterActive(false);
            setSelected('');
            setRows([...rowList]);
          }}
        >
          Очистить
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );

  const renderDateFilter = ({ closeMenu }: any, column: any) => (
    <Wrapper>
      <DateField
        label="Выберите дату:"
        value={selectedDate}
        onChange={(e: any) => {
          setSelectedDate((e.target as HTMLInputElement).value);
        }}
      />
      <ButtonWrapper>
        <Button
          dimension="m"
          onClick={() => {
            closeMenu();
            setDateFilterActive(true);
            const newRows = rowList.filter((row) => (row as any)[column.name] === selectedDate);
            setRows(newRows);
          }}
        >
          Применить
        </Button>
        <Button
          dimension="m"
          onClick={() => {
            closeMenu();
            setDateFilterActive(false);
            setSelectedDate('');
            setRows([...rowList]);
          }}
        >
          Очистить
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );

  const onFilterMenuClickOutside = ({ closeMenu }: any) => closeMenu();

  const handleResize = ({ name, width }: { name: string; width: string }) => {
    const newCols = cols.map((col) => (col.name === name ? { ...col, width } : col));
    setCols(newCols);
  };

  const cols = React.useMemo(
    () =>
      columns.map((col, index) => {
        if (index === 0) {
          return {
            ...col,
            renderFilter: () => (
              <Wrapper>Пример кастомизации иконки фильтра с помощью функции renderFilterIcon</Wrapper>
            ),
            renderFilterIcon: () => <AcceptSolid />,
            onFilterMenuClickOutside,
          };
        }
        if (index === 1) {
          return {
            ...col,
            isFilterActive: dateFilterActive,
            renderFilter: renderDateFilter,
            onFilterMenuClickOutside,
          };
        }
        if (index === 2) {
          return {
            ...col,
            isFilterActive: numFilterActive,
            renderFilter: renderNumFilter,
            // eslint-disable-next-line no-console
            onFilterMenuClose: () => console.log('filter menu close'),
            // eslint-disable-next-line no-console
            onFilterMenuOpen: () => console.log('filter menu open'),
            onFilterMenuClickOutside,
          };
        } else if (index === 4) {
          return {
            ...col,
            cellAlign: 'right' as any,
            renderFilter: () => <Wrapper>Пример отображения фильтра в колонке с выравниванием по правому краю</Wrapper>,
            onFilterMenuClickOutside,
          };
        } else return col;
      }),
    [columns, selected, selectedDate, numFilterActive, dateFilterActive],
  );

  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Опционально в заголовках можно включать фильтрацию столбцов. При этом у заголовка будет появляться иконка
        фильтрации, по нажатию на которую будет открываться меню фильтрации.
        <Separator />
        Для того чтобы задать фильтр для столбца достаточно задать для него параметр <code>renderFilter</code> -
        функцию, которая будет отрисовывать содержимое меню фильтра. Данная функция имеет в качестве входных параметров
        объект столбца и объект с двумя свойствами:
        <Separator />
        <OrderedList dimension="s">
          <ListItem>
            <code>closeMenu</code> - колбек, при вызове которого происходит закрытие меню фильтра;
          </ListItem>
          <ListItem>
            <code>setFilterActive</code> - колбек, который устанавливает фильтр в активное/неактивное состояние. Колбек{' '}
            <code>setFilterActive</code> - это устаревшее api, вместо него рекомендуется использовать параметр столбца{' '}
            <code>isFilterActive</code>, который также устанавливает фильтр в активное/неактивное состояние. В
            неактивном состоянии иконка фильтра окрашена в серый цвет, при активном (включенном фильтре) иконка фильтра
            окрашивается в синий цвет.
          </ListItem>
        </OrderedList>
        <Separator />
        Меню фильтра является произвольным и полностью контролируется пользователем. Закрытие меню и установка фильтра в
        активное/неактивное состояние производится пользователем внутри функции <code>renderFilter</code> с помощью
        вышеописанных колбеков. С помощью параметров <code>filterMenuAlignSelf</code>, <code>filterMenuClassName</code>,{' '}
        <code>filterMenuCssMixin</code> и <code>filterMenuStyle</code> пользователь также может управлять выравниваем
        фильтра, добавлять <code>className</code> и изменять его стили.
        <Separator />
        Иконка фильтрации может быть любой (шестеренка, фильтр и т.д.). По умолчанию в качестве иконки фильтра
        используется иконка <code>MoreHorizontalOutline</code>. Дефолтную иконку можно заменить с помощью параметра{' '}
        <code>renderFilterIcon</code>.
        <Separator />
        Кроме того для столбца можно задать колбеки <code>onFilterMenuOpen</code> и <code>onFilterMenuClose</code>,
        которые будут срабатывать соответственно при открытии и закрытии меню фильтра. А также для столбца можно задать
        колбек <code>onFilterMenuClickOutside</code>, который будет срабатывать при клике вне меню фильтра. Данный
        колбек имеет в качестве входных параметров объект с двумя свойствами (<code>closeMenu</code>,{' '}
        <code>setFilterActive</code>) и параметр <code>event</code>.
        <Separator />
        !!! Примечание: для корректной работы вложенных друг в друга дропдаунов (н-р, меню фильтра, внутри которого
        открывается дропдаун с календарем) убедитесь, что компоненты библиотеки обернуты в <code>DropdownProvider</code>
        . Пример использования <code>DropdownProvider</code> есть в <code>readme</code>.
      </T>
      <Separator $height={24} />
      <Table {...props} columnList={cols} rowList={rows} onColumnResize={handleResize} />
    </>
  );
};
