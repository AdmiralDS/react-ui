import { forwardRef, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import type {
  BorderRadiusType,
  RenderOptionProps,
  HorizontalTabProps,
  TabDimension,
  CardTabMenuHorizontalProps,
} from '@admiral-ds/react-ui';
import {
  CardTabMenuHorizontal,
  CardTabMenuHorizontalLeadingGapWrapper,
  CardTab,
  TabIcon,
  TabText,
  MenuItem,
  NotificationItem,
  NotificationItemTitle,
  NotificationItemContent,
} from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';
import { ReactComponent as WifiOutline } from '@admiral-ds/icons/build/communication/WifiOutline.svg';
import { ReactComponent as PhoneOutline } from '@admiral-ds/icons/build/communication/PhoneOutline.svg';
import { ReactComponent as SIMCardOutline } from '@admiral-ds/icons/build/communication/SIMCardOutline.svg';

interface TabContentProps extends HorizontalTabProps {
  text: string;
  disabled?: boolean;
  icon?: ReactNode;
}

interface CustomHorizontalTabProps extends TabContentProps {}
const CustomHorizontalCardTab = forwardRef<HTMLButtonElement, CustomHorizontalTabProps>(
  ({ dimension = 'l', disabled, selected, tabId, text, icon, ...props }: CustomHorizontalTabProps, ref) => {
    return (
      <CardTab {...props} tabId={tabId} ref={ref} dimension={dimension} disabled={disabled} selected={selected}>
        {icon && (
          <TabIcon $dimension={dimension} $disabled={disabled}>
            {icon}
          </TabIcon>
        )}
        <TabText>{text}</TabText>
      </CardTab>
    );
  },
);

const tabs = [
  { text: 'Wi-Fi', tabId: '1', icon: <WifiOutline /> },
  { text: 'Phone', tabId: '2', icon: <PhoneOutline />, disabled: true },
  { text: 'Sim card', tabId: '3', icon: <SIMCardOutline /> },
];

const Separator = styled.div<{ height: number }>`
  height: ${(p) => p.height}px;
`;
const Wrapper = styled.div<{ $dimension: TabDimension }>`
  width: ${(p) => (p.$dimension === 'l' ? 377 : 322)}px;
  padding-top: 16px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  background-color: var(--admiral-color-Neutral_Neutral05, ${(p) => p.theme.color['Neutral/Neutral 05']});
  border: 1px solid var(--admiral-color-Neutral_Neutral20, ${(p) => p.theme.color['Neutral/Neutral 20']});
`;
const Content = styled.div`
  box-sizing: border-box;
  background-color: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
  height: 100px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

const MenuItemWrapper = styled.div`
  display: flex;
  overflow: hidden;
  text-overflow: ellipsis;
  align-items: center;
`;

export const CardTabMenuHorizontalLeadingGapTemplate = ({
  dimension = 'l',
  showUnderline = true,
  defaultSelectedTabId = '1',
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
    const icon = currentTab?.icon;
    return (
      <CustomHorizontalCardTab
        dimension={dimension}
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
      <NotificationItem displayStatusIcon>
        <NotificationItemTitle>CardTabMenu</NotificationItemTitle>
        <NotificationItemContent>
          В некоторых сценариях нужен отступ слева (полоска снизу слева от первой вкладки), что бы вставлять компонент
          во фреймы с обводкой, например карточки.
          <Separator height={8} />В таких сценариях добавляйте такой же или больший отступ справа. Значение может быть
          произвольным и зависит от сценария.
        </NotificationItemContent>
      </NotificationItem>
      <Separator height={40} />
      <Wrapper $dimension={dimension}>
        <CardTabMenuHorizontalLeadingGapWrapper $horizontalPaddingSize={16}>
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
        </CardTabMenuHorizontalLeadingGapWrapper>
        <Content />
      </Wrapper>
    </ThemeProvider>
  );
};
