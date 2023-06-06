import * as React from 'react';
import styled from 'styled-components';
import { withDesign } from 'storybook-addon-designs';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Chips } from '@admiral-ds/react-ui';

import {
  ChipsIconTemplate,
  ChipsTagsCloseTemplate,
  ChipsTagsTemplate,
  ChipsSelectTemplate,
  ChipsMultiSelectTemplate,
  ChipsTooltipTemplate,
  ChipsBadgesTemplate,
} from './Templates';

// Imports of text sources
import ChipsTagsRaw from '!!raw-loader!./Templates/ChipsTags';
import ChipsTagsCloseRaw from '!!raw-loader!./Templates/ChipsTagsClose';
import ChipsIconRaw from '!!raw-loader!./Templates/ChipsIcon';
import ChipsSelectRaw from '!!raw-loader!./Templates/ChipsSelect';
import ChipsMultiSelectRaw from '!!raw-loader!./Templates/ChipsMultiSelect';
import ChipsTooltipRaw from '!!raw-loader!./Templates/ChipsTooltip';
import ChipsBadgesRaw from '!!raw-loader!./Templates/ChipsBadges';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Чипсы представляют собой перечень выбранных нами фильтров, опций или каких-либо элементов из списка. В библиотеке
    есть два типа чипсов — Filled и Outlined. В зависимости от ситуации используются большие — 28 px, либо маленькие —
    24 px чипсы. Примером может служить компонент Multi Select или выбор участников встречи, когда имена выбранных людей
    выводятся списком в виде чипсов.
  </Desc>
);

export default {
  title: 'Admiral-2.1/Chips',
  component: Chips,
  decorators: [withDesign],
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A17861',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A18081',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A18222',
      },
    ],
    componentSubtitle: <Description />,
    layout: 'centered',
  },
  args: {
    dimension: 'm',
    appearance: 'outlined',
  },
  argTypes: {
    dimension: {
      options: ['m', 's'],
      control: { type: 'radio' },
    },
    appearance: {
      options: ['outlined', 'filled'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    selected: {
      control: { type: 'boolean' },
    },
    iconBefore: {
      control: false,
    },
    iconAfter: {
      control: false,
    },
    badge: {
      control: { type: 'number' },
    },
  },
} as ComponentMeta<typeof Chips>;

//<editor-fold desc="Chips базовый пример">
const ChipsTagsStory: ComponentStory<typeof Chips> = (props) => <ChipsTagsTemplate {...props} />;

export const ChipsTags = ChipsTagsStory.bind({});
ChipsTags.parameters = {
  docs: {
    source: {
      code: ChipsTagsRaw,
    },
  },
};
ChipsTags.storyName = 'Chips базовый пример';
//</editor-fold>

//<editor-fold desc="Chips с текстом и иконкой закрыть">
const ChipsTagsCloseStory: ComponentStory<typeof Chips> = (props) => <ChipsTagsCloseTemplate {...props} />;

export const ChipsTagsClose = ChipsTagsCloseStory.bind({});
ChipsTagsClose.storyName = 'Chips с текстом и иконкой закрыть';
ChipsTagsClose.parameters = {
  docs: {
    source: {
      code: ChipsTagsCloseRaw,
    },
    description: {
      story: `Взаимодействовать можно только с чипсами имеющими иконку закрытия “Close”. При 
      нажатии на иконку закрытия элемент удаляется из списка выбранных.`,
    },
  },
};
//</editor-fold>

//<editor-fold desc="Chips с иконкой">
const ChipsIconStory: ComponentStory<typeof Chips> = (props) => <ChipsIconTemplate {...props} />;

export const ChipsIcon = ChipsIconStory.bind({});
ChipsIcon.storyName = 'Chips с иконкой';
ChipsIcon.parameters = {
  docs: {
    source: {
      code: ChipsIconRaw,
    },
    description: {
      story: `В компоненте можно включать иконки справа и/или слева от текста.`,
    },
  },
};
//</editor-fold>

//<editor-fold desc="Chips с текстом и выбором">
const ChipsSelectStory: ComponentStory<typeof Chips> = (props) => <ChipsSelectTemplate {...props} />;

export const ChipsSelect = ChipsSelectStory.bind({});
ChipsSelect.storyName = 'Chips с текстом и выбором';
ChipsSelect.parameters = {
  docs: {
    source: {
      code: ChipsSelectRaw,
    },
    description: {
      story: `Набор из двух и более чипсов, которые могут быть в активном (выбранном) состоянии 
      или пассивном (выключенном) состоянии. Chips в режиме радио кнопок, когда можно выбрать 
      только одно значение из списка. `,
    },
  },
};
//</editor-fold>

//<editor-fold desc="Chips для множественного выбора">
const ChipsMultiSelectStory: ComponentStory<typeof Chips> = (props) => <ChipsMultiSelectTemplate {...props} />;

export const ChipsMultiSelect = ChipsMultiSelectStory.bind({});
ChipsMultiSelect.storyName = 'Chips для множественного выбора';
ChipsMultiSelect.parameters = {
  docs: {
    source: {
      code: ChipsMultiSelectRaw,
    },
    description: {
      story: `Chips в режиме чекбоксов, когда можно выбрать любое количество значений`,
    },
  },
};
//</editor-fold>

//<editor-fold desc="Chips с Tooltip">
const ChipsTooltipStory: ComponentStory<typeof Chips> = (props) => <ChipsTooltipTemplate {...props} />;

export const ChipsTooltip = ChipsTooltipStory.bind({});
ChipsTooltip.storyName = 'Chips с Tooltip';
ChipsTooltip.parameters = {
  docs: {
    source: {
      code: ChipsTooltipRaw,
    },
    description: {
      story: `По дефолту в компоненте (в коде) задано граничение ширины в 190 px, после которой 
      происходит уход в троеточие. Но можно изменять этот параметр стилизуя компонент через styled 
      components. В случае сокращения, над компонентом при ховере появляется Тултип с расшифровкой.`,
    },
  },
};
//</editor-fold>

//<editor-fold desc="Chips с Badge">
const ChipsBadgesStory: ComponentStory<typeof Chips> = (props) => <ChipsBadgesTemplate {...props} />;

export const ChipsBadges = ChipsBadgesStory.bind({});
ChipsBadges.storyName = 'Chips с Badge';
ChipsBadges.parameters = {
  docs: {
    source: {
      code: ChipsBadgesRaw,
    },
    description: {
      story: `В компоненте можно включать бейджи.`,
    },
  },
};
ChipsBadges.args = {
  badge: 5,
};
//</editor-fold>
