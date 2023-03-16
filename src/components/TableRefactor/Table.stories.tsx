import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';

import { Table } from '#src/components/TableRefactor';
import { columnList, rowList, columnListWithWidth, columnListOrientation } from '#src/components/TableRefactor/data';
import { TableRow } from '../TableRow';

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
