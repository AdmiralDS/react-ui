import styled from 'styled-components';

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
  border-spacing: 0;
  border: 1px solid ${(p) => p.theme.color['Neutral/Neutral 20']};
  color: ${(p) => p.theme.color['Neutral/Neutral 90']};
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
    border: 1px solid ${(p) => p.theme.color['Neutral/Neutral 20']};
    border-top-width: 0;
    border-left-width: 0;
  }

  th:last-child,
  td:last-child {
    border-right-width: 0;
  }

  tr:last-child td {
    border-bottom-width: 0;
  }

  // последняя колонка растягивается в ширину при необходимости
  th:last-child {
    width: 100%;
  }

  // 1 колонка фиксирована
  th:first-child,
  td:first-child {
    position: sticky;
    left: 0;
    background-color: ${(p) => p.theme.color['Neutral/Neutral 10']};
  }

  // 10 колонка фиксирована
  th:nth-child(10),
  td:nth-child(10) {
    position: sticky;
    right: 0;
    background-color: ${(p) => p.theme.color['Neutral/Neutral 10']};
    border-left-width: 1px;
  }
  th:nth-child(9),
  td:nth-child(9) {
    border-right-width: 0;
  }
`;

export type TableBaseHtmlProps = {
  /** количество столбцов */
  colNumber?: number;

  /** количество строк */
  rowNum?: number;
};

export function TableBaseHtmlTemplate({ colNumber = 12, rowNum = 20 }: TableBaseHtmlProps) {
  return (
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
  );
}
