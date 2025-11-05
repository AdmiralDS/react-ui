import * as React from 'react';
import { Hint, Button, T, UnorderedList, ListItem } from '@admiral-ds/react-ui';
import type { HintProps, BorderRadiusType } from '@admiral-ds/react-ui';
import styled, { ThemeProvider } from 'styled-components';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const text = `At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples
of mini units map to fluid grid column widths and row heights.`;

const StyledButton = styled(Button)`
  padding: 4px;
`;
const Separator = styled.div`
  height: 8px;
`;

export const HintPositionTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: HintProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [visible1, setVisible1] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);
  const [visible3, setVisible3] = React.useState(false);
  const [visible4, setVisible4] = React.useState(false);
  const handleVisibilityChange1 = (visible: boolean) => setVisible1(visible);
  const handleVisibilityChange2 = (visible: boolean) => setVisible2(visible);
  const handleVisibilityChange3 = (visible: boolean) => setVisible3(visible);
  const handleVisibilityChange4 = (visible: boolean) => setVisible4(visible);

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Компонент имеет 8 основных вариантов позиционирования: снизу справа, снизу слева, сверху справа, сверху слева,
        слева внизу, слева вверху, справа внизу и справа вверху. Позиции перечислены в порядке приоритета. По умолчанию
        компонент сам рассчитывает свою позицию, исходя из приоритета позиций и свободного места на экране. Если хинт не
        помещается ни в один из перечисленных 8 вариантов позиционирования, то происходит проверка того, можно ли
        разместить хинт снизу/сверху/слева/справа относительно центра target-элемента или снизу/сверху по центру
        страницы.
        <Separator />
        Также пользователь может сам с помощью параметра hintPosition задать, с какой стороны от target-элемента должен
        появляться Hint. Параметр hintPosition может принимать следующие значения - bottom|top|left|right. <Separator />
        <UnorderedList>
          <ListItem>
            При hintPosition='bottom' хинт рендерится снизу от target-элемента с возможным сдвигом по горизонтальной
            оси, т.е. происходит выбор из 4 вариантов позиционирования: снизу справа, снизу слева, снизу по центру
            target-элемента и снизу по центру страницы (позиции расположены в порядке приоритета);
          </ListItem>
          <ListItem>
            При hintPosition='top' хинт рендерится сверху от target-элемента с возможным сдвигом по горизонтальной оси,
            т.е. происходит выбор из 4 вариантов позиционирования: сверху справа, сверху слева, сверху по центру
            target-элемента и сверху по центру страницы (позиции расположены в порядке приоритета);
          </ListItem>
          <ListItem>
            При hintPosition='left' хинт рендерится слева от target-элемента с возможным сдвигом по вертикальной оси,
            т.е. происходит выбор из 3 вариантов позиционирования: слева снизу, слева сверху и слева по центру
            target-элемента (позиции расположены в порядке приоритета);
          </ListItem>
          <ListItem>
            При hintPosition='right' хинт рендерится справа от target-элемента с возможным сдвигом по вертикальной оси,
            т.е. происходит выбор из 3 вариантов позиционирования: справа снизу, справа сверху и справа по центру
            target-элемента (позиции расположены в порядке приоритета).
          </ListItem>
        </UnorderedList>
        <Separator />
        На экранах мобильных устройств, меньше 640px, компонент адаптируется по ширине к рабочей области устройства, то
        есть занимает всю ширину экрана и позиционируется только снизу или сверху от target-элемента.
        <Separator />
        Ниже приведен пример с использованием параметра hintPosition.
      </T>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <Hint
          {...props}
          visible={visible1}
          onVisibilityChange={handleVisibilityChange1}
          renderContent={() => text}
          anchorId="right_pos"
          hintPosition="right"
        >
          <StyledButton dimension="s" aria-label="Additional information" aria-describedby="right_pos">
            Right
          </StyledButton>
        </Hint>
        <Hint
          {...props}
          visible={visible2}
          onVisibilityChange={handleVisibilityChange2}
          renderContent={() => text}
          anchorId="top_pos"
          hintPosition="top"
        >
          <StyledButton dimension="s" aria-label="Additional information" aria-describedby="top_pos">
            Top
          </StyledButton>
        </Hint>
        <Hint
          {...props}
          visible={visible3}
          onVisibilityChange={handleVisibilityChange3}
          renderContent={() => text}
          anchorId="bottom_pos"
          hintPosition="bottom"
        >
          <StyledButton dimension="s" aria-label="Additional information" aria-describedby="bottom_pos">
            Bottom
          </StyledButton>
        </Hint>
        <Hint
          {...props}
          visible={visible4}
          onVisibilityChange={handleVisibilityChange4}
          renderContent={() => text}
          anchorId="left-pos"
          hintPosition="left"
        >
          <StyledButton dimension="s" aria-label="Additional information" aria-describedby="left-pos">
            Left
          </StyledButton>
        </Hint>
      </div>
    </ThemeProvider>
  );
};
