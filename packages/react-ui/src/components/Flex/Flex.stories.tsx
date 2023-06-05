import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { withDesign } from 'storybook-addon-designs';
import { LIGHT_THEME, Flex, FLEX_CELL_MAX_SIZE, InputField, TextField } from '@admiral-ds/react-ui';

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

const Template: ComponentStory<typeof Flex.Container> = (props) => {
  return (
    <ThemeProvider theme={LIGHT_THEME}>
      <Flex.Container {...props}>
        <Flex.Row {...props}>
          {Array.from({ length: FLEX_CELL_MAX_SIZE }, (_, i) => (
            <Flex.Cell {...props} key={FLEX_CELL_MAX_SIZE - i} col={FLEX_CELL_MAX_SIZE - i}>
              <InputField label={`Инпут шириной ${FLEX_CELL_MAX_SIZE - i}`} />
            </Flex.Cell>
          ))}
          <Flex.GrowCell {...props}>
            <TextField label="TextField" required />
          </Flex.GrowCell>
        </Flex.Row>
        <Flex.Row {...props}>
          <Flex.Cell {...props} col={5}>
            <InputField label={`Инпут шириной 5`} />
          </Flex.Cell>
          {/* пространство между инпутами в 3 колонки */}
          <Flex.Cell col={3} />
          <Flex.Cell {...props} col={3}>
            <InputField label={`Инпут шириной 3`} />
          </Flex.Cell>
        </Flex.Row>
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
