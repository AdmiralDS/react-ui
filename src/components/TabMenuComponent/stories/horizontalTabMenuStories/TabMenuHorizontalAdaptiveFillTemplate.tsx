import { forwardRef, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import type { BorderRadiusType, HorizontalTabProps, TabMenuHorizontalProps, TabAppearance } from '@admiral-ds/react-ui';
import { TabMenuHorizontal, HorizontalTab, TabIcon, TabBadge, TabText } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';
import { ReactComponent as MinusCircleOutline } from '@admiral-ds/icons/build/service/MinusCircleOutline.svg';

interface TabContentProps extends HorizontalTabProps {
  text: string;
  badge?: number;
  disabled?: boolean;
  icon?: ReactNode;
  appearance: TabAppearance;
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
        {text && <TabText>{text}</TabText>}
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

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <TabMenuHorizontal
        {...props}
        adaptive={adaptive}
        appearance={appearance}
        showUnderline={showUnderline}
        selectedTabId={selectedTab}
        defaultSelectedTabId="3"
        onSelectTab={handleSelectTab}
        tabsId={tabsMap}
        renderTab={renderTab}
        tabIsDisabled={tabIsDisabled}
      />
    </ThemeProvider>
  );
};
