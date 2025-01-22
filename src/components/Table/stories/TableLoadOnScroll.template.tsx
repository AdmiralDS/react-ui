import * as React from 'react';
import { Table, T } from '@admiral-ds/react-ui';
import type { TableProps, Column, TableRow } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Separator = styled.div`
  height: 24px;
`;

const columnList: Column[] = [
  {
    name: 'transfer_number',
    title: 'Номер сделки',
    width: '33%',
  },
  {
    name: 'transfer_type',
    title: 'Тип сделки',
    width: '33%',
  },
  {
    name: 'transfer_amount',
    title: 'Сумма, ₽',
    width: '33%',
  },
];

type LastRowProps = {
  containerRef: React.RefObject<HTMLElement>;
  onVisible: () => void;
  rowNode: React.ReactNode;
};

const LastRowWrapper = ({ containerRef, onVisible, rowNode }: LastRowProps) => {
  const [visible, setVisible] = React.useState<boolean>(false);
  const ref = React.useRef<HTMLDivElement>(null);

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting && !visible) {
      setVisible(true);
      onVisible?.();
    }

    if (!entries[0].isIntersecting && visible) {
      setVisible(false);
    }
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: containerRef?.current,
      threshold: [0, 1.0],
    });

    if (containerRef.current && ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [containerRef, visible]);

  return <div ref={ref}>{rowNode}</div>;
};

export const TableLoadOnScrollTemplate = (props: TableProps) => {
  const [cols, setCols] = React.useState(columnList);
  const [rowsAmount, setRowsAmount] = React.useState(10);
  const tableRef = React.useRef<HTMLDivElement>(null);

  const rows = React.useMemo(() => {
    const array = Array.from({ length: rowsAmount }, (_, k) => {
      return `${k + 1}0000`;
    }).map((item, index) => ({
      id: item,
      transfer_number: index + 1,
      transfer_type: 'МНО',
      transfer_amount: item,
    }));
    return array;
  }, [rowsAmount]);

  const handleResize = ({ name, width }: { name: string; width: string }) => {
    const newCols = cols.map((col) => (col.name === name ? { ...col, width } : col));
    setCols(newCols);
  };

  const uploadNewRows = () => {
    if (rowsAmount < 100) setRowsAmount((amount) => amount + 10);
  };

  const renderRowWrapper = (row: TableRow, index: number, rowNode: React.ReactNode) =>
    index === rowsAmount - 1 ? (
      <LastRowWrapper key={`row_${row.id}`} containerRef={tableRef} onVisible={uploadNewRows} rowNode={rowNode} />
    ) : (
      rowNode
    );

  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Пользователь может реализовать подгрузку новых строк по мере скролла тела таблицы, например, следующим образом.
        С помощью функции <code>renderRowWrapper</code> можно создать элемент-обёртку над последней строкой в таблице, и
        через <code>IntersectionObserver</code> отслеживать момент, когда элемент-обёртка станет видим в пределах тела
        таблицы (т.е. момент доскролла до последней строки). Это событие будет являться триггером для загрузки новой
        порции строк.
      </T>
      <Separator />
      <Table
        {...props}
        ref={tableRef}
        rowList={rows}
        columnList={cols}
        onColumnResize={handleResize}
        renderRowWrapper={renderRowWrapper}
        style={{ height: '300px', width: '450px' }}
      />
    </>
  );
};
