import React from 'react';
import styled from 'styled-components';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { EditMode, INPUT_STATUS_VALUES, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import {
  EditModePlaygroundTemplate,
  EditModeDimensionTemplate,
  EditModeDisabledTemplate,
  EditModeCssMixinTemplate,
} from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import PlaygroundRaw from '!!raw-loader!./Templates/EditModePlayground';
import DimensionRaw from '!!raw-loader!./Templates/EditModeDimension';
import DisabledRaw from '!!raw-loader!./Templates/EditModeDisabled';
import CssMixinRaw from '!!raw-loader!./Templates/EditModeCssMixin';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => <Desc>Компонент для редактирования текста. Может быть с лэйблом или без него.</Desc>;

export default {
  title: 'Admiral-2.1/Input/EditMode',
  component: EditMode,
  decorators: [withDesign],
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
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=38%3A10602',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=38%3A10901',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: ['xxl', 'xl', 'm', 's'],
      control: { type: 'radio' },
    },
    status: {
      control: { type: 'radio' },
      options: INPUT_STATUS_VALUES,
    },
    value: {
      control: { type: 'text' },
    },
    bold: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    readOnly: {
      control: { type: 'boolean' },
    },
    disableCopying: {
      control: { type: 'boolean' },
    },
    displayClearIcon: {
      control: { type: 'boolean' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    onChange: {
      control: false,
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    containerCssMixin: {
      control: false,
    },
    icons: {
      control: false,
    },
    containerRef: {
      control: false,
    },
    handleInput: {
      control: false,
    },
    showTooltip: {
      control: { type: 'boolean' },
    },
    skeleton: {
      control: { type: 'boolean' },
    },
    isLoading: {
      control: { type: 'boolean' },
    },
    multilineView: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof EditMode>;

//<editor-fold desc="Playground">
const PlaygroundStory: ComponentStory<typeof EditMode> = ({ value, onChange, ...props }) => (
  <EditModePlaygroundTemplate value={value} onChange={onChange} {...cleanUpProps(props)} />
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

//<editor-fold desc="Варианты размеров и начертания компонента">
const DimensionStory: ComponentStory<typeof EditMode> = ({ value, onChange, ...props }) => (
  <EditModeDimensionTemplate value={value} onChange={onChange} {...cleanUpProps(props)} />
);
export const DimensionExample = DimensionStory.bind({});
DimensionExample.parameters = {
  docs: {
    source: {
      code: DimensionRaw,
    },
    description: {
      story: `Компонент разработан в трех размерах S, M (имеют написание Regular и Bold) и XL (только Bold). 
      Переключение между Regular и Bold не изменяют размеры компонента.\n\nПо умолчанию размер компонента M, 
      для смены размера используйте параметр dimension. Для переключения в написание Bold испольуйте одноименный парамтер bold.`,
    },
  },
};
DimensionExample.storyName = 'Варианты размеров и начертания компонента';
//</editor-fold>

//<editor-fold desc="Компонент в состоянии disabled">
const DisabledStory: ComponentStory<typeof EditMode> = ({ value, onChange, ...props }) => (
  <EditModeDisabledTemplate value={value} onChange={onChange} {...cleanUpProps(props)} />
);
export const DisabledExample = DisabledStory.bind({});
DisabledExample.parameters = {
  docs: {
    source: {
      code: DisabledRaw,
    },
  },
};
DisabledExample.storyName = 'Компонент в состоянии disabled';
//</editor-fold>

//<editor-fold desc="Стилизация компонента">
const CssMixinStory: ComponentStory<typeof EditMode> = ({ value, onChange, ...props }) => (
  <EditModeCssMixinTemplate value={value} onChange={onChange} {...cleanUpProps(props)} />
);
export const CssMixinExample = CssMixinStory.bind({});
CssMixinExample.parameters = {
  docs: {
    source: {
      code: CssMixinRaw,
    },
    description: {
      story: `Для изменения стилей компонента в контейнер компонента можно передать стили в виде containerCssMixin.`,
    },
  },
};
CssMixinExample.storyName = 'Стилизация компонента';
//</editor-fold>
