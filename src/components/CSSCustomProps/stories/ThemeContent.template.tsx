import * as React from 'react';
import styled from 'styled-components';
import { typography } from '@admiral-ds/react-ui';

const Content = styled.div`
  ${typography['Body/Body 1 Long']}
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});

  li {
    margin-bottom: 16px;
  }
`;
const Underline = styled.span`
  text-decoration: underline;
`;
const Text = styled.span`
  font-weight: 500;
`;
const AdText = styled.span`
  color: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
`;
const Separator = styled.div`
  height: 8px;
`;
const Term = styled.span`
  font-weight: 550;
`;

export const ThemeContentTemplate = () => {
  return (
    <Content>
      Тема включает в себя несколько категорий css переменных.
      <ol>
        <li>
          Категория <Term>color</Term>
          <Separator />
          <Underline>Состоит из</Underline>: css переменные со значениями цветов
          <Separator />
          <Underline>Именование</Underline>:
          <Text>--admiral-color-[название группы цветов]_[название конкретного цвета]</Text>, например,
          <Text>--admiral-color-Primary_Primary60Main</Text>
          <Separator />
          Каждая css переменная имеет аналог в стандартной теме <AdText>(LIGHT_THEME / DARK_THEME)</AdText>, в storybook
          в разделе Colors можно увидеть какому дизайн токену цвета соответствует каждая css переменная
        </li>
        <li>
          Категория <Term>z-index</Term>
          <Separator />
          <Underline>Состоит из</Underline>: css переменные со значениями z-index
          <Separator />
          <Underline>Именование</Underline>: <Text>--admiral-z-index-[тип компонента]</Text>, например,{' '}
          <Text>--admiral-z-index-tooltip</Text>
          <Separator />
          Каждая css переменная имеет аналог в стандартной теме <AdText>(LIGHT_THEME / DARK_THEME)</AdText>
        </li>
        <li>
          Категория <Term>box-shadow</Term>
          <Separator />
          <Underline>Состоит из</Underline>: css переменные со значениями box-shadow
          <Separator />
          <Underline>Именование</Underline>:<Text>--admiral-box-shadow-[название тени]</Text>, например,
          <Text>--admiral-box-shadow-Shadow08</Text>
          <Separator />
          Каждая css переменная имеет аналог в стандартной теме <AdText>(LIGHT_THEME / DARK_THEME)</AdText>
        </li>
        <li>
          Категория <Term>font-family</Term>
          <Separator />
          <Underline>Состоит из</Underline>: css переменная со значениями font-family
          <Separator />
          <Underline>Именование</Underline>: <Text>--admiral-font-family</Text>
          <Separator />
          Переменная аналогична theme.fontFamily токену из стандартной темы <AdText>(LIGHT_THEME / DARK_THEME)</AdText>
        </li>
        <li>
          Категория <Term>font-weight</Term>
          <Separator />
          <Underline>Состоит из</Underline>: css переменные со значениями font-weight
          <Separator />
          <Underline>Именование</Underline>: <Text>--admiral-font-weight-[стиль типографики]</Text>, например,
          <Text>--admiral-font-weight-Header_HL1</Text>
          <Separator />
          Каждая css переменная соответствует определенному стилю типографики (список стилей можно найти в storybook в
          компоненте T)
        </li>
        <li>
          Категория <Term>font-size</Term>
          <Separator />
          <Underline>Состоит из</Underline>: css переменные со значениями font-size
          <Separator />
          <Underline>Именование</Underline>: <Text>--admiral-font-size-[стиль типографики]</Text>, например,
          <Text>--admiral-font-size-Header_HL1</Text>
          <Separator />
          Каждая css переменная соответствует определенному стилю типографики (список стилей можно найти в storybook в
          компоненте T)
        </li>
        <li>
          Категория <Term>line-height</Term>
          <Separator />
          <Underline>Состоит из</Underline>: css переменные со значениями line-height
          <Separator />
          <Underline>Именование</Underline>: <Text>--admiral-line-height-[стиль типографики]</Text>, например,
          <Text>--admiral-line-height-Header_HL1</Text>
          <Separator />
          Каждая css переменная соответствует определенному стилю типографики (список стилей можно найти в storybook в
          компоненте T)
        </li>
        <li>
          Категория <Term>border-radius</Term>
          <Separator />
          <Underline>Состоит из</Underline>: css переменные со значениями border-radius
          <Separator />
          <Underline>Именование</Underline>:
          <Text>--admiral-border-radius-[размер скругления (Small / Medium / Large)]</Text>, например,
          <Text>--admiral-border-radius-Small</Text>
          <Separator />
          Для каждой css переменной <Text>--admiral-border-radius-[размер скругления]</Text> задан набор допустимых
          значений в виде css переменных типа <Text>--admiral-border-kind-[размер скругления]_*</Text>
        </li>
      </ol>
    </Content>
  );
};
