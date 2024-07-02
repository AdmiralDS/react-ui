import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import { ALL_BORDER_RADIUS_VALUES, TabMenuVertical } from '@admiral-ds/react-ui';

import { VerticalTabMenuTemplate } from './VerticalTabMenuTemplate';

// Imports of text sources
import VerticalTabMenuRaw from './VerticalTabMenuTemplate?raw';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Вариант компонента с вертикальной компоновкой, используется для переключения между вкладками. Существует в двух
    размерах - L и M. У компонента так же есть два варианта компоновки и переключения позиции табов: справа и слева.
    Ширина компонента задается пользователем. Опционально можно выключать серую полоску снизу. В закладках можно
    включать иконки, бейджи. Если название таба длинное, оно уходит под многоточие в зависимости от ширины таб меню.
    Дефолтная ширина компонента на странице задается пользователем. При адаптации вместе с шириной комопнента
    уменьшается зона текстового поля, так как она занимает всю ширину компонента.
    <br />
    Размеры выпадающего меню соответствуют размерам Tab Menu — L для L размера и M для M размера В выпадающем меню
    отображаются вкладки, не поместившиеся в основной столбец. При выборе вкладки из меню, она отображается в основном
    столбце крайней снизу, заменяя собой предыдущую крайнюю вкладку, которая, в свою очередь, «уходит» в меню. Активная
    вкладка при этом отображается в меню, как выбранная. Если вкладка из меню с длинным названием и требует больше
    места, то она уходит под многоточие и подстраивается под ширину меню. При увеличении высоты Vertical Tab Menu,
    скрытые вкладки становятся видимыми, покидая выпадающее меню и наоброт.
    <br />В связи с особенностями компоновки на мобильных устройствах рекомендуется применять горизонтальную версию
    компонента Horizontal Tab Menu.
  </Desc>
);

export default {
  title: 'Admiral-2.1/TabMenuComponent/TabMenuVertical',
  decorators: undefined,
  component: TabMenuVertical,
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
    underlinePosition: {
      options: ['left', 'right'],
      control: { type: 'radio' },
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
} as Meta<typeof TabMenuVertical>;

//<editor-fold desc="VerticalTabMenu.">
const VerticalTabMenuStory: StoryFn<typeof TabMenuVertical> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <VerticalTabMenuTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const VerticalTabMenuExample = {
  render: VerticalTabMenuStory,

  parameters: {
    docs: {
      source: {
        code: VerticalTabMenuRaw,
      },
    },
  },

  name: 'VerticalTabMenu.',
};
//</editor-fold>
