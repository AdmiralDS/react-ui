import * as React from 'react';
import { keyboardKey } from '#src/components/common/keyboardKey';
import observeRect from '#src/components/common/observeRect';
import { Badge } from '#src/components/Badge';
import { ItemProps, MenuItem, RenderOptionProps } from '#src/components/MenuItem';

import measureTab from '#src/components/TabMenu/measureTab';
import {
  Tab,
  TabContent,
  TabContentWrapper,
  StyledOverflowMenu,
  TabsWrapper,
  Underline,
  Wrapper,
} from '#src/components/TabMenu/style';
import type { Dimension } from '#src/components/TabMenu/constants';
import { OVERFLOW_MARGIN_LEFT, OVERFLOW_SIZE_L, OVERFLOW_SIZE_M } from '#src/components/TabMenu/constants';
import { uid } from '#src/components/common/uid';

export interface TabProps extends React.HTMLAttributes<HTMLButtonElement> {
  /** Контент вкладки */
  content: React.ReactNode;
  /** Id вкладки */
  id: string;
  /** Иконка, располагается слева от content */
  icon?: React.ReactNode;
  /** Число, которое будет отображено в компоненте Badge справа от content */
  badge?: number;
  /** Отключение вкладки */
  disabled?: boolean;
}

type TabWithRefProps = TabProps & { ref: React.RefObject<HTMLButtonElement>; width?: number };

export interface TabMenuProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Список вкладок */
  tabs: Array<TabProps>;
  /** Id активной вкладки */
  activeTab: string;
  /** Колбек на изменение активной вкладки */
  onChange: (id: string) => void;
  /** Размер компонента */
  dimension?: Dimension;
  /** Отображение серой полосы снизу */
  underline?: boolean;
  /** Мобильная версия компонента */
  mobile?: boolean;
  /** Выравнивание выпадающего меню относительно компонента https://developer.mozilla.org/en-US/docs/Web/CSS/align-self */
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
}

