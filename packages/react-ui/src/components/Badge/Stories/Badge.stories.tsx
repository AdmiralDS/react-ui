import * as React from 'react';
import styled from 'styled-components';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Badge } from '@admiral-ds/react-ui';

import { BadgePlaygroundTemplate, BadgeVariantsTemplate, BadgeAccessabilityTemplate } from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import PlaygroundRaw from '!!raw-loader!./Templates/BadgePlayground';
import VariantsRaw from '!!raw-loader!./Templates/BadgeVariants';
import AccessabilityRaw from '!!raw-loader!./Templates/BadgeAccessability';

const Separator = styled.div`
  height: 20px;
  width: 8px;
`;
const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Badge — компонент, который обычно дополняет другие компоненты и показывает количественные значения. Например, в
    компоненте Tabs может показывать количество элементов в закладке. Или показывать количество оповещений в панели
    нотификации.
    <Separator />
    Компонент существует в двух размерах — S 16 и M 20 px по высоте.
  </Desc>
);

export default {
  title: 'Admiral-2.1/Badge',
  decorators: [withDesign],
  component: Badge,
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
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A18581',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A18684',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: ['m', 's'],
      control: { type: 'radio' },
    },
    appearance: {
      options: [
        'light',
        'info',
        'warning',
        'success',
        'error',
        'grey',
        'dark',
        'lightInactive',
        'lightDisable',
        'white',
        'whiteInactive',
        'whiteDisable',
        'whiteBlue',
      ],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Badge>;

//<editor-fold desc="Playground">
const PlaygroundStory: ComponentStory<typeof Badge> = (props) => <BadgePlaygroundTemplate {...cleanUpProps(props)} />;
export const PlaygroundExample = PlaygroundStory.bind({});
PlaygroundExample.parameters = {
  docs: {
    source: {
      code: PlaygroundRaw,
    },
  },
};
PlaygroundExample.storyName = 'Playground';
//</editor-fold>

//<editor-fold desc="Варианты использования">
const VariantsStory: ComponentStory<typeof Badge> = () => <BadgeVariantsTemplate />;
export const VariantsExample = VariantsStory.bind({});
VariantsExample.parameters = {
  docs: {
    source: {
      code: VariantsRaw,
    },
  },
};
VariantsExample.storyName = 'Badge. Варианты использования.';
//</editor-fold>

//<editor-fold desc="Accessability">
const AccessabilityStory: ComponentStory<typeof Badge> = () => <BadgeAccessabilityTemplate />;
export const AccessabilityExample = AccessabilityStory.bind({});
AccessabilityExample.parameters = {
  docs: {
    source: {
      code: AccessabilityRaw,
    },
    description: {
      story: `При фокусе на компоненте, включающем в себя компонент Badge, осуществляется следующая озвучка: 
        "Количество <число, указанное в Badge>". При желании текст озвучки можно поменять с помощью атрибута 
        aria-label, как это сделано во второй кнопке.`,
    },
  },
};
AccessabilityExample.storyName = 'Badge. Accessability.';
//</editor-fold>
