import React from 'react';
import { Row, SimpleRow } from '../style';

type Props = {
  rowIndex: number;
  dimension: any;
  underline?: boolean;
  columns: any;
  renderLoadingBodyCell: (rowIndex: number, col: any) => React.ReactNode;
};

export const LoadingRow: React.FC<Props> = ({
  rowIndex,
  dimension,
  underline = true,
  columns,
  renderLoadingBodyCell,
}) => {
  return (
    <Row underline={underline} dimension={dimension}>
      <SimpleRow>{columns.map((col: any) => renderLoadingBodyCell(rowIndex, col))}</SimpleRow>
    </Row>
  );
};
