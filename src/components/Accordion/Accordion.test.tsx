import * as React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { LIGHT_THEME } from '#src/components/themes';

import type { AccordionProps } from '.';
import { Accordion, AccordionItem } from '.';

describe('Spinner', () => {
  const Comp = (props: AccordionProps) => (
    <ThemeProvider theme={LIGHT_THEME}>
      <Accordion {...props}>
        <AccordionItem id="AccordionItem_1" title="Первый пункт">
          Контент первого пункта
        </AccordionItem>
        <AccordionItem id="AccordionItem_2" title="Второй пункт">
          Аккордеон — это вертикальный список заголовков, которые, при нажатии, показывают контент находящийся под ними.
        </AccordionItem>
        <AccordionItem id="AccordionItem_3" title="Третий пункт">
          Будущее игр никогда не было таким вдохновляющим. Творчество в играх процветает. Новые сервисы позволяют
          находить больше игр, а также приближают игроков к любимым играм, стримерам и создателям. Облако создает
          огромную возможность для потоковой передачи игр консольного уровня, что позволит людям играть с теми игроками,
          с кем хочется и где захочется. И для многих из нас нет ничего более вдохновляющего, чем рассвет нового
          поколения консолей.
        </AccordionItem>
      </Accordion>
    </ThemeProvider>
  );
  it('should render default component', () => {
    const wrapper = render(<Comp />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render component with dimension m', () => {
    const wrapper = render(<Comp dimension="m" />);
    expect(wrapper).toMatchSnapshot();
  });
});
