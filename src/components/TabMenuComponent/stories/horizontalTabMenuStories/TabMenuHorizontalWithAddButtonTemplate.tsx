import { forwardRef, useState } from 'react';
import type { ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import type {
  BorderRadiusType,
  RenderOptionProps,
  HorizontalTabProps,
  TabMenuHorizontalProps,
} from '@admiral-ds/react-ui';
import {
  TabMenuHorizontal,
  HorizontalTab,
  TabIcon,
  TabBadge,
  TabText,
  MenuItem,
  TabCloseIconButton,
  NotificationItem,
  NotificationItemTitle,
  NotificationItemContent,
} from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';
import { ReactComponent as MinusCircleOutline } from '@admiral-ds/icons/build/service/MinusCircleOutline.svg';

interface TabContentProps extends HorizontalTabProps {
  text: string;
  badge?: number;
  disabled?: boolean;
  icon?: ReactNode;
  onCloseTab?: (tabId: string) => void;
}

interface CustomHorizontalTabProps extends TabContentProps {}
const CustomHorizontalTab = forwardRef<HTMLButtonElement, CustomHorizontalTabProps>(
  (
    { dimension = 'l', disabled, selected, tabId, text, badge, icon, onCloseTab, ...props }: CustomHorizontalTabProps,
    ref,
  ) => {
    const handleCloseTab = () => {
      tabId && onCloseTab?.(tabId);
    };

    return (
      <HorizontalTab {...props} tabId={tabId} ref={ref} dimension={dimension} disabled={disabled} selected={selected}>
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
        <TabCloseIconButton dimension={dimension} disabled={disabled} onClick={handleCloseTab} />
      </HorizontalTab>
    );
  },
);

const tabsBase: TabContentProps[] = [
  { text: 'Text1', tabId: '1', badge: 1 },
  { text: 'Text22', tabId: '2', icon: <MinusCircleOutline /> },
  { text: 'Text333', tabId: '3' },
  { text: 'Text4444', tabId: '4', badge: 4 },
  { text: 'Text55555', tabId: '5', icon: <MinusCircleOutline /> },
  { text: 'Text66666', tabId: '6' },
  { text: 'Text7777 is very very very very long', tabId: '7' },
  { text: 'Text888', tabId: '8', icon: <MinusCircleOutline /> },
  { text: 'Text99', tabId: '9' },
];
let tabCount = tabsBase.length;

const Separator = styled.div<{ height: number }>`
  height: ${(p) => p.height}px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const MenuItemWrapper = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;
const getTabsMap = (tabs: TabContentProps[]) => {
  return tabs.map((tab) => tab.tabId || '');
};

export const TabMenuHorizontalWithAddButtonTemplate = ({
  dimension = 'l',
  showUnderline,
  defaultSelectedTabId = '3',
  themeBorderKind,
  CSSCustomProps,
  ...props
}: TabMenuHorizontalProps & {
  themeBorderKind?: BorderRadiusType;
  CSSCustomProps?: boolean;
}) => {
  const [tabs, setTabs] = useState(tabsBase);
  const [tabsMap, setTabsMap] = useState(getTabsMap(tabs));
  const [selectedTab, setSelectedTab] = useState<string | undefined>(defaultSelectedTabId);

  const handleSelectTab = (tabId: string) => setSelectedTab(tabId);

  const tabIsDisabled = (tabId: string) => {
    const currentTab = tabs.find((tab) => tab.tabId === tabId);
    return !!currentTab?.disabled;
  };

  const handleCloseTab = (tabId: string) => {
    if (tabs.length > 1) {
      const tabIndex = tabs.findIndex((tab) => tab.tabId === tabId);

      if (tabId === selectedTab) {
        const newSelectedTab = tabs[0].tabId;
        setSelectedTab(newSelectedTab);
      }

      const newTabs = [...tabs];
      newTabs.splice(tabIndex, 1);

      setTabs(newTabs);
      setTabsMap(getTabsMap(newTabs));
    }
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
        onCloseTab={handleCloseTab}
      />
    );
  };

  const renderDropMenuItem = (tabId: string) => {
    const currentTab = tabs.find((tab) => tab.tabId === tabId);
    return (options: RenderOptionProps) => {
      return (
        <MenuItem dimension={dimension} {...options} key={tabId}>
          <MenuItemWrapper>
            <div>{currentTab?.text}</div>
            <TabCloseIconButton
              dimension={dimension}
              disabled={tabIsDisabled(tabId)}
              onClick={() => handleCloseTab(tabId)}
            />
          </MenuItemWrapper>
        </MenuItem>
      );
    };
  };

  const handleAddTab = () => {
    tabCount += 1;
    const newId = tabCount.toString();
    const newText = `Text${newId}`;
    const newTabs = [...tabs, { tabId: newId, text: newText }];
    setTabs(newTabs);
    setTabsMap(getTabsMap(newTabs));
    setSelectedTab(newId);
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Wrapper>
        <NotificationItem displayStatusIcon>
          <NotificationItemTitle>Удаление, добавление вкладок</NotificationItemTitle>
          <NotificationItemContent>
            Рекомендации
            <li>При нажатии на иконку закрытия — владка и контент под ней удаляются.</li>
            <li>Если удалить текущую вкладку, то автоматически включится первая из оставшихся вкладок.</li>
            <li>При удалении не активной вкладки, вы остаетесь там же, где и были.</li>
            <li>Удалить все вкладки нельзя, должна остаться хотя бы одна вкладка.</li>
            <Separator height={8} />
            Можно включать опцию добавления вкладок. Механика добавления вкладки настраивается пользователем. При
            переполнении вкладок (есть меню) кнопка добавления вкладки видна всегда.
          </NotificationItemContent>
        </NotificationItem>
        <Separator height={40} />
        <TabMenuHorizontal
          {...props}
          dimension={dimension}
          showUnderline={showUnderline}
          selectedTabId={selectedTab}
          defaultSelectedTabId="3"
          onSelectTab={handleSelectTab}
          onAddTab={handleAddTab}
          tabsId={tabsMap}
          renderDropMenuItem={renderDropMenuItem}
          renderTab={renderTab}
          tabIsDisabled={tabIsDisabled}
        />
      </Wrapper>
    </ThemeProvider>
  );
};
