import type { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';

import { AvatarActivityGroup } from '@admiral-ds/react-ui';
import type { AvatarGroupProps } from '@admiral-ds/react-ui';

import { AvatarActivityGroupWidthTemplate } from './AvatarActivityGroupWidth.template';
import { AvatarActivityGroupPlaygroundTemplate } from './AvatarActivityGroupPlayground.template';

// Imports of text sources
import AvatarActivityGroupWidthRaw from './AvatarActivityGroupWidth.template?raw';
import AvatarActivityGroupPlaygroundRaw from './AvatarActivityGroupPlayground.template?raw';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

export default {
  title: 'Admiral-2.1/AvatarActivityGroup',
  component: AvatarActivityGroup,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: (
      <Desc>
        При необходимости компоненты AvatarActivity можно группировать. В этом случае они выстраиваются по горизонтали с
        отрицательным отступом -10 px и внешней обводкой 2px в цвет фона страницы. При группировке статусы не
        отображаются.
      </Desc>
    ),
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A32367',
    },
  },
  argTypes: {
    dimension: {
      options: ['xl', 'l', 'm', 's', 'xs'],
      control: { type: 'radio' },
    },
    items: {
      control: false,
    },
    appearance: {
      options: ['neutral1', 'neutral2', 'neutral3', 'neutral4'],
      control: { type: 'radio' },
    },
    dropContainerCssMixin: {
      control: false,
    },
    dropContainerClassName: {
      control: false,
    },
    dropContainerStyle: {
      control: false,
    },
    menuWidth: {
      control: false,
    },
    menuMaxHeight: {
      control: false,
    },
  },
} as Meta<typeof AvatarActivityGroup>;

//<editor-fold desc="Playground">
const AvatarGroupPlaygroundStory: StoryFn<typeof AvatarActivityGroup> = (props: AvatarGroupProps) => (
  <AvatarActivityGroupPlaygroundTemplate {...props} />
);

export const AvatarGroupPlayground = {
  render: AvatarGroupPlaygroundStory,
  name: 'Playground',
  parameters: {
    docs: {
      source: {
        code: AvatarActivityGroupPlaygroundRaw,
      },
    },
  },
};
//</editor-fold>

//<editor-fold desc="Пример с ограниченной шириной">
const AvatarGroupWidthStory: StoryFn<typeof AvatarActivityGroup> = (props) => (
  <AvatarActivityGroupWidthTemplate {...props} />
);

export const AvatarGroupWidth = {
  render: AvatarGroupWidthStory,
  name: 'Пример с ограниченной шириной',
  parameters: {
    docs: {
      source: {
        code: AvatarActivityGroupWidthRaw,
      },
      description: {
        story: `При достижении условного максимума отображаемых аватаров, последним ставится аватар с отображением 
        количества скрытых элементов. Внешний вид такого аватара (цвет заливки и текста) контролируется с помощью 
        параметра appearance, переданного в компонент AvatarActivityGroup.\n\nЧтобы задать для всех аватаров, 
        входящих в группу, единый внешний вид, достаточно задать для компонента AvatarActivityGroup соответствующее 
        значение параметра appearance. Если для каких-то аватаров нужно задать отличный от остальных внешний вид, 
        необходимо задать параметр appearance непосредственно для компонента AvatarActivity. Параметр appearance, 
        заданный для AvatarActivity, имеет больший приоритет, чем параметр appearance, заданный для AvatarActivityGroup.`,
      },
    },
  },
};
//</editor-fold>
