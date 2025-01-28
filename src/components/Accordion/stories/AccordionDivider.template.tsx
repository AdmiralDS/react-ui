import * as React from 'react';

import { Accordion, AccordionItem, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Separator = styled.div<{ $height?: number }>`
  height: ${(p) => p.$height || 8}px;
`;

export const AccordionDividerTemplate = () => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        В зависимости от контекста можно включать-выключать разделители блоков компонента (верхнюю и нижнюю полоски).
        Например при использовании на подложке. Высота компонента при этом не меняется.
        <Separator />
        Для отключения верхнего разделителя используйте параметр hideTopDivider, данный параметр скрывает верхний
        разделитель у первого AccordionItem, заданного внутри Accordion. Для отключения нижнего разделителя используйте
        параметр hideBottomDivider, данный параметр скрывает нижний разделитель у последнего AccordionItem, заданного
        внутри Accordion.
      </T>
      <Separator $height={24} />
      <Accordion hideTopDivider hideBottomDivider>
        <AccordionItem title="Первый пункт">Контент первого пункта</AccordionItem>
        <AccordionItem title="Второй пункт">
          Аккордеон — это вертикальный список заголовков, которые, при нажатии, показывают контент находящийся под ними.
        </AccordionItem>
        <AccordionItem title="Третий пункт">
          Будущее игр никогда не было таким вдохновляющим. Творчество в играх процветает. Новые сервисы позволяют
          находить больше игр, а также приближают игроков к любимым играм, стримерам и создателям. Облако создает
          огромную возможность для потоковой передачи игр консольного уровня, что позволит людям играть с теми игроками,
          с кем хочется и где захочется. И для многих из нас нет ничего более вдохновляющего, чем рассвет нового
          поколения консолей.
        </AccordionItem>
      </Accordion>
    </>
  );
};
