import * as React from 'react';
import { Table, T, UnorderedList, ListItem } from '@admiral-ds/react-ui';
import type { TableProps, Column, TableRow, Color } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const AmountCell = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;

  &[data-disabled='true'] {
    & > * {
      color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
    }
  }
`;
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
    selected: true,
    hover: true,
    transfer_type: 'МНО',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(18_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0002',
    disabled: true,
    transfer_type: 'МНО',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell data-disabled>
        <T font="Body/Body 2 Short">{numberFormatter.format(32_500_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0003',
    status: 'error',
    hover: true,
    transfer_type: 'МНО',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(18_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0004',
    status: 'success',
    hover: true,
    transfer_type: 'МНО',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(32_500_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0005',
    status: 'attention',
    hover: true,
    transfer_type: 'МНО',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(32_500_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0006',
    status: 'warning',
    hover: true,
    transfer_type: 'МНО',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(32_500_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0007',
    hover: true,
    transfer_type: 'МНО',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(32_500_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
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

export const TableRowStateTemplate = (props: TableProps) => {
  const [cols, setCols] = React.useState(columnList);

  const handleResize = ({ name, width }: { name: string; width: string }) => {
    const newCols = cols.map((col) => (col.name === name ? { ...col, width } : col));
    setCols(newCols);
  };

  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Для каждой строки помимо содержимого ячеек, <code>id</code> и <code>className</code>, можно задать следующие
        состояния строки: <Separator />
        <UnorderedList dimension="s">
          <ListItem>
            <code>selected</code> - строка выбрана, чекбокс в строке проставлен;
          </ListItem>
          <ListItem>
            <code>disabled</code> - строка задизейблена;
          </ListItem>
          <ListItem>
            <code>hover</code> - строка окрашивается при ховере. Данная окраска должна применяться, если строка
            кликабельна и ведет к каким-либо действиям.
          </ListItem>
        </UnorderedList>
        <Separator />
        Также строке можно задать определенный статус, в соответствии с которым она будет окрашена. Чтобы задать статус
        для строки необходимо использовать параметр <code>status</code>, где в качестве значения указывается строка с
        названием статуса (например, <code>status='error'</code> или <code>status='success'</code>). По умолчанию
        таблица предоставляет два статуса: <code>error</code> и <code>success</code>.<Separator />
        Пользователь также имеет возможность задать для строки свои кастомные статусы. Для того чтобы задать кастомный
        статус необходимо:
        <Separator />
        <UnorderedList dimension="s">
          <ListItem>
            Придумать строковое название статуса (например, <code>'attention'</code>) и определить, какой цвет строки
            будет ему соответствовать (например, <code>Attention/Attention 20</code>). Рекомендуется использовать цвета
            из палитры библиотеки с индексом контрастности 10 или 20.
          </ListItem>
          <ListItem>
            В параметре таблицы <code>rowBackgroundColorByStatusMap</code> необходимо задать соответствие кастомного
            статуса строки и её цвета. Для этого в качестве значения <code>rowBackgroundColorByStatusMap</code> нужно
            указать объект, где ключом объекта должно быть название статуса, а значением свойства объекта должен быть
            цвет строки, соответствующий данному статусу. Цвет можно задать либо в виде строки со значением цвета, либо
            в виде функции, которая на вход получает объект <code>color</code> (равный <code>theme.color</code>, данный
            объект стоит использовать, если цвет строки будет взят из темы) и возвращает строку со значением цвета.
            Также с помощью параметра <code>rowBackgroundColorByStatusMap</code> можно перезадать дефолтные цвета строк
            для статусов <code>error</code> и <code>success</code>.
          </ListItem>
          <ListItem>В параметре строки status задать название кастомного статуса.</ListItem>
        </UnorderedList>
      </T>
      <Separator $height={24} />
      <Table
        {...props}
        rowList={rowList}
        columnList={cols}
        onColumnResize={handleResize}
        rowBackgroundColorByStatusMap={{
          attention: (color: Color) => color['Attention/Attention 20'],
          warning: (color: Color) => color['Warning/Warning 20'],
        }}
      />
    </>
  );
};
