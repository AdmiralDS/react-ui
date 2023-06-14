import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';

import { SelectTree } from '@admiral-ds/react-ui';

import { SelectTreeMTemplate, SelectTreeNoCheckboxTemplate, SelectTreeSTemplate } from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import SelectTreeMRaw from '!!raw-loader!./Templates/SelectTreeM';
import SelectTreeSRaw from '!!raw-loader!./Templates/SelectTreeS';
import SelectTreeNoCheckboxRaw from '!!raw-loader!./Templates/SelectTreeNoCheckbox';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    (Deprecated используйте Tree компонент) Компонент используется для отображения дерева вложенных списков с
    возможностью выбора отдельных пунктов. Ширина строки настравивается вручную, по умолчанию это 768px. В настройках
    присутствует до 6ти уровней вложенности.
  </Desc>
);

export default {
  title: 'Deprecated/SelectTree (Deprecated используйте Tree компонент)',
  decorators: [withDesign],
  component: SelectTree,
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
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=12178%3A70930',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=12236%3A71124',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A12752',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: ['m', 's'],
    },
    expandAll: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof SelectTree>;

//<editor-fold desc="Select Tree. Размер М">
const SelectTreeMStory: ComponentStory<typeof SelectTree> = (props) => (
  <SelectTreeMTemplate list={[]} {...cleanUpProps(props)} />
);

export const SelectTreeM = SelectTreeMStory.bind({});
SelectTreeM.parameters = {
  docs: {
    source: {
      code: SelectTreeMRaw,
    },
  },
};
SelectTreeM.storyName = 'Select Tree. Размер М';
//</editor-fold>

//<editor-fold desc="Select Tree. Размер S">
const SelectTreeSStory: ComponentStory<typeof SelectTree> = (props) => (
  <SelectTreeSTemplate list={[]} {...cleanUpProps(props)} />
);

export const SelectTreeS = SelectTreeSStory.bind({});
SelectTreeS.parameters = {
  docs: {
    source: {
      code: SelectTreeSRaw,
    },
  },
};
SelectTreeS.storyName = 'Select Tree. Размер S';
//</editor-fold>

//<editor-fold desc="Select Tree. Развернутый список без опции выбора">
const SelectTreeNoCheckboxStory: ComponentStory<typeof SelectTree> = (props) => (
  <SelectTreeNoCheckboxTemplate list={[]} {...cleanUpProps(props)} />
);

export const SelectTreeNoCheckbox = SelectTreeNoCheckboxStory.bind({});
SelectTreeNoCheckbox.parameters = {
  docs: {
    source: {
      code: SelectTreeNoCheckboxRaw,
    },
  },
};
SelectTreeNoCheckbox.storyName = 'Select Tree. Развернутый список без опции выбора';
//</editor-fold>