export const TabMenu: React.FC<TabMenuProps> = ({
  tabs,
  dimension = 'l',
  underline = false,
  mobile = false,
  alignSelf = 'flex-end',
  activeTab,
  onChange,
  ...props
}) => {
  // add refs to tabs
  const tabsWithRef: Array<TabWithRefProps> = React.useMemo(() => {
    return tabs.map((tab) => ({ ...tab, ref: React.createRef<HTMLButtonElement>() }));
  }, [tabs]);

  const tabsWrapperRef = React.useRef<HTMLDivElement | null>(null);
  const tablistRef = React.useRef<HTMLDivElement | null>(null);
  const underlineRef = React.useRef<HTMLDivElement | null>(null);
  const [visibilityMap, setVisibilityMap] = React.useState<{ [index: number | string]: boolean }>({ 0: true });
  const activeTabVisible = React.useMemo(() => {
    const activeTabIndex = tabsWithRef.findIndex((item) => item.id === activeTab);
    return visibilityMap[activeTabIndex];
  }, [activeTab, tabsWithRef, visibilityMap]);

  const modelAllTabs = React.useMemo(() => {
    return tabsWithRef.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={dimension} {...options} key={item.id}>
          {item.content}
        </MenuItem>
      ),
      disabled: item.disabled,
    }));
  }, [dimension, tabsWithRef]);

  const overflowBtnRef = React.useRef<HTMLButtonElement | null>(null);
  const [openedMenu, setOpenedMenu] = React.useState(false);

  const isHiddenTabSelected = (items: Array<ItemProps>) => items.findIndex((tab) => tab.id === activeTab) != -1;

  const containsActiveTab = (items: Array<ItemProps>) => {
    return items.findIndex((item) => item.id === activeTab) != -1;
  };

  const getNextFocus = (target: HTMLElement) => {
    let sibling: Element | null | undefined =
      target.nextElementSibling || overflowBtnRef.current || tabsWrapperRef.current?.firstElementChild;
    while (sibling?.hasAttribute('disabled')) {
      sibling = sibling.nextElementSibling || overflowBtnRef.current || tabsWrapperRef.current?.firstElementChild;
    }
    return sibling;
  };
  const getPreviousFocus = (target: HTMLElement) => {
    let sibling: Element | null | undefined =
      target.previousElementSibling || overflowBtnRef.current || tabsWrapperRef.current?.lastElementChild;
    while (sibling?.hasAttribute('disabled')) {
      sibling = sibling.previousElementSibling || overflowBtnRef.current || tabsWrapperRef.current?.lastElementChild;
    }
    return sibling;
  };

  const focusFirstTab = () => {
    let tab = tabsWrapperRef.current?.firstElementChild;
    while (tab?.hasAttribute('disabled')) {
      tab = tab.nextElementSibling;
    }
    tab ? (tab as HTMLElement).focus() : (overflowBtnRef.current as HTMLElement).focus();
  };

  const focusLastTab = () => {
    let tab = tabsWrapperRef.current?.lastElementChild;
    while (tab?.hasAttribute('disabled')) {
      tab = tab.previousElementSibling;
    }
    tab ? (tab as HTMLElement).focus() : (overflowBtnRef.current as HTMLElement).focus();
  };

  const styleUnderline = (left: number, width: number) => {
    if (underlineRef.current) {
      underlineRef.current.style.left = left + 'px';
      underlineRef.current.style.width = width + 'px';
      if (width) {
        underlineRef.current.style.display = 'flex';
      } else {
        underlineRef.current.style.display = 'none';
      }
    }
  };

  const setUnderline = () => {
    const activeTabRef = tabsWithRef.filter((tab) => tab.id === activeTab)?.[0]?.ref.current;
    const left = parseFloat(underlineRef.current?.style.left || '0');
    const underlineWidth = parseFloat(underlineRef.current?.style.width || '0');

    if (activeTabRef && tablistRef.current) {
      // используем метод getBoundingClientRect, так как он дает точность до сотых пикселя
      const activeTabWidth = activeTabRef.getBoundingClientRect().width;
      const activeTabLeft =
        activeTabRef.getBoundingClientRect().left -
        tablistRef.current.getBoundingClientRect().left +
        tablistRef.current.scrollLeft;

      if (activeTabLeft !== left || activeTabWidth !== underlineWidth) {
        styleUnderline(activeTabLeft, activeTabWidth);
      }
    }
    if (!activeTabRef || (!mobile && !activeTabVisible)) {
      styleUnderline(0, 0);
    }
  };

  React.useLayoutEffect(() => setUnderline(), [tabsWithRef, activeTab]);

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    const updatedEntries: { [index: number | string]: boolean } = {};
    entries.forEach((entry: any) => {
      const target = entry.target;
      const targetNumber = target.dataset.number;

      if (entry.isIntersecting && entry.intersectionRatio === 1.0) {
        updatedEntries[targetNumber] = true;
      } else {
        updatedEntries[targetNumber] = false;
      }
    });

    setVisibilityMap((prev: { [index: number | string]: boolean }) => ({
      ...prev,
      ...updatedEntries,
    }));
  };

  React.useLayoutEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: tablistRef.current,
      threshold: [0, 1.0],
    });

    if (tabsWrapperRef.current && !mobile) {
      Array.from(tabsWrapperRef.current.children).forEach((item) => {
        observer.observe(item);
      });
    }
    return () => observer.disconnect();
  }, [tablistRef, tabsWrapperRef, mobile, setVisibilityMap]);

  const handleTabClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    mobile && event.currentTarget.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    onChange(event.currentTarget.id);
    event.currentTarget.blur();
  };

  const handleTabKeyUp = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    const code = keyboardKey.getCode(event);
    if (code === keyboardKey.Enter || code === keyboardKey[' ']) {
      onChange(event.currentTarget.id);
    }
  };

  const handleTabsWrapperKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const { target } = event;
    let newFocusTarget;

    const code = keyboardKey.getCode(event);
    switch (code) {
      case keyboardKey.ArrowLeft:
        newFocusTarget = getPreviousFocus(target as HTMLElement);
        event.preventDefault();
        break;
      case keyboardKey.ArrowRight:
        newFocusTarget = getNextFocus(target as HTMLElement);
        event.preventDefault();
        break;
      default:
        break;
    }

    if (newFocusTarget) {
      (newFocusTarget as HTMLElement).focus();
    }
  };

  const handleMenuKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (!openedMenu) {
      const code = keyboardKey.getCode(event);
      switch (code) {
        case keyboardKey.ArrowLeft:
          focusLastTab();
          event.preventDefault();
          break;
        case keyboardKey.ArrowRight:
          focusFirstTab();
          event.preventDefault();
          break;
        default:
          break;
      }
    }
  };
  const getTabIndex = (id: string) => {
    return tabsWithRef.findIndex((item) => item.id === id);
  };

  const renderTabs = () => {
    return tabsWithRef.map((item: TabWithRefProps, index) => {
      /* width отдельно вынесен из props, чтобы он не передавался в Tab.
      Иначе будет постоянно передаваться в таб, что не верно,
      т.к. параметр width нужен только для внутренних расчетов */
      const { disabled, content, id, icon, badge, ref, width, ...props } = item;
      const tabNumber = getTabIndex(id);
      const tabsForMenu = modelAllTabs.slice(tabNumber + 1);
      return (
        <div key={id} data-number={index}>
          <Tab
            ref={ref}
            key={id}
            id={id}
            role="tab"
            type="button"
            aria-selected={id === activeTab}
            selected={id === activeTab}
            tabIndex={id === activeTab ? 0 : -1}
            dimension={dimension}
            disabled={disabled}
            onClick={handleTabClick}
            onKeyUp={handleTabKeyUp}
            {...props}
          >
            <TabContentWrapper dimension={dimension} tabIndex={-1}>
              {icon && icon}
              <TabContent>{content}</TabContent>
              {typeof badge !== 'undefined' && (
                <Badge
                  data-badge
                  dimension="s"
                  appearance={id === activeTab ? 'info' : disabled ? 'lightDisable' : 'lightInactive'}
                >
                  {badge}
                </Badge>
              )}
            </TabContentWrapper>
          </Tab>
          {mobile || tabNumber === tabsWithRef.length - 1 ? null : (
            <StyledOverflowMenu
              ref={overflowBtnRef}
              onOpen={() => setOpenedMenu(true)}
              onClose={() => setOpenedMenu(false)}
              alignSelf={alignSelf}
              items={tabsForMenu}
              selected={containsActiveTab(tabsForMenu) ? activeTab : undefined}
              dimension={dimension}
              hide={!(visibilityMap[tabNumber] && !visibilityMap[tabNumber + 1])}
              isActive={containsActiveTab(tabsForMenu)}
              disabled={tabsForMenu.length === tabsForMenu.filter((tab) => tab.disabled).length}
              onChange={(id: string) => {
                onChange(id);
                if (!isHiddenTabSelected(tabsForMenu)) {
                  styleUnderline(0, 0);
                }
              }}
              tabIndex={tabsForMenu?.filter((item) => item.id === activeTab).length ? 0 : -1}
              onKeyDown={handleMenuKeyDown}
            />
          )}
        </div>
      );
    });
  };

  return (
    <Wrapper role="tablist" ref={tablistRef} underline={underline} mobile={mobile} dimension={dimension} {...props}>
      <TabsWrapper ref={tabsWrapperRef} onKeyDown={handleTabsWrapperKeyDown} mobile={mobile} dimension={dimension}>
        {renderTabs()}
        <Underline ref={underlineRef} aria-hidden />
      </TabsWrapper>
    </Wrapper>
  );
};

TabMenu.displayName = 'TabMenu';
