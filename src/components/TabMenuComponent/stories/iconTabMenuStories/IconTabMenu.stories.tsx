import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import { ALL_BORDER_RADIUS_VALUES, TabMenuIcon } from '@admiral-ds/react-ui';

import { IconTabMenuTemplate } from './IconTabMenuTemplate';

// Imports of text sources
import IconTabMenuRaw from './IconTabMenuTemplate?raw';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Альтернативный вариант табов. Существует в одном размере - 68px по высоте. Может применяться, например, для
    отображения банковских карт пользователя. Компонент можно использовать без линии снизу. В случае переполнения
    появляются кнопки “листания” вкладок.
  </Desc>
);

export default {
  title: 'Admiral-2.1/TabMenuComponent/TabMenuIcon',
  decorators: undefined,
  component: TabMenuIcon,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: <Description />,
  },
  argTypes: {
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
} as Meta<typeof TabMenuIcon>;

//<editor-fold desc="IconTabMenu.">
const IconTabMenuStory: StoryFn<typeof TabMenuIcon> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <IconTabMenuTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const IconTabMenuExample = {
  render: IconTabMenuStory,

  parameters: {
    docs: {
      source: {
        code: IconTabMenuRaw,
      },
    },
  },

  name: 'IconTabMenu.',
};
//</editor-fold>
