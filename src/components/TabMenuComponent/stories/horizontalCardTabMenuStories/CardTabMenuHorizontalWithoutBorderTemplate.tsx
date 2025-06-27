import { forwardRef, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import type {
  BorderRadiusType,
  RenderOptionProps,
  HorizontalTabProps,
  CardTabMenuHorizontalProps,
} from '@admiral-ds/react-ui';
import { CardTabMenuHorizontal, CardTab, TabIcon, CardTabBadge, TabText, MenuItem } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';
import { ReactComponent as MinusCircleOutline } from '@admiral-ds/icons/build/service/MinusCircleOutline.svg';
import { ReactComponent as WifiOutline } from '@admiral-ds/icons/build/communication/WifiOutline.svg';
import { ReactComponent as PhoneOutline } from '@admiral-ds/icons/build/communication/PhoneOutline.svg';
import { ReactComponent as SIMCardOutline } from '@admiral-ds/icons/build/communication/SIMCardOutline.svg';
import { ReactComponent as HeadsetOutline } from '@admiral-ds/icons/build/communication/HeadsetOutline.svg';
import { ReactComponent as SignalOutline } from '@admiral-ds/icons/build/communication/SignalOutline.svg';
import { ReactComponent as TelegrammOutline } from '@admiral-ds/icons/build/communication/TelegrammOutline.svg';

interface TabContentProps extends HorizontalTabProps {
  text: string;
  badge?: number;
  disabled?: boolean;
  icon?: ReactNode;
}

interface CustomHorizontalTabProps extends TabContentProps {}
const CustomHorizontalCardTab = forwardRef<HTMLButtonElement, CustomHorizontalTabProps>(
  (
    { dimension = 'l', hideBorder, disabled, selected, tabId, text, badge, icon, ...props }: CustomHorizontalTabProps,
    ref,
  ) => {
    return (
      <CardTab
        {...props}
        hideBorder={hideBorder}
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

const tabs = [
  { text: 'Wi-Fi', tabId: '1', icon: <WifiOutline /> },
  { text: 'Phone', tabId: '2', icon: <PhoneOutline />, disabled: true },
  { text: 'Sim card', tabId: '3', icon: <SIMCardOutline /> },
  { text: 'Viber', tabId: '9', badge: 7 },
  { text: 'Headset', tabId: '4', icon: <HeadsetOutline /> },
  { text: 'Network signal', tabId: '5', icon: <SignalOutline /> },
  { text: 'TelegrammOutline', tabId: '6', icon: <TelegrammOutline /> },
  { text: 'WhatsApp is very very very very long', tabId: '7' },
  { text: 'ICQ', tabId: '8', icon: <MinusCircleOutline />, disabled: true },
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
  border-top-width: 0;
  height: 100px;
`;

const MenuItemWrapper = styled.div`
  display: flex;
  overflow: hidden;
  text-overflow: ellipsis;
  align-items: center;
`;

export const CardTabMenuHorizontalWithoutBorderTemplate = ({
  dimension = 'l',
  showUnderline = false,
  hideBorder = true,
  defaultSelectedTabId = '3',
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
        dimension={dimension}
        hideBorder={hideBorder}
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
      <Wrapper>
        <CardTabMenuHorizontal
          {...props}
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
        <Content />
      </Wrapper>
    </ThemeProvider>
  );
};
