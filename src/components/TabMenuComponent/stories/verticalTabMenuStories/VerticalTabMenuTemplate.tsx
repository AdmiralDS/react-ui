import { forwardRef, useMemo, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import type {
  BorderRadiusType,
  RenderOptionProps,
  TabAppearance,
  TabMenuVerticalProps,
  VerticalTabProps,
} from '@admiral-ds/react-ui';
import {
  MenuItem,
  TabMenuVertical,
  VerticalTab,
  TabIcon,
  VerticalTabBadge,
  TabText,
  NotificationItem,
  NotificationItemContent,
  NotificationItemTitle,
} from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';
import { ReactComponent as MinusCircleOutline } from '@admiral-ds/icons/build/service/MinusCircleOutline.svg';

const TAB_MENU_WIDTH = '260px';

interface TabContentProps extends VerticalTabProps {
  text: string;
  badge?: number;
  disabled?: boolean;
  icon?: React.ReactNode;
  appearance: TabAppearance;
}

interface CustomVerticalTabProps extends TabContentProps {}
const CustomVerticalTab = forwardRef<HTMLButtonElement, CustomVerticalTabProps>(
  (
    {
      dimension = 'l',
      appearance,
      disabled,
      selected,
      onSelectTab,
      icon,
      badge,
      tabId,
      text,
      ...props
    }: CustomVerticalTabProps,
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
          <VerticalTabBadge tabAppearance={appearance} disabled={disabled} selected={selected}>
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

const Separator = styled.div<{ height: number }>`
  height: ${(p) => p.height}px;
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 800px;
  overflow: hidden;
  align-items: center;
`;
const MenuItemWrapper = styled.div`
  display: flex;
  overflow: hidden;
  text-overflow: ellipsis;
  align-items: center;
`;
const StyledNotificationItem = styled(NotificationItem)`
  flex-shrink: 0;
`;

export const VerticalTabMenuTemplate = ({
  dimension = 'l',
  appearance = 'primary',
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
        appearance={appearance}
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
        <StyledNotificationItem displayStatusIcon>
          <NotificationItemTitle>Вертикальное TabMenu</NotificationItemTitle>
          <NotificationItemContent>
            Вариант компонента с вертикальной компоновкой, используется для переключения между вкладками. Существует в
            двух размерах - L и M. У компонента так же есть два варианта компоновки и переключения позиции табов: справа
            и слева. Ширина компонента задается пользователем. Опционально можно выключать серую полоску сбоку и
            управлять её позицией (справа/слева). В закладках можно включать иконки, бэйджи.
            <Separator height={8} />
            Если название таба длинное, оно уходит под многоточие в зависимости от ширины таб меню. Дефолтная ширина
            компонента на странице задается пользователем. При адаптации вместе с шириной комопнента уменьшается зона
            текстового поля, так как она занимает всю ширину компонента.
            <Separator height={8} />
            Если вкладки не помещаются в отведенную высоту целиком, то включается Overflow Menu. Размеры выпадающего
            меню соответствуют размерам Tab Menu — L для L размера и M для M размера В выпадающем меню отображаются
            вкладки не поместившиеся в основной столбец. При выборе вкладки из меню – она отображается в основном
            столбце крайней снизу, заменяя собой предыдущую крайнюю вкладку, которая, в свою очередь, «уходит» в меню.
            Активная вкладка при этом отображается в меню, как выбранная. При увеличении высоты Vertical Tab Menu,
            скрытые вкладки становятся видимыми, покидая выпадающее меню и наоброт.
            <Separator height={8} />В связи с особенностями компоновки на мобильных устройствах рекомендуется применять
            горизонтальную версию компонента Horizontal Tab Menu.
          </NotificationItemContent>
        </StyledNotificationItem>
        <Separator height={40} />
        <TabMenuVertical
          {...props}
          appearance={appearance}
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
