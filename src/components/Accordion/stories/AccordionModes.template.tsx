import * as React from 'react';

import { Accordion, AccordionItem, T } from '@admiral-ds/react-ui';
import type { AccordionProps } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Separator = styled.div<{ $height?: number }>`
  height: ${(p) => p.$height || 8}px;
`;

export const AccordionModesTemplate = (props: AccordionProps) => {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Компонент AccordionItem может работать в контролируемом и неконтролируемом режимах. Параметр expanded задает
        состояние компонента в контролируемом режиме:
        <Separator /> - если true, разворачивает тело аккордеона;
        <Separator />- если false, сворачивает тело аккордеона.
        <Separator />
        Если свойство expanded передано - автоматическое сворачивание/разворачивание блокируется. В неконтролируемом
        режиме дефолтное состояние аккордеона можно задать с помощью свойства defaultExpanded.
      </T>
      <Separator $height={24} />
      <Accordion {...props}>
        <AccordionItem
          defaultExpanded
          title="Неконтролируемый режим использования (uncontrolled)"
          // eslint-disable-next-line no-console
          onClick={(title, expanded, event) => console.log({ title, expanded, event })}
        >
          Контент первого пункта
        </AccordionItem>
        <AccordionItem
          expanded={expanded}
          title="Контролируемый режим использования (controlled)"
          onClick={(_title, expanded) => setExpanded(expanded)}
        >
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
