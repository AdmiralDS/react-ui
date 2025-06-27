import { forwardRef, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import type { BorderRadiusType, HorizontalTabProps, CardTabMenuHorizontalProps } from '@admiral-ds/react-ui';
import { CardTabMenuHorizontal, CardTab, TabIcon, CardTabBadge, TabText } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';
import { ReactComponent as WifiOutline } from '@admiral-ds/icons/build/communication/WifiOutline.svg';
import { ReactComponent as PhoneOutline } from '@admiral-ds/icons/build/communication/PhoneOutline.svg';
import { ReactComponent as SIMCardOutline } from '@admiral-ds/icons/build/communication/SIMCardOutline.svg';

interface TabContentProps extends HorizontalTabProps {
  text?: string;
  badge?: number;
  disabled?: boolean;
  icon?: ReactNode;
}

interface CustomHorizontalTabProps extends TabContentProps {}
const CustomHorizontalCardTab = forwardRef<HTMLButtonElement, CustomHorizontalTabProps>(
  (
    { dimension = 'l', adaptive, disabled, selected, tabId, text, badge, icon, ...props }: CustomHorizontalTabProps,
    ref,
  ) => {
    return (
      <CardTab
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
          <CardTabBadge disabled={disabled} selected={selected}>
            {badge}
          </CardTabBadge>
        )}
      </CardTab>
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
  { text: 'Wi-Fi', tabId: '1', icon: <WifiOutline /> },
  { text: 'Phone', tabId: '2', icon: <PhoneOutline /> },
  { text: 'Sim card', tabId: '3', icon: <SIMCardOutline /> },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-color: var(--admiral-color-Neutral_Neutral05, ${(p) => p.theme.color['Neutral/Neutral 05']});
`;

const Content = styled.div`
  box-sizing: border-box;
  background-color: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
  border: 1px solid var(--admiral-color-Neutral_Neutral20, ${(p) => p.theme.color['Neutral/Neutral 20']});
  border-top-width: 0;
  height: 100px;
`;

export const CardTabMenuHorizontalAdaptiveFillTemplate = ({
  dimension = 'l',
  showUnderline = true,
  defaultSelectedTabId = '3',
  adaptive = 'fill',
  themeBorderKind,
  CSSCustomProps,
  ...props
}: CardTabMenuHorizontalProps & {
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
      <CustomHorizontalCardTab
        adaptive={adaptive}
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
        <CardTabMenuHorizontal
          {...props}
          adaptive={adaptive}
          showUnderline={showUnderline}
          selectedTabId={selectedTab}
          defaultSelectedTabId="3"
          onSelectTab={handleSelectTab}
          tabsId={tabsMap}
          renderTab={renderTab}
          tabIsDisabled={tabIsDisabled}
        />
        <Content />
      </Wrapper>
    </ThemeProvider>
  );
};
