import { T } from '#src/components/T';
import * as React from 'react';
import styled from 'styled-components';
import { OverflowMenu } from '#src/components/OverflowMenu';
import { MenuItem, RenderOptionProps } from '#src/components/MenuItem';
import { ReactComponent as DeleteOutline } from '@admiral-ds/icons/build/system/DeleteOutline.svg';
import { RowAction } from '#src/components/Table';

import type { Column } from '../Table';
import { Tooltip } from '#src/components/Tooltip';
import { TooltipHoc } from '#src/components/TooltipHOC';

const AmountCell = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;

  &[data-disabled='true'] {
    & > * {
      color: ${({ theme }) => theme.color['Neutral/Neutral 30']};
    }
  }
`;

const numberFormatter = new Intl.NumberFormat();

export type RowData = {
  id: string;
  selected?: boolean;
  disabled?: boolean;
  error?: boolean;
  success?: boolean;
  expanded?: boolean;
  expandedRowRender?: (row: RowData) => React.ReactNode;
  overflowMenuRender?: (row: RowData, onMenuOpen: () => void, onMenuClose: () => void) => React.ReactNode;
  actionRender?: (row: any) => React.ReactNode;
  transfer_type: string;
  transfer_date: string;
  transfer_amount: React.ReactNode;
  currency: string;
  rate: number;
  customer?: string;
  groupTitle?: string;
  groupRows?: Array<string>;
};

export const rowList: RowData[] = [
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
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(32_500_000_000)}</T>
      </AmountCell>
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
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(32_500_000_000)}</T>
      </AmountCell>
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
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(18_000_000)}</T>
      </AmountCell>
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

export const columnList: Column[] = [
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

export const columnListWithWidth: Column[] = [
  {
    name: 'transfer_type',
    title: 'Тип сделки',
    width: '20%',
  },
  {
    name: 'transfer_date',
    title: 'Дата сделки',
    width: '250px',
  },
  {
    name: 'transfer_amount',
    title: 'Сумма',
    width: 200,
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

export const columnListLineClamp: Column[] = [
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

export const rowListLineClamp: RowData[] = [
  {
    id: '0001',
    transfer_type: 'МНО',
    transfer_date: '2020-08-06',
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
    transfer_date: '2020-08-06',
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
    transfer_date: '2020-08-06',
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
    transfer_date: '2020-08-06',
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
    transfer_date: '2020-08-06',
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

export const columnListSticky: Column[] = [
  {
    name: 'transfer_type',
    title: 'Тип сделки',
    width: 150,
    sticky: true,
  },
  {
    name: 'transfer_date',
    title: 'Дата сделки',
    width: 150,
    sticky: true,
  },
  {
    name: 'transfer_amount',
    title: 'Сумма',
    width: 300,
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

export const rowListRowState: RowData[] = [
  {
    id: '0001',
    selected: true,
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
    error: true,
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
    success: true,
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

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  background: ${({ theme }) => theme.color['Cyan/Cyan 10']};
  padding: 16px;
`;
const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding-left: 16px;
  background: ${({ theme }) => theme.color['Special/Elevated BG']};
  & > div {
    margin-bottom: 8px;
  }
`;

const expandedRowRender = (row: RowData) => {
  return (
    <Wrapper>
      <Content>
        <div>Тип сделки: {row.transfer_type}</div>
        <div>Дата сделки: {row.transfer_date}</div>
        <div>Валюта: {row.currency}</div>
        <div>Ставка: {row.rate}</div>
      </Content>
    </Wrapper>
  );
};

export const rowListExpanded: RowData[] = [
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
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(32_500_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
    expanded: true,
    expandedRowRender: expandedRowRender,
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
    expandedRowRender: expandedRowRender,
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
    rate: 2.5,
    expandedRowRender: expandedRowRender,
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
    expandedRowRender: expandedRowRender,
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
];

export const rowListWithGroup: RowData[] = [
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
    rate: 2.5,
    expanded: true,
    expandedRowRender: expandedRowRender,
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
    expandedRowRender: expandedRowRender,
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
    rate: 2.5,
    expandedRowRender: expandedRowRender,
  },
  {
    id: '0001',
    transfer_type: 'Group name',
    expanded: false,
    transfer_date: new Date('2020-08-06').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(18_000_000)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
    groupTitle: 'Группа',
    groupRows: ['0007', '0008'],
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
    expandedRowRender: expandedRowRender,
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
    transfer_type: 'GR1',
    transfer_date: new Date('2020-07-18').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(200)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
  {
    id: '0008',
    transfer_type: 'GR1',
    transfer_date: new Date('2020-08-25').toLocaleDateString(),
    transfer_amount: (
      <AmountCell>
        <T font="Body/Body 2 Short">{numberFormatter.format(100)}</T>
      </AmountCell>
    ),
    currency: 'RUB',
    rate: 2.5,
  },
];

export const columnListExtra: Column[] = [
  {
    name: 'transfer_type',
    title: 'Тип сделки',
    width: 150,
  },
  {
    name: 'transfer_date',
    title: 'Дата сделки',
    extraText: 'Не позднее марта текущего года',
  },
  {
    name: 'transfer_amount',
    title: 'Сумма',
    cellAlign: 'right',
    width: 150,
    extraText: 'Сумма с учетом налогов',
  },
  {
    name: 'currency',
    title: 'Валюта',
    extraText: 'Some additional text',
  },
  {
    name: 'rate',
    title: 'Ставка',
    cellAlign: 'right',
  },
];

interface MenuProps {
  row: RowData;
  onMenuOpen: () => void;
  onMenuClose: () => void;
}

const Menu: React.FC<MenuProps> = ({ row, onMenuOpen, onMenuClose }) => {
  const items: Array<any> = [
    {
      id: '1',
      display: 'Вывести дату сделки в локали ru',
    },
    {
      id: '2',
      display: 'Вывести дату сделки в локали en-US',
    },
    {
      id: '3',
      display: 'Вывести дату сделки в локали de-AT',
    },
  ];
  const model = React.useMemo(() => {
    return items.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension="m" {...options} key={item.id} role="option">
          {item.display}
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
  }, []);

  const StrToDate = (str: string) => {
    const res = str.split('.').reverse().join('-');
    return new Date(res);
  };

  return (
    <OverflowMenu
      onChange={(id) => {
        const options: any = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        if (id === '1') alert(StrToDate(row['transfer_date']).toLocaleString('ru', options));
        if (id === '2') alert(StrToDate(row['transfer_date']).toLocaleString('en-US', options));
        if (id === '3') alert(StrToDate(row['transfer_date']).toLocaleString('de-AT', options));
      }}
      onOpen={onMenuOpen}
      onClose={onMenuClose}
      aria-label="Overflow Menu component"
      dimension="m"
      isVertical
      items={model}
    />
  );
};

const IconWrapper = styled.div`
  width: 20px;
  height: 20px;

  > svg {
    fill: ${({ theme }) => theme.color['Neutral/Neutral 50']};
  }
