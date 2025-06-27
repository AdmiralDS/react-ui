import { forwardRef, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import type {
  BorderRadiusType,
  RenderOptionProps,
  HorizontalTabProps,
  TabMenuHorizontalProps,
  TabAppearance,
} from '@admiral-ds/react-ui';
import {
  TabMenuHorizontal,
  HorizontalTab,
  TabIcon,
  TabBadge,
  TabText,
  MenuItem,
  NotificationItem,
  NotificationItemTitle,
  NotificationItemContent,
} from '@admiral-ds/react-ui';
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
    { dimension = 'l', appearance, disabled, selected, tabId, text, badge, icon, ...props }: CustomHorizontalTabProps,
    ref,
  ) => {
    return (
      <HorizontalTab {...props} tabId={tabId} ref={ref} dimension={dimension} disabled={disabled} selected={selected}>
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
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const MenuItemWrapper = styled.div`
  display: flex;
  overflow: hidden;
  text-overflow: ellipsis;
  align-items: center;
`;

export const TabMenuHorizontalTemplate = ({
  dimension = 'l',
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
      <Wrapper>
        <NotificationItem displayStatusIcon>
          <NotificationItemTitle>Горизонтальное TabMenu</NotificationItemTitle>
          <NotificationItemContent>
            Компонент используется для переключения между вкладками. Существует в двух размерах - 48 и 40 px по высоте.
            Компонент полностью адаптивен и автоматически меняет ширину ячеек в зависимости от контента. Опционально
            можно выключать серую полоску снизу. В закладках можно включать иконки, бэйджи. Если вкладки не помещаются в
            отведенную ширину целиком, то включается Overflow Menu.
            <Separator height={8} />
            Размеры выпадающего меню соответствуют размерам Tab Menu — L для L размера и M для M размера. В выпадающем
            меню отображаются вкладки, не поместившиеся в основной ряд. При выборе вкладки из меню она отображается в
            основном ряду крайней справа, заменяя собой предыдущую крайнюю вкладку, которая, в свою очередь, «уходит» в
            меню. Активная вкладка при этом отображается в меню, как выбранная.
            <Separator height={8} />
            Рекомендации
            <li>Одна из вкладок должна быть выбрана по умолчанию, когда пользователь загружает страницу.</li>
            <li>Рекомендовано делать надписи на вкладках как можно короче - в идеале не более двух слов.</li>
            <li>Не перегружайте пользователя слишком большим количеством вкладок.</li>
            <li>
              Если пользователь переходит на другую панель вкладок, данные формы не должны автоматически сохраняться или
              отправляться.
            </li>
            <li>Избегайте вложения Tab Menu в содержимое другого Tab Menu.</li>
            <li>
              Не заставляйте пользователей переключаться между несколькими вкладками для сравнения информации. Каждая
              панель вкладок должна содержать всю информацию, необходимую пользователю для выполнения своей задачи.
            </li>
            <li>
              Не помещайте кнопки или ссылки в заголовок вкладки. Вкладка уже является ссылкой или кнопкой, поэтому у
              нее не может быть дочернего элемента, который также является ссылкой или кнопкой.
            </li>
            <li>Каждая панель вкладок должна содержать отдельный контент с уникальным URL-адресом.</li>
          </NotificationItemContent>
        </NotificationItem>
        <Separator height={40} />
        <TabMenuHorizontal
          {...props}
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
      </Wrapper>
    </ThemeProvider>
  );
};
