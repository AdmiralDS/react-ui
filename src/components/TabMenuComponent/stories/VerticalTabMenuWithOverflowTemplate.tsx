import { forwardRef, type ReactNode, useMemo, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { MenuItem, RadioButton, FieldSet } from '@admiral-ds/react-ui';
import type { BorderRadiusType, RenderOptionProps } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';
import { ReactComponent as MinusCircleOutline } from '@admiral-ds/icons/build/service/MinusCircleOutline.svg';

import type { TabDimension, VerticalTabProps, VerticalUnderlinePosition } from '#src/components/TabMenuComponent/types';
import { VerticalTab } from '#src/components/TabMenuComponent//tabs/VerticalTab';
import { TabIcon } from '#src/components/TabMenuComponent/tabs/TabIcon';
import { VerticalTabBadge } from '#src/components/TabMenuComponent/tabs/TabBadge';
import { TabText } from '#src/components/TabMenuComponent/tabs/TabText';
import { TabMenuVertical } from '#src/components/TabMenuComponent/tabMenus/TabMenuVertical';

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

const PropsWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: var(--admiral-color-Neutral_Neutral20, ${(p) => p.theme.color['Neutral/Neutral 20']});
`;
const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 450px;
  overflow: hidden;
  align-items: center;
`;
const MenuItemWrapper = styled.div`
  display: flex;
  overflow: hidden;
  text-overflow: ellipsis;
  align-items: center;
`;

export const VerticalTabMenuWithOverflowTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: {
  themeBorderKind?: BorderRadiusType;
  CSSCustomProps?: boolean;
}) => {
  //<editor-fold desc="Параметры">
  const [dimension, setDimension] = useState<TabDimension>('l');
  const [showUnderline, setShowUnderline] = useState<boolean>(true);
  const [underlinePosition, setUnderlinePosition] = useState<VerticalUnderlinePosition>('right');
  //</editor-fold>

  const tabsMap = useMemo(() => {
    return tabs.map((tab) => tab.tabId);
  }, [tabs]);

  const [selectedTab, setSelectedTab] = useState<string | undefined>('3');
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
        width={TAB_MENU_WIDTH}
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
        <PropsWrapper>
          <FieldSet
            onChange={(e) => {
              setDimension((e.target as HTMLInputElement).value === 'l' ? 'l' : 'm');
            }}
            legend="Dimension"
            dimension="s"
          >
            <RadioButton value="m" name="M" checked={dimension === 'm'} onChange={() => undefined}>
              M
            </RadioButton>
            <RadioButton value="l" name="L" checked={dimension === 'l'} onChange={() => undefined}>
              L
            </RadioButton>
          </FieldSet>
          <FieldSet
            onChange={(e) => {
              setShowUnderline((e.target as HTMLInputElement).value === 'true');
            }}
            legend="Show underline"
            dimension="s"
          >
            <RadioButton value="true" checked={showUnderline} onChange={() => undefined}>
              true
            </RadioButton>
            <RadioButton value="false" checked={!showUnderline} onChange={() => undefined}>
              false
            </RadioButton>
          </FieldSet>
          <FieldSet
            onChange={(e) => {
              setUnderlinePosition((e.target as HTMLInputElement).value === 'left' ? 'left' : 'right');
            }}
            legend="Underline position"
            dimension="s"
          >
            <RadioButton value="right" checked={underlinePosition === 'right'} onChange={() => undefined}>
              Right
            </RadioButton>
            <RadioButton value="left" checked={underlinePosition === 'left'} onChange={() => undefined}>
              Left
            </RadioButton>
          </FieldSet>
        </PropsWrapper>
        <Divider />
        <TabMenuVertical
          dimension={dimension}
          showUnderline={showUnderline}
          underlinePosition={underlinePosition}
          selectedTabId={selectedTab}
          defaultSelectedTabId="3"
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
