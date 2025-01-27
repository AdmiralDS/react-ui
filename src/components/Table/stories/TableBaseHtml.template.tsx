import styled from 'styled-components';
import { T } from '@admiral-ds/react-ui';

const HtmlTable = styled.table`
  // фиксированный заголовок
  overflow: auto;
  width: 100%;
  display: block;
  margin: 0 auto;

  thead {
    position: sticky;
    top: 0;
  }

  // стили
  white-space: nowrap;
  border-spacing: 1px;
  color: ${(p) => p.theme.color['Neutral/Neutral 90']};

  thead {
    top: 1px;
  }

  th {
    ${(p) => p.theme.typography['Subtitle/Subtitle 3']}
    padding: 10px 12px;
    background-color: ${(p) => p.theme.color['Neutral/Neutral 10']};
  }

  td {
    ${(p) => p.theme.typography['Body/Body 2 Short']}
    padding: 12px;
  }

  th,
  td {
    box-shadow: 0 0 0 1px ${(p) => p.theme.color['Neutral/Neutral 20']};
  }

  // последняя колонка растягивается в ширину при необходимости
  th:last-child {
    width: 100%;
  }

  // 1 колонка фиксирована
  th:first-child,
  td:first-child {
    position: sticky;
    left: 1px;
    background-color: ${(p) => p.theme.color['Neutral/Neutral 10']};
  }

  // 10 колонка фиксирована
  th:nth-child(10),
  td:nth-child(10) {
    position: sticky;
    right: 1px;
    background-color: ${(p) => p.theme.color['Neutral/Neutral 10']};
  }
`;

const Separator = styled.div`
  height: 24px;
`;

export type TableBaseHtmlProps = {
  /** количество столбцов */
  colNumber?: number;

  /** количество строк */
  rowNum?: number;
};

export function TableBaseHtmlTemplate({ colNumber = 12, rowNum = 20 }: TableBaseHtmlProps) {
  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Пример минимальной стилизации <code>html table</code> с фиксированной шапкой при вертикальном скроле.
      </T>
      <Separator />
      <HtmlTable style={{ maxHeight: 500, maxWidth: 980 }}>
        <tbody>
          {Array(rowNum)
            .fill(1)
            .map((_, rowIndex) => (
              <tr key={`row_${rowIndex}`}>
                {Array(colNumber)
                  .fill(1)
                  .map((_, colIndex) => (
                    <td key={`cell_${rowIndex}_${colIndex}`}>{`Cell ${rowIndex}_${colIndex + 1}`}</td>
                  ))}
              </tr>
            ))}
        </tbody>
        <thead>
          <tr>
            {Array(colNumber)
              .fill(1)
              .map((_, index) => (
                <th key={`header_${index}`}>{`Header ${index + 1}`}</th>
              ))}
          </tr>
        </thead>
      </HtmlTable>
    </>
  );
}
