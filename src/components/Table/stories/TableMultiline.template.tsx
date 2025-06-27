import * as React from 'react';
import { Table, T } from '@admiral-ds/react-ui';
import type { TableProps, Column, TableRow } from '@admiral-ds/react-ui';
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
  customer: string;
};

const rowList: RowData[] = [
  {
    id: '0001',
    transfer_type: 'МНО',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(18_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    customer: 'Иванов Иван Петрович',
    rate: 2.5,
  },
  {
    id: '0002',
    transfer_type: 'МНО',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(32_500_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    customer: 'Смиронова Ольга Валерьевна',
    rate: 2.5,
  },
  {
    id: '0003',
    transfer_type: 'МНО',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(18_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    customer: 'Зверев Игорь Сергеевич',
    rate: 2.5,
  },
  {
    id: '0004',
    transfer_type: 'МНО',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(32_500_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    customer: 'Потапов Иван Александрович',
    rate: 2.5,
  },
  {
    id: '0005',
    transfer_type: 'МНО',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(18_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    customer: 'Шилова Вера Павловна',
    rate: 2.5,
  },
];

const columnList: Column[] = [
  {
    name: 'transfer_type',
    title: 'Тип сделки покупки недвижимости',
    width: 180,
  },
  {
    name: 'transfer_date',
    title: 'Дата сделки',
    width: 135,
  },
  {
    name: 'transfer_amount',
    title: 'Сумма сделки',
    width: 120,
  },
  {
    name: 'currency',
    title: 'Валюта',
  },
  {
    name: 'customer',
    title: 'Покупатель',
    width: 145,
  },
  {
    name: 'rate',
    title: 'Ставка на момент совершения сделки',
    width: 120,
  },
];

export const TableMultilineTemplate = (props: TableProps) => {
  const [cols, setCols] = React.useState(columnList);

  const handleResize = ({ name, width }: { name: string; width: string }) => {
    const newCols = cols.map((col) => (col.name === name ? { ...col, width } : col));
    setCols(newCols);
  };

  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Заголовки таблицы по умолчанию выводятся в одну строку и при нехватке места сокращаются с помощью троеточия.
        Увеличить высоту заголовка можно с помощью параметра <code>headerLineClamp</code>, который определяет
        максимальное количество строк, которое может занимать заголовок таблицы. В примере ниже используется{' '}
        <code>headerLineClamp</code> равный 2.
        <Separator />
        Строки таблицы не ограничены по высоте. В ячейке строки можно отрисовать любой <code>ReactNode</code>, передав
        его в <code>rowList</code>. Также с помощью функции <code>renderCell</code> можно переопределить стандартный вид
        ячеек, относящихся к определенному столбцу таблицы (смотрите "Пример кастомизации компонента ячейки").
      </T>
      <Separator $height={24} />
      <Table {...props} rowList={rowList} columnList={cols} headerLineClamp={2} onColumnResize={handleResize} />
    </>
  );
};
