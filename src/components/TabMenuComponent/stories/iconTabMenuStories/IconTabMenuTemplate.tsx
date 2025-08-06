import { forwardRef, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import type { BorderRadiusType, IconTabProps, TabMenuIconProps } from '@admiral-ds/react-ui';
import {
  TabMenuIcon,
  IconTab,
  TabText,
  NotificationItem,
  NotificationItemContent,
  NotificationItemTitle,
} from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';
import { ReactComponent as MinusCircleOutline } from '@admiral-ds/icons/build/service/MinusCircleOutline.svg';

interface TabContentProps extends IconTabProps {
  text: string;
  disabled?: boolean;
  icon: ReactNode;
}

const CustomIconTab = forwardRef<HTMLButtonElement, TabContentProps>(
  ({ text, icon, tabId, ...props }: TabContentProps, ref) => {
    return (
      <IconTab {...props} tabId={tabId} ref={ref}>
        {icon}
        <TabText>{text}</TabText>
      </IconTab>
    );
  },
);

const tabs = [
  { text: 'Text01', tabId: '1', icon: <MinusCircleOutline /> },
  { text: 'Text02', tabId: '2', icon: <MinusCircleOutline /> },
  { text: 'Text03', tabId: '3', icon: <MinusCircleOutline /> },
  { text: 'Text04', tabId: '4', icon: <MinusCircleOutline /> },
  { text: 'Text05', tabId: '5', disabled: true, icon: <MinusCircleOutline /> },
  { text: 'Text06', tabId: '6', icon: <MinusCircleOutline /> },
  { text: 'Text07', tabId: '7', icon: <MinusCircleOutline /> },
  { text: 'Text08', tabId: '8', icon: <MinusCircleOutline /> },
  { text: 'Text09', tabId: '9', icon: <MinusCircleOutline /> },
  { text: 'Text10', tabId: '10', icon: <MinusCircleOutline /> },
  { text: 'Text11', tabId: '11', icon: <MinusCircleOutline /> },
  { text: 'Text12', tabId: '12', icon: <MinusCircleOutline /> },
  { text: 'Text13', tabId: '13', icon: <MinusCircleOutline /> },
];

const Separator = styled.div<{ height: number }>`
  height: ${(p) => p.height}px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const IconTabMenuTemplate = ({
  showUnderline = true,
  defaultSelectedTabId = '13',
  themeBorderKind,
  CSSCustomProps,
  ...props
}: TabMenuIconProps & {
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
      <CustomIconTab
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

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Wrapper>
        <NotificationItem displayStatusIcon>
          <NotificationItemTitle>Горизонтальное TabMenu</NotificationItemTitle>
          <NotificationItemContent>
            Альтернативный вариант табов. Существует в одном размере - 68px по высоте. Может применяться, например, для
            отображения банковских карт пользователя.
            <Separator height={8} />
            Компонент можно использовать без линии снизу. В случае переполнения появляются кнопки “листания” вкладок. В
            крайних положениях (справа/слева) соответствующие кнопки стрелок исчезают.
          </NotificationItemContent>
        </NotificationItem>
        <Separator height={40} />
        <TabMenuIcon
          {...props}
          showUnderline={showUnderline}
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
