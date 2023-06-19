import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';
import { Range } from '@admiral-ds/react-ui';

import { RangePlaygroundTemplate } from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import PlaygroundRaw from '!!raw-loader!./Templates/RangePlayground';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>Двойной слайдер позволяет выбирать диапазон внутри обозначенного диапазона значений.</Desc>
);

export default {
  title: 'Admiral-2.1/Range',
  decorators: [withDesign],
  component: Range,
  parameters: {
    componentSubtitle: <Description />,
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61377',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61446',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61513',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: ['m', 's'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    step: {
      control: { type: 'number' },
    },
    minValue: {
      control: { type: 'number' },
    },
    maxValue: {
      control: { type: 'number' },
    },
    skeleton: {
      control: { type: 'boolean' },
    },
    value: {
      control: false,
    },
  },
} as ComponentMeta<typeof Range>;

//<editor-fold desc="Playground">
const PlaygroundStory: ComponentStory<typeof Range> = ({ value, onChange, ...props }) => (
  <RangePlaygroundTemplate value={value} onChange={onChange} {...cleanUpProps(props)} />
);
export const Playground = PlaygroundStory.bind({});
Playground.parameters = {
  docs: {
    source: {
      code: PlaygroundRaw,
    },
  },
};
//</editor-fold>
