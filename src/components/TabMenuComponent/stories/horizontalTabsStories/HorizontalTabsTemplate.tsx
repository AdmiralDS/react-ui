import { forwardRef, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import type { BorderRadiusType, HorizontalTabProps, HorizontalTabsProps } from '@admiral-ds/react-ui';
import {
  HorizontalTabs,
  HorizontalTab,
  TabIcon,
  TabBadge,
  TabText,
  NotificationItem,
  NotificationItemContent,
  NotificationItemTitle,
} from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';
import { ReactComponent as MinusCircleOutline } from '@admiral-ds/icons/build/service/MinusCircleOutline.svg';

interface TabContentProps extends HorizontalTabProps {
  text: string;
  badge?: number;
  disabled?: boolean;
  icon?: ReactNode;
}

interface CustomHorizontalTabProps extends TabContentProps {}
const CustomHorizontalTab = forwardRef<HTMLButtonElement, CustomHorizontalTabProps>(
  (
    { dimension = 'l', disabled, selected, onSelectTab, tabId, text, icon, badge, ...props }: CustomHorizontalTabProps,
    ref,
  ) => {
    return (
      <HorizontalTab
        {...props}
        ref={ref}
        tabId={tabId}
        dimension={dimension}
        disabled={disabled}
        selected={selected}
        onSelectTab={onSelectTab}
      >
        {icon && (
          <TabIcon $dimension={dimension} $disabled={disabled}>
            {icon}
          </TabIcon>
        )}
        <TabText>{text}</TabText>
        {badge && (
          <TabBadge disabled={disabled} selected={selected}>
            {badge}
          </TabBadge>
        )}
      </HorizontalTab>
    );
  },
);

const tabs = [
  { text: 'Text1', tabId: '1', badge: 1 },
  { text: 'Text22', tabId: '2', icon: <MinusCircleOutline /> },
  { text: 'Text333', tabId: '3' },
  { text: 'Text4444', tabId: '4', badge: 4 },
  { text: 'Text55555', tabId: '5', disabled: true, icon: <MinusCircleOutline /> },
  { text: 'Text66666', tabId: '6' },
  { text: 'Text7777 is very very very very long', tabId: '7' },
  { text: 'Text888', tabId: '8', icon: <MinusCircleOutline /> },
  { text: 'Text99', tabId: '9' },
];

const Separator = styled.div<{ height: number }>`
  height: ${(p) => p.height}px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const HorizontalTabsTemplate = ({
  dimension = 'l',
  showUnderline = true,
  defaultSelectedTabId = '7',
  themeBorderKind,
  CSSCustomProps,
  ...props
}: HorizontalTabsProps & {
  themeBorderKind?: BorderRadiusType;
  CSSCustomProps?: boolean;
}) => {
  const tabsMap = useMemo(() => {
    return tabs.map((tab) => tab.tabId);
  }, [tabs]);

  const [selectedTab, setSelectedTab] = useState<string | undefined>(defaultSelectedTabId);
  const handleSelectTab = (tabId: string) => setSelectedTab(tabId);

  const tabIsDisabled = (tabId: string) => {
    const currentTab = tabs.find((tab) => tab.tabId === tabId);
    return !!currentTab?.disabled;
  };

  const renderTab = (tabId: string, selected?: boolean, onSelectTab?: (tabId: string) => void) => {
    const currentTab = tabs.find((tab) => tab.tabId === tabId);
    const text = currentTab?.text || '';
    const disabled = !!currentTab?.disabled;
    const badge = currentTab?.badge;
    const icon = currentTab?.icon;
    return (
      <CustomHorizontalTab
        dimension={dimension}
        tabId={tabId}
        text={text}
        badge={badge}
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
        <NotificationItem displayStatusIcon>
          <NotificationItemTitle>Горизонтальное TabMenu</NotificationItemTitle>
          <NotificationItemContent>
            Компонент настроен таким образом, что если закладки не помещаются в ширину экрана, то они “выходят” за
            область экрана и их можно прокручивать свайпом, в остальном, поведение такое же, как и у настольной версии.
            Рекомендуется использовать для мобильной версии.
          </NotificationItemContent>
        </NotificationItem>
        <Separator height={40} />
        <HorizontalTabs
          {...props}
          showUnderline={showUnderline}
          selectedTabId={selectedTab}
          defaultSelectedTabId={defaultSelectedTabId}
          onSelectTab={handleSelectTab}
          tabsId={tabsMap}
          renderTab={renderTab}
          tabIsDisabled={tabIsDisabled}
        />
      </Wrapper>
    </ThemeProvider>
  );
};
