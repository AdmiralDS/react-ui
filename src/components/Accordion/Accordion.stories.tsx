import { Button } from '#/components/Button';
import { SelectField as Select } from '#/components/form/SelectField';
import { DropDownItem } from '#/components/DropDownItem';
import React from 'react';
import styled from 'styled-components';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FieldSet } from '#/components/form';
import { RadioButton } from '#/components/RadioButton';
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

const SelectField = styled(Select)`
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
        url: 'https://www.figma.com/file/HCiO63zg2hPSXTHuEdpRtG/Admiral-2.0-UI-Kit?node-id=39%3A9887',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/HCiO63zg2hPSXTHuEdpRtG/Admiral-2.0-UI-Kit?node-id=39%3A10059',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/HCiO63zg2hPSXTHuEdpRtG/Admiral-2.0-UI-Kit?node-id=39%3A10103',
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
const options = [
  {
    id: 1,
    label:
      'Option one very long very long very long very long very long very long very long very long very long very long very long ',
    value: '1',
  },
  { id: 2, label: 'Option two', value: '2' },
  { id: 3, label: 'Option three', value: '3' },
  { id: 4, label: 'Option four', value: '4' },
  { id: 5, label: 'Option five', value: '5' },
  { id: 6, label: 'Option six', value: '6' },
  { id: 7, label: 'Option seven', value: '7' },
  { id: 8, label: 'Option seven', value: '7' },
  { id: 9, label: 'Option seven', value: '7' },
  { id: 10, label: 'Option seven', value: '7' },
  { id: 11, label: 'Option seven', value: '7' },
  { id: 12, label: 'Option seven', value: '7' },
  { id: 13, label: 'Option seven', value: '7' },
  { id: 14, label: 'Option seven', value: '7' },
  { id: 15, label: 'Option seven', value: '7' },
  { id: 16, label: 'Option seven', value: '7' },
  { id: 17, label: 'Option seven', value: '7' },
  { id: 18, label: 'Option seven', value: '7' },
];

const Template1: ComponentStory<typeof Accordion> = (args) => {
  const values = ['1', '2', '3'];
  const [selected, setSelected] = React.useState<number | string | null>('');
  const [selectValue, setValue] = React.useState<number | string | null>('');
  return (
    <Accordion {...args}>
      <AccordionItem
        id="accordion1-item1"
        title="Первый пункт"
        onClick={(title, isOpen, event) => console.log({ title, isOpen, event })}
      >
        Контент первого пункта
      </AccordionItem>
      <AccordionItem
        id="accordion1-item2"
        title="Второй пункт"
        onClick={(title, isOpen, event) => console.log({ title, isOpen, event })}
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
        <SelectField label="Опции" value={selectValue} onChange={setValue} required>
          {options.map((item, index) => {
            return (
              <DropDownItem role="option" value={item.label} key={index}>
                {item.label}
              </DropDownItem>
            );
          })}
        </SelectField>
      </AccordionItem>
      <AccordionItem
        id="accordion1-item3"
        isDefaultOpen
        title="Третий пункт"
        onClick={(title, isOpen, event) => console.log({ title, isOpen, event })}
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
const Text = `
  Будущее игр никогда не было таким вдохновляющим. Творчество в играх процветает. Новые сервисы позволяют
          находить больше игр, а также приближают игроков к любимым играм, стримерам и создателям. Облако создает
          огромную возможность для потоковой передачи игр консольного уровня, что позволит людям играть с теми игроками,
          с кем хочется и где захочется. И для многих из нас нет ничего более вдохновляющего, чем рассвет нового
          поколения консолей.
`;

const Template2: ComponentStory<typeof Accordion> = () => {
  const [content, setContent] = React.useState(Text);

  return (
    <>
      <Desc style={{ textDecoration: 'underline' }}>Размер l</Desc>
      <Separator />
      <Button
        onClick={() => {
          setContent(content + Text);
        }}
      >
        Добавить контент
      </Button>
      <Separator />
      <Accordion>
        <AccordionItem title="Первый пункт">Контент первого пункта</AccordionItem>
        <AccordionItem title="Второй пункт">
          Аккордеон — это вертикальный список заголовков, которые, при нажатии, показывают контент находящийся под ними.
        </AccordionItem>
        <AccordionItem title="Третий пункт" children={content} />
      </Accordion>
      <Separator />
      <Desc style={{ textDecoration: 'underline' }}>Размер m</Desc>
      <Separator />
      <Accordion dimension="m">
        <AccordionItem title="Первый пункт">Контент первого пункта</AccordionItem>
        <AccordionItem title="Второй пункт">
          Аккордеон — это вертикальный список заголовков, которые, при нажатии, показывают контент находящийся под ними.
        </AccordionItem>
        <AccordionItem title="Третий пункт" contentMaxHeight="300px">
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

export const AccordionPlayground = Template1.bind({});
AccordionPlayground.args = {};
AccordionPlayground.storyName = 'Accordion. Playground.';

export const AccordionDimension = Template2.bind({});
AccordionDimension.args = {};
AccordionDimension.storyName = 'Accordion. Размеры.';
