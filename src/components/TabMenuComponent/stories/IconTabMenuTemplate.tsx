import { forwardRef, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import type { BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';
import { ReactComponent as MinusCircleOutline } from '@admiral-ds/icons/build/service/MinusCircleOutline.svg';

import type { IconTabProps } from '#src/components/TabMenuComponent/types';
import { IconTab } from '#src/components/TabMenuComponent/tabs/IconTab';
import { TabMenuIcon } from '#src/components/TabMenuComponent/tabMenus/TabMenuIcon';
import { TabText } from '#src/components/TabMenuComponent/tabs/TabText';

interface TabContentProps extends IconTabProps {
  text: string;
  disabled?: boolean;
  icon: ReactNode;
}

const CustomIconTab = forwardRef<HTMLButtonElement, TabContentProps>(
  ({ text, icon, tabId, ...props }: TabContentProps, ref) => {
    return (
      <IconTab {...props} tabId={tabId} ref={ref}>
        {icon}
        <TabText>{text}</TabText>
      </IconTab>
    );
  },
);

const tabs = [
  { text: 'Text1', tabId: '1', icon: <MinusCircleOutline /> },
  { text: 'Text22', tabId: '2', icon: <MinusCircleOutline /> },
  { text: 'Text333', tabId: '3', icon: <MinusCircleOutline /> },
  { text: 'Text4444', tabId: '4', icon: <MinusCircleOutline /> },
  { text: 'Text55555', tabId: '5', disabled: true, icon: <MinusCircleOutline /> },
  { text: 'Text66666', tabId: '6', icon: <MinusCircleOutline /> },
  { text: 'Text7777 is very very very very long', tabId: '7', icon: <MinusCircleOutline /> },
  { text: 'Text888', tabId: '8', icon: <MinusCircleOutline /> },
  { text: 'Text99', tabId: '9', icon: <MinusCircleOutline /> },
];

const Wrapper = styled.div`
  width: 325px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const IconTabMenuTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: {
  themeBorderKind?: BorderRadiusType;
  CSSCustomProps?: boolean;
}) => {
  const tabsMap = useMemo(() => {
    return tabs.map((tab) => tab.tabId);
  }, [tabs]);

  const [selectedTab, setSelectedTab] = useState<string | undefined>('3');
  const handleSelectTab = (tabId: string) => setSelectedTab(tabId);

  const tabIsDisabled = (tabId: string) => {
    const currentTab = tabs.find((tab) => tab.tabId === tabId);
    return !!currentTab?.disabled;
  };

  const renderTab = (tabId: string, selected?: boolean, onSelectTab?: (tabId: string) => void) => {
    const currentTab = tabs.find((tab) => tab.tabId === tabId);
    const text = currentTab?.text || '';
    const disabled = !!currentTab?.disabled;
    const icon = currentTab?.icon;
    return (
      <CustomIconTab
        tabId={tabId}
        text={text}
        icon={icon}
        key={tabId}
        selected={selected}
        disabled={disabled}
        onSelectTab={onSelectTab}
      />
    );
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Wrapper>
        <TabMenuIcon
          selectedTabId={selectedTab}
          defaultSelectedTabId="3"
          onSelectTab={handleSelectTab}
          tabsId={tabsMap}
          renderTab={renderTab}
          tabIsDisabled={tabIsDisabled}
        />
      </Wrapper>
    </ThemeProvider>
  );
};
