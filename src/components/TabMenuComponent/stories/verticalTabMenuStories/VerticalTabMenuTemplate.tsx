import { forwardRef, type ReactNode, useMemo, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import type { BorderRadiusType, RenderOptionProps, TabMenuVerticalProps, VerticalTabProps } from '@admiral-ds/react-ui';
import { MenuItem, TabMenuVertical, VerticalTab, TabIcon, VerticalTabBadge, TabText } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';
import { ReactComponent as MinusCircleOutline } from '@admiral-ds/icons/build/service/MinusCircleOutline.svg';

const TAB_MENU_WIDTH = '260px';

interface TabContentProps extends VerticalTabProps {
  text: string;
  badge?: number;
  disabled?: boolean;
  icon?: ReactNode;
}

interface CustomVerticalTabProps extends TabContentProps {}
const CustomVerticalTab = forwardRef<HTMLButtonElement, CustomVerticalTabProps>(
  (
    { dimension = 'l', disabled, selected, onSelectTab, icon, badge, tabId, text, ...props }: CustomVerticalTabProps,
    ref,
  ) => {
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
      </VerticalTab>
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

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 350px;
  overflow: hidden;
  align-items: center;
`;
const MenuItemWrapper = styled.div`
  display: flex;
  overflow: hidden;
  text-overflow: ellipsis;
  align-items: center;
`;

export const VerticalTabMenuTemplate = ({
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
        <TabMenuVertical
          {...props}
          dimension={dimension}
          showUnderline={showUnderline}
          underlinePosition={underlinePosition}
          selectedTabId={selectedTab}
          defaultSelectedTabId={defaultSelectedTabId}
          onSelectTab={handleSelectTab}
          tabsId={tabsMap}
          renderTab={renderTab}
          renderDropMenuItem={renderDropMenuItem}
          tabIsDisabled={tabIsDisabled}
        />
      </Wrapper>
    </ThemeProvider>
  );
};
