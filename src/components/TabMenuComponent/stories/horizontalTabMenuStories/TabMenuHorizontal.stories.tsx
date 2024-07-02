import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import { ALL_BORDER_RADIUS_VALUES, TabMenuHorizontal } from '@admiral-ds/react-ui';

import { TabMenuHorizontalTemplate } from '#src/components/TabMenuComponent/stories/horizontalTabMenuStories/TabMenuHorizontalTemplate';

// Imports of text sources
import HorizontalTabMenuRaw from './TabMenuHorizontalTemplate?raw';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Компонент используется для переключения между вкладками. Существует в двух размерах - 48 и 40 px по высоте. Он
    полностью адаптивен и автоматически меняет ширину ячеек в зависимости от контента. Опционально можно выключать серую
    полоску снизу. В закладках можно включать иконки, бейджи.
    <br />
    Если вкладки не помещаются в отведенную ширину целиком, то включается Overflow Menu. Размеры выпадающего меню
    соответствуют размерам Tab Menu — L для L размера и M для M размера. В выпадающем меню отображаются вкладки, не
    поместившиеся в основной ряд. При выборе вкладки из меню, она отображается в основном ряду крайней справа, заменяя
    собой предыдущую крайнюю вкладку, которая, в свою очередь, «уходит» в меню. Активная вкладка при этом отображается в
    меню, как выбранная. Если вкладка из меню большая и требует больше места, то она заменяет собой две последние
    вкладки. В таком случае и вторая с края вкладка уходит в меню.
  </Desc>
);

export default {
  title: 'Admiral-2.1/TabMenuComponent/TabMenuHorizontal',
  decorators: undefined,
  component: TabMenuHorizontal,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: <Description />,
  },
  argTypes: {
    dimension: {
      options: ['l', 'm'],
      control: { type: 'radio' },
    },
    showUnderline: {
      control: { type: 'boolean' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    defaultSelectedTabId: {
      control: false,
    },
    renderTab: {
      control: false,
    },
    renderDropMenuItem: {
      control: false,
    },
    tabIsDisabled: {
      control: false,
    },
    tabsId: {
      control: false,
    },
    onSelectTab: {
      control: false,
    },
    selectedTabId: {
      control: false,
    },
  },
} as Meta<typeof TabMenuHorizontal>;

//<editor-fold desc="HorizontalTabMenu.">
const HorizontalTabMenuStory: StoryFn<typeof TabMenuHorizontal> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <TabMenuHorizontalTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const HorizontalTabMenuExample = {
  render: HorizontalTabMenuStory,

  parameters: {
    docs: {
      source: {
        code: HorizontalTabMenuRaw,
      },
    },
  },

  name: 'HorizontalTabMenu.',
};
//</editor-fold>
