import type { ReactNode } from 'react';
import { forwardRef, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import type { BorderRadiusType, RenderOptionProps, TabMenuVerticalProps, VerticalTabProps } from '@admiral-ds/react-ui';
import {
  MenuItem,
  TabMenuVertical,
  VerticalTab,
  TabIcon,
  VerticalTabBadge,
  TabText,
  TabCloseIconButton,
  NotificationItem,
  NotificationItemContent,
  NotificationItemTitle,
} from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';
import { ReactComponent as MinusCircleOutline } from '@admiral-ds/icons/build/service/MinusCircleOutline.svg';

const TAB_MENU_WIDTH = '260px';

interface TabContentProps extends VerticalTabProps {
  text: string;
  badge?: number;
  disabled?: boolean;
  icon?: ReactNode;
  onCloseTab?: (tabId: string) => void;
}

interface CustomVerticalTabProps extends TabContentProps {}
const CustomVerticalTab = forwardRef<HTMLButtonElement, CustomVerticalTabProps>(
  (
    {
      dimension = 'l',
      disabled,
      selected,
      onSelectTab,
      icon,
      badge,
      tabId,
      text,
      onCloseTab,
      ...props
    }: CustomVerticalTabProps,
    ref,
  ) => {
    const handleCloseTab = () => {
      tabId && onCloseTab?.(tabId);
    };
    return (
      <VerticalTab
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
          <VerticalTabBadge disabled={disabled} selected={selected}>
            {badge}
          </VerticalTabBadge>
        )}
        <TabCloseIconButton dimension={dimension} disabled={disabled} onCloseIconButtonClick={handleCloseTab} />
      </VerticalTab>
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
  flex-shrink: 0;
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 700px;
  overflow: hidden;
  align-items: center;
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
const StyledNotificationItem = styled(NotificationItem)`
  flex-shrink: 0;
`;
const getTabsMap = (tabs: TabContentProps[]) => {
  return tabs.map((tab) => tab.tabId || '');
};

export const VerticalTabMenuWithAddButtonTemplate = ({
  dimension = 'l',
  width = TAB_MENU_WIDTH,
  showUnderline = true,
  underlinePosition = 'right',
  defaultSelectedTabId = '3',
  themeBorderKind,
  CSSCustomProps,
  ...props
}: TabMenuVerticalProps & {
  width?: string | number;
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

      const newTabs = [...tabs];
      newTabs.splice(tabIndex, 1);

      if (tabId === selectedTab) {
        const newSelectedTab = newTabs[0].tabId;
        setSelectedTab(newSelectedTab);
      }

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
      <CustomVerticalTab
        tabId={tabId}
        dimension={dimension}
        text={text}
        badge={badge}
        icon={icon}
        key={tabId}
        selected={selected}
        disabled={disabled}
        width={width}
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
              onCloseIconButtonClick={() => handleCloseTab(tabId)}
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
        <StyledNotificationItem displayStatusIcon>
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
        </StyledNotificationItem>
        <TabMenuVertical
          {...props}
          dimension={dimension}
          showUnderline={showUnderline}
          underlinePosition={underlinePosition}
          selectedTabId={selectedTab}
          defaultSelectedTabId={defaultSelectedTabId}
          onSelectTab={handleSelectTab}
          onAddTab={handleAddTab}
          tabsId={tabsMap}
          renderTab={renderTab}
          renderDropMenuItem={renderDropMenuItem}
          tabIsDisabled={tabIsDisabled}
        />
      </Wrapper>
    </ThemeProvider>
  );
};
