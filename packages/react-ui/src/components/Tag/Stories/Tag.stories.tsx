import * as React from 'react';
import styled from 'styled-components';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { Tag, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import {
  TagPlaygroundTemplate,
  TagStatusTemplate,
  TagStatusBackgroundTemplate,
  TagCustomColorsTemplate,
  TagStateTemplate,
  TagTooltipTemplate,
  TagIconTemplate,
} from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import PlaygroundRaw from '!!raw-loader!./Templates/TagPlayground';
import StatusRaw from '!!raw-loader!./Templates/TagStatus';
import StatusBackgroundRaw from '!!raw-loader!./Templates/TagStatusBackground';
import CustomColorsRaw from '!!raw-loader!./Templates/TagCustomColors';
import StateRaw from '!!raw-loader!./Templates/TagState';
import TooltipRaw from '!!raw-loader!./Templates/TagTooltip';
import IconRaw from '!!raw-loader!./Templates/TagIcon';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Тег — это метка, размечающая и каталогизирующая информацию для облегчения процесса поиска. При нажатии на тэг
    загружаются все элементы имеющие эту метку.
  </Desc>
);

export default {
  title: 'Admiral-2.1/Tag',
  decorators: [withDesign],
  component: Tag,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: <Description />,
    layout: 'centered',
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A18375',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A18530',
      },
    ],
  },
  argTypes: {
    kind: {
      options: ['neutral', 'primary', 'success', 'danger', 'warning'],
      control: { type: 'radio' },
    },
    dimension: {
      options: ['m', 's'],
      control: { type: 'radio' },
    },
    width: {
      control: { type: 'text' },
    },
    statusViaBackground: {
      control: { type: 'boolean' },
    },
    statusIcon: {
      control: false,
    },
    icon: {
      control: false,
    },
    as: {
      options: ['div', 'span', 'button'],
      control: { type: 'radio' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Tag>;

//<editor-fold desc="Playground">
const PlaygroundStory: ComponentStory<typeof Tag> = (props) => <TagPlaygroundTemplate {...cleanUpProps(props)} />;
export const Playground = PlaygroundStory.bind({});
Playground.parameters = {
  docs: {
    source: {
      code: PlaygroundRaw,
    },
  },
};
Playground.storyName = 'Tag. Playground.';
//</editor-fold>

//<editor-fold desc="Tag. Статус через цветную статусную метку.">
const StatusStory: ComponentStory<typeof Tag> = () => <TagStatusTemplate />;
export const StatusExample = StatusStory.bind({});
StatusExample.parameters = {
  docs: {
    source: {
      code: StatusRaw,
    },
    description: {
      story: `Тэг может иметь цветную статусную метку.`,
    },
  },
};
StatusExample.storyName = 'Tag. Статус через цветную статусную метку.';
//</editor-fold>

//<editor-fold desc="Tag. Статус через цвет обводки и фона.">
const StatusBackgroundStory: ComponentStory<typeof Tag> = () => <TagStatusBackgroundTemplate />;
export const StatusBackgroundExample = StatusBackgroundStory.bind({});
StatusBackgroundExample.parameters = {
  docs: {
    source: {
      code: StatusBackgroundRaw,
    },
    description: {
      story: `Тэг может отображать статус через цвет обводки и фона, когда нужен выраженный цветовой акцент (опция).
      В этом случае цвет статусов берется из палитры Special, допускается окрашивание тэга в любой парный цвет
      (фон, обводка) из этой палитры. \n\nЧтобы отобразить статус через цвет обводки и фона необходимо передать
      в компонент параметр statusViaBackground, установленный в true.`,
    },
  },
};
StatusBackgroundExample.storyName = 'Tag. Статус через цвет обводки и фона.';
//</editor-fold>

//<editor-fold desc="Tag. Кастомные цвета.">
const CustomColorsStory: ComponentStory<typeof Tag> = () => <TagCustomColorsTemplate />;
export const CustomColorsExample = CustomColorsStory.bind({});
CustomColorsExample.parameters = {
  docs: {
    source: {
      code: CustomColorsRaw,
    },
    description: {
      story: `Тэг может иметь цветную статусную метку. Помимо предложенных вариантов, метка может быть
      окрашена в любой цвет на усмотрение пользователя с помощью свойства background. \n\n Либо тэг может отображать
      статус через цвет обводки и фона, когда нужен выраженный цветовой акцент (опция).
      В этом случае, помимо предложенных вариантов, цвет фона и обводки можно задать через свойства background и border.
      Следует учесть, что цвета надо брать из палитры Special, допускается окрашивание тэга в любой парный цвет (фон, обводка) из этой палитры.`,
    },
  },
};
CustomColorsExample.storyName = 'Tag. Кастомные цвета.';
//</editor-fold>

//<editor-fold desc="Tag. Активный и пассивный.">
const StateStory: ComponentStory<typeof Tag> = () => <TagStateTemplate />;
export const StateExample = StateStory.bind({});
StateExample.parameters = {
  docs: {
    source: {
      code: StateRaw,
    },
    description: {
      story: `Тэги могут быть как активными и служить, например, каталагизаторами, так и пассивными, просто отображая
            принадлежность элемента к некоторой группе элементов имеющих общий признак.`,
    },
  },
};
StateExample.storyName = 'Tag. Активный и пассивный.';
//</editor-fold>

//<editor-fold desc="Tag. Тултип.">
const TooltipStory: ComponentStory<typeof Tag> = () => <TagTooltipTemplate />;
export const TooltipExample = TooltipStory.bind({});
TooltipExample.parameters = {
  docs: {
    source: {
      code: TooltipRaw,
    },
    description: {
      story: `В случае ограниченного пространства используется тултип.`,
    },
  },
};
TooltipExample.storyName = 'Tag. Тултип.';
//</editor-fold>

//<editor-fold desc="Tag. С иконкой.">
const IconStory: ComponentStory<typeof Tag> = () => <TagIconTemplate />;
export const IconExample = IconStory.bind({});
IconExample.parameters = {
  docs: {
    source: {
      code: IconRaw,
    },
    description: {
      story: `Тэги могут быть с иконками, но только в том случае, если статус отображается
      через цвет обводки и фона (параметр statusViaBackground установлен в true)`,
    },
  },
};
IconExample.storyName = 'Tag. С иконкой.';
//</editor-fold>
