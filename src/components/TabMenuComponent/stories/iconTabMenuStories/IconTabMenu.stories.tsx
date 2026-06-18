import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import { ALL_BORDER_RADIUS_VALUES, TabMenuIcon } from '@admiral-ds/react-ui';
import styled from 'styled-components';

import { IconTabMenuTemplate } from './IconTabMenuTemplate';

// Imports of text sources
import IconTabMenuRaw from './IconTabMenuTemplate?raw';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Separator = styled.div`
  height: 20px;
`;

const Description = () => (
  <Desc>
    Deprecated как редкоиспользуемый.
    <Separator />
    Из версии Admiral 2.1 TabMenuIcon не удалится, но в 3 версии Адмирала его уже не будет.
  </Desc>
);

export default {
  title: 'Deprecated/TabMenuIcon (Deprecated как редкоиспользуемый)',
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

//#region "IconTabMenu."
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
//#endregion
