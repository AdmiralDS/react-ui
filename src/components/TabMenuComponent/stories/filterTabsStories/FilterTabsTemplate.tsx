import { forwardRef, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import type { BorderRadiusType, FilterTabProps, FilterTabsProps } from '@admiral-ds/react-ui';
import {
  FilterTab,
  TabText,
  FilterTabs,
  FilterTabBadge,
  FilterTabIcon,
  NotificationItem,
  NotificationItemTitle,
  NotificationItemContent,
} from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';
import { ReactComponent as MinusCircleOutline } from '@admiral-ds/icons/build/service/MinusCircleOutline.svg';

interface TabContentProps extends FilterTabProps {
  text: string;
  badge?: number;
  disabled?: boolean;
  icon?: ReactNode;
}

interface CustomFilterTabProps extends TabContentProps {}
const CustomFilterTab = forwardRef<HTMLButtonElement, CustomFilterTabProps>(
  (
    { dimension = 'm', disabled, selected, onSelectTab, tabId, text, icon, badge, ...props }: CustomFilterTabProps,
    ref,
  ) => {
    return (
      <FilterTab
        {...props}
        ref={ref}
        tabId={tabId}
        dimension={dimension}
        disabled={disabled}
        selected={selected}
        onSelectTab={onSelectTab}
      >
        {icon && (
          <FilterTabIcon $dimension={dimension} $disabled={disabled}>
            {icon}
          </FilterTabIcon>
        )}
        <TabText>{text}</TabText>
        {badge && (
          <FilterTabBadge disabled={disabled} selected={selected}>
            {badge}
          </FilterTabBadge>
        )}
      </FilterTab>
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
  { text: 'Text1010', tabId: '10', badge: 4 },
  { text: 'Text11111', tabId: '11', disabled: true, icon: <MinusCircleOutline /> },
  { text: 'Text121212', tabId: '12' },
  { text: 'Text131313 is very very very very long', tabId: '13' },
  { text: 'Text141414', tabId: '14', icon: <MinusCircleOutline /> },
  { text: 'Text151515', tabId: '15' },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Separator = styled.div<{ height: number }>`
  height: ${(p) => p.height}px;
`;

export const FilterTabsTemplate = ({
  dimension = 'm',
  defaultSelectedTabId = '3',
  themeBorderKind,
  CSSCustomProps,
  ...props
}: FilterTabsProps & {
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
      <CustomFilterTab
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
        <NotificationItem displayStatusIcon>
          <NotificationItemTitle>FilterTabs</NotificationItemTitle>
          <NotificationItemContent>
            Компонент используется для переключения контента объединённого общей логикой. Существует в двух размерах – M
            (40) и S (32) по высоте. При переполнении появляются кнопки скроллирования по горизонтали.
          </NotificationItemContent>
          <Separator height={8} />
          <NotificationItemContent>
            Скроллить так же можно колесиком мышки, когда курсор находится над компонентом. При прокручивании колесика
            вниз, вкладки скроллятся влево и наоборот.
          </NotificationItemContent>
          <NotificationItemContent>
            Дополнительно можно скроллить зажав ЛКМ над компонентом и «потянув» в нужную сторону.
          </NotificationItemContent>
        </NotificationItem>
        <FilterTabs
          {...props}
          dimension={dimension}
          selectedTabId={selectedTab}
          defaultSelectedTabId={defaultSelectedTabId}
          onSelectTab={handleSelectTab}
          tabsId={tabsMap}
          renderTab={renderTab}
          tabIsDisabled={tabIsDisabled}
        />
      </Wrapper>
    </ThemeProvider>
  );
};
