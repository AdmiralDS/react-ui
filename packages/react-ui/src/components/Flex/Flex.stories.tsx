import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { withDesign } from 'storybook-addon-designs';
import { LIGHT_THEME, Flex, FLEX_CELL_MAX_SIZE } from '@admiral-ds/react-ui';

export default {
  title: 'Admiral-2.1/Flex.Container',
  component: Flex.Container,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?type=design&node-id=538-68923&t=Ybv78CTY3A6lMQZU-0',
      },
    ],
  },
  decorators: [withDesign],
  argTypes: {
    rowGap: {
      control: { type: 'number' },
    },
    columnGap: {
      control: { type: 'number' },
    },
  },
} as ComponentMeta<typeof Flex.Container>;

const S = {
  container: {
    backgroundColor: LIGHT_THEME.color['Attention/Attention 50 Main'],
  },
  row: {
    backgroundColor: LIGHT_THEME.color['Cyan/Cyan 60 Main'],
  },
  column: {
    backgroundColor: LIGHT_THEME.color['Warning/Warning 50 Main'],
  },
};

const Template: ComponentStory<typeof Flex.Container> = (props) => {
  return (
    <ThemeProvider theme={LIGHT_THEME}>
      <Flex.Container {...props} style={S.container}>
        <Flex.Row {...props} style={S.row}>
          {Array.from({ length: FLEX_CELL_MAX_SIZE }, (_, i) => (
            <Flex.Cell {...props} style={S.column} key={FLEX_CELL_MAX_SIZE - i} col={FLEX_CELL_MAX_SIZE - i}>
              col = {FLEX_CELL_MAX_SIZE - i}
            </Flex.Cell>
          ))}
          <Flex.GrowCell {...props} style={S.column}>
            GrowCell
          </Flex.GrowCell>
        </Flex.Row>
        <Flex.Row {...props} style={S.row}>
          <Flex.Cell {...props} style={S.column} col={23}>
            Cell 23
          </Flex.Cell>
          <Flex.Cell {...props} style={S.column} col={1}>
            Cell 1
          </Flex.Cell>
          <Flex.Cell {...props} style={S.column} col={2}>
            Cell 2
          </Flex.Cell>
          <Flex.Cell {...props} style={S.column} col={22}>
            Cell 22
          </Flex.Cell>
        </Flex.Row>
        <Flex.Row>Row</Flex.Row>
        <Flex.Cell {...props} style={S.column} col={23}>
          Cell 23
        </Flex.Cell>
        <Flex.Cell {...props} style={S.column} col={1}>
          Cell 1
        </Flex.Cell>
        <Flex.Cell {...props} style={S.column} col={2}>
          Cell 2
        </Flex.Cell>
        <Flex.Cell {...props} style={S.column} col={22}>
          Cell 22
        </Flex.Cell>
      </Flex.Container>
    </ThemeProvider>
  );
};

export const FieldStory = Template.bind({});

FieldStory.args = {
  rowGap: 20,
  columnGap: 10,
};

FieldStory.storyName = 'Пример работы с Flex';
