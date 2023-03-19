import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';

import { Table } from '#src/components/TableRefactor';
import {
  columnList,
  rowList,
  columnListWithWidth,
  columnListOrientation,
  rowListSort,
  columnListSort,
} from '#src/components/TableRefactor/data';
import { TableRow } from '../TableRow';
import { fetchProfileData } from './fakeApi';

import { Template_Sort } from './stories/sortStory';

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
    Таблицы представляют собой набор данных, представленных в виде строк и колонок. Состоят из двух основных компонентов
    - шапки таблицы и строки данных.
    <Separator />В дизайн-системе таблицы представлены в четырех размерах с высотой строк в S 32, M 40, L 48, XL 56 px.
    Выбор размера осуществляется исходя из плотности разрабатываемого интерфейса и личных предпочтений дизайнера.
  </Desc>
);

export default {
  title: 'Admiral-2.1/Data Table/TableSimple',
  decorators: [withDesign],
  component: Table,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: <Description />,
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A90544',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A90707',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A90947',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=109602%3A61149',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A91211',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A91521',
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
    displayRowExpansionColumn: {
      control: { type: 'boolean' },
    },
    greyHeader: {
      control: { type: 'boolean' },
    },
    greyZebraRows: {
      control: { type: 'boolean' },
    },
    showDividerForLastColumn: {
      control: { type: 'boolean' },
    },
    spacingBetweenItems: {
      control: { type: 'text' },
    },
    headerLineClamp: {
      control: { type: 'number' },
    },
    headerExtraLineClamp: {
      control: { type: 'number' },
    },
    disableColumnResize: {
      control: { type: 'boolean' },
    },
    showLastRowUnderline: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = ({ columnList, ...args }) => {
  const [cols, setCols] = React.useState([...columnList]);
  const [rows, setRows] = React.useState([...rowList]);

  const renderRow = (index: number) => {
    const rowData = rowList[index];
    return <TableRow row={rowData} key={`row_${rowData.id}`} />;
  };

  const handleResize = ({ name, width }: { name: string; width: string }) => {
    const newCols = cols.map((col) => (col.name === name ? { ...col, width } : col));
    setCols(newCols);
  };

  return (
    <Table {...args} columnList={cols} rowCount={rows.length} renderRow={renderRow} onColumnResize={handleResize} />
  );
};

const Template3: ComponentStory<typeof Table> = ({ columnList, ...args }) => {
  const [cols, setCols] = React.useState([...columnList]);
  const [rows, setRows] = React.useState([...rowListSort]);
  const resource = fetchProfileData();

  const renderRow = (index: number) => {
    // const resource = fetchProfileData();
    const rowData = resource.rows.read()[index];
    return <TableRow row={rowData} key={`row_${index}`} />;
  };

  const handleResize = ({ name, width }: { name: string; width: string }) => {
    const newCols = cols.map((col) => (col.name === name ? { ...col, width } : col));
    setCols(newCols);
  };

  return (
    <React.Suspense fallback={<h1>Loading profile...</h1>}>
      <Table {...args} columnList={cols} rowCount={rows.length} renderRow={renderRow} onColumnResize={handleResize} />
    </React.Suspense>
  );
};

export const Playground = Template.bind({});
Playground.args = {
  columnList,
};

export const ColumnWidth = Template.bind({});
ColumnWidth.args = {
  columnList: columnListWithWidth,
};
ColumnWidth.storyName = 'Table. Пример изменения ширины столбцов.';
ColumnWidth.parameters = {
  docs: {
    description: {
      story: `По умолчанию ширина столбца составляет 100 пикселей. Чтобы изменить этот 
      параметр в массиве columnList для столбца, чью ширину нужно изменить, следует задать параметр width. 
      В качестве значения width может выступать любое валидное css значение (пиксели, проценты, функция calc и т.д.).\n\nТакже
      ширину столбца можно регулировать с помощью ручного ресайза, для этого нужно 
      потянуть разделитель между столбцами в нужном направлении. При этом обязательно должен быть задан колбек onColumnResize.
      При срабатывании колбек сообщает пользователю о попытке ресайзинга столбца, после чего пользователь должен 
      обновить ширину соответствующего столбца в массиве columnList. 
      Таким образом контроль за ресайзингом происходит на стороне пользователя.\n\nПо умолчанию
      в таблице всегда включена возможность ручного ресайза столбцов, однако с помощью параметра disableColumnResize 
      можно отменить эту возможность для всей таблицы, 
      либо с помощью параметра disableResize отключить ресайз для отдельного столбца. 
      Также в таблице по умолчанию не отображается разделитель для последнего столбца, данное поведение можно 
      изменить с помощью параметра showDividerForLastColumn.`,
    },
  },
};

export const Orientation = Template.bind({});
Orientation.args = {
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

export const Sort = Template_Sort.bind({});
Sort.args = {
  columnList: columnListSort,
};
Sort.storyName = 'Table. Сортировка.';
Sort.parameters = {
  docs: {
    description: {
      story: `Если сортировка выключена, то значок виден только при наведении на область заголовка и окрашивается в серый цвет.
      Если сортировка включена (первое нажатие - сортировка по возрастанию), то ее значок-стрелка остается видимым при снятии фокуса 
      с заголовка и окрашивается в синий цвет. При повторном нажатии происходит сортировка в обратном порядке (стрелка меняет направление, 
      по убыванию). При третьем нажатии сортировка отменяется.\n\nПо умолчанию возможность сортировки столбца отключена.
      Чтобы сделать столбец сортируемым, необходимо задать ему параметр sortable: true. Сортировка - это контролируемый пользователем параметр. 
      Чтобы включить для столбца сортировку по возрастанию/убыванию, пользователь должен задать для столбца параметр sort: 'asc' | 'desc'.
      Если для столбца задан только параметр sortable: true, а параметр sort не задан, это говорит о том, что столбец сортируемый 
      (при наведении на его заголовок будет видна стрелка сортировки), но в данный момент к нему никакая сортировка не применена.\n\nПри 
      изменении сортировки столбца будет срабатывать колбек onSortChange, который будет возвращать два аргумента: 
      name - уникальное имя столбца, к которому была применена сортировка, и sort - тип сортировки ('asc' - возрастающая, 
      'desc' - убывающая и 'initial' - отмена сортировки, возврат к первоначальному состоянию). Сортировка массива строк 
      происходит на стороне пользователя при срабатывании колбека onSortChange.\n\n Дизайн-системой предусматривается многоуровневая сортировка. Рекомендуется использовать не более ДВУХ уровней.
      Логика сортировки (взаимосвязи) выстраивается пользователем. При этом, у иконок сортировки появляются цифры
      обозначающие порядок (приоритет) сортировки.`,
    },
  },
};

export const Suspense = Template3.bind({});
Suspense.args = {
  columnList: columnListSort,
};
Suspense.storyName = 'Table. Suspense.';
Suspense.parameters = {
  docs: {
    source: {
      code: 'Disabled for this story, see https://github.com/storybookjs/storybook/issues/11554',
    },
  },
};
