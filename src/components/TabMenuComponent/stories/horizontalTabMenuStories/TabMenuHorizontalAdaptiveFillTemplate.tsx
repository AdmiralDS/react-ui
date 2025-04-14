import { forwardRef, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import type {
  BorderRadiusType,
  RenderOptionProps,
  HorizontalTabProps,
  TabMenuHorizontalProps,
  TabAppearance,
  TabAdaptive,
} from '@admiral-ds/react-ui';
import { TabMenuHorizontal, HorizontalTab, TabIcon, TabBadge, TabText, MenuItem } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';
import { ReactComponent as MinusCircleOutline } from '@admiral-ds/icons/build/service/MinusCircleOutline.svg';

interface TabContentProps extends HorizontalTabProps {
  text: string;
  badge?: number;
  disabled?: boolean;
  icon?: ReactNode;
  appearance: TabAppearance;
  adaptive: TabAdaptive;
}

interface CustomHorizontalTabProps extends TabContentProps {}
const CustomHorizontalTab = forwardRef<HTMLButtonElement, CustomHorizontalTabProps>(
  (
    {
      dimension = 'l',
      adaptive,
      appearance,
      disabled,
      selected,
      tabId,
      text,
      badge,
      icon,
      ...props
    }: CustomHorizontalTabProps,
    ref,
  ) => {
    return (
      <HorizontalTab
        {...props}
        adaptive={adaptive}
        tabId={tabId}
        ref={ref}
        dimension={dimension}
        disabled={disabled}
        selected={selected}
      >
        {icon && (
          <TabIcon $dimension={dimension} $disabled={disabled}>
            {icon}
          </TabIcon>
        )}
        <TabText>{text}</TabText>
        {badge && (
          <TabBadge tabAppearance={appearance} disabled={disabled} selected={selected}>
            {badge}
          </TabBadge>
        )}
      </HorizontalTab>
    );
  },
);

interface TabsProps {
  text?: string;
  tabId: string;
  icon?: React.ReactNode;
  badge?: number;
  disabled?: boolean;
}

const tabs: TabsProps[] = [
  { text: 'Text1', tabId: '1', badge: 1 },
  { tabId: '2', icon: <MinusCircleOutline /> },
  { text: 'Text333', tabId: '3' },
];

const MenuItemWrapper = styled.div`
  display: flex;
  overflow: hidden;
  text-overflow: ellipsis;
  align-items: center;
`;

export const TabMenuHorizontalAdaptiveFillTemplate = ({
  dimension = 'l',
  adaptive = 'fill',
  showUnderline,
  defaultSelectedTabId = '3',
  appearance = 'primary',
  themeBorderKind,
  CSSCustomProps,
  ...props
}: TabMenuHorizontalProps & {
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
        adaptive={adaptive}
        appearance={appearance}
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
  const renderDropMenuItem = (tabId: string) => {
    const currentTab = tabs.find((tab) => tab.tabId === tabId);
    return (options: RenderOptionProps) => {
      return (
        <MenuItem dimension={dimension} {...options} key={tabId}>
          <MenuItemWrapper>{currentTab?.text}</MenuItemWrapper>
        </MenuItem>
      );
    };
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <TabMenuHorizontal
        {...props}
        adaptive={adaptive}
        style={{ width: '100%' }}
        appearance={appearance}
        dimension={dimension}
        showUnderline={showUnderline}
        selectedTabId={selectedTab}
        defaultSelectedTabId="3"
        onSelectTab={handleSelectTab}
        tabsId={tabsMap}
        renderDropMenuItem={renderDropMenuItem}
        renderTab={renderTab}
        tabIsDisabled={tabIsDisabled}
      />
    </ThemeProvider>
  );
};
