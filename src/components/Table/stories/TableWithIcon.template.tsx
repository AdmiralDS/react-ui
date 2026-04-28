import { useState } from 'react';
import styled from 'styled-components';

import { Table, T } from '@admiral-ds/react-ui';
import type { TableProps, Column, TableRow } from '@admiral-ds/react-ui';
import { ReactComponent as AttachFileSolid } from '@admiral-ds/icons/build/system/AttachFileSolid.svg';
import { ReactComponent as StarSolid } from '@admiral-ds/icons/build/system/StarSolid.svg';
import { ReactComponent as HomeSolid } from '@admiral-ds/icons/build/system/HomeSolid.svg';

const AmountCell = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  flex-grow: 1;

  &[data-disabled='true'] {
    & > * {
      color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
    }
  }
`;

const WrapperText = styled.div`
  display: flex;
  align-items: center;
`;

const WrapperIcon = styled.div<{ $dimension?: 's' | 'm' }>`
  height: ${({ $dimension }) => ($dimension === 'm' ? '20px' : '16px')};
  width: ${({ $dimension }) => ($dimension === 'm' ? '20px' : '16px')};
  flex-shrink: 0;

  margin-left: 12px;
`;

const Separator = styled.div`
  height: 24px;
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
    transfer_type: 'МНО',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <WrapperText>
        <AmountCell>
          <T font="Body/Body 2 Short">{numberFormatter.format(32_500_000_000)} с переполнением ячейки</T>
        </AmountCell>
        <WrapperIcon>
          <StarSolid />
        </WrapperIcon>
      </WrapperText>
    ),
    currency: 'RUB',
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
    rate: 2.5,
  },
  {
    id: '0004',
    transfer_type: 'МНО',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <WrapperText>
        <AmountCell>
          <T font="Body/Body 2 Short">{numberFormatter.format(32_500_000_000)}</T>
        </AmountCell>
        <WrapperIcon>
          <HomeSolid />
        </WrapperIcon>
      </WrapperText>
    ),
    currency: 'RUB',
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
    rate: 2.5,
  },
  {
    id: '0006',
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
    id: '0008',
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
    id: '0009',
    transfer_type: 'МНО',
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <WrapperText>
        <AmountCell>
          <T font="Body/Body 2 Short">{numberFormatter.format(18_000_000)}</T>
        </AmountCell>
        <WrapperIcon>
          <StarSolid />
        </WrapperIcon>
      </WrapperText>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0010',
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
    id: '0011',
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
    id: '0012',
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
    width: '20%',
    renderCell(data, _row): React.ReactNode {
      return (
        <WrapperText>
          {data}
          <WrapperIcon $dimension="m">
            <AttachFileSolid />
          </WrapperIcon>
        </WrapperText>
      );
    },
  },
  {
    name: 'transfer_date',
    title: 'Дата сделки',
    width: '250px',
    renderCell(date: string): React.ReactNode {
      return <div>Дата - {date}</div>;
    },
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
    renderCell(data: string): React.ReactNode {
      return <i>{data}$</i>;
    },
  },
];

export const TableWithIconTemplate = (props: TableProps) => {
  const [cols, setCols] = useState(columnList);

  const handleResize = ({ name, width }: { name: string; width: string }) => {
    const newCols = cols.map((col) => (col.name === name ? { ...col, width } : col));
    setCols(newCols);
  };

  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Для формирования контента ячейки пользователь может использовать рендер-колбек <code>renderCell</code>. Функция{' '}
        <code>renderCell</code> задается для каждого столбца в отдельности и представляет собой метод для
        переопределения стандартного вида ячейки. На вход функция <code>renderCell</code> получает 3 параметра:{' '}
        <code>data</code> - контент ячейки, <code>row</code> - объект строки и <code>rowIdx</code> - индекс строки.
        <br />В примере показаны пример вставки иконки, как во все ячейки столбца, так и в отдельные ячейки
      </T>
      <Separator />
      <Table {...props} rowList={rowList} columnList={cols} onColumnResize={handleResize} />
    </>
  );
};
