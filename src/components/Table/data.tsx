import { T } from '#/components/T';
import * as React from 'react';
import styled from 'styled-components';

import type { Column } from '../Table';

const AmountCell = styled.div`
  text-align: end;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const numberFormatter = new Intl.NumberFormat();

export type RowData = {
  id: string;
  transfer_type: string;
  transfer_date: string;
  transfer_amount: React.ReactNode;
  currency: string;
  rate: number;
};

export const rowList: RowData[] = [
  {
    id: '0001',
    transfer_type: 'МНО',
    transfer_date: new Date('08-06-2020').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Additional/XS">{numberFormatter.format(18_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0002',
    transfer_type: 'МНО',
    transfer_date: new Date('08-06-2020').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Additional/XS">{numberFormatter.format(32_500_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0003',
    transfer_type: 'МНО',
    transfer_date: new Date('08-06-2020').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Additional/XS">{numberFormatter.format(18_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0004',
    transfer_type: 'МНО',
    transfer_date: new Date('08-06-2020').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Additional/XS">{numberFormatter.format(32_500_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0005',
    transfer_type: 'МНО',
    transfer_date: new Date('08-06-2020').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Additional/XS">{numberFormatter.format(18_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0006',
    transfer_type: 'МНО',
    transfer_date: new Date('08-06-2020').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Additional/XS">{numberFormatter.format(32_500_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0007',
    transfer_type: 'МНО',
    transfer_date: new Date('08-06-2020').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Additional/XS">{numberFormatter.format(18_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0008',
    transfer_type: 'МНО',
    transfer_date: new Date('08-06-2020').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Additional/XS">{numberFormatter.format(32_500_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0009',
    transfer_type: 'МНО',
    transfer_date: new Date('08-06-2020').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Additional/XS">{numberFormatter.format(18_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0010',
    transfer_type: 'МНО',
    transfer_date: new Date('08-06-2020').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Additional/XS">{numberFormatter.format(32_500_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0011',
    transfer_type: 'МНО',
    transfer_date: new Date('08-06-2020').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Additional/XS">{numberFormatter.format(18_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0012',
    transfer_type: 'МНО',
    transfer_date: new Date('08-06-2020').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Additional/XS">{numberFormatter.format(32_500_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
];

export const columnList: Column[] = [
  {
    name: 'transfer_type',
    title: 'Тип сделки',
  },
  {
    name: 'transfer_date',
    title: 'Дата сделки',
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

export const columnListWithWidth: Column[] = [
  {
    name: 'transfer_type',
    title: 'Тип сделки',
    width: 160,
  },
  {
    name: 'transfer_date',
    title: 'Дата сделки',
    width: 475,
  },
  {
    name: 'transfer_amount',
    title: 'Сумма',
    width: 150,
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

export const columnListOrientation: Column[] = [
  {
    name: 'transfer_type',
    title: 'Тип сделки',
    width: 150,
  },
  {
    name: 'transfer_date',
    title: 'Дата сделки',
  },
  {
    name: 'transfer_amount',
    title: 'Сумма',
    cellAlign: 'right',
    width: 150,
  },
  {
    name: 'currency',
    title: 'Валюта',
  },
  {
    name: 'rate',
    title: 'Ставка',
    cellAlign: 'right',
  },
];

export const columnListSort: Column[] = [
  {
    name: 'transfer_type',
    title: 'Тип сделки',
    width: 150,
  },
  {
    name: 'transfer_date',
    title: 'Дата сделки',
    width: 150,
    sortable: true,
  },
  {
    name: 'transfer_amount',
    title: 'Сумма',
    width: 170,
    sortable: true,
  },
  {
    name: 'currency',
    title: 'Валюта',
  },
  {
    name: 'rate',
    title: 'Ставка',
    sortable: true,
  },
];

export const rowListSort: RowData[] = [
  {
    id: '0001',
    transfer_type: 'МНО',
    transfer_date: new Date('08-06-2020').toLocaleDateString(),
    transfer_amount: numberFormatter.format(500_000),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0002',
    transfer_type: 'МНО',
    transfer_date: new Date('04-05-2021').toLocaleDateString(),
    transfer_amount: numberFormatter.format(32_500_000_000),
    currency: 'RUB',
    rate: 5.5,
  },
  {
    id: '0003',
    transfer_type: 'МНО',
    transfer_date: new Date('11-06-2020').toLocaleDateString(),
    transfer_amount: numberFormatter.format(189_000_000),
    currency: 'RUB',
    rate: 6,
  },
  {
    id: '0004',
    transfer_type: 'МНО',
    transfer_date: new Date('12-09-2010').toLocaleDateString(),
    transfer_amount: numberFormatter.format(350_000_000),
    currency: 'RUB',
    rate: 1,
  },
  {
    id: '0005',
    transfer_type: 'МНО',
    transfer_date: new Date('08-06-2019').toLocaleDateString(),
    transfer_amount: numberFormatter.format(60_000),
    currency: 'RUB',
    rate: 4,
  },
];
