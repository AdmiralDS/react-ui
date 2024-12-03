import type { HorizontalTabProps, RenderOptionProps } from '@admiral-ds/react-ui';
import { HorizontalTab, MenuItem, TabBadge, TabIcon, TabMenuHorizontal, TabText } from '@admiral-ds/react-ui';
import type { ReactNode } from 'react';
import { forwardRef, useState } from 'react';
import styled from 'styled-components';

const MenuItemWrapper = styled.div`
  display: flex;
  overflow: hidden;
  text-overflow: ellipsis;
  align-items: center;
`;

export interface Tab extends HorizontalTabProps {
  text: string;
  tabId: string;
  badge?: number;
  disabled?: boolean;
  icon?: React.ReactNode;
}

// const tabs: Tab[] = [
//   { text: 'Торговые', tabId: '1' },
//   { text: 'Не торговые', tabId: '2' },
// ];

// const tabs2 = [
//   { text: 'Text1', tabId: '1', badge: 1 },
//   { text: 'Text22', tabId: '2' },
//   { text: 'Text333', tabId: '3', badge: 321 },
//   { text: 'Text4444', tabId: '4', disabled: true },
// ];

export const OPERATION_TABS: Tab[] = [
  { text: 'Торговые операции', tabId: '1' },
  { text: 'Неторговые операции', tabId: '2' },
];

export interface Props {
  className?: string;
  tabsList: Tab[];
  onChange: (tab: HorizontalTabProps) => void;
}

interface TabContentProps extends HorizontalTabProps {
  text: string;
  badge?: number;
  disabled?: boolean;
  icon?: ReactNode;
}
interface CustomHorizontalTabProps extends TabContentProps {}

const CustomHorizontalTab = forwardRef<HTMLButtonElement, CustomHorizontalTabProps>(
  (
    { dimension = 'l', disabled, selected, tabId, text, badge, icon, onSelectTab, ...props }: CustomHorizontalTabProps,
    ref,
  ) => {
    return (
      <HorizontalTab
        {...props}
        tabId={tabId}
        ref={ref}
        dimension={dimension}
        disabled={disabled}
        selected={selected}
        className="BBBBBBBBBBBBBBBBBBBBBB"
        data-testid={tabId}
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

export const TestTabs = ({ onChange, tabsList }: Props) => {
  const [selectedTab, setSelectedTab] = useState<string | undefined>('1');

  const handleSelectTab = (tabId: string) => {
    console.log(`handleSelectTab tabId=${tabId}`);
    setSelectedTab(tabId);
    const currentTab = tabsList.find((tab) => tab.tabId === tabId);
    console.log(`currentTab=${tabId}`);
    if (currentTab) {
      onChange(currentTab);
    }
  };

  const tabsMap = tabsList.map((tab) => tab.tabId);

  const renderDropMenuItem = (tabId: string) => {
    const currentTab = tabsList.find((tab) => tab.tabId === tabId);
    return (options: RenderOptionProps) => {
      return (
        <MenuItem dimension="l" {...options} key={tabId} className="AAAAAAAa">
          <MenuItemWrapper>{currentTab?.text}</MenuItemWrapper>
        </MenuItem>
      );
    };
  };

  const tabIsDisabled = (tabId: string) => {
    const currentTab = tabsList.find((tab) => tab.tabId === tabId);
    return !!currentTab?.disabled;
  };

  const renderTab = (tabId: string, selected?: boolean, onSelectTab?: (tabId: string) => void) => {
    const currentTab = tabsList.find((tab) => tab.tabId === tabId);
    const text = currentTab?.text || '';
    const badge = currentTab?.badge;
    const disabled = !!currentTab?.disabled;
    return (
      <CustomHorizontalTab
        dimension="l"
        tabId={tabId}
        text={text}
        badge={badge}
        key={tabId}
        selected={selected}
        disabled={disabled}
        onSelectTab={onSelectTab}
      />
    );
  };

  return (
    <div>
      <TabMenuHorizontal
        style={{ width: '800px' }}
        dimension={'m'}
        showUnderline
        selectedTabId={selectedTab}
        onSelectTab={handleSelectTab}
        tabsId={tabsMap}
        renderDropMenuItem={renderDropMenuItem}
        renderTab={renderTab}
        tabIsDisabled={tabIsDisabled}
      />
    </div>
  );
};
