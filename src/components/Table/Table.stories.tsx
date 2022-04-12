import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';
import { Table } from '#/components/Table';
import {
  rowList,
  columnList,
  columnListWithWidth,
  columnListOrientation,
  columnListSort,
  rowListSort,
} from '#/components/Table/data';

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
    Таблицы представляют собой набор данных представленных в виде строк и колонок. Состоят из двух основных компонентов
    - шапки таблицы и строки данных.
    <Separator />В дизайн-системе таблицы представлены в четырех размерах с высотой строк в S 32, M 40, L 48, XL 56 px.
    Выбор размера осуществляется исходя из плотности разрабатываемого интерфейса и личных предпочтений дизайнера.
  </Desc>
);

export default {
  title: 'Example/Table',
  decorators: [withDesign],
  component: Table,
  parameters: {
    componentSubtitle: <Description />,
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/HCiO63zg2hPSXTHuEdpRtG/Admiral-2.0-UI-Kit?node-id=39%3A90544',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/HCiO63zg2hPSXTHuEdpRtG/Admiral-2.0-UI-Kit?node-id=39%3A90707',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/HCiO63zg2hPSXTHuEdpRtG/Admiral-2.0-UI-Kit?node-id=39%3A90947',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: ['xl', 'l', 'm', 's'],
      control: { type: 'radio' },
    },
    displayRowSelectionColumn: {
      control: { type: 'boolean' },
    },
    greyHeader: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => {
  return <Table {...args} />;
};

const Template2: ComponentStory<typeof Table> = ({ rowList, ...args }) => {
  const [rows, setRows] = React.useState([...rowList]);
  const handleSort = ({ name, sort }: { name: string; sort: 'asc' | 'desc' | 'initial' }) => {
    if (sort === 'initial') {
      setRows(rowList);
    } else {
      const newRows = rows.sort((a: any, b: any) => {
        if (sort === 'asc') {
          switch (name) {
            case 'transfer_date':
              return new Date(a[name]).getTime() - new Date(b[name]).getTime();
            case 'transfer_amount':
              return Number(a[name].replace(/\D/g, '')) - Number(b[name].replace(/\D/g, ''));
            case 'rate':
            default:
              return a[name] - b[name];
          }
        } else {
          switch (name) {
            case 'transfer_date':
              return new Date(b[name]).getTime() - new Date(a[name]).getTime();
            case 'transfer_amount':
              return Number(b[name].replace(/\D/g, '')) - Number(a[name].replace(/\D/g, ''));
            case 'rate':
            default:
              return b[name] - a[name];
          }
        }
      });
      setRows(newRows);
    }
  };
  return <Table {...args} rowList={rows} onSortChange={handleSort} />;
};

const Template3: ComponentStory<typeof Table> = ({ rowList, ...args }) => {
  const [rows, setRows] = React.useState([...rowList]);

  const handleSelectionChange = (ids: Record<string | number, boolean>): void => {
    const updRows = rows.map((row) => ({ ...row, selected: ids[row.id] }));
    setRows(updRows);
  };

  return <Table {...args} rowList={rows} onRowSelectionChange={handleSelectionChange} />;
};

export const Playground = Template.bind({});
Playground.args = {
  rowList,
  columnList,
};

export const ColumnWidth = Template.bind({});
ColumnWidth.args = {
  rowList,
  columnList: columnListWithWidth,
};
ColumnWidth.storyName = 'Table. Пример изменения ширины столбцов.';
ColumnWidth.parameters = {
  docs: {
    description: {
      story: `По умолчанию ширина столбца составляет 100 пикселей (не менее). Чтобы изменить этот 
      параметр в массиве columnList для столбца, чью ширину нужно изменить, следует задать параметр width.
      Также ширину столбца можно регулировать с помощью ручного ресайза, для этого нужно 
      потянуть разделитель между столбцами в нужном направлении.`,
    },
  },
};

export const Checkbox = Template3.bind({});
Checkbox.args = {
  rowList,
  columnList: columnList,
  displayRowSelectionColumn: true,
};
Checkbox.storyName = 'Table. Пример c чекбоксами.';
Checkbox.parameters = {
  docs: {
    description: {
      story: `Отображение столбца с чекбоксами регулируется параметром displayRowSelectionColumn. 
      Чекбокс в шапке таблицы позволяет выбрать все строки (если не выбрано ни одной строки), 
      либо отменить выбранные до этого строки. По нажатию на любой из чекбоксов срабатывает колбек onRowSelectionChange.`,
    },
  },
};

export const Style = Template.bind({});
Style.args = {
  rowList,
  columnList,
  greyHeader: true,
  spacingBetweenItems: '20px',
  style: {
    maxHeight: '400px',
  },
};
Style.storyName = 'Table. Пример стилизации.';
Style.parameters = {
  docs: {
    description: {
      story: `Шапку таблицы можно окрашивать в серый цвет с помощью параметра greyHeader. 
      Также изменять стили таблицы можно посредством атрибута style. Кроме того, к контейнеру таблицы можно применить все стандартные
      html-атрибуты divа.\n\nШирина заголовка зависит от параметра spacingBetweenItems, подробнее о нем можно прочитать в макетах. 
      По умолчанию минимальное значение 12, для таблиц S и M, и 16 для таблиц L и XL.`,
    },
  },
};

export const Orientation = Template.bind({});
Orientation.args = {
  rowList,
  columnList: columnListOrientation,
};
Orientation.storyName = 'Table. Пример с настройкой выравнивания контента столбца.';
Orientation.parameters = {
  docs: {
    description: {
      story: `По умолчанию контент столбца выравнивается по левому краю. Если необходимо выравнивание по правому краю, 
      то следует задать параметр cellAlign: 'right' для столбца.`,
    },
  },
};

export const Sort = Template2.bind({});
Sort.args = {
  rowList: rowListSort,
  columnList: columnListSort,
};
Sort.storyName = 'Table. Сортировка.';
Sort.parameters = {
  docs: {
    description: {
      story: `Если сортировка выключена, то значок виден только при наведении на область заголовка и окрашивается в серый цвет.
      Если сортировка включена, то ее значок-стрелка остается видимым при снятии фокуса с заголовка и окрашивается в синий цвет.  
      При повторном нажатии происходит сортировка в обратном порядке (стрелка меняет направление). 
      При третьем нажатии сортировка отменяется.\n\nПо умолчанию сортировка столбцов отключена.
      Чтобы включить сортировку столбца, необходимо задать ему параметр sortable: true. При изменении сортировки столбца будет срабатывать
      колбек onSortChange, который будет возвращать два аргумента: name - уникальное имя столбца, к которому была применена сортировка, и
      sort - тип сортировки ('asc' - возрастающая, 'desc' - убывающая и 'initial' - отмена сортировки, возврат к первоначальному состоянию.
      Отменя сортировки происходит при третьем нажатии на заголовок.)\n\nСортировка массива строк происходит на стороне пользователя
      при срабатывании колбека onSortChange.`,
    },
  },
};
