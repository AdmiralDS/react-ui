import styled, { css, ThemeProvider } from 'styled-components';

import type { BorderRadiusType } from '@admiral-ds/react-ui';
import {
  NotificationItem,
  NotificationItemContent,
  NotificationItemTitle,
  DefaultFontColorName,
  defaultTypographyMixin,
  typography,
} from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const customTypographyMixin = css`
  table {
    ${typography['Body/Body 1 Long']};
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color[DefaultFontColorName]});

    border: 1px solid var(--admiral-color-Neutral_Neutral70, ${(p) => p.theme.color['Neutral/Neutral 70']});

    tr {
      height: 50px;
    }
    th {
      text-align: left;
      ${typography['Header/H6']};
      color: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 90']});
    }
    th,
    td {
      border: 1px solid var(--admiral-color-Neutral_Neutral70, ${(p) => p.theme.color['Neutral/Neutral 70']});
      padding: 8px 10px;
    }

    td[data-label='Manual'] {
      min-width: 300px;
      width: 300px;
    }

    tbody > tr:nth-of-type(even) {
      background-color: var(--admiral-color-Opacity_Neutral4, ${(p) => p.theme.color['Opacity/Neutral 4']});
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  ${customTypographyMixin};
`;
const TableWrapper = styled.div`
  width: 100%;
  ${defaultTypographyMixin};
`;

const Separator = styled.div<{ height: number }>`
  height: ${(p) => p.height}px;
`;

export const UsingDefaultTypographyLocallyTemplate = ({
  themeBorderKind,
  CSSCustomProps,
}: {
  themeBorderKind?: BorderRadiusType;
  CSSCustomProps?: boolean;
}) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Content>
        <NotificationItem displayStatusIcon>
          <NotificationItemTitle>Дефолтные стили текста для основных тэгов</NotificationItemTitle>
          <NotificationItemContent>
            Для основных тэгов рекомендуется использовать стили текста соответственно таблице ниже.
            <Separator height={8} />
            Все стили собраны в defaultTypographyMixin. Данный миксин можно подключать локально или глобально. При
            локальном подключении достаточно добавить его в стилизованный с помощью styled-components компонент, внутри
            которого необходимо использование данных стилей. Также возможно создавать кастомные миксины.
          </NotificationItemContent>
        </NotificationItem>
        <TableWrapper>
          <table>
            <thead>
              <tr>
                <th>Тэг</th>
                <th>Стиль текста</th>
                <th>Пример</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>&lt;div&gt;</td>
                <td>Body/Body 1 Long</td>
                <td data-label="Manual">
                  <div>Пример текста в div</div>
                </td>
              </tr>
              <tr>
                <td>&lt;span&gt;</td>
                <td>Body/Body 1 Long</td>
                <td data-label="Manual">
                  <span>Пример текста в span</span>
                </td>
              </tr>
              <tr>
                <td>&lt;main&gt;</td>
                <td>Body/Body 1 Long</td>
                <td data-label="Manual">-</td>
              </tr>
              <tr>
                <td>&lt;footer&gt;</td>
                <td>Body/Body 1 Long</td>
                <td data-label="Manual">-</td>
              </tr>
              <tr>
                <td>&lt;article&gt;</td>
                <td>Body/Body 1 Long</td>
                <td data-label="Manual">
                  <article>Пример текста в article</article>
                </td>
              </tr>
              <tr>
                <td>&lt;section&gt;</td>
                <td>Body/Body 1 Long</td>
                <td data-label="Manual">
                  <section>Пример текста в section</section>
                </td>
              </tr>
              <tr>
                <td>&lt;header&gt;</td>
                <td>Header/H4</td>
                <td data-label="Manual">-</td>
              </tr>
              <tr>
                <td>&lt;details&gt;</td>
                <td>Caption/Caption 1</td>
                <td data-label="Manual">
                  <details>
                    <summary>Пример details</summary>
                    Пример текста в details.
                  </details>
                </td>
              </tr>
              <tr>
                <td>&lt;summary&gt;</td>
                <td>Caption/Caption 1</td>
                <td data-label="Manual">
                  <summary>Пример текста в summary</summary>
                </td>
              </tr>
            </tbody>
          </table>
        </TableWrapper>
      </Content>
    </ThemeProvider>
  );
};
