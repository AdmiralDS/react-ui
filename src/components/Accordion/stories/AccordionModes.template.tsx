import * as React from 'react';

import { Accordion, AccordionItem } from '@admiral-ds/react-ui';
import type { AccordionProps } from '@admiral-ds/react-ui';

export const AccordionModesTemplate = (props: AccordionProps) => {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <>
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
