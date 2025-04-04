import * as React from 'react';
import { Table, T, UnorderedList, ListItem } from '@admiral-ds/react-ui';
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
  height: ${(p) => p.$height || 24}px;
`;

//<editor-fold desc="Документация по стилизации">
const docsColumns = [
  { name: 'element', title: 'Элемент таблицы', width: 250 },
  { name: 'columnAttr', title: 'data-атрибут столбца', width: 250 },
  { name: 'rowAttr', title: 'data-атрибут строки', width: 250 },
];
const docsRows = [
  { id: '1', element: 'Строка таблицы', columnAttr: '————', rowAttr: `data-row={id строки}` },
  {
    id: '2',
    element: 'Ячейка с заголовком столбца в хедере таблицы',
    columnAttr: `data-th-column={name столбца}`,
    rowAttr: '————',
  },
  { id: '3', element: 'Ячейка с чекбоксом в хедере таблицы', columnAttr: `data-th-column='checkbox'`, rowAttr: '————' },
  {
    id: '4',
    element: 'Ячейка с данными в теле таблицы',
    columnAttr: `data-column={name столбца}`,
    rowAttr: `data-row={id строки}`,
  },
  {
    id: '5',
    element: 'Ячейка с заголовком группы в теле таблицы',
    columnAttr: `data-column='group'`,
    rowAttr: `data-row={id строки}`,
  },
  {
    id: '6',
    element: 'Ячейка с чекбоксом в теле таблицы',
    columnAttr: `data-column='checkbox'`,
    rowAttr: `data-row={id строки}`,
  },
  {
    id: '7',
    element: 'Ячейка с иконкой стрелки (для раскрытия строки/группы строк) в теле таблицы',
    columnAttr: `data-column='expand'`,
    rowAttr: `data-row={id строки}`,
  },
];

const Docs = () => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Существует ряд возможностей изменить дефолтные стили таблицы. Для таблицы можно задать атрибут{' '}
        <code>style</code>, который применится к корневому элементу таблицы. Кроме того, на корневой элемент можно
        прокинуть все стандартные html-атрибуты div-элемента.
        <Separator />У пользователя существует возможность менять стили отдельных элементов таблицы путем доступа к ним
        через определенные <code>classNames</code> и data-атрибуты. В таблице используются следующие{' '}
        <b>
          <code>classNames</code>
        </b>
        :<Separator $height={8} />
        <UnorderedList dimension="s">
          <ListItem>table - корневой элемент таблицы</ListItem>
          <ListItem>
            thead - хедер таблицы
            <UnorderedList>
              <ListItem>th - ячейка с заголовком столбца в хедере таблицы</ListItem>
              <ListItem>th_checkbox - ячейка с чекбоксом в хедере таблицы</ListItem>
            </UnorderedList>
          </ListItem>
          <ListItem>
            tbody - тело таблицы
            <UnorderedList>
              <ListItem>td - ячейка с данными в теле таблицы</ListItem>
              <ListItem>td_checkbox - ячейка с чекбоксом в теле таблицы</ListItem>
              <ListItem>
                td_expand - ячейка с иконкой стрелки (для раскрытия строки/группы строк) в теле таблицы
              </ListItem>
            </UnorderedList>
          </ListItem>
          <ListItem>tr - строка таблицы</ListItem>
        </UnorderedList>
        <Separator />
        Также у элементов в таблице есть специальные{' '}
        <b>
          <code>data-атрибуты</code>
        </b>
        , которые описывают принадлежность элемента к определенным столбцу и строке. Ниже приведено подробное описание:
        <Table
          columnList={docsColumns}
          rowList={docsRows}
          dimension="s"
          showBorders
          style={{ width: '750px', margin: '8px 0 24px 0' }}
        />
        Для прокидывания дополнительных пропсов и data-атрибутов на верхнеуровневый элемент заголовка используйте
        параметр столбца headerPropsConfig.
        <Separator $height={8} />
        Также существует ряд параметров, влияющих на внешний вид таблицы:
        <Separator $height={8} />
        <UnorderedList dimension="s">
          <ListItem>
            <code>dimension</code> - параметр, регулирующий размер таблицы;
          </ListItem>
          <ListItem>
            <code>greyHeader</code> - параметр, с помощью которого можно окрашивать шапку таблицы в серый цвет;
          </ListItem>
          <ListItem>
            <code>showDividerForLastColumn</code> - параметр, который отвечает за отображение вертикальной полосы
            разделителя для последнего столбца таблицы. По умолчанию параметр равен false, то есть разделитель не
            отображается;
          </ListItem>
          <ListItem>
            <code>showLastRowUnderline</code> - параметр, который управляет отображением серой линии подчеркивания для
            последней строки таблицы. По умолчанию параметр равен true, то есть линия отображается;
          </ListItem>
          <ListItem>
            <code>showBorders</code> - параметр, который управляет отображением границ между ячейками таблицы и обводки
            всей таблицы. По умолчанию параметр равен false, последняя колонка будет иметь границы справа только, если
            параметр <code>showDividerForLastColumn</code> равен true;
          </ListItem>
          <ListItem>
            <code>spacingBetweenItems</code> - параметр, который влияет на внешний вид заголовка и отвечает одновременно
            за размер правого бокового отступа внутри заголовка и за расстояние между иконкой фильтра (при её наличии) и
            остальным содержимым заголовка (
            <a href="https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?type=design&node-id=39-90743&t=3zpjH7G56cpfgH43-4">
              описание параметра в макетах
            </a>
            ). По умолчанию минимальное значение 12, для таблиц S и M, и 16 для таблиц L и XL. В коде предусмотрено, что
            правый боковой отступ можно менять только в большую сторону в сравнении с дефолтным значением, а расстояние
            между иконкой фильтра и остальным содержимым заголовка можно как уменьшать, так и увеличивать с помощью{' '}
            <code>spacingBetweenItems</code>.
          </ListItem>
        </UnorderedList>
      </T>
      <Separator $height={40} />
    </>
  );
};
//</editor-fold>

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

const columnList: Column[] = [
  {
    name: 'transfer_type',
    title: 'Тип сделки',
    headerPropsConfig: ({ className }) => ({ className: `${className} transferType`, 'data-testId': 'transferType' }),
  },
  {
    name: 'transfer_date',
    title: 'Дата сделки',
    width: 150,
    headerPropsConfig: ({ className }) => ({ className: `${className} transferDate`, 'data-testId': 'transferDate' }),
  },
  {
    name: 'transfer_amount',
    title: 'Сумма',
    width: 170,
    headerPropsConfig: ({ className }) => ({
      className: `${className} transferAmount`,
      'data-testId': 'transferAmount',
    }),
  },
  {
    name: 'currency',
    title: 'Валюта',
    headerPropsConfig: ({ className }) => ({ className: `${className} currency`, 'data-testId': 'currency' }),
  },
  {
    name: 'rate',
    title: 'Ставка',
    headerPropsConfig: ({ className }) => ({ className: `${className} rate`, 'data-testId': 'rate' }),
  },
];

export const TableStyleTemplate = (props: TableProps) => {
  const [cols, setCols] = React.useState(columnList);

  const handleResize = ({ name, width }: { name: string; width: string }) => {
    const newCols = cols.map((col) => (col.name === name ? { ...col, width } : col));
    setCols(newCols);
  };

  return (
    <>
      <Docs />
      <Table
        {...props}
        rowList={rowList}
        columnList={cols}
        greyHeader
        showBorders
        spacingBetweenItems={'20px'}
        style={{
          maxHeight: '400px',
        }}
        onColumnResize={handleResize}
      />
    </>
  );
};