`;
const IconDeleteOutline = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLElement>>((props, ref) => {
  return (
    <IconWrapper ref={ref} {...props}>
      <DeleteOutline />
    </IconWrapper>
  );
});
const TooltipedIconDeleteOutline = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLElement>>((props, ref) => {
  const iconRef = React.useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = React.useState(false);
  return (
    <>
      <IconWrapper ref={iconRef} {...props}>
        <DeleteOutline />
      </IconWrapper>
      <Tooltip
        visible={visible}
        onVisibilityChange={setVisible}
        renderContent={() => `Delete row`}
        targetRef={iconRef}
      />
    </>
  );
});
const TooltipedIcon = TooltipHoc(IconDeleteOutline);

export const rowListMenu: RowData[] = [
  {
    id: '0001',
    transfer_type: 'МНО',
    transfer_date: new Date('2020-08-06').toLocaleDateString('ru'),
    transfer_amount: numberFormatter.format(500_000),
    currency: 'RUB',
    rate: 2.5,
    overflowMenuRender: (row: RowData, onMenuOpen: () => void, onMenuClose: () => void) => (
      <Menu row={row} onMenuOpen={onMenuOpen} onMenuClose={onMenuClose} />
    ),
  },
  {
    id: '0002',
    transfer_type: 'МНО',
    transfer_date: new Date('2021-04-05').toLocaleDateString('ru'),
    transfer_amount: numberFormatter.format(32_500_000_000),
    currency: 'RUB',
    rate: 5.5,
    overflowMenuRender: (row: RowData, onMenuOpen: () => void, onMenuClose: () => void) => (
      <Menu row={row} onMenuOpen={onMenuOpen} onMenuClose={onMenuClose} />
    ),
  },
  {
    id: '0003',
    transfer_type: 'МНО',
    transfer_date: new Date('2020-11-06').toLocaleDateString('ru'),
    transfer_amount: numberFormatter.format(189_000_000),
    currency: 'RUB',
    rate: 6,
    actionRender: () => {
      const [visible, setVisible] = React.useState(false);

      return (
        <RowAction onClick={() => console.log('row action happens')}>
          <TooltipedIcon
            visible={visible}
            handleVisibilityChange={(visible: boolean) => setVisible(visible)}
            renderContent={() => `Delete`}
          />
        </RowAction>
      );
    },
  },
  {
    id: '0004',
    transfer_type: 'МНО',
    transfer_date: new Date('2010-12-09').toLocaleDateString('ru'),
    transfer_amount: numberFormatter.format(350_000_000),
    currency: 'RUB',
    rate: 1,
    actionRender: () => (
      <RowAction onClick={() => console.log('row action happens')}>
        <TooltipedIconDeleteOutline />
      </RowAction>
    ),
  },
  {
    id: '0005',
    transfer_type: 'МНО',
    transfer_date: new Date('2019-08-06').toLocaleDateString('ru'),
    transfer_amount: numberFormatter.format(60_000),
    currency: 'RUB',
    rate: 4,
  },
];

export const virtualRowList = [...Array(1000).keys()].map((item, index) => ({
  id: String(index),
  transfer_number: index,
  transfer_date: new Date('2020-08-06').toLocaleDateString(),
}));

export const virtualColumnList: Column[] = [
  {
    name: 'transfer_number',
    title: 'Номер сделки',
    width: '40%',
  },
  {
    name: 'transfer_date',
    title: 'Дата сделки',
    width: '40%',
  },
];
