import React from 'react';
import styled from 'styled-components';
import { Button } from '#src/components/Button';
import { SearchSelectField as Select } from '#src/components/form/SearchSelectField';
import { Option } from '#src/components/input/SearchSelect';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FieldSet } from '#src/components/form';
import { RadioButton } from '#src/components/RadioButton';
import { Accordion, AccordionItem } from '../Accordion';

const Separator = styled.div`
  height: 20px;
`;
const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Аккордеон — это вертикальный список заголовков, которые, при нажатии, показывают контент находящийся под ними. Два
    размера: 56 и 40 px.
    <Separator />
    Компонент настроен на автоподстройку высоты, при вводе текста под заголовком. Ширину можно менять вручную, так же
    происходит автоподстройка контента.
    <Separator />
    Если открыта одна закладка, то открытие другой не приводит к ее закрытию. При открытии вкладки весь контент страницы
    под ак аккордеоном сдвигается вниз на высоту текста открытой вкладки.
  </Desc>
);

const SearchSelectField = styled(Select)`
  margin-top: 24px;
`;

export default {
  title: 'Example/Accordion',
  component: Accordion,
  parameters: {
    componentSubtitle: <Description />,
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=108393%3A69960',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=39%3A10059',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=39%3A10103',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: ['l', 'm'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Accordion>;
const OPTIONS_SIMPLE = [
  'teeext 1',
  'text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text ',
  'text 3',
  'text 4',
  'text 5',
  'texttt 6',
];

const Template1: ComponentStory<typeof Accordion> = (args) => {
  const values = ['1', '2', '3'];
  const [selected, setSelected] = React.useState<number | string | null>('');
  const [selectValue, setSelectValue] = React.useState('');

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
  };
  return (
    <Accordion {...args}>
      <AccordionItem
        id="accordion1-item1"
        title="Первый пункт"
        onClick={(title, expanded, event) => console.log({ title, expanded, event })}
      >
        Контент первого пункта
      </AccordionItem>
      <AccordionItem
        id="accordion1-item2"
        title="Второй пункт"
        onClick={(title, expanded, event) => console.log({ title, expanded, event })}
      >
        Аккордеон — это вертикальный список заголовков, которые, при нажатии, показывают контент находящийся под ними.
        <FieldSet
          style={{ marginTop: 8 }}
          onChange={(e) => {
            setSelected((e.target as HTMLInputElement).value);
          }}
          legend="Управляемая группа радиокнопок:"
          dimension={args.dimension === 'm' ? 's' : 'm'}
        >
          <RadioButton value={values[0]} name="test1" checked={values[0] === selected} readOnly>
            First option
          </RadioButton>
          <RadioButton value={values[1]} name="test1" checked={values[1] === selected} readOnly>
            Second option
          </RadioButton>
          <RadioButton value={values[2]} name="test1" checked={values[2] === selected} readOnly>
            Third option
          </RadioButton>
        </FieldSet>
        <SearchSelectField
          label="label"
          className="Search"
          value={selectValue}
          onChange={onChange}
          placeholder="Placeholder"
        >
          {OPTIONS_SIMPLE.map((option, ind) => (
            <Option key={option} value={option} disabled={ind === 4}>
              {option}
            </Option>
          ))}
        </SearchSelectField>
      </AccordionItem>
      <AccordionItem
        id="accordion1-item3"
        defaultExpanded
        title="Третий пункт"
        onClick={(title, expanded, event) => console.log({ title, expanded, event })}
      >
        Будущее игр никогда не было таким вдохновляющим. Творчество в играх процветает. Новые сервисы позволяют находить
        больше игр, а также приближают игроков к любимым играм, стримерам и создателям. Облако создает огромную
        возможность для потоковой передачи игр консольного уровня, что позволит людям играть с теми игроками, с кем
        хочется и где захочется. И для многих из нас нет ничего более вдохновляющего, чем рассвет нового поколения
        консолей.
      </AccordionItem>
    </Accordion>
  );
};

const Template2: ComponentStory<typeof Accordion> = () => {
  return (
    <>
      <Desc style={{ textDecoration: 'underline' }}>Размер l</Desc>
      <Separator />
      <Accordion>
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
      <Separator />
      <Desc style={{ textDecoration: 'underline' }}>Размер m</Desc>
      <Separator />
      <Accordion dimension="m">
        <AccordionItem title="Первый пункт">Контент первого пункта</AccordionItem>
        <AccordionItem title="Второй пункт">
          Аккордеон — это вертикальный список заголовков, которые, при нажатии, показывают контент находящийся под ними.
        </AccordionItem>
        <AccordionItem title="Третий пункт" contentMaxHeight="150px">
          Будущее игр никогда не было таким вдохновляющим. Творчество в играх процветает. Новые сервисы позволяют
          находить больше игр, а также приближают игроков к любимым играм, стримерам и создателям. Облако создает
          огромную возможность для потоковой передачи игр консольного уровня, что позволит людям играть с теми игроками,
          с кем хочется и где захочется. И для многих из нас нет ничего более вдохновляющего, чем рассвет нового
          поколения консолей. Будущее игр никогда не было таким вдохновляющим. Творчество в играх процветает. Новые
          сервисы позволяют находить больше игр, а также приближают игроков к любимым играм, стримерам и создателям.
          Облако создает огромную возможность для потоковой передачи игр консольного уровня, что позволит людям играть с
          теми игроками, с кем хочется и где захочется. И для многих из нас нет ничего более вдохновляющего, чем рассвет
          нового поколения консолей.
        </AccordionItem>
      </Accordion>
    </>
  );
};

const Template3: ComponentStory<typeof Accordion> = (args) => {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <Accordion {...args}>
      <AccordionItem
        defaultExpanded
        title="Неконтролируемый режим использования (uncontrolled)"
        onClick={(title, expanded, event) => console.log({ title, expanded, event })}
      >
        Контент первого пункта
      </AccordionItem>
      <AccordionItem
        expanded={expanded}
        title="Контролируемый режим использования (controlled)"
        onClick={(title, expanded, event) => setExpanded(expanded)}
      >
        Будущее игр никогда не было таким вдохновляющим. Творчество в играх процветает. Новые сервисы позволяют находить
        больше игр, а также приближают игроков к любимым играм, стримерам и создателям. Облако создает огромную
        возможность для потоковой передачи игр консольного уровня, что позволит людям играть с теми игроками, с кем
        хочется и где захочется. И для многих из нас нет ничего более вдохновляющего, чем рассвет нового поколения
        консолей.
      </AccordionItem>
    </Accordion>
  );
};

export const AccordionPlayground = Template1.bind({});
AccordionPlayground.args = {};
AccordionPlayground.storyName = 'Accordion. Playground.';

export const AccordionDimension = Template2.bind({});
AccordionDimension.args = {};
AccordionDimension.storyName = 'Accordion. Размеры.';

export const AccordionModes = Template3.bind({});
AccordionModes.args = {};
AccordionModes.storyName = 'Accordion. Режимы использования.';
AccordionModes.parameters = {
  docs: {
    description: {
      story: `Компонент AccordionItem может работать в контролируемом и неконтролируемом режимах. 
      Параметр expanded задает состояние компонента в контролируемом режиме:\n\n - если true, 
      разворачивает тело аккордеона;\n\n- если false, сворачивает тело аккордеона.\n\nЕсли свойство 
      expanded передано - автоматическое сворачивание/разворачивание блокируется. В неконтролируемом режиме дефолтное
      состояние аккордеона можно задать с помощью свойства defaultExpanded.`,
    },
  },
};
